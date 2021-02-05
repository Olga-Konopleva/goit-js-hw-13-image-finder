import './styles.css';
import fetchingImage from './js/fetch-images';
import debounce from 'lodash.debounce';
import refs from './js/refs';



refs.input.addEventListener('input',debounce(searchImage, 500));

function searchImage (e) {
    const value = e.target.value;
    const markup = fetchingImage(value);
    
}