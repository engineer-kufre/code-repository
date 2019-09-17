$(document).ready(function() {
    $('signupSubBtn').click(function() {
        const fullname = $('#fullname').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const email = $('#email').val();
        if (!fullname || !username || !password || !email) {
            $('.message').html('Please fill in missing details');
            return;
          }
          $.ajax({
            method: 'GET',
            url: `http://localhost:3000/users?email=${email}`,
            data: {
              email,
            },
            success: function(response) {
              if (response.length) {
                $('.message').html('User already exist');
              } else {
                $.ajax({
                  method: 'POST',
                  url: 'http://localhost:3000/users',
                  data: {
                    fullname,
                    username,
                    email,
                    password,
                  },
                  success: function() {
                    $('.message').html('Success!!!');
                  },
                });
              }
            },
          });
    });
});