import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const userRoutes = Router()

userRoutes.get("/sign-up", AuthController.signUp)
userRoutes.get("/sign-in", AuthController.signIn)

export default userRoutes;