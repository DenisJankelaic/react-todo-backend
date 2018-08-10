import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { TaskSchema } from "../models/task-data-model";
import { Update } from "../models/task-update-interface";

const Task = mongoose.model("tasks", TaskSchema);

export class TasksController {
  public getTasks(req: Request, res: Response): void {
    Task.find({}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
  public deleteAllTasks(req: Request, res: Response): void {
    Task.remove({}, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
  public addNewTask(req: Request, res: Response): void {
    const newTask = new Task(req.body);
    newTask.save((err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
  public deleteTask(req: Request, res: Response): void {
    Task.remove({ index: req.params.taskId }, (err, contact) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted contact!" });
    });
  }
  public updateTask(req: Request, res: Response): void {
    const { index, done }: Update = req.query;
    let doneParam;
    if (done === "true") {
      doneParam = true;
    } else if (done === "false") {
      doneParam = false;
    } else {
      doneParam = "";
    }
    Task.findOneAndUpdate({ index: index }, { $set: { done: doneParam } }, { new: true }, (err, task) => {
      if (err) {
        res.send(err);
      }
      res.json(task);
    });
  }
}
