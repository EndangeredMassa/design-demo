import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('docs', function() {
    this.route('api', function() {
      this.route('class', { path: '/:class_id' });
    });

    this.route('x-button', { path: '/x-button'});
  });
});

export default Router;
