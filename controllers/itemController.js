const tftJSON = require("../client/src/services/tft-data.json");

const getAllItems = async (req, res) => {
    res.json(tftJSON);
};



module.exports = {
  getAllItems
}
