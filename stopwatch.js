$(document).ready(function(){
    $(document).on('keydown', function(e){
        if(e.which==83) startStop()
        if(e.which==82) reset()
        if(e.which==84) splitTime()
    })

    $('.btn').on('click', function(){
        $(this).find('.btntop').animate({
            'margin-top':'0px'
        },50, function(){
            $(this).animate({
                'margin-top':'-10px'  
            }, 50);
        });
    })

    $('.startstop').on('click', startStop );
    $('.reset').on('click', reset)
    $('.time').on('click', splitTime)

    function startStop(){
        pause=!pause
    }
    function reset(){
        pause=true;
        duration=split=0; 
        $('.times').html("")
    }
    function splitTime(){
        var time = (duration/1000).toFixed(2)
        split++;
        $('.times').prepend("Split "+split+": "+time+"<br>")
    }
    var duration = 0
    var pause = true
    var angle = 0
    var split=0
    var timer = setInterval(function(){
        duration = !pause ? duration+=10 : duration
        var time = (duration/1000).toFixed(2)
        angle = ((time*100)%100)*3.6
        $('.hand').css({'transform' : 'rotate('+ angle +'deg)'});
        $('.timer').html(time)
    },10);    


})