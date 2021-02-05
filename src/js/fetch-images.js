import imagesTpl from '../tamplates/image.hbs';
import refs from '../js/refs';

const key = '20154627-553297d4fa4e2a9272bf54c5b';

export default function fetchingImage (searchQuery) {
    const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=1&per_page=12&key=${key}`;
    fetch(url)
    .then(images => images.json())
    .then(({hits}) => {
        const markup = imagesTpl(hits);
        refs.gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.log(error))
}