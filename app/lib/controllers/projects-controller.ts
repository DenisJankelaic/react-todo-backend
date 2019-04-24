import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { ProjectSchema } from "../models/project-data-model";
import { UpdateProject } from "../shared/contracts";

const Project = mongoose.model("projects", ProjectSchema);

export class ProjectsController {
  public getProjects(req: Request, res: Response): void {
    Project.find({}, (err, project) => {
      if (err) {
        res.send(err);
      }
      res.json(project);
    });
  }

  public getProjectById(req: Request, res: Response): void {
    Project.find({ _id: req.params.projectId }, (err, project) => {
      if (err) {
        res.send(err);
      }
      res.json(project);
    });
  }

  public addNewProject(req: Request, res: Response): void {
    console.log(req.body);
    const newProject = new Project(req.body);

    newProject.save((err, project) => {
      if (err) {
        res.send(err);
      }
      res.json(project);
    });
  }

  public deleteProject(req: Request, res: Response): void {
    Project.remove({ _id: req.params.projectId }, (err, project) => {
      if (err) {
        res.send(err);
      }
      res.json({ message: "Successfully deleted Project!" });
    });
  }

  public updateProject(req: Request, res: Response): void {
    const { _id, projectName }: UpdateProject = req.body;

    Project.findOneAndUpdate(
      { _id: _id },
      { $set: { projectName: projectName } },
      { new: true },
      (err, project) => {
        if (err) {
          res.send(err);
        }
        res.json(project);
      }
    );
  }
}
