import * as mongoose from 'mongoose';

export const AccountSchema = new mongoose.Schema({
  _id: String,
  password: String,
  passwordHash: String,
  roles: [String],
  token: String,
});
