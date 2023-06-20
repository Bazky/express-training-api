const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

async function fetchTrains() {
  return fetch("./trains.json");
}
app.get("/", (req, res) => {
  res.send("Hello from Nerdobrd!");
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
