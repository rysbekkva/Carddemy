document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar-brand').addEventListener('click', () => {
        alert('Welcome to MyWebsite!');
    });

    document.querySelectorAll('.nav-link').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'blue';
        });
        item.addEventListener('mouseout', () => {
            item.style.color = '';
        });
    });

    document.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            alert('Enter key pressed!');
        }
    });

    const carouselItems = document.querySelectorAll('.carousel-item');
    carouselItems.forEach(item => {
        item.addEventListener('slide.bs.carousel', () => {
            item.classList.add('animated', 'fadeIn');
        });
    });

    const playSound = () => {
        const audio = new Audio('click-sound.mp3');
        audio.play();
    };

    document.querySelector('.navbar-toggler').addEventListener('click', playSound);
});
