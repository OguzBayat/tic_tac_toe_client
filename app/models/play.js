import Model, { attr, belongsTo } from '@ember-data/model';

export default class PlayModel extends Model {
  @belongsTo('game') game;
  @belongsTo('player') player;
}
