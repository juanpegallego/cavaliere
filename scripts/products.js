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


gsap.to('.header_title',{
    scrollTrigger: {
        trigger:".banner",
        scrub:true
    },  
    duration:2,
    ease:Sine.easeOut,
    opacity:1,
    y:-100,
});



    

gsap.to('.products_title',{
    scrollTrigger: {
        trigger:".white_space",
        start: "top bottom",
		end: "top top"
    },  
    duration:.5,
    delay:.5,
    ease:Sine.easeOut,
    opacity:1,
    x:0
});
    
