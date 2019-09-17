$(document).ready(function() {
    // const username = $('#username').val;
    // const password = $('#password').val;
    $('.signinbutton').click(function() {
        const usernameSI = $('#usernameSI').val();
        const passwordSI = $('#passwordSI').val();
        $.ajax({
            method: 'GET',
            url: `http://http://localhost:3000/users?email=${usernameSI}&password=${passwordSI}`,
            data: {
                username: usernameSI,
                password: passwordSI,
            },
            success: function() {
                if (Response.length) {
                    $('.signinsuccess').html('Success!!!')
                }
            }
        })
    });
    
    
});