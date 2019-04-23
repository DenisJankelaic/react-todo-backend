import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
  _id: {
    type: String
  },
  projectName: {
    type: String
  },
  users: {
    type: Array<String>()
  }
});
