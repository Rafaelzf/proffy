import express from "express";
import routes from "./routes";
import cors from "cors";

const app = express();

app.use(cors());
//converte o parametro em json para o express
app.use(express.json());
app.use(routes);

//localhost:3333
app.listen(3333);
