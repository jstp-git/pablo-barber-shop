const Gallery = document.getElementById("galleryDiv")


function changeColor(event){
console.log(event)

event.target.style.opacity = 1
event.target.style.animationName = "slideup"
event.target.style.animationDuration= "1s"

}

galleryDiv.addEventListener("mousemove",changeColor);


