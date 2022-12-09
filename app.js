import express from "express";
import logger from "morgan";
import cors from "cors";

import blogsRouter from "./routes/blogs.js";
import commentsRouter from "./routes/comments.js";

const app = express();

app.use(cors("*"));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/blogs", blogsRouter);
app.use("/api/comments", commentsRouter);

export default app;
