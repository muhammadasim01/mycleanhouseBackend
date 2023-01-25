const mongoose = require("mongoose");
const blogSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  featuredImage: {
    type: String,
    required: true,
  },
  catagory: {
    type: String,
    required: true,
  },
});
const Blog = mongoose.model("Blog", blogSchema);
module.exports = blog;
