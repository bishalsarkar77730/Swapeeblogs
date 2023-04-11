import express from "express";
import { signup, signin, resetPassword, LogOut } from "../Controllers/Auth_controller.js"
import {authenticatedAndVerifiedUser} from "../Middlewares/Auth.js"

const router = express.Router();

router.post("/signup", signup);
router.post("/signin", signin);
router.post("/passwordreset/:id",authenticatedAndVerifiedUser, resetPassword);
router.post("/signout", LogOut);

export default router;