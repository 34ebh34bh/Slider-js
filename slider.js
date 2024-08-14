
let offset = 0;
const sliderLine = document.querySelector('.line-slider');

document.querySelector('.slider-next').addEventListener('click', function(){
    offset = offset + 128;
    if(offset > 384) {
        offset = 0;
    }
    sliderLine.style.left = -offset + 'px';
});

document.querySelector('.slider-prev').addEventListener('click', function(){
    offset = offset - 128;
    if(offset < 0) {
        offset = 384;
    }
    sliderLine.style.left = -offset + 'px';
});
