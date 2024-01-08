const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

router.route("/lisaa").post(postControllers.createPosts); //muokattu, lisää github
//router.route("/muokkaa/:id").put(postControllers.putPosts); //muokattu, lisää github

router.route("/:id").get(postControllers.getPostsByID);
router.route("/muokkaa/:id").put(postControllers.putPosts);
router.route("/:id").delete(postControllers.deletePosts);

router.route("/").get(postControllers.getPosts);
//.delete(postControllers.deletePosts);

module.exports = router;
