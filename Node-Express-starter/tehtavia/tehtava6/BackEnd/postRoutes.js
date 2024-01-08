const express = require("express");
const postControllers = require("../controllers/postControllers");
const router = express.Router();

router
  .route("/")
  .get(postControllers.getPosts)
  .post(postControllers.createPosts)
  .put(postControllers.putPosts)
  .delete(postControllers.deletePosts);

router.route("/:ID").get(postControllers.getPostsByID);
router.route("/:ID").put(postControllers.putPosts);
router.route("/:ID").delete(postControllers.deletePosts);

module.exports = router;
