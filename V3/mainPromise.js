// proceeding after changing "type" = "module"; in package.json

import fs from "fs/promises";

let a = await fs.readFile("Sarthak.txt"); //read the existing file

let b = await fs.appendFile("Sarthak.txt", "\nSarthak loves to watch anime"); //append new data into the file

console.log(a.toString(), b);

//Output : Sarthak loves F1 and football undefined
