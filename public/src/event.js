$(document).ready(function(){

    $('col-4-lg').hover(
        //trigger when mouse hover
        function(){
            $(this).animate({
                marginTop:"-=1%",
            },200);
        },

        //tigger when mouse out
        function(){
            $(this).animate({
                marginTop:"0%",
            },200);
        },

    );
});