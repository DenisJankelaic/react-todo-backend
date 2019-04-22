import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const UserSchema = new Schema({
  id: {
    type: String
  },
  userName: {
    type: String
  },
  login: {
    type: String
  },
  password: {
    type: String
  },
  role: {
    type: String
  }
});
