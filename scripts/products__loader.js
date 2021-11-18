


const loader = (x) => {
    const target = document.querySelector(`${x}`);
    const spinner = document.getElementById('loading-indicator');

    const hideSpinner = () => {
        target.style.transition = 'all 2s'
        target.style.opacity = '1';
        spinner.style.display = 'none';
    }

    if (!localStorage.getItem('products')) {

        localStorage.setItem('products', true);

        spinner.style.display = 'flex';
        target.style.opacity = '0';

        setTimeout(() => {
            hideSpinner()
        }, 2500);

    } else {
        hideSpinner();
    }
}
