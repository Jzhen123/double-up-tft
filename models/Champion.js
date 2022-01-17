const { Model } = require('objection');

class Champion extends Model {
  static get tableName() {
    return 'champion';
  }
}

module.exports = Champion;