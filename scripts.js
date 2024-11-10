document.addEventListener('DOMContentLoaded', function () {
    // Lazy load images
    const lazyImages = document.querySelectorAll('img[data-src]');
    lazyImages.forEach(img => {
        img.src = img.getAttribute('data-src');
    });
});
