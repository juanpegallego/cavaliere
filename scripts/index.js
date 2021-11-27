/*-------------------- SLIDER --------------------------*/


let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 4500);



/*-------------------- GSAP ---------------------------*/


gsap.registerPlugin(ScrollTrigger);

gsap.to('.contact_title', {
    scrollTrigger: {
        trigger: 'container_3',
        scrub: true
    },
    duration: 1,
    delay: 1,
    x: 0,
    opacity: 1,
    start: "bottom center"
})

gsap.to('form', {
    scrollTrigger: {
        trigger: '.container_3',        
        start: 'top bottom+=200',
        scrub: true
    },
    duration: 1,
    delay: .5,
    opacity: 1,
}) 
 
gsap.to('.left_container', {
    scrollTrigger: {
        trigger: '.container_1',
        start: 'top bottom+=200',
        scrub:true
    },
    duration: 1.5,
    opacity: 1,    
    
    x:0
}) 

gsap.to('.right_container', {
    scrollTrigger: {
        trigger: '.container_1',
        start: 'top bottom+=200',
        scrub:true
    },
    duration: 1.5,
    opacity: 1,    
    x:0
}) 


gsap.to('.grid_banner', {
    scrollTrigger: {
        trigger: '.banner_container',
        start: 'top bottom+=200'
    },
    opacity:1,
    delay:.5,
    x:0
});

gsap.to('.widget_container', {
    scrollTrigger: {
        trigger: '.fruit_img_box',
        start: 'top top+=200'
    },
    opacity:1,
    duration:.5,
    x:0
});


gsap.to('.fruits_container', {
    scrollTrigger: {
        trigger: '.grid_banner',
        start: 'top top+=200'
    },
    duration:1,
    opacity:1,
    delay:.5
});