const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const imageListDom = document.querySelector('.imageList');

let sliderDom ='';

for (let i = 0; i < imagesArray.length; i++) {

    const myImgWrapper = `<div class="wrapper">
                            <img class="img" src="${imagesArray[i]}" alt="">
                        </div>`;

    sliderDom += myImgWrapper;
}

imageListDom.innerHTML = sliderDom;

const wrapperDom = document.getElementsByClassName('wrapper');
console.log(wrapperDom)

let currentImage = 0;

wrapperDom[currentImage].classList.add('block');

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');


nextButton.addEventListener('click',
    function() {
       
        if (currentImage < wrapperDom.length - 1) {
            wrapperDom[currentImage].classList.remove('block');
            currentImage++;
            wrapperDom[currentImage].classList.add('block');
        } else {
            wrapperDom[0].classList.add('block');
            wrapperDom[wrapperDom.length - 1].classList.remove('block');
            currentImage = 0;
        }
    }
); 

prevButton.addEventListener('click',
    function() {
        if (currentImage > 0) {
            wrapperDom[currentImage].classList.remove('block');
            currentImage--;
            wrapperDom[currentImage].classList.add('block');
        } else {
            wrapperDom[wrapperDom.length - 1].classList.add('block');
            wrapperDom[currentImage].classList.remove('block');
            currentImage = wrapperDom.length - 1;
        }
    }
); 