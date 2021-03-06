import Component from '@ember/component';
import layout from '../templates/components/x-button';

export default Component.extend({
  layout,
  tagName: 'button',
  classNames: 'x-button',

  click() {
    this.get('onClick')();
  }
});
