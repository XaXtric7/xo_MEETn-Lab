const express = require("express");
const app = express();
const port = 3000;

app.set("view engine", "ejs"); // for using ejs template engine

app.get("/", (req, res) => {
  const siteName = "Adidas";
  const searchText = "Search Now";
  res.render("index", {
    siteName: siteName,
    searchText: searchText, // using EJS
  });
});

app.get("/blog/slug:", (req, res) => {
  const siteName = "Adidas ,Why to buy";
  const searchText = "Its a good brand";
  res.render("blogpost", {
    blogTitle: blogTitle,
    blogContent: blogContent, // using EJS
  });
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
