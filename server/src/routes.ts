import express from "express";
import ClassesContollers from "./controllers/classesControllers";

const routes = express.Router();

const classesControllers = new ClassesContollers();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);

export default routes;
