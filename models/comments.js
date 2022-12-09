// GET COMMENTS BY BLOG
export async function getCommentsByBlog(id) {
	const result = await query(
		`SELECT * 
    FROM blog_comments
    JOIN blogs
      ON blog_comments.blog_id = blogs.id 
    WHERE blogs.id = $1`,
		[id]
	);
	const commentsByBlog = result.rows;
	return commentsByBlog;
}

// CREATE COMMENT
export async function createComment({ comment_author, comment_body }, blog_id) {
	// Subquery to get teams ID from SQL database
	// const blogID = await query(
	//   `SELECT *
	//   FROM blogs
	//   WHERE blogs.id = $1`, [id]);
	// const blog_id = blogID.rows[0].id

	const result = await query(
		`INSERT INTO blog_comments (blog_id, comment_author, comment_body)
    VALUES ($1, $2, $3)
    RETURNING *`,
		[blog_id, comment_author, comment_body]
	);
	const newComment = result.rows[0]; //!Potential cause of bug (array notation)
	console.log(result);
	return newComment;
}
