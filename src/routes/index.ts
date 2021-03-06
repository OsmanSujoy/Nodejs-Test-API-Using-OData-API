import * as express from "express";
import * as api from "./api";

export const routes = (app: express.Application) => {
  // define a route handler for the default home page
  app.get("/", (req: any, res) => {
    res.render("index");
  });
  api.api(app);
};
