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
        const audio = new Audio('click.wav');
        audio.play();
    };

    document.querySelector('.navbar-toggler').addEventListener('click', playSound);
});

document.addEventListener("DOMContentLoaded", function() {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("nameInput").value;
    const phone = document.getElementById("phoneInput").value;
    const email = document.getElementById("emailInput").value;

    // Perform form validation (if any)
    if (!name || !phone || !email) {
      alert('Пожалуйста, заполните все поля.');
      return;
    }

    // Perform form submission (e.g., send data to server or display a message)
    alert(`Форма отправлена: \nИмя: ${name}\nТелефон: ${phone}\nEmail: ${email}`);

    // Optionally, you can reset the form after submission
    form.reset();
  });
});

