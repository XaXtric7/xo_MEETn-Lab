const express = require("express");
const app = express();
const port = 3000;
const blog = require("./routes/blog"); // for routing
const shop = require("./routes/shop");

// ...

app.use("/blog", blog);
app.use("/shop", shop);

// What are GET an POST requests ?
// GET and POST are two of the most commonly used HTTP request methods in web development. They are used for different purposes when interacting with a server.

// 1. GET Request
// Purpose:
// Used to retrieve data from a server.
// Does not modify any data on the server.
// Data is sent in the URL (query parameters).

// 2. POST Request
// Purpose:
// Used to send data to the server.
// Typically used for creating or modifying resources.
// Data is sent in the request body, not in the URL.

app.use(express.static("public")); // using a middleware

app.get("/", (req, res) => {
  console.log("Hey its a get request!");
  res.send("Hello World 1 this is get_Req!");
});

// all these can be chained together also known as "Chaining Request"
app.post("/", (req, res) => {
  console.log("Hey its a post request!");
  res.send("Hello World 2 this is a post_Req!"); // http://localhost:3000/mainpage.html Output-> Hello World 2 this is a post_Req! (on web console)
});

app.put("/", (req, res) => {
  console.log("Hey its a put request!");
  res.send("Hello World 1 this is put_Req!"); // http://localhost:3000/mainpage.html Output-> Hello World 1 this is put_Req! (ont web cosole)
});

app.delete("/", (req, res) => {
  console.log("Hey its a delete request!");
  res.send("Hello World 1 this is delete_Req!"); // http://localhost:3000/mainpage.html Output-> Hello World 1 this is delete_Req! (ont web cosole)
});

app.get("/index", (req, res) => {
  // serving html files
  console.log("Hey its index!");
  res.sendFile("templates/index.html", { root: __dirname }); // http://localhost:3000/index
});

app.get("/api", (req, res) => {
  res.json({ a: 1, b: 2, c: 3, d: 4 }); // usage of postman
});

app.listen(port, () => {
  console.log(`Example app listening on port port`);
});
