window.onload = autoTurnOn;
        
/*--Lights on--*/

function turnOn(){
    document.getElementById('header').className = 'lights_on';            
    document.body.style.overflow = 'scroll'; 
}

/*--Auto Lights on--*/
function autoTurnOn(){
    setTimeout(unlockOverflow, 3000);
}

function unlockOverflow(){
    document.body.style.overflow = 'scroll'; 
    document.body.style.overflowX = 'hidden';
}
/*--Show Trucks Data--*/


function mostrar(a) {
    const tarjetasActivas = document.getElementsByClassName('active');
    
    for (let i = 0; i < tarjetasActivas.length; i++) {
        tarjetasActivas[i].className = 'fleet_card';        
    }

  
    visualViewport.width >= 600 ?  window.scroll({
        top: 2200,
        left: 0,
        behavior: 'smooth'
      })
      :
      window.scroll({
        top: 3200,
        left: 0,
        behavior: 'smooth'
      })


    

    document.getElementById(a).classList.toggle('active');  

}

function ocultarTarjetas(){
    const tarjetasActivas = document.getElementsByClassName('active');
    
    for (let i = 0; i < tarjetasActivas.length; i++) {
        tarjetasActivas[i].className = 'fleet_card';        
    }

    visualViewport.width >= 600 ?  window.scroll({
        top: 1800,
        left: 0,
        behavior: 'smooth'
      })

      :
      window.scroll({
        top: 2650,
        left: 0,
        behavior: 'smooth'
      })




    
}