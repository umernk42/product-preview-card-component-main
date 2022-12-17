const image = document.querySelector('img');

window.addEventListener('resize',(e) => {
    if(window.innerWidth > 576){
        image.src = 'images/image-product-desktop.jpg';
    }
    else{
        image.src = 'images/image-product-mobile.jpg';
    }
});