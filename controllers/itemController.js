const tftJSON = require("../client/src/services/tft-data.json");

const getAllItems = async (req, res) => {
    let filteredItems = tftJSON.items.slice(348); // Only need indexes 348 and onward in items array

    filteredItems = filteredItems.filter(item =>
        (item.icon.includes('Standard') || item.icon.includes('Set6')) && // Gives us most recent set/setX. Need both to get all relevant items
        item.desc !== item.name &&  // Eliminates weird/misc items that riot leaves in
        item.effects.Mana != 30 || // There are two different Blue Buffs and how we will get the updated one
        item.name === 'Archangel\'s Staff' // The only Archangel's Staff is in set 5 for some reason
    );
    
    // Now, filteredItems should only contain Set 6 items
    res.json(filteredItems);
};



module.exports = {
    getAllItems
}
