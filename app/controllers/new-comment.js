import Ember from "ember";

var NewCommentController = {
  needs: ['drink'],
  actions: {
    addComment: function() {
      var newComment = this.store.createRecord('comment', {
        user: this.get('user'),
        text: this.get('text'),
      });
      newComment.save();

      var drink = this.get('controllers.drink.model');
      drink.get('comments').pushObject(newComment);
      this.set('user', "");
      this.set('text', "");
      drink.save();
    }
  }
};

export default Ember.Controller.extend(NewCommentController);
