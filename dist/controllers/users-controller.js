"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var user_data_model_1 = require("../models/user-data-model");
var User = mongoose.model("users", user_data_model_1.UserSchema);
var UsersController = /** @class */ (function () {
    function UsersController() {
    }
    UsersController.prototype.getUsers = function (req, res) {
        User.find({}, function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(user);
            }
        });
    };
    UsersController.prototype.getUserById = function (req, res) {
        User.find({ _id: req.params.userId }, function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(user);
            }
        });
    };
    UsersController.prototype.addNewUser = function (req, res) {
        var newUser = new User(req.body);
        console.log(newUser);
        newUser.save(function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(user);
            }
        });
    };
    UsersController.prototype.deleteUser = function (req, res) {
        User.remove({ _id: req.params.userId }, function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                res.json({ message: "Successfully deleted user!" });
            }
        });
    };
    UsersController.prototype.updateUser = function (req, res) {
        var _a = req.body, _id = _a._id, login = _a.login, password = _a.password, role = _a.role, userName = _a.userName;
        User.findOneAndUpdate({ _id: _id }, {
            $set: {
                login: login,
                password: password,
                role: role,
                userName: userName
            }
        }, { new: true }, function (err, user) {
            if (err) {
                res.send(err);
            }
            else {
                res.json(user);
            }
        });
    };
    return UsersController;
}());
exports.UsersController = UsersController;
//# sourceMappingURL=users-controller.js.map