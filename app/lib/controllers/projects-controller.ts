import * as mongoose from "mongoose";
import { Request, Response } from "express";
import { ProjectSchema } from "../models/project-data-model";

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
    const newProject = new Project(req.body);
    console.log(newProject);
    newProject.save((err, project) => {
      if (err) {
        res.send(err);
      }
      res.json(project);
    });
  }

  public async deleteProject(req: Request, res: Response): Promise<void> {
    Project.remove({ _id: req.params.ProjectId }, (err, project) => {
      console.log(req.params.ProjectId);
      if (err) {
        res.send(err);
      }
      console.log(project);
      res.json({ message: "Successfully deleted Project!" });
    });
  }

  //   public updateProject(req: Request, res: Response): void {
  //     const { index, done }: Update = req.query;
  //     let doneParam;
  //     if (done === "true") {
  //       doneParam = true;
  //     } else if (done === "false") {
  //       doneParam = false;
  //     } else {
  //       doneParam = "";
  //     }
  //     Project.findOneAndUpdate({ index: index }, { $set: { done: doneParam } }, { new: true }, (err, task) => {
  //       if (err) {
  //         res.send(err);
  //       }
  //       res.json(task);
  //     });
  //   }
}
