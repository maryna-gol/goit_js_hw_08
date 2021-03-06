

// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryImg = document.querySelector('.gallery');
const cardImg = createGalleryItem(galleryItems);
//........................................................//

galleryImg.insertAdjacentHTML('beforeend', cardImg);

function createGalleryItem(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join(' ');
}
const lightbox = new SimpleLightbox('.gallery a', { 
  captionsData: 'alt', 
  captionPosition: 'bottom',
  captionDelay: '250 ms' });


// // Add imports above this line

// import SimpleLightbox from "simplelightbox";
// import 'simplelightbox/dist/simple-lightbox.min.css';

// import { galleryItems } from './gallery-items';

// // Change code below this line
// console.log(galleryItems);

// const ulGalleryEl = document.querySelector('.gallery');
// const galleryMarkup = ItemCreateEl(galleryItems);

// // доступ к эллементам
// const ulGalleryEl = document.querySelector('ul.js-gallery');
// const modalWindowEl = document.querySelector('div.js-lightbox')
// const bigImage = modalWindowEl.querySelector('img.lightbox__image');

// // HTML разметкa
// const ItemCreateEl = galleryItems.map(({ preview, original, description }) => {
//     return `<li class="gallery__item">
//                 <a
//                     class="gallery__link"
//                     href="${original}"
//                 >
//                     <img
//                         class="gallery__image"
//                         src="${preview}"
//                         data-source="${original}"
//                         alt="${description}"
//                     />
//                 </a>
//             </li>`;
// });


// ulGalleryEl.insertAdjacentHTML('afterbegin', ItemCreateEl.join(' '));

// // слушатели событий
// ulGalleryEl.addEventListener('click', onOpenModalWindow);
// modalWindowEl.addEventListener('click', onControlClick);
// window.addEventListener('keydown', onControlKey);

// // открытие модалки
// function onOpenModalWindow(evt) {
//     evt.preventDefault(); 

//     if (evt.target.nodeName !== 'IMG') {
//         return;
//     };

//     modalWindowEl.classList.add('is-open');

//     bigImage.src = evt.target.dataset.source;
//     bigImage.alt = evt.target.alt;
// };

// // клики на модальном окнe
// function onControlClick(evt) {
//     if (evt.target.dataset.action === 'prev-lightbox') {
//         prevImg();
//     };

//     if (evt.target.dataset.action === 'next-lightbox') {
//         nextImg();
//     };

//     if (evt.target.dataset.action !== 'close-lightbox' && e.target.nodeName !== 'DIV') {
//         return;
//     };

//     closeModalWindow();
// };
// // управление стрелками при открытом модальном окнe
// function onControlKey(evt) {
//     if (modalWindowEl.classList.value.includes('is-open')) {
//         if (evt.keyCode === 27) {
//             closeModalWindow();
//         };
        
//         if (evt.keyCode === 37) {
//             prevImg();
//         };

//         if (evt.keyCode === 39) {
//             nextImg();
//         };
//     };    
// };


// function findCurrentElement() {
//     let index;

//     for (let i = 0; i < ulGalleryEl.children.length; i++) {
//         if (ulGalleryEl.children[i].children[0].href === bigImage.src) {
//             index = i;
//             break;
//         }
//     }
//     return index;
// };

// function prevImg() {
//     const index = findCurrentElement();

//     if (index === 0) {
//         bigImage.src = ulGalleryEl.children[ulGalleryEl.children.length-1].children[0].children[0].dataset.source;
//         bigImage.alt = ulGalleryEl.children[ulGalleryEl.children.length-1].children[0].children[0].alt;
//     }
    
//     else {
//         bigImage.src = ulGalleryEl.children[index - 1].children[0].children[0].dataset.source;
//         bigImage.alt = ulGalleryEl.children[index - 1].children[0].children[0].alt;
//     };
// };


// function nextImg() {
//     const index = findCurrentElement();

//     if (index === ulGalleryEl.children.length-1) {
//         bigImage.src = ulGalleryEl.children[0].children[0].children[0].dataset.source;
//         bigImage.alt = ulGalleryEl.children[0].children[0].children[0].alt;
//     }

//     else {
//         bigImage.src = ulGalleryEl.children[index + 1].children[0].children[0].dataset.source;
//         bigImage.alt = ulGalleryEl.children[index + 1].children[0].children[0].alt;
//     };
// };

// function closeModalWindow() {
//     modalWindowEl.classList.remove('is-open');
//     bigImage.src = '';
//     bigImage.alt = '';
// };