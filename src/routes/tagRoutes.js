import Routes from 'express';
import verifyToken from '../helpers/verify-token.js';
import TagControllers from '../controllers/TagController.js';

const tagRoutes = Routes();

tagRoutes.post("/create-tag", verifyToken, TagControllers.create);
tagRoutes.patch("/update-tag/:id", verifyToken, TagControllers.update);
tagRoutes.get("/get-tags", verifyToken, TagControllers.getAllTags);
tagRoutes.delete("/delete-tag/:id", verifyToken, TagControllers.delete);

export default tagRoutes;

