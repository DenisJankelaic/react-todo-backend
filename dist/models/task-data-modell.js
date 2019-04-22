"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_data_model_1 = require("./user-data-model");
var project_data_model_1 = require("./project-data-model");
var Schema = mongoose.Schema;
exports.TaskSchema = new Schema({
    user: {
        type: user_data_model_1.UserSchema
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
        type: project_data_model_1.ProjectSchema
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
//# sourceMappingURL=task-data-modell.js.map