Template.main.events({
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

Template.main.helpers({
  'posts': function () {
    return Posts.find({ $or: [ { createdBy: { $in: Meteor.user().profile.following}}, { createdBy: Meteor.userId()}]}, {sort: {createdAt: -1}});
  },
  'otherUsers': function () {
    return Meteor.users.find({ _id: {$ne: Meteor.userId()}});
  }
});

Template.registerHelper('formatDate', function (date) {
  return moment(date).format('MMMM D, YYYY, h:mm a')
});



Template.registerHelper('formatName', function (id) {
  if (Meteor.users.findOne({_id: id}).profile.name === Meteor.user().profile.name) {
    return 'you'} else {
      return Meteor.users.findOne({_id: id}).profile.name
    }
});

Template.registerHelper('buttonText', function (user) {
  var array = Meteor.user().profile.following;
  var x = this._id;
  if (array.indexOf(x) === -1) {
    return "You don't follow"
  } else {
    return 'You follow'
  }
});

Template.registerHelper('buttonType', function (user) {
  var array = Meteor.user().profile.following;
  var x = this._id;
  if (array.indexOf(x) === -1) {
    return 'success'
  } else {
    return 'danger'
  }
});

Template.registerHelper('messageType', function (message) {
  var x = this._id;
  var y = Posts.findOne({_id: this._id}).createdBy;
  if (y === Meteor.userId()) {
    return 'ownPost'
  } else {
    return 'otherPost'
  }
});
