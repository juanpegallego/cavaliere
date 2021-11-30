gsap.registerPlugin(ScrollTrigger)


gsap.to('.nav',{
    scrollTrigger: {
        scrub: 1,
        trigger:".nav",
        start: "bottom top",
		end: "top top",
    },   
    y:5,
    duration:1,
    ease:"elastic",
    opacity:.75,
    y:10
});


gsap.to('.text',{
    scrollTrigger: {
        trigger:".white_space",
        start: "top bottom",
		end: "top top"
    },  
    duration:1,
    delay:.5,
    ease:Sine.easeOut,
    opacity:1,
    x:0
});
    

    

gsap.to('.products_title',{
    scrollTrigger: {
        trigger:".white_space",
        start: "top bottom",
		end: "top top"
    },  
    duration:.8,
    delay:1,
    ease:Sine.easeOut,
    opacity:1,
    x:0
});
    


gsap.to('.products', {
    scrollTrigger: {
        trigger: '.products_title',
        start: 'top bottom+=300'
        
    },
    duration:1,
    delay:1.5,
    opacity: 1,
    y:0,
    ease:"elastic",
}) 