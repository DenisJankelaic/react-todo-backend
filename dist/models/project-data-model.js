"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.ProjectSchema = new Schema({
    id: {
        type: Number
    },
    projectName: {
        type: String
    },
    users: {
        type: Array()
    }
});
//# sourceMappingURL=project-data-model.js.map