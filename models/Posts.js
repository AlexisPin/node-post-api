const mongoose = require("mongoose");

const PostsModel = mongoose.model(
  "node-api",
  {
    title: {
      type: String,
      required: true,
    },
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    likes: {
      type: String,
      required: true,
    },
  },
  "posts"
);

module.exports = { PostsModel };
