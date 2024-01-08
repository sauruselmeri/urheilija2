const { request } = require("express");
const Post = require("../models/Post");

//GETit
exports.getPosts = async (req, res, next) => {
  try {
    const [posts, _] = await Post.searchAll();
    res.status(200).json({ posts });
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//POSTit
exports.createPosts = async (req, res, next) => {
  try {
    let { Nimet, Syntymavuosi, Paino, LinkkiKuvaan, Laji, Saavutukset } =
      req.body;
    let post = new Post(
      Nimet,
      Syntymavuosi,
      Paino,
      LinkkiKuvaan,
      Laji,
      Saavutukset
    );
    await post.tallentaminen();
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//DELETEt
exports.deletePosts = async (req, res, next) => {
  try {
    let ID = req.params.id;
    await Post.deletePostsByID(ID);
  } catch (error) {
    console.log(error); //muutos
    next(error); //muutos
  }
};

//PUTit
exports.putPosts = async (req, res, next) => {
  try {
    let ID = req.params.id;
    let updatettu = req.body;
    await Post.updateByID(ID, updatettu);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

//GETPOSTSBYIDt
exports.getPostsByID = async (req, res, next) => {
  if (!req.params.id) {
    getPosts();
  } else {
    try {
      let postausID = req.params.id;
      let [post, _] = await Post.findByID(postausID);
      res.status(200).json({ post: post[0] });
    } catch (error) {
      console.log(error);
      next(error);
    }
  }
};
