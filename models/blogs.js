import { query } from "express";
import { pool } from "../db/index.js";

// GET ALL BLOG PREVIEWS
export async function getBlogs() {
	const result = await query(
		`SELECT * 
    FROM blogs`
	);
	const blogsArray = result.rows;
	return blogsArray;
}

// GET BLOG BY ID
export async function getBlogById(id) {
	const result = await query(
		`SELECT * 
    FROM blogs
    WHERE id = $1`,
		[id]
	);
	const blog = result.rows[0];
	return blog;
}

// CREATE NEW BLOG
export async function createBlog({ title, author, body }) {
	const result = await query
	(
		`INSERT INTO teams(title, author, body) 
    VALUES($1, $2, $3)
    RETURNING *`,
		[title, author, body]
	);
	const newBlog = result.rows[0];
	return newBlog;
}
