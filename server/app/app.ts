import express from 'express';
import * as bodyParser from 'body-parser';
import { Request, Response, Router, NextFunction } from 'express';

import { AlumnosRouter } from '../alumnos/alumnos.router';

class App {

    public app: express.Application;
    private router: Router; // express.Router();

    private routesControlers: any[] = [];

    constructor() {

      // setting App properties
      this.app = express();
      this.router = express.Router();

      this.AppConfig();
      this.MiddlewareCors();      // Middleware
      this.SetupRoutes();

    }

    private AppConfig(): void {
      this.app.use(bodyParser.json());
      this.app.use(bodyParser.urlencoded());
      this.app.use('/api', this.router);
    }

    private MiddlewareCors(): void {
      this.router.use((req: Request, res: Response, next: NextFunction) => {

          // CORS ENABLED
          res.header('Access-Control-Allow-Origin', '*');
          res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
          res.header('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');

          console.log(req.method, req.originalUrl);
          next(); // make sure we go to the next routes and don't stop here
      });
    }

    private SetupRoutes(): void {

      this.routesControlers = [
        new AlumnosRouter(this.app, this.router),
      ];

    }

}

export const app = new App().app;
