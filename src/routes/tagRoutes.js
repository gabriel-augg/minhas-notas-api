import Routes from "express";
import verifyToken from "../helpers/verify-token.js";
import TagControllers from "../controllers/TagController.js";

const tagRoutes = Routes();

tagRoutes.get("/", verifyToken, TagControllers.getTags);
tagRoutes.post("/create", verifyToken, TagControllers.create);
tagRoutes.patch("/:id/update", verifyToken, TagControllers.update);
tagRoutes.delete("/:id/delete", verifyToken, TagControllers.delete);

export default tagRoutes;
