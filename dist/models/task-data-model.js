"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.TaskSchema = new Schema({
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
        type: Array()
    }
});
//# sourceMappingURL=task-data-model.js.map