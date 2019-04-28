import * as mongoose from "mongoose";
import { ProjectSchema } from "./project-data-model";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
  userId: {
    type: String
  },
  description: {
    type: String
  },
  _id: {
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
  projectId: {
    type: String
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
