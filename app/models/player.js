import Model, { attr, hasMany } from '@ember-data/model';

export default class PlayerModel extends Model {
  @attr('string') name;
  @attr('string') sign;
  @hasMany('play') plays;
}
