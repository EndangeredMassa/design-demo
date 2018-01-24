import { test } from 'qunit';
import a11yAudit from 'ember-a11y-testing/test-support/audit';
import moduleForAcceptance from '../../tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | accessibility smoke');

// test('visiting /docs', function(assert) {
//   visit('/docs');

//   a11yAudit();
//   andThen(() =>
//     assert.ok(true, 'no a11y errors found!')
//   );
// });

test('visiting /docs/x-button', function(assert) {
  visit('/docs/x-button');

  let options = {
    rules: {
      'color-contrast': {
        enabled: false
      }
    }
  };

  a11yAudit(options);

  andThen(() =>
    assert.ok(true, 'no a11y errors found!')
  );
});
