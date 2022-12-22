import Controller from '@ember/controller';
import { action } from '@ember/object';
import Ember from 'ember';
import { alias } from '@ember/object/computed';
import { service } from '@ember/service';

export default class GamesShowController extends Controller {
  @service store;
  @action
  setSign(model) {
    const signs = ['O', 'X'];
    let box_id = model.target.id;
    let sign = this.model.turn;
    let move_count = this.model.move_count;
    let players = this.model.plays;

    Ember.set(document.getElementById(box_id), 'innerHTML', sign);

    this.store.findRecord('game', this.model.id).then(function (tyrion) {
      tyrion.set('turn', signs[move_count % 2]);
      tyrion.set('move_count', move_count + 1);
      tyrion.save();
    });
  }

  addGame() {
    this.store
      .createRecord('game', {
        winner_id: null,
        move_count: 0,
        turn: 'X',
      })
      .save();
  }
}
