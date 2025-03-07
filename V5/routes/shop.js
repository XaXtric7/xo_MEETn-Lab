// for routing
// This handles all the endpoint starting with /shop
const express = require("express");
const router = express.Router();

// define the home page route
router.get("/", (req, res) => {
  res.send("This is the shop"); // http://localhost:3000/shop
});

// define the about route
router.get("/about", (req, res) => {
  res.send("About shop"); // http://localhost:3000/shop/about
});

router.get("/shoppost/:slug", (req, res) => {
  res.send(`fetch the shop post for ${req.params.slug}`); // http://localhost:3000/shop/shoppost/rust
});

module.exports = router;
