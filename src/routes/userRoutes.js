import { Router } from "express";
import UserController from "../controllers/UserController.js";
import verifyToken from "../helpers/verify-token.js";

const userRoutes = Router()

userRoutes.put("/update-user", verifyToken, UserController.updateUser)

export default userRoutes;