import * as mongoose from "mongoose";
import * as bcrypt from "bcrypt";
import { Request, Response } from "express";

import { UserSchema } from "../models/user-data-model";
import { UpdateUser } from "../shared/contracts";

const User = mongoose.model("users", UserSchema);

export class UsersController {
  public getUsers(req: Request, res: Response): void {
    User.find({}, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }

  public getUserById(req: Request, res: Response): void {
    User.find({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }

  public async addNewUser(req: Request, res: Response): Promise<void> {
    const bodyParams = new User(req.body);
    const hashedPassword = await bcrypt.hash(bodyParams.password, 10);
    bodyParams.password = hashedPassword;
    bodyParams.save((err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json(user);
      }
    });
  }

  public deleteUser(req: Request, res: Response): void {
    User.remove({ _id: req.params.userId }, (err, user) => {
      if (err) {
        res.send(err);
      } else {
        res.json({ message: "Successfully deleted user!" });
      }
    });
  }

  public updateUser(req: Request, res: Response): void {
    const { _id, login, password, role, userName }: UpdateUser = req.body;
    User.findOneAndUpdate(
      { _id: _id },
      {
        $set: {
          login: login,
          password: password,
          role: role,
          userName: userName
        }
      },
      { new: true },
      (err, user) => {
        if (err) {
          res.send(err);
        } else {
          res.json(user);
        }
      }
    );
  }
}
