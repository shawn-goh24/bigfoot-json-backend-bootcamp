const express = require("express");
const sightingsController = require("../controllers/SightingsController");

const router = express.Router();

router.get("/", sightingsController.getAll);
router.get("/:sightingId", sightingsController.getOne);
router.post("/", sightingsController.insertOne);
router.put("/:sightingId", sightingsController.editOne);

module.exports = router;
