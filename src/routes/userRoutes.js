import { Router } from "express";
import UserController from "../controllers/UserController.js";
import verifyToken from "../helpers/verify-token.js";

const userRoutes = Router();

userRoutes.get("/checkuser", verifyToken, UserController.checkUser);
userRoutes.put("/update", verifyToken, UserController.update);
userRoutes.delete("/delete", verifyToken, UserController.delete);

export default userRoutes;
