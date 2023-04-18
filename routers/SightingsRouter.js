const express = require("express");
const sightingsController = require("../controllers/SightingsController");

const router = express.Router();

router.get("/", sightingsController.getAll);
router.post("/", sightingsController.insertOne);
router.get("/:sightingId", sightingsController.getOne);
router.put("/:sightingId", sightingsController.editOne);
router.get("/:sightingId/comments", sightingsController.getAllComment);
router.post("/:sightingId/comments", sightingsController.addComment);
router.delete(
  "/:sightingId/comments/:commentId",
  sightingsController.deleteComment
);
router.put("/:sightingId/comments/:commentId", sightingsController.editComment);

module.exports = router;
