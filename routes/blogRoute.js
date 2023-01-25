const router = require("express").Router();
const blogController = require("../controllers/adminControllers");

router.post("/addBlog", blogController.addBlogController);
router.get("/getAllBlog", blogController.getAllBlogs);
router.get("/getSingleBlog/:id", blogController.getSingleBlog);

module.exports = router;
