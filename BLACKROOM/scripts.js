// Contact Form Validation
const form = document.getElementById('contact-form');

form.addEventListener('submit', (e) => {
    const name = form.elements['name'].value.trim();
    const email = form.elements['email'].value.trim();
    const message = form.elements['message'].value.trim();

    if (!name || !email || !message) {
        alert('All fields are required!');
        e.preventDefault();
    } else if (!/\S+@\S+\.\S+/.test(email)) {
        alert('Please enter a valid email!');
        e.preventDefault();
    }
});

// Filter Functionality for Videos Section
const filterButtons = document.querySelectorAll('.filter-btn');
const videoCards = document.querySelectorAll('.video-card');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.textContent.toLowerCase();

        videoCards.forEach(card => {
            if (category === 'all' || card.dataset.category.includes(category)) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });

        // Highlight the active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Sticky Navigation Scroll Effect
const navbar = document.querySelector('.sticky-nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#000';
    } else {
        navbar.style.backgroundColor = '#111';
    }
});

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.sticky-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Event Image Error Handling
const eventImages = document.querySelectorAll('.event-card img');
eventImages.forEach(img => {
    img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/250x150?text=Image+Not+Found';
    });
});
// Search functionality
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-btn');

searchButton.addEventListener('click', () => {
    const query = searchInput.value.trim();
    if (query) {
        alert(`Searching for: ${query}`);
        // In the future, integrate search logic here
    } else {
        alert('Please enter a search term.');
    }
});
document.getElementById("search-input").addEventListener("input", function () {
    const query = this.value.toLowerCase();
    const videoItems = document.querySelectorAll(".video-gallery button");
    const eventItems = document.querySelectorAll(".events-container .event-item");

    // Filtrar videos
    videoItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "inline-block";
        } else {
            item.style.display = "none";
        }
    });

    // Filtrar eventos
    eventItems.forEach((item) => {
        const text = item.textContent.toLowerCase();
        if (text.includes(query)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    });
});
function shareImage(imageUrl) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this photo from The Black Room!',
            url: imageUrl
        }).then(() => {
            alert('Image shared successfully!');
        }).catch((error) => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Sharing not supported on this browser. Try copying the image URL!');
    }
}
