import { Router } from "express";
import AuthController from "../controllers/AuthController.js";

const authRoutes = Router()

authRoutes.get("/sign-up", AuthController.signUp)
authRoutes.get("/sign-in", AuthController.signIn)

export default authRoutes;