const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

const createTrainPayload = {
  trainExpressName: "Some train name",
  countryOfOrigin: "Example country",
  yearOfConstruction: "2137",
  maxKilometerPerHour: "320",
  destinationFrom: "Earth",
  destinationTo: "Moon",
};

async function fetchTrains() {
  try {
    const response = await fetch("./trains.json");
    return response.json();
  } catch (error) {
    console.log("Error:", error);
  }
}

app.get("/trains", (req, res) => {
  req.send(fetchTrains());
});

app.post("/trains", (req, res) => {
  req.send(createTrainPayload);
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
