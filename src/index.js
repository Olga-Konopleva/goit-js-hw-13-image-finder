import './styles.css';
import './sass/card.scss';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import updateImagesMarkup from './js/update-images-markup';
import apiService from './js/apiService';
import buttonLoadMore from './js/components/buttonLoadmore';
import smoothScroll from './js/plugins/scrollTo';
import alert from './js/plugins/notify';

refs.input.addEventListener('input',debounce(searchImage, 500));
refs.button.addEventListener('click', lodeMoreImages)


function searchImage (e) {
    e.preventDefault();
    buttonLoadMore.hide();
    apiService.value = e.target.value;
    if (apiService.value === '') {
        clearGalleryContainer();
        return alert({
            type: 'notice',
            text: 'Type the query.',
            delay: 2000,
            width: '300px',
            maxTextHeight: null,
          });
    };
    
    clearGalleryContainer();
    apiService.resetPage();
    apiService.fetchImage(apiService.value, apiService.page).then(images => {
        
        if (images.length === 0) {
            
            return alert({
                type: 'notice',
                text: 'Nothing found.',
                delay: 2000,
                width: '300px',
                maxTextHeight: null,
              });
        }
        updateImagesMarkup(images);
        buttonLoadMore.show();
        apiService.incrementPage();
    });
}

function lodeMoreImages () {
    buttonLoadMore.loading();
    apiService.fetchImage(apiService.value, apiService.page).then(images => {
        updateImagesMarkup(images);
        apiService.incrementPage();
        buttonLoadMore.enabled();
        smoothScroll();
    });
}

function clearGalleryContainer () {
    refs.gallery.innerHTML = '';
}