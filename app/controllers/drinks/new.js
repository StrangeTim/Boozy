import Ember from "ember";

var NewDrinkController = {
  actions: {
    addDrink: function() {
      var newDrink = this.store.createRecord('drink', {
        name: this.get('name'),
        type: this.get('type'),
        subtype: this.get('subtype')
      });
      newDrink.save();
      this.set('name', "");
      this.set('type', "");
      this.set('subtype', "");
      this.transitionToRoute('drinks');
    }
  }
};

export default Ember.Controller.extend(NewDrinkController);
