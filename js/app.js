$(document).ready(function() {

    //What we do Section

    //Design

    $(document).ready(function(){
        $("#design-img").click(function(){
            $("#design-img").slideDown('1500').hide('1000');
            $("#design").show('1500');
        });

        $("#design").click(function(){
            $("#design").slideUp('1500');
            $("#design-img").slideDown('1500')
        })
    });

    // Development Section


})