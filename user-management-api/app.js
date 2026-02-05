import express from "express";
import userRouter from "./routes/users.routes.js";

const app = express();

// BODY PARSER (JSON)
// app level middleware 

// Controllers should NOT do everything.
// Repeated logic goes into middlewares

app.use(express.json());

// BASE ROUTE
app.get("/", (req, res) => {
  res.send("User Management API is running");
});

// USER ROUTES
app.use("/api/users", userRouter);

export default app;
