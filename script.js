document.addEventListener('DOMContentLoaded', () => {
    console.log("Megasteel Fitness Demo Loaded");

    // Optional: Add simple fade-in animations on scroll
    const sections = document.querySelectorAll('section');
    const options = { threshold: 0.1 };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('opacity-100');
            }
        });
    }, options);

    sections.forEach(s => {
        s.classList.add('opacity-0', 'transition-opacity', 'duration-1000');
        observer.observe(s);
    });
});
