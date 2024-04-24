import { Router } from "express";

import NoteController from "../controllers/NoteController.js";
import verifyToken from "../helpers/verify-token.js";

const noteRoutes = Router();

noteRoutes.post("/create", verifyToken, NoteController.create)
noteRoutes.get("/get-notes", verifyToken, NoteController.getAllUserNotes)
noteRoutes.put("/update/:id", verifyToken, NoteController.update)
noteRoutes.delete("/delete/:id", verifyToken, NoteController.delete)

export default noteRoutes;
//faculdade ou trabalho

//seria no mesmo esquema das rotas, então teria um tagRoutes ou nah?

// ah tá