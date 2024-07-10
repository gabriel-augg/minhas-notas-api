import { Router } from "express";
import verifyToken from "../helpers/verify-token.js";
import TagController from "../controllers/TagController.js";

const tagRoutes = Router();

tagRoutes.get("/", verifyToken, TagController.getTags);
tagRoutes.post("/create", verifyToken, TagController.create);
tagRoutes.patch("/:id/update", verifyToken, TagController.update);
tagRoutes.delete("/:id/delete", verifyToken, TagController.delete);

export default tagRoutes;

