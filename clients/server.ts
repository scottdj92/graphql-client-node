import appRoutes from "./routes";
import * as next from "next";
import * as Express from "express";

const app = next({dev: process.env.NODE_ENV !== "production"});
const handler = appRoutes.getRequestHandler(app);

const express = Express();
app.prepare().then( () => {
    express.use(handler).listen(3000);
});
