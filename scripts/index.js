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


gsap.to('.banner',{
    scrollTrigger:'.banner',
    x:0,
    duration:1,
    delay:.5,
    pin:true,
    opacity:1,
    start: "bottom center"
})

gsap.to('.banner_title',{
    scrollTrigger:'.banner',
    x:0,
    duration:1,
    delay:.5,
    pin:true,
    opacity:1,
    start: "bottom center"
})
gsap.to('.banner_text',{
    scrollTrigger:'.banner',
    x:0,
    duration:.5,
    delay:1,
    pin:true,
    opacity:1,
    start: "start center"
})

gsap.to('.banner_text:after',{
    scrollTrigger:'.banner',
    x:0,
    duration:1,
    delay:.5,
    opacity:1
})