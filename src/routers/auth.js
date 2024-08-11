import { Router } from "express";
import {
    registerUserController,
    loginUserController,
    refreshUserSessionController,
    logoutUserController,
    requestResetEmailController,
    resetPasswordController} from "../controllers/auth.js"
import { ctrlWrapper } from "../utils/ctrlWrapper.js";
import { validateBody } from "../utils/validateBody.js";
import { registerUserSchema, loginUserSchema, requestResetEmailSchema, resetPasswordSchema } from '../validation/auth.js';

const router = Router()

router.post("/register", validateBody(registerUserSchema), ctrlWrapper(registerUserController))

router.post("/login", validateBody(loginUserSchema), ctrlWrapper(loginUserController))

router.post("/refresh", ctrlWrapper(refreshUserSessionController))

router.post("/logout", ctrlWrapper(logoutUserController))

router.post('/request-reset-email', validateBody(requestResetEmailSchema), ctrlWrapper(requestResetEmailController))

router.post('/reset-password', validateBody(resetPasswordSchema), ctrlWrapper(resetPasswordController))

export default router;