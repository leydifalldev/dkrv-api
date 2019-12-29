import * as jwt from 'jsonwebtoken';
import { Injectable } from '@nestjs/common';
import { UserStore } from '../services';

@Injectable()
export class AuthService {
  constructor(private readonly userStore: UserStore) {}

  async createToken(id: number, username: string) {
    const expiresIn = 60 * 60;
    const secretOrKey = 'secret';
    const user = { username };
    const token = jwt.sign(user, secretOrKey, { expiresIn });

    return { expires_in: expiresIn, token };
  }

  async validateUser(signedUser): Promise<boolean> {
    if (signedUser && signedUser.username) {
      //return Boolean(this.userStore.getUserByUsername(signedUser.username));
    }

    return false;
  }
}
