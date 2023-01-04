import Controller from '@ember/controller';
import { action } from '@ember/object';
import Ember from 'ember';
import { service } from '@ember/service';

export default class GamesIndexController extends Controller {
  @service store;
  @action
  addGame() {
    let newGame = this.store.createRecord('game', {
      winner_id: null,
      move_count: 0,
      turn: 'X',
    });
    newGame.save();
    this.transitionToRoute('games.index');
  }
}
