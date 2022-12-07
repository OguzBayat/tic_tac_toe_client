import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class PlayersRoute extends Route {
  @service store;

  async model() {
    return this.store.findAll('player');
  }
}
