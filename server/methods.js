Meteor.methods({
  'changeStatus': function (x) {
    var array = Meteor.user().profile.following;
    if (array.indexOf(x) === -1) {
      Meteor.users.update( { _id: Meteor.userId() }, { $push: {'profile.following': x}})
    } else {
      Meteor.users.update( { _id: Meteor.userId() }, { $pull: {'profile.following': x}})
    }
  }
});

Meteor.publish('posts', function () {
  return Posts.find({});
});

Meteor.publish('users', function () {
  return Meteor.users.find({});
});
