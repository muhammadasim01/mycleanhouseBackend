const router = require("express").Router();
const {
  getAllBlogs,
  deleteBlog,
  updateBlog,
  getSingleBlog,
  addblog,
} = require("../controllers/blogControllers");

router.post(
  "/addBlog",

  addblog
);
router.get("/getAllBlog", getAllBlogs);
router.get("/getSingleBlog/:id", getSingleBlog);
router.patch("/updateBlog/:id", updateBlog);
router.delete("/deleteBlog/:id", deleteBlog);

module.exports = router;
