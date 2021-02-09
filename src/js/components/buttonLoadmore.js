import refs from '../refs'

export default {
    enabled() {
        refs.buttonLabel.textContent = "Load more";
        refs.spinner.classList.add('is-hidden');
        refs.button.disabled = false;
    },
    loading() {
        refs.button.disabled = true;
        refs.buttonLabel.textContent = "Loading...";
        refs.spinner.classList.remove('is-hidden');
    },
    show() {
        refs.button.classList.remove('is-hidden');
    },
    hide() {
        refs.button.classList.add('is-hidden');
    }
}