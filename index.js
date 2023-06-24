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
    const response = fetch("./trains.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(createTrainPayload),
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

app.get("/trains", (req, res) => {
  req.send(fetchTrains());
  res.status(500).send("Error fetching trains data");
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
