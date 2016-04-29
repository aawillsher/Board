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
