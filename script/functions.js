//Parallax
var top;

$(window).scroll(function(){
    var wScroll = $(this).scrollTop();

      if(wScroll > $('.the-whole').offset().top - $(window).height()){

        let offset = Math.min(0,wScroll - $('.the-left').offset().top + $(window).height() - 400);
        $('.the-left').css({'transform': 'translate(' + offset + 'px, '+ Math.abs(offset * 0.2) + 'px)'});

        $('.the-right').css({'transform': 'translate(' + Math.abs(offset) + 'px, '+ Math.abs(offset * 0.2) + 'px)'});

      }

      if(wScroll > $('.the-entire').offset().top - $(window).height()){

        let offset = Math.min(0,wScroll - $('.the-chip').offset().top + $(window).height() - 400);
        $('.the-sim').css({'transform': 'translate(' + offset + 'px, '+ Math.abs(offset * 0.2) + 'px)'});

        $('.the-chip').css({'transform': 'translate(' + Math.abs(offset) + 'px, '+ Math.abs(offset * 0.2) + 'px)'});

      }

    });


