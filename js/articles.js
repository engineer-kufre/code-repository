$(document).ready(function() {
    $('.newArticleBtn').click(function() {
        const title = $('#title').val();
        const date = $('#date').val();
        const text = $('#text').val();
        $.ajax({
            method: 'POST',
            url: 'http://localhost:3000/articles',
            data: {
                title,
                date,
                text,
            },
            success: function() {
                $('submitsuccess').html('Article Posted');
            }
        });
    });
});