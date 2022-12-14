import EmberRouter from '@ember/routing/router';
import config from 'tic-tac-toe-client/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('players');
  this.route('index', { path: '/' });
  this.route('games', function () {
    this.route('show', { path: '/:id' });
    this.route('index', { path: '/' });
  });
});
