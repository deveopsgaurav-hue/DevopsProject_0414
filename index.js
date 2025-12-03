const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello DevOps — Application is Running!");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
