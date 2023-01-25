const Blog = require("../models/Blog");

const addblog = async (req, res) => {
  const { title, description, catagory, featuredImage } = req.body;
  try {
    const newBlog = await new Blog({
      title,
      description,
      catagory,
      featuredImage,
    }).save();
    if (newBlog) res.send({ success: true, data: newBlog });
    else res.send({ success: false, error: "blog isn't added" });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};

const getAllBlogs = async (req, res) => {
  try {
    const allBlogs = await Blog.find({});
    if (allBlogs.length > 0) res.send({ success: true, data: allBlogs });
    else res.send({ success: false, error: "blogs not found" });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const getSingleBlog = async (req, res) => {
  try {
    const getSingleBlog = await Blog.findOne({ _id: req.params.id });
    if (getSingleBlog) res.send({ success: true, data: getSingleBlog });
    else
      res.send({
        success: false,
        error: "some thing went wrong blog not found",
      });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(req?.params?.id, req.body, {
      new: true,
    });
    if (blog) res.send({ success: true, data: blog });
    else
      res.send({
        success: false,
        error: "something went wrong blog not found ",
      });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req?.params?.id);
    if (blog)
      res.send({ success: true, data: blog, message: "blog has been deleted" });
    else
      res.send({
        success: false,
        error: "something went wrong blog not found ",
      });
  } catch (error) {
    res.send({ success: false, error: error.message });
  }
};
module.exports = {
  addblog,
  getAllBlogs,
  getSingleBlog,
  updateBlog,
  deleteBlog,
};
