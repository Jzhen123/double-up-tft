const { response } = require("express");

const Champion = require('../models/Champion');

const getAllChampions = async (req, res = response) => {
    const champion = await Champion.query();
    res.json(champion);
};

const getChampionByID = async (req, res = response) => {
    const { keyword } = req.params;
    const champion = await Champion.query().findById(keyword);
    res.json(champion);
}

const createChampion = async (req, res = response) => {
    const { name, cost } = req.body;
    await Champion.query().insert({ name, cost });

    res.json({
        name: name,
        cost: cost,
        msg: "Created new champion!",
    });
}

module.exports = {
    createChampion,
    getAllChampions,
    getChampionByID,
};