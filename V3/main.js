//using commonjs (change "type" to commonjs or it will give error)
const fs = require("fs");

console.log("starting");

fs.writeFile("Sarthak.txt", "Sarthak loves F1", () => {
  //writes into a file
  console.log("done");
  fs.readFile("Sarthak.txt", (error, data) => {
    console.log(error, data.toString()); //without data.tostring it will print -> null <Buffer 53 61 72 74 68 61 6b 20 6c 6f 76 65 73 20 46 31>
  });
});

fs.appendFile("Sarthak.txt", " and football", (error, data) => {
  // appending the existing data
  console.log(data);
}); // from : Sarthak loves F1, to : Sarthak loves F1 and football

console.log("ending");

// Output :
// starting
// ending
// done
// null Sarthak loves F1

//final output :
// starting
// ending
// undefined
// done
// null Sarthak loves F1 and football
