const db = require("../db/models/index");

const { Sighting } = db;

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

module.exports = { getAll, getOne, insertOne, editOne };
