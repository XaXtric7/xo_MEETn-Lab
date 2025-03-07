//---------------------------------------//
//        HOW TO RUN THE PROGRAM         //
//---------------------------------------//

//(1) put random files in testDir with ext like .jpg, .pdf, png, .zip
//(2) npm init -y
//(3) npm i express jsonwwebtoken dotenv
//(4) npm i nodemon
//(5) nodemon organize.js

const fs = require("fs");
const path = require("path");

// Directory to organize (Change this to your target directory)
const directoryPath = "./testDir"; // Update this as needed

// Function to organize files
function organizeFiles(dirPath) {
  if (!fs.existsSync(dirPath)) {
    //Checks if a file/directory exists
    console.log("Directory does not exist!");
    return;
  }

  // Read all files in the directory
  const files = fs.readdirSync(dirPath); //Reads all files inside a directory

  files.forEach((file) => {
    const filePath = path.join(dirPath, file);

    // Ignore directories
    if (fs.lstatSync(filePath).isDirectory()) return; //Checks if a path is a directory

    // Get file extension (without dot)
    const ext = path.extname(file).slice(1); // e.g., "jpg", "png" Extracts the file extension

    if (!ext) return; // Skip files without extensions

    const folderPath = path.join(dirPath, ext); // Joins multiple path segments correctly

    // Create the folder if it doesn't exist
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath); // Creates a folder synchronously
    }

    // Move file to respective folder
    const newFilePath = path.join(folderPath, file);
    fs.renameSync(filePath, newFilePath); //Moves (renames) a file

    console.log(`Moved: ${file} → ${folderPath}/`);
  });

  console.log("✅ Files organized successfully!");
}

// Call the function
organizeFiles(directoryPath);
