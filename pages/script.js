const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateGallery() {
    images.forEach((image, index) => {
        image.classList.remove('center');
        if (index === currentIndex) {
            image.classList.add('center');
        }
    });

    const offset = currentIndex * -100; // Move gallery by the width of one image
    gallery.style.transform = `translateX(${offset}%)`;
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateGallery();
});

// Initialize the gallery
updateGallery();
