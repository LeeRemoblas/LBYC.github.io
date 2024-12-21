document.querySelectorAll('.carousel').forEach((carousel) => {
    const track = carousel.querySelector('.carousel-track');
    const images = Array.from(track.children);
    const prevButton = carousel.querySelector('.carousel-button.prev');
    const nextButton = carousel.querySelector('.carousel-button.next');
    const imageWidth = track.getBoundingClientRect().width; // Accurate width for the visible track
    let currentIndex = 0;

    // Set initial position for images
    images.forEach((img, index) => {
        img.style.left = `${index * imageWidth}px`;
    });

    // Move to previous slide
    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    });

    // Move to next slide
    nextButton.addEventListener('click', () => {
        if (currentIndex < images.length - 1) {
            currentIndex++;
            track.style.transform = `translateX(-${currentIndex * imageWidth}px)`;
        }
    });
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

    function toggleMenu() {
        const menu = document.querySelector('.menu');
        menu.style.display = menu.style.display === 'block' ? 'none' : 'block';
    }


