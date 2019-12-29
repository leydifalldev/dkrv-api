import { Document } from 'mongoose';

export interface IAccount extends Document {
  readonly _id: string;
  readonly password: string;
  readonly passwordHash: string;
  readonly roles: string[];
  readonly token: string;
}

export class Account {
  // tslint:disable-next-line:variable-name
  readonly _id: string;
  readonly password: string;
  readonly passwordHash: string;
  readonly roles: string[];
  readonly token?: string;
}
