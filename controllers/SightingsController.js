const db = require("../db/models/index");

const { Sighting, Comment } = db;

async function getAll(req, res) {
  try {
    const allSighting = await Sighting.findAll();
    return res.json(allSighting);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function getOne(req, res) {
  const id = req.params.sightingId;
  try {
    const output = await Sighting.findByPk(id);
    return res.json(output);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function insertOne(req, res) {
  const { date, country, city, location_description, notes } = req.body;
  try {
    const newSighting = await Sighting.create({
      updated_at: new Date(),
      created_at: new Date(),
      date: date,
      country: country,
      city: city,
      location_description: location_description,
      notes: notes,
    });
    return res.json(newSighting);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function editOne(req, res) {
  try {
    let sightToAdd = req.body;
    let sightToReplace = req.params.sightingId;
    let sightToEdit = await Sighting.findByPk(sightToReplace);
    await sightToEdit.update(sightToAdd);
    let allSighting = await Sighting.findAll();

    res.json(allSighting);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function getAllComment(req, res) {
  const { sightingId } = req.params;
  try {
    const allComment = await Comment.findAll({
      where: {
        sightingId: sightingId,
      },
    });
    return res.json(allComment);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function addComment(req, res) {
  const { content } = req.body;
  const { sightingId } = req.params;
  try {
    const newComment = await Comment.create({
      updatedAt: new Date(),
      createdAt: new Date(),
      content: content,
      sightingId: sightingId,
    });
    return res.json(newComment);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function deleteComment(req, res) {
  try {
    const { commentId } = req.params;
    await Comment.destroy({ where: { id: commentId } });
    let data = await Comment.findAll();
    res.json({ data });
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

async function editComment(req, res) {
  try {
    let commentToAdd = req.body;
    let commentToReplace = req.params.commentId;
    let commentToEdit = await Comment.findByPk(commentToReplace);
    await commentToEdit.update(commentToAdd);
    let allComment = await Comment.findAll();
    res.json(allComment);
  } catch (err) {
    return res.status(400).json({ error: true, message: err });
  }
}

module.exports = {
  getAll,
  getOne,
  insertOne,
  editOne,
  getAllComment,
  addComment,
  deleteComment,
  editComment,
};
