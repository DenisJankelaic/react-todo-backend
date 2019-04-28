"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var mongoose = require("mongoose");
var task_data_model_1 = require("../models/task-data-model");
var Task = mongoose.model("tasks", task_data_model_1.TaskSchema);
var TasksController = /** @class */ (function () {
    function TasksController() {
    }
    TasksController.prototype.getTasks = function (req, res) {
        Task.find({ userId: req.params.userId }, function (err, user) {
            if (err) {
                res.send(err);
            }
            res.json(user);
        });
    };
    TasksController.prototype.addNewTask = function (req, res) {
        var newTask = new Task(req.body);
        newTask.save(function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    };
    TasksController.prototype.updateTask = function (req, res) {
        var _a = req.body, _id = _a._id, description = _a.description, endDate = _a.endDate, isCurrent = _a.isCurrent, project = _a.project, startDate = _a.startDate, startStopHistory = _a.startStopHistory, taskName = _a.taskName, taskStatus = _a.taskStatus, userId = _a.userId;
        Task.findOneAndUpdate({ _id: _id }, {
            $set: {
                description: description,
                endDate: endDate,
                isCurrent: isCurrent,
                project: project,
                startDate: startDate,
                startStopHistory: startStopHistory,
                taskName: taskName,
                taskStatus: taskStatus,
                userId: userId
            }
        }, { new: true }, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json(task);
        });
    };
    TasksController.prototype.deleteTask = function (req, res) {
        Task.remove({ _id: req.params.taskId }, function (err, task) {
            if (err) {
                res.send(err);
            }
            res.json({ message: "Successfully deleted Task!" });
        });
    };
    return TasksController;
}());
exports.TasksController = TasksController;
//# sourceMappingURL=task-controller.js.map