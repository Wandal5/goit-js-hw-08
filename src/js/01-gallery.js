import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Change code below this line
const galleryEl = document.querySelector('.gallery');

function makeGalleryImgMarkup({ preview, original, description }) {
	return `
  <a class="gallery__item" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      alt="${description}"
    />
  </a>`;
}

function makeGalleryMarkup(array) {
	return array.map(makeGalleryImgMarkup).join('');
}
function renderMarkup(markup) {
	galleryEl.insertAdjacentHTML('afterbegin', markup);
}
const galleryMarkup = makeGalleryMarkup(galleryItems);
renderMarkup(galleryMarkup);

const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: "alt",
    captionDelay: 250,
    overlayOpacity: 0.9,

});


