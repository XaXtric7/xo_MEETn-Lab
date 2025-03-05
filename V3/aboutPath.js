import path, { basename, dirname, extname } from "path";
let myPath =
  "d:\\Sarthak\\Academic Files\\Coding and Language Stuff\\CodeWithHarry\\Node JS(CWH)\\xo_Node.js\\V3\\Sarthak.txt";
// using "\\" so that it can understand that its a path or it will term it as an "escape sequence"...
console.log(path, extname(myPath)); // gives out ".txt" as an output
console.log(path, dirname(myPath)); // d:\Sarthak\Academic Files\Coding and Language Stuff\CodeWithHarry\Node JS(CWH)\xo_Node.js\V3
console.log(path, basename(myPath)); //Sarthak.txt
console.log(path.join("c:/", "programs\\Sarthak.txt")); //c:\programs\Sarthak.txt
