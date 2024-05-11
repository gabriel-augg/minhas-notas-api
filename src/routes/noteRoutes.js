import { Router } from "express";

import NoteController from "../controllers/NoteController.js";
import verifyToken from "../helpers/verify-token.js";

const noteRoutes = Router();

noteRoutes.get("/", verifyToken, NoteController.getNotes);
noteRoutes.post("/create", verifyToken, NoteController.create);
noteRoutes.put("/:id/update", verifyToken, NoteController.update);
noteRoutes.delete("/:id/delete", verifyToken, NoteController.delete);

export default noteRoutes;
