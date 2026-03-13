import { response, Router } from "express";

import alunosController from "./controllers/alunos";

const routes = Router();

routes.get("/", (request, response) => response.status(200).json({ success: true }));

// Rotas de alunos

routes.get("/alunos", alunosController.list);
//routes.get("/", (request, response) => 
//alunosController.list(request, response),
//);

routes.post("/alunos", alunosController.create);
//routes.post("/", (request, response) => 
//alunosController.create(request, response),
//);

routes.put("/alunos", alunosController.update)

export default routes;
