import Controller from '@ember/controller';
import { action } from '@ember/object';
import Ember from 'ember';
import { service } from '@ember/service';

export default class GamesShowController extends Controller {
  @service store;
  @action
  setSign(model) {
    const signs = ['O', 'X'];
    let move_count = this.model.move_count;
    if (move_count >= 9) {
      Ember.set(document.getElementById('turn'), 'innerHTML', 'Tie Game');
      return;
    } else if (this.model.winner_id) {
      return;
    } else {
      let box_id = model.target.id;
      let sign = this.model.turn;
      let player1_moves = this.model.player1_moves;
      let player2_moves = this.model.player2_moves;
      let move = box_id.slice(-1);
      if (signs[move_count % 2] === 'X') {
        player2_moves.push(move);
      } else {
        player1_moves.push(move);
      }

      Ember.set(document.getElementById(box_id), 'innerHTML', sign);
      Ember.set(
        document.getElementById('turn'),
        'innerHTML',
        signs[move_count % 2] + ' Turn Now'
      );

      this.store.findRecord('game', this.model.id).then(function (tyrion) {
        tyrion.set('turn', signs[move_count % 2]);
        tyrion.set('move_count', move_count + 1);
        tyrion.set('player1_moves', player1_moves.sort());
        tyrion.set('player2_moves', player2_moves.sort());
        tyrion.save();
      });
    }
  }

  returnHome() {
    this.transitionToRoute('games.index');
  }

  restartGame() {
    this.store.findRecord('game', this.model.id).then(function (tyrion) {
      tyrion.set('turn', 'X');
      tyrion.set('move_count', 0);
      tyrion.set('player1_moves', []);
      tyrion.set('player2_moves', []);
      tyrion.save();
    });
    var objects = document.getElementsByClassName('box');
    for (var obj of objects) {
      Ember.set(obj, 'innerHTML', '');
      Ember.set(document.getElementById('turn'), 'innerHTML', 'Tic Tac Toe');
    }
  }
}
