"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var usersController_1 = require("../controllers/usersController");
var Routes = /** @class */ (function () {
    function Routes() {
        this.usersController = new usersController_1.UsersController();
    }
    Routes.prototype.routes = function (app) {
        app.route("/users")
            .get(this.usersController.getUsers);
        // app.route("/user").post(this.usersController.addNewUser);
        // app.route("/user/:userId")
        //   .delete(this.usersController.deleteUser)
        //   .post(this.usersController.addNewUser);
        app.route("/").get(function (req, res) {
            res.status(200).send({
                message: "GET request successfulll"
            });
        })
            // POST endpoint
            .post(function (req, res) {
            // Create new task
            res.status(200).send({
                message: "POST request successfulll"
            });
        });
        // Task
        app
            .route("/users")
            // GET endpoint
            .get(function (req, res) {
            // Get all users
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
//# sourceMappingURL=user-routes.js.map