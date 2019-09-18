$(document).ready(function() {

    $('.signinbutton').click(function() {
        var usernameSI = $('#usernameSI').val();
        var passwordSI = $('#passwordSI').val();
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/users?email=${usernameSI}&password=${passwordSI}`,


            data: {
                username: usernameSI,
                password: passwordSI,
            },

            success: function(response) {
                if (response.length) {
                    $('.signInSuccess').html('Success!!!');
                    localStorage.setItem('username', usernameSI);
                    window.location.assign('.../ndex.html');
                } else {
                    $('.signInSuccess').html('Username or Password Incorrect');
                }
            },
        });
    });

});