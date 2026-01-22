import express from "express";
import { asyncHandler } from "../middleware/asyncHandler.js";
import { createUserController, getUserByIdentifierController } from "../controllers/authController.js";
import { getMe } from "../controllers/usersController.js";
import { cookieJwtAuth } from "../middleware/cookieJwtAuth.js";
import { csrfProtection } from "../middleware/csrfMiddleware.js";


const router = express.Router();

router.post("/auth/register", asyncHandler(createUserController));
router.post("/auth/login", asyncHandler(getUserByIdentifierController));
router.get("/users/me", cookieJwtAuth, csrfProtection, asyncHandler(getMe))


//Just to test CSRF with
// router.post("/users/me/post", cookieJwtAuth, asyncHandler(async(req, res, next) => {
//     const body = req.body.username;
//     users.push(body);

//     res.status(201).json({
//         success: true,
//     })
// }))


export default router