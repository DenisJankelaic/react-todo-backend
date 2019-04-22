"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var Schema = mongoose.Schema;
exports.UserSchema = new Schema({
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
//# sourceMappingURL=user-data-model.js.map