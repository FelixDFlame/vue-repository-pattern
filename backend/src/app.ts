import express from "express";
import * as bodyParser from 'body-parser';
import routes from "./routes";

const app = express();

const loggerMiddleware = (req: express.Request, res: express.Response, next: Function) => {
    console.log(`${req.method} ${req.path}`);
    res.header("Access-Control-Allow-Origin", "*")
    next();
}

app.use(loggerMiddleware);
app.use(bodyParser.json());
app.use(routes.router);

app.listen(3000);
console.log("Serve on localhost:3000");