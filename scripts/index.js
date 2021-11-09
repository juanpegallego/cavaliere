let counter = 1;
setInterval(function () {
    document.getElementById('radio' + counter).checked = true;
    counter++;
    if (counter > 3) {
        counter = 1;
    }
}, 4500);



function videoBgc (){
    const video = document.getElementById('bgc_video');
    video.className  = 'video_loading';            
    video.onloadeddata = function(){
        video.className = 'bgc_video'; 
    };
} ;


gsap.registerPlugin(ScrollTrigger);

gsap.to('.contact_title', {
    ScrollTrigger: {
        trigger: 'container_3',
        scrub: true
    },
    duration: 1,
    delay: 0,
    x: 0,
    opacity: 1,
    start: "bottom center"
})

gsap.to('form', {
    ScrollTrigger: {
        trigger: 'container_3',
        scrub: true
    },
    duration: 3,
    delay: 0,
    opacity: 1,
    start: "bottom center"
})
