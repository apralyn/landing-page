let sliderImages = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    //clear all images
reset = () => {
    for(let i = 0; i < sliderImages.length; i++){
        sliderImages[i].style.display = 'none';
    }
}

//init slider
startSlide = () => {
    reset();
    sliderImages[0].style.display = 'block'; //set block to show
}

//show previous  
function slideLeft() {
    reset();
    sliderImages[current - 1].style.display = 'block'; //block to show
    current--; 
}

//show next
slideRight = () => {
    reset();
    sliderImages[current + 1].style.display = 'block';
    current++; 
}

//Left arrow click
arrowLeft.addEventListener('click', () => {
    if(current === 0){
        current = sliderImages.length;
    }
    slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', () => {
    if(current === sliderImages.length - 1){
        current = -1;
    }
    slideRight();
});

startSlide();