const photos = [
    'images/file.jpg',
    'images/file2.jpg',
    'images/foto3.jpeg',
    'images/foto4.jpeg',
    'images/file3.jpg'
];

let currentPhotoIndex = 0;
const photoElement = document.getElementById('photo');

// Define a imagem inicial
photoElement.src = photos[currentPhotoIndex]; // Adicione esta linha

document.getElementById('prevBtn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex - 1 + photos.length) % photos.length;
    photoElement.src = photos[currentPhotoIndex];
});

document.getElementById('nextBtn').addEventListener('click', () => {
    currentPhotoIndex = (currentPhotoIndex + 1) % photos.length;
    photoElement.src = photos[currentPhotoIndex];
});
