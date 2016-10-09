import { Meteor } from 'meteor/meteor';
import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';
import './task.html';

Template.task.helpers({
  isOwner() {
    return this.owner === Meteor.userId();
  },
});

Template.task.events({
  'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    Meteor.call('tasks.setChecked', this._id, !this.checked);
  },
  'click .delete'() {
      console.log('this._id = ' + this._id);
      console.log('this text = ' + this.text);
      console.log('this createedAt = ' + this.createdAt);
      console.log('this username = ' + this.username);
    Meteor.call('tasks.remove', this._id);
  },
});
