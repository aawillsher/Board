Template.users.events({
  'click .logout': function (event) {
    toastr.success('You have been logged out');
    Meteor.logout();
    Router.go('/');
    return false;
  },
  'click .change':function (event) {
    var x = this._id;
    Meteor.call('changeStatus', x);
  },
  'click .about': function (event) {
    Modal.show('aboutModal');
  }
});

Template.users.helpers({
  //'posts': function () {
  //  return Posts.find({ $or: [ { createdBy: { $in: Meteor.user().profile.following}}, { createdBy: Meteor.userId()}]}, {sort: {createdAt: -1}});
  // },
  'otherUsers': function () {
    return Meteor.users.find({ _id: {$ne: Meteor.userId()}});
  }
});
