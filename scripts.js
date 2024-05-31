// scripts.js
document.addEventListener("DOMContentLoaded", () => {
    const items = document.querySelectorAll('.feature-item, .faq-item, .gallery-item');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    items.forEach(item => {
        observer.observe(item);
    });

    const links = document.querySelectorAll("nav ul li a");

    for (const link of links) {
        link.addEventListener("click", smoothScroll);
    }

    function smoothScroll(event) {
        event.preventDefault();
        const targetId = event.currentTarget.getAttribute("href") === "#" ? "header" : event.currentTarget.getAttribute("href");
        window.scrollTo({
            top: document.querySelector(targetId).offsetTop - 50,
            behavior: "smooth"
        });
    }

    // Responsive Navigation
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        burger.classList.toggle('active');
    });

    navLinks.addEventListener('click', () => {
        navLinks.classList.remove('active');
        burger.classList.remove('active');
    });
});
