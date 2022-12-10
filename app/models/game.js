import Model, { attr, hasMany } from '@ember-data/model';

export default class GameModel extends Model {
  @attr('number') move_count;
  @attr('string') turn;
  @hasMany('play') plays;
}
