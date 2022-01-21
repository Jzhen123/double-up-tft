const tftJSON = require("../client/src/services/tft-data.json");
const hash = require('fnv1a');

const getAllItems = async (req, res) => {
    let filteredItems = tftJSON.items.slice(348); // Only need indexes 348 and onward in items array

    filteredItems = filteredItems.filter(item =>
        (item.icon.includes('Standard') || item.icon.includes('Set6')) && // Gives us most recent set/setX. Need both to get all relevant items
        item.desc !== item.name &&  // Eliminates weird/misc items that riot leaves in
        item.effects.Mana != 30 || // There are two different Blue Buffs and how we will get the updated one
        item.name === 'Archangel\'s Staff' // The only Archangel's Staff is in set 5 for some reason
    );

    for (let item of filteredItems) {
        item.icon = item.icon.toLowerCase().replace('dds', 'png'); // url path for image must be reformatted to use client-side

        let newDesc = item.desc.split(' ');
        const checkIfWordsAreSpecial = (words = newDesc) => {
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (word.includes('/@')) {
                    const subWords = word.split('/');
                    let desc = checkIfWordsAreSpecial(subWords);
                    desc = desc.replaceAll(' ', '/');
                    words[i] = desc;
                    continue;
                }

                if (word.match(/\@.+?\@/g)) { // If word is a string with '@' on both ends, e.g. '@TooltipBonusAS@'
                    if (item.effects[word.match(/(?<=\@).+?(?=\@)/g)]) { // If key 'TooltipBonusAS' already exist in item.effects object
                        words[i] = word.replace(word.match(/\@.+?\@/g), (item.effects[word.match(/(?<=\@).+?(?=\@)/g)]).toString())
                        continue;
                    } else if (word.match(/(?<=\@).+?(?=\@)/g)[0] == 'Lifesteal') { // Edge case because Lifesteal != LifeSteal because riot things
                        words[i] = word.replace(word.match(/\@.+?\@/g), (item.effects['LifeSteal']).toString())
                        continue;
                    }

                    let key = word.match(/(?<=\@).+?(?=\@)/g)[0].toLowerCase(); // Turns '@TooltipBonusAS@' into 'tooltipbonusas'
                    key = hash(key).toString(16);
                    key = key.padStart(8, '0'); // Sometimes hash has the correct numbers but needs more '0's in front because they need to have a length of 8

                    key = `{${key}}` // Turns '5100c273' into '{5100c273}', which is needed to find value of the hashed version of the key '@TooltipBonusAS@'
                    if (item.effects[key]) word = word.replace(word.match(/\@.+?\@/g), (item.effects[key]).toString()) // replaces '@TooltipBonusAS@%' with '50%'
                    words[i] = word;
                } else if (word.includes('%i:scale')) {
                    words.splice(i, 1);
                    i--;
                }
            }
            return words.join(' ');
        }
        let duh = checkIfWordsAreSpecial();
        item.desc = duh;
        // }
    }
    // Now, filteredItems should only contain Set 6 items
    res.json(filteredItems);
};



module.exports = {
    getAllItems
}
