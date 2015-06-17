import DS from 'ember-data';

var attr = DS.attr;

export default DS.Model.extend({
  drink: DS.belongsTo('drink', {async: true}),
  user: attr('string'),
  text: attr('string')
});
