"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var projects_controller_1 = require("../controllers/projects-controller");
var Routes = /** @class */ (function () {
    function Routes() {
        this.projectsController = new projects_controller_1.ProjectsController();
    }
    Routes.prototype.routes = function (app) {
        app.route("/projects").get(this.projectsController.getProjects);
        app.route("/user").post(this.projectsController.addNewProject);
        app
            .route("/user/:userId")
            .delete(this.projectsController.deleteProject)
            .get(this.projectsController.getProjectById);
        app
            .route("/")
            .get(function (req, res) {
            res.status(200).send({
                message: "GET request successfulll"
            });
        })
            // POST endpoint
            .post(function (req, res) {
            // Create new project
            res.status(200).send({
                message: "POST request successfulll"
            });
        });
        // project
        app
            .route("/users")
            // GET endpoint
            .get(function (req, res) {
            // Get all project
            res.status(200).send({
                message: "GET request successfulll"
            });
        })
            .delete(function (req, res) {
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
    };
    return Routes;
}());
exports.Routes = Routes;
//# sourceMappingURL=project-routes.js.map