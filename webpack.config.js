var path = require("path");

module.exports = {
  entry: {
    forms:     "./forms.js",
    headings:  "./headings.js",
    images:    "./images.js",
    landmarks: "./landmarks.js",
    lists:     "./lists.js"
  },
  output: {
    path: path.join(__dirname, "build"),
    filename: "[name].js"
  },
  mode: "production"
};
