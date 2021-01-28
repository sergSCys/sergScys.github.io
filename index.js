const menuToggle_intro = document.querySelector('.toggle-intro')
const showcase_intro = document.querySelector('.showcase-intro')


menuToggle_intro.addEventListener('click', () => {
    menuToggle_intro.classList.toggle('active')
    showcase_intro.classList.toggle('active')
})
document.querySelector('video').playbackRate = 0.75;
