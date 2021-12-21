var ref = $('#models');        
var popup = $('.popup');
var popupState = false;
popup.hide();

ref.click(function(){
    if(popupState){
        popup.hide();
    }else{
        popup.show();
        var popper = new Popper(ref,popup,{
            placement: 'bottom',
            onCreate: function(data){
                    console.log(data);
            },
            modifiers: {
                    flip: {
                            behavior: ['left', 'right', 'top','bottom']
                    },
                    offset: { 
                            enabled: true,
                            offset: '0,10'
                    }
            }
        });
    }
    popupState=!popupState;
});