import express from "express";
import { getUsers,createUser } from "../controllers/user.controller.js";
const router = express.Router();

router.get("/", getUsers);

router.post("/", createUser);

export default router;



// Router is a mini Express app that handles a group of related routes.
// “A small server inside the main server.


