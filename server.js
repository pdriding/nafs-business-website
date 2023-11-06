require("dotenv").config();

const express = require("express");
const path = require("path");
const ejs = require("ejs");

const app = express();

// Set the views directory
app.set("views", path.join(__dirname, "public"));

// Set EJS as the view engine
app.engine("html", ejs.renderFile);
app.set("view engine", "html");

const apiKey = process.env.GOOGLE_MAPS_API_KEY;

app.get("/", (req, res) => {
  res.render("index", { apiKey: apiKey }); // Pass the apiKey to the view
});

const port = process.env.PORT || 3000;

app.use(express.static("public"));
app.use("/scripts", express.static(path.join(__dirname, "node_modules")));

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
