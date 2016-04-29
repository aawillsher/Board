Template.register.events({
  'submit .register': function (event) {
    var email = event.target.email.value;
    var password = event.target.password.value;
    var name = event.target.name.value;
    event.preventDefault();

    Accounts.createUser ({
      email: email,
      password: password,
      profile: {
        following: [],
        name: name
      }
    }, function (error) {
      if (error) {
        toastr.warning('Error in registration');
      } else {
        Router.go('/main');
        toastr.success('Registration completed');
      }
    });

  }
});
