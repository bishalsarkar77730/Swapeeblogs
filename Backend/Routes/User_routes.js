import express from "express";
import {
  update,
  deleteUser,
  getUser,
  getsingleUser,
  getAllusers,
  editUserRole,
  verifyuser,
} from "../Controllers/User_controller.js";
import {
  authenticatedAndVerifiedUser,
  verifyRole,
} from "../Middlewares/Auth.js";

const router = express.Router();

router.post("/:id", authenticatedAndVerifiedUser, update);
router.post("/:id", authenticatedAndVerifiedUser, deleteUser);
router.post("/:id", authenticatedAndVerifiedUser, getUser);
router.post(
  "/admin/:UuId",
  authenticatedAndVerifiedUser,
  verifyRole("admin"),
  getsingleUser
);
router.post(
  "/admin/alluser",
  authenticatedAndVerifiedUser,
  verifyRole("admin"),
  getAllusers
);
router.post(
  "/admin/updaterole/:UuId",
  authenticatedAndVerifiedUser,
  verifyRole("admin"),
  editUserRole
);
router.post(
  "/admin/verify/:UuId",
  authenticatedAndVerifiedUser,
  verifyRole("admin"),
  verifyuser
);

export default router;
