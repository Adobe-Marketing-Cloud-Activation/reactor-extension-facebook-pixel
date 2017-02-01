'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var fbq = require('../helpers/getFbQueue');

  fbq('track', 'ViewContent', settings);
  logger.log('Queue command: fbq("track", "ViewContent", ' + JSON.stringify(settings) + ').');
};
