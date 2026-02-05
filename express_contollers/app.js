import express from "express";
import userRouter from "./routes/user.routes.js";

const app = express();
app.use(express.json());

// mount router
app.use(userRouter);

// app.use("/api/users", userRouter);

export default app;















// app.use(express.json()) is a middleware that reads JSON data from the request body and converts it into a JavaScript object (req.body).
