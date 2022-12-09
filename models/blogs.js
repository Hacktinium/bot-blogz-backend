import { pool } from "../db/index.js";

// GET ALL BLOG PREVIEWS
export async function getBlogs() {
	const result = await pool.query(
		`SELECT * 
    FROM blogs`
	);
	const blogsArray = result.rows;
	console.log(result.rows)
	return blogsArray;
}

// GET BLOG BY ID
export async function getBlogById(id) {
	const result = await pool.query(
		`SELECT * 
    FROM blogs
    WHERE id = $1`,
		[id]
	);
	const blog = result.rows;
	return blog;
}

// CREATE NEW BLOG
export async function createBlog({ title, author, body }) {
	const result = await pool.query(
		`INSERT INTO blogs(title, author, body) 
    VALUES($1, $2, $3)
    RETURNING *`,
		[title, author, body]
	);
	const newBlog = result.rows;
	return newBlog;
}

// DELETE BLOG BY ID
export async function deleteBlogById(id) {
  const result = await pool.query(
    `DELETE FROM blogs
    WHERE blogs.id = $1
    RETURNING *`, [id]) 
  const deletedBlog = result.rows;
  return deletedBlog;
}