import { Router } from "express";
import {
    registerUserController,
    loginUserController,
    refreshUserSessionController,
    logoutUserController} from "../controllers/auth.js"
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { registerUserSchema, loginUserSchema } from '../validation/auth.js';

const router = Router()

router.post("/register", validateBody(registerUserSchema), ctrlWrapper(registerUserController))

router.post("/login", validateBody(loginUserSchema), ctrlWrapper(loginUserController))

router.post("/refresh", ctrlWrapper(refreshUserSessionController))

router.post("/logout", ctrlWrapper(logoutUserController))

export default router;