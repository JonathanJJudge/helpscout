
var debug = require('debug')('helpscout:customers');
var defaults = require('defaults');
var request = require('superagent');

/**
 * Expose `Customers`.
 */

module.exports = Customers;

/**
 * Initialize a new helpscout `Customers` client with an
 * `apiKey` and `mailboxId`.
 *
 * @param {String} apiKey
 * @param {String} mailboxId
 */

function Customers (apiKey) {
  if (!(this instanceof Customers)) return new Customers(apiKey);
  if (!apiKey) throw new Error('Customers requires an apiKey.');
  this.apiKey = apiKey;
}

/**
 * List customers.
 *
 * @param {Object} options
 *   @param {Number} page
 * @param {Function} callback
 */

Customers.prototype.getCustomer = function (options, callback) {
  if (typeof options === 'function') {
    callback = options;
    options = {};
  }
  options = defaults(options, { status: 'all', page: 1, tag: null });
  debug('requesting customers [page %d] ..', options.page);
  request
    .get('https://api.helpscout.net/v1/customers.json')
    .auth(this.apiKey, 'X')
    .query(options)
    .end(function (err, res) {
      if (err) return callback(err);
      if (res.statusCode !== 200) return callback(new Error('Bad response: ' + res.text));
      debug('got %d customers for page %d', res.body.items.length, res.body.page);
      return callback(null, res.body);
    });
};