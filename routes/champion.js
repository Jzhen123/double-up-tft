const { Router } = require("express");
const router = Router();

const { check } = require('express-validator');

const { getAllChampions, getChampionByID, createChampion, updateChampion, deleteChampion } = require("../controllers/champion");

// Create
router.post('/createChampion', [
    check('name', 'Must include champion\'s name').not().isEmpty(),
    check('cost', 'Must include champion\'s cost').not().isEmpty()
], createChampion);


// Read
router.get("/getAllChampions", getAllChampions);
router.get("/getChampionByID/:keyword", getChampionByID);


// Update
router.post('/updateChampion', [
    check('name', 'Must include a new champion name').not().isEmpty(),
    check('cost', 'Must include a new champion cost').not().isEmpty()
], updateChampion);


// Delete
router.post('/deleteChampion', deleteChampion);


module.exports = router;