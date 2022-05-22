let sliderImage = document.querySelectorAll('.slide'),
    arrowLeft = document.querySelector('#arrow-left'),
    arrowRight = document.querySelector('#arrow-right'),
    current = 0;

    //clear all images
reset = () => {
    for(let i = 0; i < sliderImage.length; i++){
        sliderImage[i].style.display = 'none';
    }
}
//init slider
startSlider = () => {
    reset();
    sliderImage[0].style.display = 'block'; //set block to show
}

//show previous  
slideLeft = () => {
    reset();
    sliderImage[current - 1].style.display = 'block'; //block to show
    current--; 
}

//show next
slideRight = () => {
    reset();
    sliderImage[current + 1].style.display = 'block';
    current++; 
}

//Left arrow click
arrowLeft.addEventListener('click', () => {
    if(current === 0){
        current = sliderImage.length;
    }
    slideLeft();
});

//Right arrow click
arrowRight.addEventListener('click', () => {
    if(current === sliderImage.lenght - 1){
        current = -1;
    }
    slideRight();
});

startSlider();