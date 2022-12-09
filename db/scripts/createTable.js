import { pool } from "../index.js";

async function createTable() {
  const blogsCreated = await pool.query(
    `CREATE TABLE IF NOT EXISTS blogs (
      id INT PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
      title TEXT NOT NULL,
      author VARCHAR(15) NOT NULL,
  	  body TEXT NOT NULL
    );`
  );
  console.log("blogs table created", blogsCreated.command);

  const commentsCreated = await pool.query(
    `CREATE TABLE IF NOT EXISTS blog_comments (
      blog_id INT REFERENCES blogs(id),
      comment_author VARCHAR(15) NOT NULL,
  	  comment_body TEXT NOT NULL
    );`
  );
  console.log("comments table created", commentsCreated.command);
}

try {
  await createTable();
} catch (err) {
  console.error(err);
} finally {
  await pool.end();
}