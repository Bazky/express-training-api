const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;

async function fetchTrains() {
  try {
    const response = fetch("./trains.json", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: "John" }),
    });
    const result = await response.json();
    console.log("Success:", result);
  } catch (error) {
    console.error("Error:", error);
  }
}

app.get("/trains", (req, res) => {
  res.send(fetchTrains());
  res.status(500).send("Error fetching trains data");
});

app.listen(PORT, () => {
  console.log("Server listening on port 3000");
});
