'use strict';

module.exports = function(/* environment, appConfig */) {
  let ENV = {};

  ENV['ember-a11y-testing'] = {
    componentOptions: {
      axeCallback: function() {
        console.log('axeCallback: ', ...arguments);
      },
      axeOptions: {
        rules: {
          'color-contrast': {
            enabled: false
          },
          'label': {
            enabled: false
          },
          'list': {
            enabled: false
          }
        }
      },
    }
  };

  return ENV;
};
