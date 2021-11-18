


const loader = (x) => {


    const target = document.getElementById(`${x}`);
    const spinner = document.getElementById('loading-indicator');

    const hideSpinner = () => {
        target.style.transition = 'all 1s'
        target.style.opacity = '1';
        spinner.style.display = 'none';
    }

    if (!localStorage.getItem('loader')) {

        localStorage.setItem('loader', true);

        spinner.style.display = 'flex';
        target.style.opacity = '0';

        setTimeout(() => {
            hideSpinner();
        }, 1000);


    } else {
        hideSpinner();
    }
}

