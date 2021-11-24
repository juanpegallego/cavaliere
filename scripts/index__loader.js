


const loader = (x) => {


    const target = document.getElementById(`${x}`);

    const hideSpinner = () => {
        target.style.transition = 'all 1s'
        target.style.opacity = '1';
        document.getElementById('loading-indicator').style.display = 'none';
    }

    if (!localStorage.getItem('loader')) {

        localStorage.setItem('loader', true);

        document.getElementById('loading-indicator').style.display = 'flex';
        target.style.opacity = '0';

        setTimeout(() => {
            hideSpinner();
        }, 1000);


    } else {
        hideSpinner();
    }
}

