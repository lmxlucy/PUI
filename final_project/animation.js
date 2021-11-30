ScrollReveal({
    reset: true,
    distance: '30px',
    duration: 1000,
    delay: 10,
    easing: 'ease-in-out'
});

ScrollReveal().reveal('.top', { origin: 'top' });
ScrollReveal().reveal('.rotate-left', {
    scale: 0.5,
    rotate: {
        x: 20,
        z: 20
    }
});
ScrollReveal().reveal('.rotate-right', {
    scale: 0.5,
    rotate: {
        x: -20,
        z: -20
    }
});
ScrollReveal().reveal('.timeline_block_title', { distance: '50px', origin: 'left' });
ScrollReveal().reveal('.timeline_block_body', { distance: '100px', origin: 'right' });