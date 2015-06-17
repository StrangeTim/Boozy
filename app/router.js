import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('home');
  this.resource('drinks', function() {   // alphabetical by name
    this.route('new');
    this.resource('drink', { path: ':drink_id' }, function() {
      this.resource('new-comment');
    });
  });
  // this.resource('drink-types', function() {
  //   this.resource('new-drink', {path: './drinks/new-drink'});
  // });
});

export default Router;
