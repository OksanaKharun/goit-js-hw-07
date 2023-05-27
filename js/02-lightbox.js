import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryItemsUl = document.querySelector('.gallery');

const createItems = galleryItems.map(({ preview, original, description }) => {
  const galleryList =
    `<li class="gallery__item">
      <a class="gallery__link" href="${original}">
        <img class="gallery__image"
        src="${preview}" 
        alt="${description}" />
      </a>
    </li>`;
  return galleryList;
});
  
galleryItemsUl.insertAdjacentHTML('beforeend', createItems.join(''));

const gallery = new SimpleLightbox('.gallery a', { 
    captionDelay: 250,
    captionData: "alt",
    
});
console.log(lightbox)