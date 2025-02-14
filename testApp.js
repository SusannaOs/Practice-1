let sliderImages = document.querySelectorAll(".slide"),
  arrowLeft = document.querySelector("#arrow-left"),
  arrowRight = document.querySelector("#arrow-right"),
  current = 0;

/*Hamburger Menu*/
function burgerMenu(){
    var x = document.getElementById("nav-links");
    if(x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
/*When resizing the window, reset nav-links*/
window.addEventListener("resize", resetNavs);

function resetNavs(){
    var b = document.querySelector(".burger");
    var x = document.getElementById("nav-links");
    var w = window.innerWidth;
    b.classList.remove("change");
    if(w > 850){
        x.style.display = "block";
    }else{
        x.style.display = "none";
    }
}
/*Burger icon animation*/
function menuAnim(x){
    x.classList.toggle("change");
}

//clears all images
function reset(){
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

//Initializes slider
function startSlide(){
    reset();
    sliderImages[0].style.display = 'block';
}

//Show prev
function slideLeft(){
    reset();
    sliderImages[current-1].style.display = 'block';
    current--;
}

//show next
function slideRight(){
    reset();
    sliderImages[current+1].style.display = 'block';
    current++;
}

// Left arrow click
arrowLeft.addEventListener('click', function() {
    if (current === 0) {
      current = sliderImages.length;
    }
    slideLeft();
  });
  
//event Listener, right arrow click
arrowRight.addEventListener('click', function(){
    if(current === sliderImages.length-1){
        current = -1;
    }
    slideRight();
});

startSlide();