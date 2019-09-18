$(document).ready(function() {
    $('.signupSubBtn').click(function(event) {
        event.preventDefault();
        const fullname = $('#fullname').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const email = $('#email').val();
        if (!fullname || !username || !password || !email) {
            $('.signUpSuccess').html('Please fill in missing details');
            return;
          }
          $.ajax({
            method: 'GET',
            url: `http://localhost:3000/admin?email=${email}`,
            data: {
              email,
            },
            success: function(response) {
              if (response.length) {
                $('.signUpSuccess').html('User already exist');
              } else {
                $.ajax({
                  method: 'POST',
                  url: 'http://localhost:3000/admin',
                  data: {
                    fullname,
                    username,
                    email,
                    password,
                  },
                  success: function() {
                    $('.signUpSuccess').html('Success!!!');
                  },
                });
              }
            },
          });
    });
});