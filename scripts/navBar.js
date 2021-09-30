const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('nav');


window.addEventListener('resize', hideNavBar)
hamburguer.addEventListener('click', hideNavBar)


function hideNavBar (){  

    visualViewport.width < 1200 ? 
        responsiveNav() :  basicNav();

        function responsiveNav (){
            nav.style.display = 'none';
            hamburguer.style.display = 'flex';  
            hamburguer.addEventListener('click', function(){
                nav.style.transition = 'all 1s';
                nav.style.display === 'flex' ? 
                nav.style.display = 'none' : nav.style.display = 'flex'; 
                hamburguer.classList = 'hamburguer_active';
            })
        }
        function basicNav (){
            nav.style.display = 'flex';
            hamburguer.style.display = 'none';
        }
}



hideNavBar()