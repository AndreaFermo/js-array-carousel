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

const boxNavDom = document.querySelector('.boxNav');

let inBoxDom ='';

for (let i = 0; i < imagesArray.length; i++) {

    const myImgWrapperSmall = `<div class="wrapperSmall">
                            <img class="img" src="${imagesArray[i]}" alt="">
                        </div>`;

    inBoxDom += myImgWrapperSmall;
}

boxNavDom.innerHTML = inBoxDom;

const wrapperDom = document.getElementsByClassName('wrapper');
console.log(wrapperDom)

const wrapperSmallDom = document.getElementsByClassName('wrapperSmall');
console.log(wrapperSmallDom)

let currentImage = 0;

wrapperDom[currentImage].classList.add('block');
wrapperSmallDom[currentImage].classList.add('closeUp');

const nextButton = document.querySelector('#next');
const prevButton = document.querySelector('#prev');


nextButton.addEventListener('click',
    function() {
       
        if (currentImage < wrapperDom.length - 1) {
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage++;
            wrapperDom[currentImage].classList.add('block');
            wrapperSmallDom[currentImage].classList.add('closeUp');
        } else {
            wrapperDom[0].classList.add('block');
            wrapperSmallDom[0].classList.add('closeUp');
            wrapperDom[wrapperDom.length - 1].classList.remove('block');
            wrapperSmallDom[wrapperDom.length - 1].classList.remove('closeUp');
            currentImage = 0;
        }
    }
); 

prevButton.addEventListener('click',
    function() {
        if (currentImage > 0) {
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage--;
            wrapperDom[currentImage].classList.add('block');
            wrapperSmallDom[currentImage].classList.add('closeUp');
        } else {
            wrapperDom[wrapperDom.length - 1].classList.add('block');
            wrapperDom[currentImage].classList.remove('block');
            wrapperSmallDom[wrapperDom.length - 1].classList.add('closeUp');
            wrapperSmallDom[currentImage].classList.remove('closeUp');
            currentImage = wrapperDom.length - 1;
        }
    }
); 



