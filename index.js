const express = require("express");
const cors = require("cors");

const { getSightings } = require("./utils.js");
require("dotenv").config();

const PORT = process.env.PORT;
const app = express();

app.use(cors());

app.get("/", async (req, res) => {
  const sightings = await getSightings();
  res.json(sightings);
});

app.get("/sightings", async (req, res) => {
  // console.log(req.query);
  const sightings = await getSightings();

  for (let i = 0; i < sightings.length; i++) {
    sightings[i].INDEX = i;
  }

  // filter by year
  if (Object.keys(req.query).length !== 0) {
    const filteredSightings = sightings.filter((sight) => {
      return sight.YEAR === req.query.year;
    });
    res.json(filteredSightings);
  } else {
    res.json(sightings);
  }
});

app.get("/sightings/:sightingIndex", async (req, res) => {
  const sightings = await getSightings();
  // console.log(sightings[req.params.sightingIndex]);
  res.json(sightings[req.params.sightingIndex]);
});

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
