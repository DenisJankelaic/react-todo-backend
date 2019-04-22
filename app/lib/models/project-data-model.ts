import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProjectSchema = new Schema({
  id: {
    type: Number
  },
  projectName: {
    type: String
  },
  users: {
    type: Array<String>()
  }
});
