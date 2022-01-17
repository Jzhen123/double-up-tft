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
    const champion = await Champion.query().insertAndFetch({ name, cost });
    res.json(champion);
}

const updateChampion = async (req, res = response) => {
    const champion = req.body;
    const result = await Champion.query().patchAndFetchById(champion.id, champion);
    res.json(result);
}

module.exports = {
    createChampion,
    getAllChampions,
    getChampionByID,
    updateChampion,
};