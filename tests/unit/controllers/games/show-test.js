import { module, test } from 'qunit';
import { setupTest } from 'tic-tac-toe-client/tests/helpers';

module('Unit | Controller | games/show', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:games/show');
    assert.ok(controller);
  });
});
