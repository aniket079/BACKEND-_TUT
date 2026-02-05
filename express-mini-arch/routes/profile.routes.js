import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Get profile" });
});

router.post("/", (req, res) => {
  res.json({ message: "Create profile" });
});

export default router;



// Router is a mini Express app that handles a group of related routes.
// “A small server inside the main server.


