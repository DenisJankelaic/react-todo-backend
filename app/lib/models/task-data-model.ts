import * as mongoose from "mongoose";

const Schema = mongoose.Schema;

export const TaskSchema = new Schema({
    index: {
        type: Number
    },
    taskName: {
        type: String,
        required: "Enter task name"
    },
    done: {
        type: Boolean
    }
});
