import './styles.css';
import './sass/card.scss';
import fetchingImage from './js/fetch-images';
import debounce from 'lodash.debounce';
import refs from './js/refs';
import updateImagesMarkup from './js/update-images-markup';
import apiService from './js/apiService';
import { LoaderOptionsPlugin } from 'webpack';

refs.input.addEventListener('input',debounce(searchImage, 500));
refs.button.addEventListener('click', lodeMoreImages)

const buttonLoadMore = {
    enabled() {
        apiService.page += 1;
        refs.buttonLabel.textContent = "Load more";
        refs.spinner.classList.add('is-hidden');
        refs.button.disabled = false;
    },
    loading() {
        refs.button.disabled = true;
        refs.buttonLabel.textContent = "Loading...";
        refs.spinner.classList.remove('is-hidden');
    }
}

function searchImage (e) {
    e.preventDefault();
    apiService.value = e.target.value;
    clearGalleryContainer();
    apiService.page = 1;
    apiService.fetchImage(apiService.value, apiService.page).then(images => {
        updateImagesMarkup(images);
        refs.button.classList.remove('is-hidden');
        apiService.page += 1;
        
    });
    
}

function lodeMoreImages () {
    buttonLoadMore.loading();
    apiService.fetchImage(apiService.value, apiService.page).then(images => {
        updateImagesMarkup(images);
        apiService.page += 1;
        buttonLoadMore.enabled();
        const { scrollTop, clientHeight } = document.documentElement;
        window.scrollTo({
            top: scrollTop + clientHeight,
            behavior: "smooth"
        })
    });
}

function clearGalleryContainer () {
    refs.gallery.innerHTML = '';
}