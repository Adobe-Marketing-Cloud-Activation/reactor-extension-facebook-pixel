'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var fbq = require('../helpers/getFbQueue');

  fbq('track', 'AddToWishlist', settings);
  logger.log('Queue command: fbq("track", "AddToWishlist", ' + JSON.stringify(settings) + ').');
};
