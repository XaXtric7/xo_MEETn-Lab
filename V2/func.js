// func.js
// for type = 'module'...
export function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}

//for type = 'commonjs'...
// function add (x, y){
//   return x + y;
// }

// function subtract (x, y){
//   return x - y;
// }

module.export = { add, subtract };
