import { Router } from "express";
import UserController from "../controllers/UserController.js";
import verifyToken from "../helpers/verify-token.js";

const userRoutes = Router()

userRoutes.get("/check-user", verifyToken, UserController.checkUser)
userRoutes.put("/update-user", verifyToken, UserController.updateUser)
userRoutes.delete("/delete-user", verifyToken, UserController.deleteUser)

export default userRoutes;