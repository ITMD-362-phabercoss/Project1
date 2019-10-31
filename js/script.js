/* when filling in an invalid letter or word in email form and clicking submit, it will show up red and say to enter a valid email address*/ 
(function() {
  var submit_button = document.querySelector('#submit');
  var newsletter = document.querySelector('#form');
  var email_input = document.querySelector('#user_email');

  function equal(value, condition) {
    return value === condition;
  }

  function validate(value, check, condition) {
    if (equal(typeof(check.test), 'function')) {
      return check.test(value);
    }
    else if (equal(typeof(check), 'function')) {
      return check(value, condition);
    }
    else {
      return false;
    }
  }

  function check_email(value) {
    var email = value;
    return validate(email, /^[^@\s]+@[^@\s]+$/g);
  }

  newsletter.addEventListener('keyup', function() {
    var email_value = email_input.value;
    if (check_email(email_value)) {
      submit_button.removeAttribute('disabled');
    }
  });
}());
