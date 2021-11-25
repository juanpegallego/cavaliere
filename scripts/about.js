gsap.registerPlugin(ScrollTrigger)


gsap.to('.header_title', {
    scrollTrigger: 'header',
    duration: 1,
    opacity:1,
    y:'50px',
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
    delay:1,
    x:0,
    opacity:1,
    ease:Sine.easeOut,
    
})


gsap.to('.card', {
    scrollTrigger: '.flex_container',
    duration: .1,
    y:0,
    opacity:1,
    ease:"elastic"
})

gsap.to('.final_card', {
    scrollTrigger: '.final_card',
    duration: 2,
    delay:1,
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
    duration:3,
    delay:.5,
    opacity:1,
    x:0,
    ease:Sine.easeOut
})



