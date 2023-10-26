const express = require("express");
const { createProxyMiddleware } = require("http-proxy-middleware");
const parcel = require("parcel-bundler");
const path = require("path");

const app = express();
const port = 3000;

const entryFile = path.join(__dirname, "..", "public", "index.html"); // Adjust the path based on your project structure

const bundler = new parcel(entryFile);

app.use(
  "/api",
  createProxyMiddleware({ target: "http://localhost:3000", changeOrigin: true })
);

app.use(bundler.middleware());

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// ----------------

// {
//   "name": "nafs-website",
//   "version": "1.0.0",
//   "description": "Leading experts in comprehensive fire alarm design and installation solutions for businesses and residences. Our experienced team is dedicated to creating tailored fire safety systems that adhere to industry standards and regulations. From initial design to seamless installation, we prioritize the protection of lives and properties through cutting-edge technology and meticulous craftsmanship.",
//   "main": "index.js",
//   "scripts": {
//     "start": "parcel serve src/index.html",
//     "build": "parcel build src/index.html"
//   },
//   "repository": {
//     "type": "git",
//     "url": "git+https://github.com/pdriding/nafs-business-website.git"
//   },
//   "keywords": [
//     "Fire",
//     "alarm",
//     "design",
//     "installation"
//   ],
//   "author": "ety systems",
//   "license": "ISC",
//   "bugs": {
//     "url": "https://github.com/pdriding/nafs-business-website/issues"
//   },
//   "homepage": "https://github.com/pdriding/nafs-business-website#readme",
//   "devDependencies": {
//     "@babel/core": "^7.23.2",
//     "dotenv": "^16.3.1",
//     "parcel": "^2.10.1"
//   },
//   "dependencies": {
//     "express": "^4.18.2",
//     "ionicons": "^7.2.1"
//   }
// }
