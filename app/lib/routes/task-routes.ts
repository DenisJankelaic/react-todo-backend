import { Request, Response } from "express";

import { TasksController } from "../controllers/taskController";

export class Routes {
  public taskController: TasksController = new TasksController();

  public routes(app): void {
    // Get all tasks
    app.route("/tasks")
      .get(this.taskController.getTasks)
      .delete(this.taskController.deleteAllTasks);
    app.route("/task").post(this.taskController.addNewTask);
    app.route("/task/:taskId")
      .delete(this.taskController.deleteTask)
      .post(this.taskController.addNewTask);
    app.route("/task/update")
      .put(this.taskController.updateTask);

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
      .route("/tasks")
      // GET endpoint
      .get((req: Request, res: Response) => {
        // Get all tasks
        res.status(200).send({
          message: "GET request successfulll"
        });
      })
      .delete((req: Request, res: Response) => {
        // Delete a task
        res.status(200).send({
          message: "DELETE request successfulll"
        });
      });
    app
      .route("/task/update")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "GET request successfulll"
        });
      });
  }
}
