// import imagesTpl from '../tamplates/image.hbs';
// import refs from '../js/refs';

const key = '20154627-553297d4fa4e2a9272bf54c5b';

export default {
    value: '',
    page: 1,
    fetchImage (searchQuery, page = 1) {
        const url = `https://pixabay.com/api/?image_type=photo&orientation=horizontal&q=${searchQuery}&page=${page}&per_page=12&key=${key}`;
        return fetch(url)
        .then(images => images.json())
        .then(({hits}) => {
            return hits;
        })
        .catch(error => console.log(error))
    }
}