
        
/*-----------------Lights on---------------*/

function turnOn(){
    document.getElementById('header').className = 'lights_on';      
    document.getElementById('lamp_arrow').style.display = 'none';      
    document.body.style.overflow = 'scroll'; 
}

/*----------Show Trucks Data----------------*/


function mostrar(a) {
    const tarjetasActivas = document.getElementsByClassName('active');
    
    for (let i = 0; i < tarjetasActivas.length; i++) {
        tarjetasActivas[i].className = 'fleet_card';        
    }

  
    visualViewport.width >= 600 ?  window.scrollBy(0, 400) : window.scrollBy(0,400);


    

    document.getElementById(a).classList.toggle('active');  

}

function ocultarTarjetas(){
    const tarjetasActivas = document.getElementsByClassName('active');
    
    for (let i = 0; i < tarjetasActivas.length; i++) {
        tarjetasActivas[i].className = 'fleet_card';        
    }

    visualViewport.width >= 600 ?  window.scrollBy(0,-500) : window.scrollBy(0,-700);

      
      



    
}