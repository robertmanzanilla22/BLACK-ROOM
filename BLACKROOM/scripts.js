// Datos de los videos
// Contenedor de galería de videos
const videoGallery = document.getElementById('video-gallery');

// Función para mostrar los videos en la galería
function displayVideos(filteredVideos) {
    videoGallery.innerHTML = '';
    filteredVideos.forEach(video => {
        const videoElement = document.createElement('div');
        videoElement.innerHTML = `
            <h3>${video.title}</h3>
            <a href="${video.url}" target="_blank">Watch</a>
        `;
        videoGallery.appendChild(videoElement);
    });
}

// Función para filtrar videos por género
function filterVideos(genre) {
    if (genre === 'all') {
        displayVideos(videos);
    } else {
        const filtered = videos.filter(video => video.genre === genre);
        displayVideos(filtered);
    }
}

// Lista Interactiva de Eventos
function toggleEventDetails(eventElement) {
    const details = eventElement.querySelector('.details');
    details.style.display = details.style.display === 'block' ? 'none' : 'block';
}

// Mostrar todos los videos al cargar la página
document.addEventListener('DOMContentLoaded', () => {
    displayVideos(videos);
});
