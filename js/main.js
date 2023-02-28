const imagesArray = [
    'img/01.webp',
    'img/02.webp',
    'img/03.webp',
    'img/04.webp',
    'img/05.webp'
];

const imageListDom = document.querySelector('.imageList');

let sliderDom ='';

for (let i = 1; i < imagesArray.length; i++) {

    const myImgWrapper = `<div class="wrapper">
                            <img class="img" src="${imagesArray[i]}" alt="">
                        </div>`;

    sliderDom += myImgWrapper;
}

imageListDom.innerHTML = sliderDom;