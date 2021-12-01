// intro animation
const hero = document.querySelector('.hero');
const tl = new TimelineMax();

tl.fromTo(hero, 1, { height: "0%" }, { height: "80%", ease: Power2.easeInOut })
    .fromTo(hero, 1.2, { width: "100%" }, { width: "80%", ease: Power2.easeInOut })

// scroll animation
ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 10,
    easing: 'ease-in-out'
});
ScrollReveal().reveal('#scroll-arrow', { reset: false, delay: 1400, distance: '150px', origin: 'bottom' });
ScrollReveal().reveal('.top', { origin: 'top' });
ScrollReveal().reveal('.from_right', {
    delay: 100,
    duration: 2000,
    distance: '100%',
    origin: 'right'
});
ScrollReveal().reveal('.from_left', {
    delay: 100,
    duration: 2000,
    distance: '100%',
    origin: 'left'
});
ScrollReveal().reveal('.timeline_block_title', { distance: '50px', origin: 'left' });
ScrollReveal().reveal('.timeline_block_body', { distance: '100px', origin: 'right' });