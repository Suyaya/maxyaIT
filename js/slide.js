showSlides(0);

var firstDot = document.querySelector('.first-dot');
var secondDot = document.querySelector('.second-dot');
var thirdDot = document.querySelector('.third-dot');


firstDot.addEventListener('click', function(){
    showSlides(0);
});
secondDot.addEventListener('click', function(){
    showSlides(1);
});
thirdDot.addEventListener('click', function(){
    showSlides(2);
});

function showSlides(n) {
    var slides = document.querySelectorAll('.slide');
    console.log(slides);
    var dots = document.querySelectorAll('.dot');
    for(let i=0; i<slides.length; i++) {
            slides[i].style.display = "none" ;
        }
    for(let i=0; i<dots.length; i++) {
            dots[i].className = dots[i].className.replace(" active", "");
        }
    slides[n].style.display = "block";
    dots[n].className += " active";
}


