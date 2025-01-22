const gallery = document.querySelector('.gallery');
const items = document.querySelectorAll('.gallery-item');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;

function updateGallery() {
    items.forEach((item, index) => {
        item.classList.remove('center');

        if (index === currentIndex) {
            // Center image
            item.classList.add('center');
        } else if (index === (currentIndex + 1) % items.length) {
            // Right image
            item.style.transform = 'translateX(35%) scale(0.8)';
            item.style.opacity = '0.5';
        } else if (index === (currentIndex - 1 + items.length) % items.length) {
            // Left image
            item.style.transform = 'translateX(-35%) scale(0.8)';
            item.style.opacity = '0.5';
        } else {
            // Hidden images
            item.style.transform = 'translateX(70%) scale(0.5)';
            item.style.opacity = '0';
        }
    });
}

prevBtn.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + items.length) % items.length;
    updateGallery();
});

nextBtn.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % items.length;
    updateGallery();
});

// Initialize the gallery
updateGallery();
