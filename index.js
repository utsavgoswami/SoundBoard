$("img").click(function() { 
    const audio = new Audio('sounds/' + $(this).attr('alt') + '.mp3');
    audio.play();
})