import {Router} from "express";

export const userRoutes = Router();

userRoutes.use((req, res, next) => {
    console.log("User middleware!");
    next();
});

userRoutes
    .get("/", (req, res, next) => {
        console.log(req.body);
        res.send({
            role: "admin",
            name: "Test",
            id: "blahblah",
        });
        next();
    })
    .post("/new", (req, res, next) => {
        console.log(`Attempt to create new user: ${req}`);
    });