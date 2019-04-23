import * as express from "express";
import * as bodyParser from "body-parser";
import * as mongoose from "mongoose";

import { UserRoutes } from "./routes/user-routes";
import { mongoUrl } from "./shared/db-url";

class App {
  public app: express.Application;
  public routePrv: UserRoutes = new UserRoutes();

  constructor() {
    this.app = express();
    this.config();
    this.routePrv.routes(this.app);
    this.mongoSetup();
  }

  private mongoSetup(): void {
    mongoose.Promise = global.Promise;
    mongoose
      .connect(mongoUrl, { useNewUrlParser: true })
      .then(() => console.log("Connected to DB."))
      .catch(err => {
        throw err;
      });
  }

  private config(): void {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }
}

// tslint:disable-next-line:no-default-export
export default new App().app;
