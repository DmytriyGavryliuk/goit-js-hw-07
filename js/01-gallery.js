import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const gallery = document.querySelector(".gallery");

const imageList = galleryItems.map(
    ({ preview, original, description }) => {
      return `<div class="gallery__item"> 
            <a class="gallery__link" href="${original}"> 
            <img 
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"  
    />
    </a>
    </div>`;
    }).join('');

gallery.insertAdjacentHTML('afterbegin', imageList);


gallery.addEventListener("click", selectImg);

function selectImg(event) {
    event.preventDefault();
    if (event.target.nodeName !== "IMG")
        return; 
}




