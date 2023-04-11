import express from "express";
import { upload, Newblog } from "../Controllers/Blog_controller.js";
import { authenticatedAndVerifiedUser } from "../Middlewares/Auth.js";

const router = express.Router();

router.post(
  "/newblog",
  authenticatedAndVerifiedUser,
  upload.single("photo"),
  Newblog
);

export default router;
