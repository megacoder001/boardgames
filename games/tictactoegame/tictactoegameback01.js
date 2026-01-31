const container = document.getElementById('imageContainer');
const overlayImage = document.getElementById('overlayImage');

container.addEventListener('click', () => {
    overlayImage.style.display = 'block'; // Show image02.png inside image01.jpg
});
