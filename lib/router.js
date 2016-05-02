Router.configure({
  layoutTemplate: 'layout'
});

Router.map(function() {
  this.route('home', {
    path: '/',
    template: 'home'
  });

  this.route('register', {
    path: '/register',
    template: 'register'
  });

  this.route('login', {
    path: '/login',
    template: 'login'
  });

  this.route('main', {
    path: '/main',
    template: 'main',
    subscriptions: function () {
      return [
        Meteor.subscribe('posts'),
        Meteor.subscribe('users')
      ]
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    }
  });

  this.route('users', {
    path: '/users',
    template: 'users',
    subscriptions: function () {
      return [
        Meteor.subscribe('posts'),
        Meteor.subscribe('users')
      ]
    },
    onBeforeAction: function () {
      var currentUser = Meteor.userId();
      if (currentUser) {
        this.next();
      } else {
        this.render('home');
      }
    }
  });

});
