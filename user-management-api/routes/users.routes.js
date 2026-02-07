import express from "express";
import {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
  patchUser,
  isActive,
  updatebyEmail
} from "../controllers/user.controller.js";


import {checkAuth , validateUserId ,validateZod} from "../middlewares/auth.js"
import { validateCreateUserDTO } from "../dtos/user.dto.js";
import { createUserSchema, updateUserSchema } from "../dtos/user.zod.js";
// import { validateZod } from "../middlewares/auth.js";
const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/isactive", isActive);
router.patch("/byEmail",updatebyEmail);
router.patch("/:id",patchUser);
router.delete("/:id", deleteUser);

export default router;
