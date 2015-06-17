import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  name: attr('string'),
  type: attr('string'),
  subtype: attr('string'),
  comments: DS.hasMany('comment', {async: true})
});
