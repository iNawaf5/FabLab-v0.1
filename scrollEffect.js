const img = document.getElementById('overviewImg');

window.addEventListener('scroll', scrollAni);

function scrollAni() {
    const imgPos = img.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (imgPos < screenHeight * 0.9) { 
        img.style.transform = 'translateX(0)'; 
        img.style.opacity = '1';
    }
}
