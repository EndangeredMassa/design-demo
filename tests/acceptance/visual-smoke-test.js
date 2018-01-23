import { test } from 'qunit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | visual smoke test.js');

test('visiting /docs', function(assert) {
  assert.expect(0);

  visit('/docs');
  percySnapshot('/docs');

  visit('/docs/x-button');
  percySnapshot('/docs/x-button');
});
