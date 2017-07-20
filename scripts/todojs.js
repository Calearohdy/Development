//Check off Todos 
//if li is gray turn black else turn gray
$("li").click(function() {
    $(this).toggleClass("completed");
});

//click on X to delete
$("span").click(function() {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    event.stopPropagation();
})