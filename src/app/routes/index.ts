import {Router} from "express";
import { userRoutes } from "./userRoutes";

export const apiRouter = Router();

apiRouter.use("/user", userRoutes);