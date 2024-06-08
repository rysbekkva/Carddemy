document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.navbar-brand').addEventListener('click', () => {
        alert('Welcome to Carddemy!');
    });

    document.querySelectorAll('.nav-link').forEach(item => {
        item.addEventListener('mouseover', () => {
            item.style.color = 'lightblue';
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

    const playSound = () => {
        const audio = new Audio('click-sound.mp3');
        audio.play();
    };

    document.querySelector('.navbar-toggler').addEventListener('click', playSound);
});
