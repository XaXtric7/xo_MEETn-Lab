var slugify = require("slugify");

const a = slugify("some string"); // some-string

// if you prefer something other than '-' as separator
const b = slugify("some string", "_"); // some_string , gives valid slug
console.log(b);
