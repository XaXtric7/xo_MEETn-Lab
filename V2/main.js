// for type = 'module' or ES module...
import { add, subtract } from "./func.js";
import { a, b, c } from "./mymodule.js";

console.log(add(4, 4));
console.log(subtract(8, 4));
console.log(a, b, c);

import obj from "./mymodule.js";
console.log(obj);

// for type = 'commonjs'...

// const {add, subtract} = require("./func.js");
// console.log(add(4, 4));
// console.log(subtract(8, 4));
