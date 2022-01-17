const { Router } = require("express");
const router = Router();

const { check } = require('express-validator');

const { getAllChampions, getChampionByID, createChampion, updateChampion } = require("../controllers/champion");

router.get("/getAllChampions", getAllChampions);
router.get("/getChampionByID/:keyword", getChampionByID);

router.post('/createChampion', [
    check('name', 'Must include champion\'s name').not().isEmpty(),
    check('cost', 'Must include champion\'s cost').not().isEmpty()
], createChampion);

router.post('/updateChampion', [
    check('name', 'Must include a new champion name').not().isEmpty(),
    check('cost', 'Must include a new champion cost').not().isEmpty()
], updateChampion);

module.exports = router;