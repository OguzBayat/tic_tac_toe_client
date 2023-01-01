import Model, { attr, hasMany } from '@ember-data/model';

export default class GameModel extends Model {
  @attr('number') move_count;
  @attr('string') turn;
  @attr('number') winner_id;
  @attr() player1_moves;
  @attr() player2_moves;
  @hasMany('play') plays;
}
