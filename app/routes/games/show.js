import Route from '@ember/routing/route';
import { service } from '@ember/service';

export default class GamesShowRoute extends Route {
  @service store;

  model(params) {
    return this.store.findRecord('game', params.id);
  }

  setupController(controller, model) {
    console.log(' model ', model.turn);
    controller.setProperties(model);
    console.log('cont ', controller.isExpanded);
  }
}
