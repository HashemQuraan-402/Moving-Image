const stars = document.getElementById('stars1');
const moon = document.getElementById('moon2');
const mountains3 = document.getElementById('mountains3');
const mountains4 = document.getElementById('mountains4');
const river = document.getElementById('river5');
const boat = document.getElementById('boat6');
const title = document.querySelector('.nodCry');
const scene = document.querySelector('.main');
const navigationLinks = document.querySelectorAll('.nav-link');
const reducedMotionPreference = window.matchMedia('(prefers-reduced-motion: reduce)');

let animationFrameRequested = false;

function updateScene() {
    if (reducedMotionPreference.matches) {
        animationFrameRequested = false;
        return;
    }

    const scrollPosition = window.scrollY;

    stars.style.transform = `translateX(${scrollPosition * 0.45}px)`;
    moon.style.transform = `translateY(${100 + scrollPosition * 2.2}px)`;
    mountains3.style.transform = `translateY(${scrollPosition * 1.3}px)`;
    mountains4.style.transform = `translateY(${scrollPosition * 0.85}px)`;
    river.style.transform = `translateY(${scrollPosition * 0.55}px)`;
    boat.style.transform = `translate(${scrollPosition * 2.2}px, ${scrollPosition * 0.55}px)`;

    title.style.fontSize = `${Math.min(25 + scrollPosition * 0.3, 61)}px`;
    title.style.transform = `translateY(${-200 + Math.min(scrollPosition * 0.7, 180)}px)`;

    const beyondHero = scrollPosition >= 200;
    moon.style.opacity = beyondHero ? '0' : '1';
    scene.style.background = beyondHero
        ? 'linear-gradient(#3374eb, #5e10a7)'
        : 'linear-gradient(#200016, #10001f)';

    animationFrameRequested = false;
}

window.addEventListener('scroll', () => {
    if (!animationFrameRequested) {
        window.requestAnimationFrame(updateScene);
        animationFrameRequested = true;
    }
});

navigationLinks.forEach((link) => {
    link.addEventListener('mouseenter', () => {
        navigationLinks.forEach((item) => item.classList.remove('active'));
        link.classList.add('active');
    });

    link.addEventListener('mouseleave', () => {
        navigationLinks.forEach((item) => item.classList.remove('active'));
        navigationLinks[0].classList.add('active');
    });
});

updateScene();
