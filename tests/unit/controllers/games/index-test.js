import { module, test } from 'qunit';
import { setupTest } from 'tic-tac-toe-client/tests/helpers';

module('Unit | Controller | games/index', function (hooks) {
  setupTest(hooks);

  // TODO: Replace this with your real tests.
  test('it exists', function (assert) {
    let controller = this.owner.lookup('controller:games/index');
    assert.ok(controller);
  });
});
