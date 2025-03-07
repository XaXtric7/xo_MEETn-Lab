// for routing
// This handles all the endpoint starting with /blog
const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("This is the blog"); // http://localhost:3000/blog
});

// define the about route
router.get("/about", (req, res) => {
  res.send("About blog"); // http://localhost:3000/blog/about
});

router.get("/blogpost/:slug", (req, res) => {
  res.send(`fetch the blog post for ${req.params.slug}`); // http://localhost:3000/blog/blogpost/rust
});

module.exports = router;
