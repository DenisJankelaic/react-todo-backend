import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { UserSchema } from "../models/user-data-model";

const User = mongoose.model("users", UserSchema);

export class UsersController {
  public getUsers(req: Request, res: Response): void {
    User.find({}, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  public getUserById(req: Request, res: Response): void {
    User.find({_id: req.params.userId}, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  public addNewUser(req: Request, res: Response): void {
    const newUser = new User(req.body);
    console.log(newUser);
    newUser.save((err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  public async deleteUser(req: Request, res: Response): Promise<void> {
    User.remove({ _id: req.params.userId }, (err, user) => {
      console.log(req.params.userId);
      if (err) {
        res.send(err);
      }
      console.log(user);
      res.json({ message: "Successfully deleted user!" });
    });
  }

  //   public updateUser(req: Request, res: Response): void {
  //     const { index, done }: Update = req.query;
  //     let doneParam;
  //     if (done === "true") {
  //       doneParam = true;
  //     } else if (done === "false") {
  //       doneParam = false;
  //     } else {
  //       doneParam = "";
  //     }
  //     User.findOneAndUpdate({ index: index }, { $set: { done: doneParam } }, { new: true }, (err, task) => {
  //       if (err) {
  //         res.send(err);
  //       }
  //       res.json(task);
  //     });
  //   }
}
