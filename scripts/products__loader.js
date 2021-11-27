const loader = (x) => {
    
    const target = document.querySelector(`${x}`);

    const hideElementShowSpinner = () => {
        target.style.transition = 'all 2s'
        target.style.opacity = '1';
        document.getElementById('loading-indicator').style.display = 'none';
    }

    window.addEventListener('DOMContentLoaded', (event) => {  
        localStorage.setItem('products', true);        
    });
    
    if (!localStorage.getItem('products')) {
        document.getElementById('loading-indicator').style.display = 'flex';
        target.style.opacity = '0';

        setTimeout(() => {
            hideElementShowSpinner()
        }, 2500);

    } else {
        hideElementShowSpinner();
    }
}
