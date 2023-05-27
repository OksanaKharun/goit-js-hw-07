import { galleryItems} from './gallery-items.js';
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


galleryItemsUl.addEventListener('click', imgClick);

function imgClick(event){
    event.preventDefault();
    if(event.target.nodeName !== "IMG"){
        return;
    }
     const instance = basicLightbox.create(`<img src=
      "${event.target.dataset.source}"
       width="800" height ="600"/>`);
      instance.show();

galleryItemsUl.addEventListener("keydown",(event) =>{
   if(event.code === "Escape"){
    document.removeEventListener("keydown",event);
    instance.close();
   }  
 });
 }

