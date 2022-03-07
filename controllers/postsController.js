const express = require("express");
const router = express.Router();
const ObjectID = require("mongoose").Types.ObjectId;

const { PostsModel } = require("../models/Posts");

router.get("/", (req, res) => {
  PostsModel.find((err, data) => {
    if (!err) res.send(data);
    else console.log("Error to get data :" + err);
  });
});

router.post("/", (req, res) => {
  const newPost = new PostsModel({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    likes: 0,
  });

  newPost.save((err, data) => {
    if (!err) res.send(data);
    else console.log("Error to create new post : " + err);
  });
});

router.put("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID Unknown :" + req.params.id);
  const updatePost = {
    content: req.body.content,
  };

  PostsModel.findByIdAndUpdate(
    req.params.id,
    { $set: updatePost },
    { new: true },
    (err, data) => {
      if (!err) res.send(data);
      else console.log("Post Not Updated : " + err);
    }
  );
});

router.delete("/:id", (req, res) => {
  if (!ObjectID.isValid(req.params.id))
    return res.status(400).send("ID Unknown :" + req.params.id);

  PostsModel.findByIdAndRemove(req.params.id, (err, data) => {
    if (!err) res.send(data);
    else console.log("Delete Error :" + err);
  });
});

module.exports = router;
