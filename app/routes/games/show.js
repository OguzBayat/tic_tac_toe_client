import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class GamesShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('game', params.id);
  }
}
