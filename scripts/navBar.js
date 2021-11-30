const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('nav');


window.addEventListener('resize', hideNavBar);
/* hamburguer.addEventListener('click', hideNavBar); */


function hideNavBar (){  

    visualViewport.width < 1200 ? 
        responsiveNav() :  basicNav();

        function responsiveNav (){
            hamburguer.style.display = 'flex';              

            hamburguer.addEventListener('click', () => { 
              nav.style.transition = 'all .9s ease-out';

              hamburguer.style.transform == 'none' ? 
              hamburguer.style.transform = 'none' : rotateHamburguer(hamburguer);




              nav.style.transform == 'translateY(0px)' ? 
              nav.style.transform = 'translateY(-500px)' : nav.style.transform = 'translateY(0px)'; 

              
              
            })
        }

        function rotateHamburguer(x){
          x.style.animation = 'rotateHamburguer 1 .8s';

          setTimeout(() => {
            x.style.animation = 'none'; 
          }, 850);
        }

        function basicNav (){          
            nav.style.display = 'flex'; 
            hamburguer.style.display = 'none';
            
        }

        

        
}

//------ remove subdomain of current site's url and setup regex
function targetBlank() {
    var internal = location.host.replace("www.", "");
        internal = new RegExp(internal, "i");
        
    var a = document.getElementsByTagName('a'); 
    for (var i = 0; i < a.length; i++) {
      var href = a[i].host; // 
      if( !internal.test(href) ) { // 
        a[i].setAttribute('target', '_blank'); 
      }
    }
  };



hideNavBar(), targetBlank();