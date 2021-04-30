// configure carousel slider 

$('.carousel').carousel({
    interval: 6000,
    pause: 'hover'
});

/*


// video auto play
$(function(){
    $('.video').click(function(){
        var themodal = $(this).data("target"),
        videoSRC = $(this).attr("data-video"),
        videoSRCauto = videoSRC + "https://www.youtube.com/watch?v=V1Pl8CzNzCw&list=PL8hNzTE3OJCi9ajut39NZadf1eUIsr37p&index=2";

        $(themodal + 'iframe').attr('src', videoSRCauto);
        $(themodal + 'button.close').click(function(){
            $(themodal + 'iframe').attr('src', videoSRC);
        });
    });
});


*/


