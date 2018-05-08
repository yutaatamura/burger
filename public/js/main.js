$(document).ready(function() {

    $(".delBurger").on("click", function(){
        var id = $(this).data("burgerid");
  

    $.ajax("burgers/api/devour/" + id, {
        type: "POST"
        }).then(function() {
    console.log("updated the ID " + id)
    location.reload();
    })
})



    $(".createBurger").on("click", function(){
        var newBurger = $('#newBurger').val().trim();
        $.post('burgers/api/create', {burger: newBurger}, function(data) {
            if(data){
                location.reload();
            }
        })
    })










})