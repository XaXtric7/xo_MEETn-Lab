/* global use, db */
// MongoDB Playground
// To disable this template go to Settings | MongoDB | Use Default Template For Playground.
// Make sure you are connected to enable completions and to be able to run a playground.
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.
// The result of the last command run in a playground is shown on the results panel.
// By default the first 20 documents will be returned with a cursor.
// Use 'console.log()' to print to the debug output.
// For more documentation on playgrounds please refer to
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/

// Select the database to use.
use("Learn_mongodb");

// Insert a few documents into the sales collection.
db.getCollection("courses").insertMany([
  {
    name: "Java",
    price: 20000,
    Instructor: "Sarthak",
  },
  {
    name: "Python",
    price: 18000,
    Instructor: "Amish",
  },
  {
    name: "C++",
    price: 22000,
    Instructor: "Ansh",
  },
  {
    name: "Web Development",
    price: 25000,
    Instructor: "Neha",
  },
  {
    name: "Machine Learning",
    price: 30000,
    Instructor: "Rahul",
  },
  {
    name: "Cyber Security",
    price: 28000,
    Instructor: "Priya",
  },
  {
    name: "Data Science",
    price: 35000,
    Instructor: "Kunal",
  },
  {
    name: "Blockchain",
    price: 32000,
    Instructor: "Vivek",
  },
  {
    name: "Cloud Computing",
    price: 27000,
    Instructor: "Aditi",
  },
  {
    name: "Artificial Intelligence",
    price: 40000,
    Instructor: "Megha",
  },
]);

// Print a message to the output window.
console.log("Done inserting data");
