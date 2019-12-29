import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';

import { Logger } from '@nestjs/common';
import { UserStore, ServiceResponse, ProductStore } from '../../services';
import { UserInput, User, File, Upload } from '../types';

@Resolver(of => User)
export class UserResolver {
  constructor(private userStore: UserStore) {}

  @Query(returns => [User])
  async profiles(): Promise<User[]> {
    const response: ServiceResponse = await this.userStore.search({});
    Logger.log(response);
    return response.payload || [];
  }

  @Query(returns => User)
  async getProfile(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.userStore.get(id);
    Logger.log(response);
    return response.payload;
  }

  @Query(returns => String)
  async token(@Args('id') id: string) {
    Logger.log(id);
    const response: ServiceResponse = await this.userStore.getAccount(id);
    Logger.log(response);
    return response.payload;
  }

  @Query(returns => String)
  async isValidUser(
    @Args('email') email: string,
    @Args('password') password: string,
  ) {
    const response: ServiceResponse = await this.userStore.validateUser(
      email,
      password,
    );
    Logger.log(response);
    return response.payload;
  }

  @Mutation(returns => String)
  async createUser(@Args('user') user: UserInput) {
    Logger.log(user);
    const response: ServiceResponse = await this.userStore.add(user);
    Logger.log(response);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }

  @Mutation(returns => String)
  async register(@Args('user') user: UserInput) {
    Logger.log(user);
    const response: ServiceResponse = await this.userStore.register(user);
    Logger.log(response);
    if (response.status === 400) {
      return Error('Bad Request');
    }
    return response.payload;
  }

  @Mutation()
  async uploadFile(@Args('file') file: Upload) {
    Logger.log('Hello file');
    Logger.log(file);
    return 'Nice !';
  }
}
