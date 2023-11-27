const express = require("express");
const fs = require("fs");

const app = express();
const port = 3000;

// JSON dosyasını oku
const jsonData = JSON.parse(fs.readFileSync("pdf_data.json"));

app.get("/", (req, res) => {
  res.send("api is running");
});
// Convert jsonData to an array
app.get("/api", (req, res) => {
  res.json(jsonData);
});

app.get("/api/:date", (req, res) => {
  const date = req.params.date;
  const data = jsonData[date];
  if (data) {
    res.json(data);
  } else {
    res.status(404).json({ error: "Data not found for the specified date." });
  }
});

// Sunucuyu başlat (Start the server)
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});