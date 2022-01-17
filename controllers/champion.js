const { response } = require("express");

const Champion = require('../models/Champion');

const createChampion = async (req, res = response) => {
    const { name, cost } = req.body;
    const champion = await Champion.query().insertAndFetch({ name, cost });
    res.json(champion);
}

const deleteChampion = async (req, res = response) => {
    const { id } = req.body;
    const champion = await Champion.query().findById(id);
    await Champion.query().deleteById(id);
    res.json({ msg: `Deleted the champion '${champion.name}' successfully` });
}

const getAllChampions = async (req, res = response) => {
    const champion = await Champion.query();
    res.json(champion);
}

const getChampionByID = async (req, res = response) => {
    const { keyword } = req.params;
    const champion = await Champion.query().findById(keyword);
    res.json(champion);
}

const updateChampion = async (req, res = response) => {
    const { id } = req.body;
    const champion = await Champion.query().patchAndFetchById(id, req.body);
    res.json(champion);
}

module.exports = {
    createChampion,
    deleteChampion,
    getAllChampions,
    getChampionByID,
    updateChampion,
};