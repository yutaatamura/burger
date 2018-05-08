$(document).ready(function() {

    $(".delBurger").on("click", function(){
        var id = $(this).data("burgerid");
  

    $.ajax("/api/devour/" + id, {
        type: "PUT"
        }).then(function() {
    console.log("updated the ID " + id)
    location.reload();
    })
})



    $(".createBurger").on("click", function(){
        var newBurger = $('#newBurger').val().trim();
        $.post('/api/create', {burger: newBurger}, function(data) {
            if(data){
                location.reload();
            }
        })
    })










})