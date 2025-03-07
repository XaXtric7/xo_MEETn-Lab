const express = require("express");
const app = express();
const port = 3000;

// usage of the static files
app.use(express.static("public")); //give public files access to the public domain

// Request parameters and queries
// app.get or app.post or app.put or app.delete(path, handler)
app.get("/", (req, res) => {
  res.send("Hello World I am Sarthak Dharmik!"); // http://127.0.0.1:3000/
});

app.get("/about", (req, res) => {
  res.send("Hello World about us!"); // http://127.0.0.1:3000/about
});

app.get("/contact", (req, res) => {
  res.send("Hello World contact us!"); // http://127.0.0.1:3000/contact
});

app.get("/blog", (req, res) => {
  res.send("Hello World my blog!"); // http://127.0.0.1:3000/blog
});

// For URL : http://127.0.0.1:3000/blog/rust?mode=dark&region=in (how to use -> nodemon main.js and reload the page)
app.get("/blog/:slug", (req, res) => {
  //logic to fetch {slug} from the db
  console.log(req.params); // output -> params: { slug: 'rust' }
  console.log(req.query); // output -> query: { mode: 'dark', region: 'in' }
  res.send(`Hello World ${req.params.slug}`); // http://127.0.0.1:3000/blog/rust -> it will print Hello World rust
});

app.get("/blog/:slug/:second", (req, res) => {
  //logic to fetch {slug} from the db
  res.send(`Hello World ${req.params.slug} and ${req.params.second}`); // http://127.0.0.1:3000/blog/rust/cpp -> it will print Hello World rust and cpp
});

// app.get("/blog/intro-to-js", (req, res) => {
//   //logic to fetch intro-to-js from the db
//   res.send("Hello World this is my intro-to-js!"); // http://127.0.0.1:3000/blog/intro-to-js
// });

// app.get("/blog/intro-to-py", (req, res) => {
//   //logic to fetch intro-to-py from the db
//   res.send("Hello World this is my intro-to-py!"); // http://127.0.0.1:3000/blog/intro-to-py
// });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
