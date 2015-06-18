import Ember from 'ember';

var DrinkController = {
  isEditing: false,
  actions: {
    edit: function() {
      this.set('isEditing', true);
    },
    doneEditing: function() {
      this.set('isEditing', false);
    },
    delete: function() {
      this.get('model').destroyRecord();
      this.transitionToRoute('drinks');
    }
  }
};

export default Ember.ObjectController.extend(DrinkController);
