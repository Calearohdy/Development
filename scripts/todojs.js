//Check off Todos 
//if li is gray turn black else turn gray
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");
});

//click on X to delete
$("ul").on("click", "span", function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})

$("input[type='text").keypress(function(event) {
    if (event.which === 13) {
        var todoText = ($(this).val()); //grabbing new text from input
        $(this).val("");
        //create a new li
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + todoText + "</li>")
    }
})

$(".fa-plus").click(function() {
    $("input[type='text").fadeToggle("faster", "linear");
})