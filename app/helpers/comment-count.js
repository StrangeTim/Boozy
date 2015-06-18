
export default Ember.HTMLBars.makeBoundHelper(function(drink) {
  return drink[0].get('comments').get('length');
});
