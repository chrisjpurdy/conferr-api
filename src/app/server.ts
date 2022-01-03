import {Application} from "express";
import {apiRouter} from "./routes";
import {verifyJSON, verifyRequest} from "./verification";

const express = require("express");

// TODO session handling, look at express-session

const app: Application = express();
const port = 8000;

// Enable plugin to parse URL encoded data
app.use(express.json({
    strict: true,
    verify: verifyRequest
}));

// Check the parsed JSON for correct type information etc.
app.use(verifyJSON);

// Connect the routes
app.use("/api", apiRouter);

app.listen(port, () => {
    console.log('We are live on ' + port);
});