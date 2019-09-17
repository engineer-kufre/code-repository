$(document).ready(function() {
    $('signupSubBtn').click(function() {
        const fullname = $('#fullname').val();
        const username = $('#username').val();
        const password = $('#password').val();
        const email = $('#email').val();
        if (!fullname || !username || !password || !email) {
            $('.errMessage').html('Please fill in missing details');
            return;
          }

    });
});