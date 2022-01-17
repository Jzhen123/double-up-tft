const { Router } = require("express");
const router = Router();

const { check } = require('express-validator');

const { getAllChampions, getChampionByID, createChampion } = require("../controllers/champion");

router.get("/getAllChampions", getAllChampions);
router.get("/getChampionByID/:keyword", getChampionByID);

router.post('/createChampion', [
    check('name', 'Must include champion\'s name').not().isEmpty(),
    check('cost', 'Must include champion\'s cost').not().isEmpty()
], createChampion);

module.exports = router;