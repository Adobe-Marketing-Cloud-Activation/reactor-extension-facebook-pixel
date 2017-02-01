'use strict';

var logger = require('@turbine/logger');

module.exports = function(settings) {
  var fbq = require('../helpers/getFbQueue');

  var options = (settings.parameters || []).reduce(function(allParameters, parameter) {
    allParameters[parameter.key] = parameter.value;

    return allParameters;
  }, {});

  fbq('trackCustom', settings.name, options);
  logger.log(
    'Queue command: fbq("trackCustom", "' + settings.name + '", ' + JSON.stringify(options) + ').'
  );
};
