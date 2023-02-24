let offset = 0;
const photoSlider = document.querySelector('.photo-slider');
const viewportWidth = document.body.clientWidth;



if (viewportWidth >= 1440) {
    document.querySelector('.button-right').addEventListener('click', function (){
        offset = offset + 298;
        if (offset > 1490) {
            offset = 0
        }
        photoSlider.style.right = offset + 'px';
    });
    
    
    document.querySelector('.button-left').addEventListener('click', function () {
        offset = offset - 298;
        if (offset < 0) {
            offset = 0
        }
        photoSlider.style.right = offset + 'px';
    }); 

} else if (viewportWidth >= 768) {
    document.querySelector('.button-right').addEventListener('click', function (){
        offset = offset + 368;
        if (offset > 3312) {
            offset = 0
        }
        photoSlider.style.right = offset + 'px';
    });
    document.querySelector('.button-left').addEventListener('click', function () {
        offset = offset - 368;
        if (offset < 0) {
            offset = 0
        }
        photoSlider.style.right = offset + 'px';
    });
} else {
    document.querySelector('.button-right').addEventListener('click', function (){
        offset = offset + 177;
        if (offset > 1593) {
            offset = 0
        }
        photoSlider.style.right = offset + 'px';
    });
    document.querySelector('.button-left').addEventListener('click', function () {
        offset = offset - 177;
        if (offset < 0) {
            offset = 0
        }
        photoSlider.style.right = offset + 'px';
    });
}
