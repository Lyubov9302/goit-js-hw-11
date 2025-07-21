import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryContainer = document.querySelector('.gallery');
const loader = document.getElementById('loader');
let lightbox;

export function createGallery(images) {
  const markup = images.map(img =>
    `<a href="${img.largeImageURL}" class="gallery-item">
       <img src="${img.webformatURL}" alt="${img.tags}" loading="lazy" />
     </a>`
  ).join('');

  galleryContainer.insertAdjacentHTML('beforeend', markup);

  lightbox = new SimpleLightbox('.gallery a');
  lightbox.refresh();
}

export function clearGallery() {
  galleryContainer.innerHTML = '';
}

export function showLoader() {
  loader.hidden = false;
}

export function hideLoader() {
  loader.hidden = true;
}