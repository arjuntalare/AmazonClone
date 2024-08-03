const imgs = document.querySelectorAll('.image-item');
const slideBtnLeft = document.querySelector('.left-btn');
const slideBtnRight = document.querySelector('.right-btn');

console.log(imgs.length - 1)

let startSlider = 0
let endSlider = (imgs.length - 1) * 100  // 700

slideBtnLeft.addEventListener("click", handleLeftBtn)

function changeslide(){
    imgs.forEach(element => {
        element.style.transform = `translateX(${startSlider}%)`;
    })
}

function handleLeftBtn() {
    if (startSlider < 0) {
        startSlider = startSlider + 100;
    }
    changeslide();
}

slideBtnRight.addEventListener("click", handleRightBtn)

function handleRightBtn() {
    if (startSlider >= -endSlider + 100) {
        startSlider = startSlider - 100;
    }
    changeslide();
}
function renderSlideAuto() {

    if (startSlider >= -endSlider + 100) {
        handleRightBtn()
    }
    else {
        startSlider = 0;
    }
}
setInterval(renderSlideAuto, 7000);
