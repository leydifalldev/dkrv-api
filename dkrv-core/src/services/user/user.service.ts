import { Model } from 'mongoose';
import { Injectable, Logger, HttpStatus } from '@nestjs/common';
import profileMapping from './profile.mapping';
import { ElasticService } from '../elastic.service';
import { InjectModel } from '@nestjs/mongoose';
import { IAccount, Account } from './account.interface';
import { ServiceResponse } from '..';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserStore extends ElasticService {
  private saltRounds = 10;
  constructor(
    @InjectModel('Account') private readonly accountModel: Model<IAccount>,
  ) {
    super('profile', profileMapping);
  }

  async createAccount(account: Account): Promise<IAccount> {
    try {
      const newAccount = new this.accountModel(account);
      const response = await newAccount.save();
      Logger.log('createAccount response', response);
      return response;
    } catch (e) {
      Logger.log('Creation Account Failed ===> ', e);
    }
  }

  async register(user): Promise<ServiceResponse> {
    const { password, ...profile } = user;
    Logger.log(password);

    try {
      const response = await this.add(profile);
      const account = await this.serializeAccount(
        response.payload,
        profile.roles,
        password,
      );
      await this.createAccount(account);
      return response;
    } catch (e) {
      Logger.log('Register failed ====> ', e);
    }
  }

  async getHash(password: string | undefined): Promise<string> {
    return bcrypt.hash(password, this.saltRounds);
  }

  async compareHash(
    password: string | undefined,
    hash: string | undefined,
  ): Promise<boolean> {
    return bcrypt.compare(password, hash);
  }

  async serializeAccount(id: string, roles: string[], password: string) {
    return {
      _id: id,
      roles,
      password,
      passwordHash: await this.getHash(password),
    };
  }

  async getAccount(id: string, fields: string = null) {
    try {
      const account = await this.accountModel.findById(id, fields);
      if (account) {
        Logger.log('account');
        Logger.log(account);
        return {
          payload: account,
          error: 'none',
          status: 200,
        };
      }
      throw new Error('Account is not exist');
    } catch (e) {
      Logger.log(e);
      return {
        payload: 'none',
        error: 'Account is not exist',
        status: 404,
      };
    }
  }

  async getToken(id) {
    return await this.getAccount(id, 'token');
  }

  async authCheck(id, password) {
    try {
      const response = await this.getAccount(id, 'passwordHash');
      const {
        payload: { passwordHash },
        status,
      } = response;
      Logger.log('getAccount');
      Logger.log(response);
      if (response.status === HttpStatus.OK) {
        return await bcrypt.compare(password, passwordHash);
      }
      return {
        status: 404,
        payload: false,
        error: '',
      };
    } catch (e) {
      Logger.log(e);
    }
  }

  async validateUser(email, password) {
    try {
      const response = await this.getProfileByEmail(email);
      Logger.log('status validate');
      Logger.log(response);
      if (response.status === HttpStatus.OK) {
        Logger.log('hjj');
        const result = await this.authCheck(response.payload[0].id, password);
        Logger.log(result);
        return result;
      }
    } catch (e) {
      Logger.log(e);
    }
  }
}
