import express from "express";
import { getBlogs, getBlogById, createBlog } from "../models/blogs.js";

const router = express.Router();

router.get("/", async function (res) {
	const blogs = await getBlogs();
	res.json({ success: true, payload: blogs });
});

router.get("/:id", async function (req, res) {
	const blog = await getBlogById(req.params.id);
	res.json({ success: true, payload: blog });
});

router.post("/", async function (req, res) {
	const data = req.body;
	const newBlog = await createBlog(data);
	res.json({ success: true, payload: newBlog });
});

export default router;
