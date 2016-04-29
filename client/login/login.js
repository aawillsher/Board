Template.login.events ({
  'submit .login': function (event) {
    var email = event.target.email.value;
    var password = event.target.password.value;
    event.preventDefault();
    Meteor.loginWithPassword(email, password, function (error) {
      if (error) {
        toastr.warning('Error during log-in');
      } else {
        toastr.success('Login successful');
        Router.go('main');
      }
    });
  }
})
