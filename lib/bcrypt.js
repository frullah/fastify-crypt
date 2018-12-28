const bcrypt = require('bcrypt')

module.exports = {
  hash: bcrypt.hash,
  compare: bcrypt.compare,
};
