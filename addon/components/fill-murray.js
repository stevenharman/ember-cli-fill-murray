import Ember from 'ember';
import layout from '../templates/components/fill-murray';

export default Ember.Component.extend({
  height: 100, // Default height and width
  width: 100,
  layout: layout,

  src: Ember.computed('height', 'width', function() {
    var base = 'http://www.fillmurray.com/';
    return base + this.get('width') + '/' + this.get('height');
  })
});
