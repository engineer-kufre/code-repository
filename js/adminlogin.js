$(document).ready(function() {
    $('.mybutton').click(function(event) {
        event.preventDefault();
        const username = $('#username').val();
        const password = $('#password').val();
        if (!password || !username) {
            $('.loginSuccess').html('Please fill in missing details');
            return;
          }
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/admin?username=${username}&password=${password}`,
            data: {
                username,
                password,
            },
            success: function(response) {
                if (response.length) {
                    $('.loginSuccess').html('Success!!!');
                    localStorage.setItem('username', username);
                    window.location.assign('.../add_article.html');
                } else {
                    $('.loginSuccess').html('Username or Password Incorrect');
                }
            },
        });
    });

});