# 📌 Node.js Practice Repository

Welcome to my **Node.js Practice Repository**! 🚀

This repository is dedicated to practicing and experimenting with **Node.js** concepts, including:  
✅ Setting up a basic server  
✅ Working with Express.js  
✅ Handling file operations  
✅ Using middleware  
✅ Implementing authentication using JWT  
✅ Connecting to databases  
✅ Creating APIs  
✅ Using EJS with Express.js  
✅ Setting up Tailwind CSS

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **jsonwebtoken (JWT)** for authentication
- **Nodemon** for development
- **EJS** for templating
- **Tailwind CSS** for styling

## 🔥 Getting Started Documentations

- [**Node.js docs**](https://nodejs.org/docs/latest/api/)
- [**Express.js docs**](https://expressjs.com/)
- [**Tailwind CSS docs**](https://tailwindcss.com/docs)

### 1️⃣ Clone the repository

```sh
git clone https://github.com/your-username/nodejs-playground.git
cd nodejs-playground
```

### 2️⃣ Initialize a Node.js project

```sh
npm init -y
```

### 3️⃣ Install dependencies

```sh
npm install express jsonwebtoken dotenv ejs
```

### 4️⃣ Install development dependencies

```sh
npm install nodemon --save-dev
```

### 5️⃣ Add a start script in `package.json`

Modify the `"scripts"` section like this:

```json
"scripts": {
  "start": "node index.js",
  "dev": "nodemon index.js"
}
```

### 6️⃣ Setting up Express.js

Create an `index.js` file and add the following code:

```javascript
const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
```

### 7️⃣ Using EJS with Express.js

Create a file named `server.js` and add the following code:

```javascript
let express = require("express");
let app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index", { foo: "FOO" });
});

app.listen(4000, () => console.log("Example app listening on port 4000!"));
```

### 8️⃣ Setting up Tailwind CSS

Install Tailwind CSS:

```sh
npm install tailwindcss @tailwindcss/cli
```

Import Tailwind in your CSS by adding the following to your main CSS file:

#### `src/input.css`

```css
@import "tailwindcss";
```

Build Tailwind CSS using:

```sh
npx @tailwindcss/cli -i ./src/input.css -o ./src/output.css --watch
```

#### Sample HTML file using Tailwind CSS

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link href="./output.css" rel="stylesheet" />
  </head>
  <body>
    <h1 class="text-3xl font-bold underline">Hello world!</h1>
  </body>
</html>
```

### 9️⃣ Run the project

Start the server using:

```sh
npm run dev
```

or

```sh
node index.js
```

## 🚀 Goals of This Repository

- To explore **Node.js fundamentals**
- To build **mini-projects** and test features
- To improve backend development skills
- To learn **EJS templating**
- To practice **Tailwind CSS**

Happy coding! 🎉
