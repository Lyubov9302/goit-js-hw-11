
import { fetchImages } from './js/pixabay-api';
import { createGallery, clearGallery } from './js/render-functions';


const formEl = document.querySelector('.form');

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.currentTarget.elements.searchQuery.value.trim();
  if (!query) return;

  clearGallery(); // очищення галереї

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, no images found!',
      });
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    iziToast.error({ message: 'Error loading images' });
  }
});

formEl.addEventListener('submit', async (e) => {
  e.preventDefault();
  const query = e.currentTarget.elements.searchQuery.value.trim();
  if (!query) return;

  clearGallery(); // очищення галереї

  try {
    const data = await fetchImages(query);
    if (data.hits.length === 0) {
      iziToast.info({
        message: 'Sorry, no images found!',
      });
      return;
    }
    createGallery(data.hits);
  } catch (error) {
    iziToast.error({ message: 'Error loading images' });
  }
});