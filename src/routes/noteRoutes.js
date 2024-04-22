import { Router } from "express";

import NoteController from "../controllers/NoteController.js";
import verifyToken from "../helpers/verify-token.js";


const noteRoutes = Router()

noteRoutes.post("/create", verifyToken, NoteController.create)
noteRoutes.get("/get-notes", verifyToken, NoteController.getAllUserNotes)

export default noteRoutes;