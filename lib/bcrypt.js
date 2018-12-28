const bcrypt = require("bcrypt");
const Promise = require("bluebird");

let initialized = false;

module.exports = function(options) {
  const salt = options.salt || 12;

  return {
    hash,
    compare,
  };

  /**
   * @param {string} text
   * @return {Promise<string>}
   */
  function hash(text) {
    return new Promise((resolve, reject) => {
      bcrypt.hash(text, salt, (err, encrypted) => {
        if (err) return reject(err);
        resolve(encrypted);
      });
    });
  }

  /**
   *
   * @param {*} data
   * @param {string} encrypted
   * @return {Promise<boolean>}
   */
  function compare(data, encrypted) {
    return new Promise((resolve, reject) => {
      bcrypt.compare(data, encrypted, (err, match) => {
        if (err) return reject(err);
        resolve(match);
      });
    });
  }
};
