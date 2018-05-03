$(function() {
    $(".delBurger").on("click", function(){
        var id = $(this).data("burgerid");
  

    $.ajax("/api/devour/" + id, {
        type: "PUT", 
        }).then(function() {
    location.reload();
    })
})



    $(".createBurger").on("click", function(){
        var newBurger = $('#newBurger').val().trim();
        $.post('/api/burger', {burger: newBurger}, function(data) {
            if(data){
                location.reload();
            }
        })
    })









})