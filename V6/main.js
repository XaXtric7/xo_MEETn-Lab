// Q1. What are Middlewares in Express.js?
// ANS. Middleware functions in Express.js are functions that execute during the request-response cycle. They have access to the request (req), response (res), and next (next) function.

// A middleware can:

// - Modify the request and response objects.
// - End the request-response cycle.
// - Call the next middleware function in the stack.

// --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

const express = require("express");
const app = express();
const port = 3000;
const fs = require("fs");
const { start } = require("repl");
const blog = require("./routes/blog");

// ...

app.use("/blog", blog);

// Built-in middleware
// app.use(express.static("public"));

// Middleware 1
app.use((req, res, next) => {
  console.log(req.headers);
  req.sarthak = "I love to watch Anime";
  const timestamp = new Date().toLocaleString(); // Format the date and time
  const logEntry = `${timestamp} - ${req.method} request received\n`;

  fs.appendFileSync("logs.txt", logEntry); //append time and method in logs.txt

  //   console.log("LOGGED M1"); // Output -> LOGGED M1 in VS terminal
  next(); // if not present the request will get stuck
});

// Middleware 2
app.use((req, res, next) => {
  console.log("LOGGED M2"); // Output -> LOGGED M2 in VS terminal
  next();
});

// Route Handlers
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/about", (req, res) => {
  res.send("Hello About!" + req.sarthak); // usage of req.sarthak to manipulate the request Output -> Hello About!I love to watch Anime
});

app.get("/contact", (req, res) => {
  res.send("Hello Contact!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
