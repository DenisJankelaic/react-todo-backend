import * as mongoose from "mongoose";
import { Request, Response } from "express";

import { UserSchema } from "../models/user-data-model";

const User = mongoose.model("UsersData", UserSchema);

export class UsersController {
  public async getUsers(req: Request, res: Response): Promise<void> {
    await User.find({}, (err, user) => {
      if (err) {
        res.send(err);
      }
      res.json(user);
    });
  }

  // public async addNewUser(req: Request, res: Response): Promise<void> {
  //   const newUser = new User(req.body);
  //   await newUser.save((err, user) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.json(user);
  //   });
  // }

  // public async deleteUser(req: Request, res: Response): Promise<void>  {
  //   User.remove({ id: req.params.userID }, (err, user) => {
  //     if (err) {
  //       res.send(err);
  //     }
  //     res.json({ message: "Successfully deleted user!" });
  //   });
  // }

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
