import * as mongoose from "mongoose";
import { UserSchema } from "./user-data-model";
import { ProjectSchema } from "./project-data-model";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  user: {
    type: UserSchema
  },
  description: {
    type: String
  },
  id: {
    type: String
  },
  startDate: {
    type: String
  },
  endDate: {
    type: String
  },
  taskName: {
    type: String
  },
  project: {
    type: ProjectSchema
  },
  taskStatus: {
    type: String
  },
  isCurrent: {
    type: Boolean
  },
  startStopHistory: {
    type: Array<String>()
  }
});
