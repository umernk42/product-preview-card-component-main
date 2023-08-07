const image = document.querySelector('img');

const addMsg = document.getElementById('addMsg');
const addBtn = document.getElementById('cartBtn');

function showMsg(){
    addMsg.style.opacity = 1;
    console.log('hello');
    setTimeout(() => {
        addMsg.style.opacity = 0;
    }, 1000); // 2 seconds delay

}

addBtn.addEventListener('click', showMsg);

window.addEventListener('resize',(e) => {
    if(window.innerWidth > 992){
        image.src = 'images/image-product-desktop.jpg';
    }
    else{
        image.src = 'images/image-product-mobile.jpg';
    }
});