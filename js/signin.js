$(document).ready(function() {
    $('.signinbutton').click(function() {
        const usernameSI = $('#usernameSI').val();
        const passwordSI = $('#passwordSI').val();
        $.ajax({
            method: 'GET',
            url: `http://localhost:3000/users?username=${usernameSI}&password=${passwordSI}`,
            data: {
                username: usernameSI,
                password: passwordSI,
            },
            success: function(response) {
                if (response.length) {
                    $('.signInSuccess').html('Success!!!');
                    localStorage.setItem('username', usernameSI);
                    window.location.assign('.../index.html');
                } else {
                    $('.signInSuccess').html('Username or Password Incorrect');
                }
            },
        });
    });

});