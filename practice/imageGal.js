var i1 = document.getElementById("image");
console.log(i1);

i1.addEventListener("mouseover", function(){
	i1.classList.add("selected");
});

i1.addEventListener("mouseout", function(){
	i1.classList.remove("selected");
});