import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('roi-cell-class', 'helper:roi-cell-class', {
  integration: true
});

// Replace this with your real tests.
test('it renders', function(assert) {
  this.set('inputValue', '1234');

  this.render(hbs`{{roi-cell-class inputValue}}`);

  assert.equal(this.$().text().trim(), '1234');
});
