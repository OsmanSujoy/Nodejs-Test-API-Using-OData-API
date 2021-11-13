import dotenv from "dotenv";
import express from "express";
import path from "path";
import * as routes from "./routes";

// initialize configuration
dotenv.config();

// port is now available to the Node.js runtime
// as if it were an environment variable
const port = process.env.SERVER_PORT;

const app = express();

// Configure Express to use PUG
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "pug");

// static public file dir
app.use(express.static(path.join(__dirname, "./public")));

// Configure routes
routes.routes(app);

// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
