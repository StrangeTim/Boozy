import Ember from "ember";

var NewCommentController = {
  needs: ['drink'],
  actions: {
    addComment: function() {
      var drink = this.get('controllers.drink.model');

      var newComment = this.store.createRecord('comment', {
        user: this.get('user'),
        text: this.get('text'),
      });

      newComment.save().then(function() {
        drink.get('comments').pushObject(newComment);

        drink.save().then(function() {
          drink.setProperties({
            user: '',
            text: ''
          });
        });
      });

      this.transitionToRoute('drinks');
    }
  }
};

export default Ember.Controller.extend(NewCommentController);
