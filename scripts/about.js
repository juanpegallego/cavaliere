/*---------- GSAP TRANSITIONS ------------------*/

gsap.registerPlugin(ScrollTrigger)


gsap.to('.header_title', {
    scrollTrigger: 'header',
    duration: .8,
    opacity:1,
    delay:.5,
    x:'0',
    ease:Sine.easeOut
})


gsap.to('.header_text', {
    scrollTrigger: 'header',
    duration: .5,
    delay:.3,
    x:0,
    opacity:1,
    ease:Sine.easeOut
})


gsap.to('.content_title', {
    scrollTrigger: '.content_title',
    duration: 1,
    delay:.5,
    x:0,
    opacity:1,
    ease:Sine.easeOut,
    
})

gsap.to('.card:first-child', {
    scrollTrigger: '.content',
    duration: 1,
    y:0,
    delay:.5,
    opacity:1,
    ease:"elastic"
})
gsap.to('.card:nth-child(2)', {
    scrollTrigger: '.content',
    duration: 1,
    y:0,
    delay:1,
    opacity:1,
    ease:"elastic"
})

gsap.to('.card:nth-child(3)', {
    scrollTrigger: '.content',
    duration: 1,
    y:0,
    delay:1.5,
    opacity:1,
    ease:"elastic"
})

gsap.to('.final_card', {
    scrollTrigger: '.final_card',
    duration: .5,
    delay:.5,
    opacity:1,
})

gsap.to('.title', {
    scrollTrigger: '.title',
    duration: .5,
    delay:.3,
    x:0,
    opacity:1,
    ease:Sine.easeOut
})
gsap.to('.container', {
    scrollTrigger: '.container',
    duration:.5,
    delay:.5,
    opacity:1,
    x:0
})

gsap.to('.title_container', {
    scrollTrigger: '.section',
    duration:.5,
    delay:.5,
    opacity:1,
    x:0
})

gsap.to('.sustent_title', {
    scrollTrigger: '.sustentab_content',
    duration:.5,
    delay:1,
    opacity:1,
})

gsap.to('.sustent_text', {
    scrollTrigger: '.sustentab_content',
    duration:.5,
    delay:1.5,
    opacity:1,
})


/*---------- video bgc HEADER ------------------*/


document.querySelector('video').playbackRate = .85;