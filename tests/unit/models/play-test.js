import { module, test } from 'qunit';
import { setupTest } from 'tic-tac-toe-client/tests/helpers';

module('Unit | Model | play', function (hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function (assert) {
    let store = this.owner.lookup('service:store');
    let model = store.createRecord('play', {});
    assert.ok(model);
  });
});
