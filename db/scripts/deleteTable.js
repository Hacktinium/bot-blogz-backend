import { pool } from "../index.js";

async function dropTable() {
  const droppedBlogs = await pool.query("DROP TABLE IF EXISTS blogs;");
  console.log("blogs table deleted", droppedBlogs.command);
  const droppedComments = await pool.query("DROP TABLE IF EXISTS blog_comments;");
  console.log("blog_comments table deleted", droppedComments.command);
}

try {
  await dropTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}