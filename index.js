const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

async function fetchTrains(data) {
  try {
    const response = await fetch("./trains.json");
    return response.json();
  } catch (error) {
    console.log("Error");
  }
}
app.get("/trains", (req, res) => {
  res.send(fetchTrains());
  res.status(500).send("Error fetching trains data");
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
