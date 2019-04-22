import { Request, Response } from "express";

import { UsersController } from "../controllers/usersController";

export class Routes {
  public usersController: UsersController = new UsersController();

  public routes(app): void {

    app.route("/users")
      .get(this.usersController.getUsers);

    // app.route("/user").post(this.usersController.addNewUser);

    // app.route("/user/:userId")
    //   .delete(this.usersController.deleteUser)
    //   .post(this.usersController.addNewUser);

    app.route("/").get((req: Request, res: Response) => {
      res.status(200).send({
        message: "GET request successfulll"
      });
    })
      // POST endpoint
      .post((req: Request, res: Response) => {
        // Create new task
        res.status(200).send({
          message: "POST request successfulll"
        });
      });
    // Task
    app
      .route("/users")
      // GET endpoint
      .get((req: Request, res: Response) => {
        // Get all users
        res.status(200).send({
          message: "GET request successfulll"
        });
      })
      .delete((req: Request, res: Response) => {
        // Delete a user
        res.status(200).send({
          message: "DELETE request successfulll"
        });
      });
    // app
    //   .route("/task/update")
    //   .get((req: Request, res: Response) => {
    //     res.status(200).send({
    //       message: "GET request successfulll"
    //     });
    //   });
  }
}
