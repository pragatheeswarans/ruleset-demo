import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('create');
  this.route('view');
  this.route('list');
  this.route('edit', { path: '/edit/:rule_id' });
});

export default Router;
