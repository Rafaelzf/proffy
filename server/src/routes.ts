import express from "express";
import ClassesContollers from "./controllers/ClassesControllers";
import ConectionsControllers from "./controllers/ConectionsControllers";

const routes = express.Router();

const classesControllers = new ClassesContollers();
const classesConections = new ConectionsControllers();

routes.post("/classes", classesControllers.create);
routes.get("/classes", classesControllers.index);
routes.post("/connections", classesConections.create);
routes.get("/connections", classesConections.index);

export default routes;
