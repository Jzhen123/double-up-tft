const tftJSON = require("../client/src/services/tft-data.json");

const getAllItems = async (req, res) => {
    // In the items array, only indexes 348 and onward are relevant
    let filteredItems = tftJSON.items.slice(348);

    // Using the url in an item's icon field, we can filter out unrelated items by checking if they include the words 'Standard' or 'Set6'
    // After that, there are still some weird outliers that can be filtered by checking that there desc field is not the same as their name field
    filteredItems = filteredItems.filter(item => (item.icon.includes('Standard') || item.icon.includes('Set6')) && item.desc !== item.name); 

    // Now, filteredItems should only contain Set 6 items
    res.json(filteredItems);
};



module.exports = {
  getAllItems
}
