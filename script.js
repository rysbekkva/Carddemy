// JavaScript to make the navbar links clickable

document.addEventListener("DOMContentLoaded", () => {
    const links = document.querySelectorAll(".nav-links .link");
    links.forEach(link => {
        link.addEventListener("click", (event) => {
            event.preventDefault();
            alert(`You clicked on ${event.target.textContent}`);
            // You can add the actual navigation functionality here
        });
    });

    const loginButton = document.querySelector(".nav-login");
    loginButton.addEventListener("click", () => {
        alert("You clicked on Войти");
        // You can add the login functionality here
    });
});
