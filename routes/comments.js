import express from "express";
import { getCommentsByBlog, createComment } from "../models/comments.js";

const router = express.Router();

router.get("/:id", async function (req, res) {
	const comments = await getCommentsByBlog(req.params.id);
	res.json({ success: true, payload: comments });
});

router.post("/:id", async function (req, res) {
	const newComment = await createComment(req.body, req.params.id);
	res.json({ success: true, payload: newComment });
});

export default router;
