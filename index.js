const express = require("express");
const cors = require("cors");

// const { getSightings } = require("./utils.js");
require("dotenv").config();

const sightingsRouter = require("./routers/SightingsRouter");

const PORT = process.env.PORT;
const app = express();

app.use(cors());
app.use(express.json());

app.use("/sightings", sightingsRouter);

// app.get("/sightings", async (req, res) => {
//   // console.log(req.query);
//   const sightings = await getSightings();

//   for (let i = 0; i < sightings.length; i++) {
//     sightings[i].INDEX = i;
//   }

//   // filter by year
//   if (Object.keys(req.query).length !== 0) {
//     const filteredSightings = sightings.filter((sight) => {
//       return sight.YEAR === req.query.year;
//     });
//     res.json(filteredSightings);
//   } else {
//     res.json(sightings);
//   }
// });

app.listen(PORT, () => {
  console.log(`Express app listening on port ${PORT}!`);
});
