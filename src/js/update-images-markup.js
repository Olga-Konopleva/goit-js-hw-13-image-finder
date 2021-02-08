import refs from '../js/refs';
import imagesTpl from '../tamplates/image.hbs';

function updateImagesMarkup (images) {
    const markup = imagesTpl(images);
    refs.gallery.insertAdjacentHTML('beforeend', markup)
}

export default updateImagesMarkup;