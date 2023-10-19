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
