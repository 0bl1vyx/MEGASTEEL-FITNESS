document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Initialize AOS (Animate On Scroll)
    AOS.init({
        duration: 800,
        offset: 100,
        once: true
    });

    // 2. Preloader Logic
    const preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.transform = 'translateY(-100%)';
    }, 1500);

    // 3. Navbar Scroll Effect
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-black/90', 'backdrop-blur-md', 'shadow-lg', 'py-2');
            navbar.classList.remove('py-4');
        } else {
            navbar.classList.remove('bg-black/90', 'backdrop-blur-md', 'shadow-lg', 'py-2');
            navbar.classList.add('py-4');
        }
    });

    // 4. Exit Intent Popup (The "Don't Leave" Hack)
    const modal = document.getElementById('exit-modal');
    const closeModal = document.getElementById('close-modal');
    let hasShownModal = false;

    // Show when mouse leaves the top of the window
    document.addEventListener('mouseleave', (e) => {
        if (e.clientY < 0 && !hasShownModal) {
            modal.classList.remove('hidden');
            hasShownModal = true;
        }
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    // Close if clicked outside
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});
