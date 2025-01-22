const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

// Function to update the gallery's position
function updateGallery() {
    const offset = -currentIndex * 100; // Move the gallery by 100% per slide
    gallery.style.transform = `translateX(${offset}%)`;
}

// Event listeners for navigation buttons
prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : images.length - 1;
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
});

// Auto-scroll functionality (optional)
setInterval(() => {
    currentIndex = (currentIndex < images.length - 1) ? currentIndex + 1 : 0;
    updateGallery();
}, 3000); // Change slide every 3 seconds
