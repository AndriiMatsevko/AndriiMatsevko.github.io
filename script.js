$('#en').click(function() {
    if (!$('#en').hasClass('active')) {
        $('#en').addClass('active');
        $('#ua').removeClass('active');
        $('#ru').removeClass('active');
        lightShock();
        setTimeout(changeLanguage, 150, 'stringEN.xml');
        
    }
});
$('#ua').click(function() {
    if (!$('#ua').hasClass('active')) {
        $('#en').removeClass('active');
        $('#ua').addClass('active');
        $('#ru').removeClass('active');
        lightShock();
        setTimeout(changeLanguage, 150, 'stringUA.xml');
    }
});
$('#ru').click(function() {
    if (!$('#ru').hasClass('active')) {
        $('#en').removeClass('active');
        $('#ua').removeClass('active');
        $('#ru').addClass('active');
        lightShock();
        setTimeout(changeLanguage, 150, 'stringRU.xml');
    }
});
$('#personal-paper').click(function() {
    $('#personal-information-block').css('display', 'block');
    $('#personal-information-block').css('animation', 'blockappear 1s ease');
});

$('#skills-paper').click(function() {
    $('#technical-skills-block').css('display', 'block');
    $('#technical-skills-block').css('animation', 'blockappear 1s ease');
});

$('#soft-skills-paper').click(function() {
    $('#soft-skills-block').css('display', 'block');
    $('#soft-skills-block').css('animation', 'blockappear 1s ease');
});
$('#language-paper').click(function() {
    $('#language-skills-block').css('display', 'block');
    $('#language-skills-block').css('animation', 'blockappear 1s ease');
});
$('#portfolio-paper').click(function() {
    window.open('works/works.html', '_blank');
});

$('.close-button').click(function() {
    $(this).parent().css('animation', 'blockhide .5s ease');
    setTimeout(function() {
        $('.close-button').parent().css('display', 'none');
    }, 500);
});

function lightShock() {
    $('#light-shock').css('display', 'block');
    $('#light-shock').css('animation', 'lightshock .5s ease');
    setTimeout(function() {
        $('#light-shock').css('display', 'none');
    }, 500);
}

function changeLanguage(URL) {

    $(function() {
        $.ajax({    
            type: "GET",
            url: URL,
            dataType: "xml",
            success: function(xml) {

                for (var i = 1; i <= $('*', $(xml).find('strings')).length; i++) {
                    $('#s' + i).html($(xml).find('s' + i).text());
                }
            }
        });
    });
}



