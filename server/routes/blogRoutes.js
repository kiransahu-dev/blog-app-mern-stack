const express = require("express");
const {
  getAllBlogsController,
  createBlogController,
  updateBlogController,
  getBlogsByIdController,
  deleteBlogController,
  userBlogController
} = require("../controllers/blogController");
// router objects
const router = express.Router();

// routes
// GET all blogs
router.get("/all-blogs", getAllBlogsController);
// POST || create blogs
router.post("/create-blogs", createBlogController);
// PUT || update blogs
router.put("/update-blogs/:id", updateBlogController);
// GET || single blogs
router.get("/get-blog/:id", getBlogsByIdController);
// DELETe || delete blogs
router.delete("/delete-blog/:id", deleteBlogController);
// get || user blogs
router.get("/user-blog/:id", userBlogController);

module.exports = router;
