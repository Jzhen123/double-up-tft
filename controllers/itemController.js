const tftJSON = require("../client/src/services/tft-data.json");
const hash = require('fnv1a');

const getAllItems = async (req, res) => {
    let filteredItems = tftJSON.items.slice(348); // Only need indexes 348 and onward in items array

    filteredItems = filteredItems.filter(item =>
        ((item.icon).toLowerCase().includes('standard') || (item.icon).toLowerCase().includes('set6')) && // Gives us most recent set/setX. Need both to get all relevant items
        item.desc !== item.name &&  // Eliminates misc items
        item.effects.Mana != 30 || // Filter out old Blue Buff
        item.name === 'Archangel\'s Staff' // The only Archangel's Staff is in set 5 for some reason
    );

    filteredItems = filteredItems.map(item => {
        item.icon = item.icon.toLowerCase().replace('dds', 'png'); // url path for image must be reformatted to use client-side
        let descriptionSeperated = item.desc.split(' ');

        const matchKeys = (words = descriptionSeperated) => {
            const keyWithSymbols = /\@.+?\@/g; // regex to find key but returns '@key@'
            const keyWithoutSymbols = /(?<=\@).+?(?=\@)/g; // regex to find key but returns 'key'

            for (let i = 0; i < words.length; i++) {
                if (words[i].includes('/@')) { // If a key has 3 values for each star level, e.g. @1StarShieldValue@/@2StarShieldValue@/@3StarShieldValue@
                    words[i] = matchKeys(words[i].split('/')).replaceAll(' ', '/');
                    continue;
                } else if (words[i].match(keyWithSymbols)) { // If a key has '@' on both ends, e.g. '@ShieldDuration@'
                    if (item.effects[words[i].match(keyWithoutSymbols)]) {
                        words[i] = words[i].replace(words[i].match(keyWithSymbols), (item.effects[words[i].match(keyWithoutSymbols)]).toString())
                    } else if (words[i].match(keyWithoutSymbols)[0] == 'Lifesteal') { // Edge case
                        words[i] = words[i].replace(words[i].match(keyWithSymbols), (item.effects['LifeSteal']).toString())
                    } else {
                        let key = words[i].match(keyWithoutSymbols)[0].toLowerCase();
                        key = hash(key).toString(16).padStart(8, '0');
                        key = `{${key}}`;
                        words[i] = words[i].replace(words[i].match(keyWithSymbols), (item.effects[key]).toString());
                    }
                } else if (words[i].includes('%i:scale')) {
                    words.splice(i, 1);
                    i--;
                    continue;
                } else if (words[i] === '%i:star%') {
                    words[i] = '<TftStarIcon />';
                }
                words[i] = words[i].replace('<tftitemrules>', '');
                words[i] = words[i].replace('</tftitemrules>', '');
                words[i] = words[i].replace(/d.]/, 'd]').replace(/<br>Elusive/, ']\n\n[Elusive');
            }
            return words.join(' ');
        }
        item.desc = matchKeys();
        return item;
    })
    res.json(filteredItems);
};



module.exports = {
    getAllItems
}
