const hamburguer = document.getElementById('hamburguer');
const nav = document.getElementById('nav');


window.addEventListener('resize', hideNavBar);
/* hamburguer.addEventListener('click', hideNavBar); */


function hideNavBar (){  

    visualViewport.width < 1200 ? 
        responsiveNav() :  basicNav();

        function responsiveNav (){
            /* nav.style.display = 'none'; */
            hamburguer.style.display = 'flex';              

            hamburguer.addEventListener('click', () => {  
              nav.style.transform == 'translateY(0px)' ? 
              nav.style.transform = 'translateY(-500px)' : showResponsiveNav(nav); 

              
            })
        }
        function basicNav (){          
            /* nav.style.display = 'flex'; */
            hamburguer.style.display = 'none';
            
        }

        function showResponsiveNav(nav){      
          nav.style.transition = 'all 1.5s';
          /* nav.style.display = 'flex'; */
          nav.style.transform = 'translateY(0px)';
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