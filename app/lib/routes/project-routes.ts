import { Request, Response } from "express";

import { ProjectsController } from "../controllers/projects-controller";

export class ProjectRoutes {
  public projectsController: ProjectsController = new ProjectsController();

  public routes(app): void {
    app.route("/projects").get(this.projectsController.getProjects);
    app.route("/user").post(this.projectsController.addNewProject);
    app
      .route("/user/:userId")
      .delete(this.projectsController.deleteProject)
      .get(this.projectsController.getProjectById);

    app
      .route("/")
      .get((req: Request, res: Response) => {
        res.status(200).send({
          message: "GET request successfulll"
        });
      })
      // POST endpoint
      .post((req: Request, res: Response) => {
        // Create new project
        res.status(200).send({
          message: "POST request successfulll"
        });
      });
    // project
    app
      .route("/users")
      // GET endpoint
      .get((req: Request, res: Response) => {
        // Get all project
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
