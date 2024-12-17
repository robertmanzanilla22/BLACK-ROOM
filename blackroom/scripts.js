// Contact Form Validation
const form = document.getElementById('contact-form');
if (form) {
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
}

// Sticky Navigation Scroll Effect
const navbar = document.querySelector('.sticky-nav');
if (navbar) {
    window.addEventListener('scroll', () => {
        navbar.style.backgroundColor = window.scrollY > 50 ? '#000' : '#111';
    });
}

// Smooth Scrolling for Navigation Links
document.querySelectorAll('.sticky-nav a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
});

// Search Functionality (Lupa)
document.addEventListener('DOMContentLoaded', function () {
    const searchIcon = document.querySelector('.search-icon');
    const searchInput = document.getElementById('search-bar');
    if (searchIcon && searchInput) {
        searchIcon.addEventListener('click', () => {
            searchInput.classList.toggle('hidden');
            searchInput.focus();
        });

        searchInput.addEventListener('input', function () {
            const query = searchInput.value.toLowerCase();
            const videoItems = document.querySelectorAll('.video-gallery button');
            const eventItems = document.querySelectorAll('.events-container .event-item');

            // Filtrar videos
            videoItems.forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(query) ? "inline-block" : "none";
            });

            // Filtrar eventos
            eventItems.forEach(item => {
                item.style.display = item.textContent.toLowerCase().includes(query) ? "block" : "none";
            });
        });
    }
});

// Filter Functionality for Videos Section
const filterButtons = document.querySelectorAll('.filter-btn');
const videoItems = document.querySelectorAll('.video-item');

filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.getAttribute('data-filter');
        videoItems.forEach(video => {
            video.style.display = (filter === 'all' || video.classList.contains(filter)) ? 'block' : 'none';
        });

        // Highlight Active Button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

// Event Image Error Handling
document.querySelectorAll('.event-card img').forEach(img => {
    img.addEventListener('error', () => {
        img.src = 'https://via.placeholder.com/250x150?text=Image+Not+Found';
    });
});

// Registration Functionality
const registerForm = document.getElementById('register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = document.getElementById('register-name').value.trim();
        const email = document.getElementById('register-email').value.trim();
        const password = document.getElementById('register-password').value.trim();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push({ name, email, password });
        localStorage.setItem('users', JSON.stringify(users));

        alert('User registered successfully!');
    });
}

// Login Functionality
const loginForm = document.getElementById('login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value.trim();
        const password = document.getElementById('login-password').value.trim();

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(u => u.email === email && u.password === password);

        if (user) {
            alert(`Welcome back, ${user.name}!`);
        } else {
            alert('Invalid credentials!');
        }
    });
}

// Sharing Functionality for Images
function shareImage(imageUrl) {
    if (navigator.share) {
        navigator.share({
            title: 'Check out this photo from The Black Room!',
            url: imageUrl
        }).then(() => {
            alert('Image shared successfully!');
        }).catch(error => {
            console.error('Error sharing:', error);
        });
    } else {
        alert('Sharing not supported on this browser. Try copying the image URL!');
    }
}
document.addEventListener('DOMContentLoaded', () => {
    const searchContainer = document.querySelector('.search-container');
    const searchBar = document.querySelector('.search-bar');

    searchContainer.addEventListener('mouseenter', () => {
        searchBar.style.display = 'block';
    });

    searchContainer.addEventListener('mouseleave', () => {
        searchBar.style.display = 'none';
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    const signupForm = document.getElementById('signup-form');

    // Registro de usuarios
    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const name = document.getElementById('signup-name').value;
        const email = document.getElementById('signup-email').value;
        const password = document.getElementById('signup-password').value;

        // Guardar en localStorage
        let users = JSON.parse(localStorage.getItem('users')) || [];
        if (users.some(user => user.email === email)) {
            alert('El correo ya está registrado.');
        } else {
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));
            alert('Registro exitoso. Ahora puedes iniciar sesión.');
            signupForm.reset();
        }
    });

    // Login de usuarios
    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const email = document.getElementById('login-email').value;
        const password = document.getElementById('login-password').value;

        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert(`¡Bienvenido, ${user.name}!`);
            localStorage.setItem('currentUser', JSON.stringify(user));
            loginForm.reset();
            // Aquí puedes redirigir al usuario a otra página si lo necesitas
        } else {
            alert('Credenciales incorrectas. Inténtalo de nuevo.');
        }
    });

    // Simular cerrar sesión
    const logoutButton = document.createElement('button');
    logoutButton.textContent = "Cerrar Sesión";
    logoutButton.style.display = "none";
    document.body.appendChild(logoutButton);

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    if (currentUser) {
        alert(`Sesión iniciada: ${currentUser.name}`);
        logoutButton.style.display = "block";
    }

    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('currentUser');
        alert('Sesión cerrada.');
        logoutButton.style.display = "none";
    });
});
document.addEventListener("DOMContentLoaded", () => {
    const swiper = new Swiper('.swiper-container', {
        slidesPerView: 3, // Número de videos visibles a la vez
        spaceBetween: 20, // Espacio entre videos
        loop: true, // Carrusel infinito
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // Deslizar automáticamente cada 3 segundos
            disableOnInteraction: false,
        },
        breakpoints: {
            768: {
                slidesPerView: 2,
            },
            1024: {
                slidesPerView: 3,
            },
        },
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Radio Carousel
    new Swiper('.radio-carousel', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.radio-carousel .swiper-button-next',
            prevEl: '.radio-carousel .swiper-button-prev',
        },
        pagination: {
            el: '.radio-carousel .swiper-pagination',
            clickable: true,
        },
    });

    // Past Events Carousel
    new Swiper('.past-events-carousel', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.past-events-carousel .swiper-button-next',
            prevEl: '.past-events-carousel .swiper-button-prev',
        },
        pagination: {
            el: '.past-events-carousel .swiper-pagination',
            clickable: true,
        },
    });

    // Archives Carousel
    new Swiper('.archives-carousel', {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.archives-carousel .swiper-button-next',
            prevEl: '.archives-carousel .swiper-button-prev',
        },
        pagination: {
            el: '.archives-carousel .swiper-pagination',
            clickable: true,
        },
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // Configuración Base para Swiper.js
    const swiperConfig = {
        slidesPerView: 3,
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    };

    // Inicializa cada carrusel individual
    new Swiper('.radio-carousel', swiperConfig);
    new Swiper('.past-events-carousel', swiperConfig);
    new Swiper('.archives-carousel', swiperConfig);
});
// Inicialización de Swiper para cada carrusel
document.addEventListener("DOMContentLoaded", function () {
    // Carrusel para la sección "Radio"
    new Swiper('#radio-carousel .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '#radio-carousel .swiper-button-next',
            prevEl: '#radio-carousel .swiper-button-prev',
        },
        slidesPerView: 4, // Muestra 4 videos al mismo tiempo
        spaceBetween: 20, // Espacio entre cada video
    });

    // Carrusel para la sección "Past Events"
    new Swiper('#past-events-carousel .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '#past-events-carousel .swiper-button-next',
            prevEl: '#past-events-carousel .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 20,
    });

    // Carrusel para la sección "Archives"
    new Swiper('#archives-carousel .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '#archives-carousel .swiper-button-next',
            prevEl: '#archives-carousel .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 20,
    });

    // Carrusel para la sección "Latest Videos"
    new Swiper('#latest-videos-carousel .swiper-container', {
        loop: true,
        navigation: {
            nextEl: '#latest-videos-carousel .swiper-button-next',
            prevEl: '#latest-videos-carousel .swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 20,
    });
});
const swiper = new Swiper('.swiper-container', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    slidesPerView: 4, // Número de videos visibles a la vez
    spaceBetween: 10, // Espaciado entre videos
});
const videoLinks = [
    { id: "Lr_FzTxMGRY", elementId: "title-1" },
    { id: "HVIwlYgXCok", elementId: "title-2" },
    { id: "n85C7QaAwG0", elementId: "title-3" },
    { id: "LW92C8wx3fc", elementId: "title-4" },
    { id: "0H2h7t8qu6M", elementId: "title-5" },
    { id: "-4bPIGdNJwc", elementId: "title-6" },
    { id: "f8GkpPINE_8", elementId: "title-7" },
    { id: "AAqZ0CMtbrk", elementId: "title-8" },
    { id: "Iiv38ni1C5U", elementId: "title-9" },
    { id: "2fGCpYQnFY0", elementId: "title-10" },
];

// API Key de YouTube
const apiKey = "YOUR_YOUTUBE_API_KEY";

videoLinks.forEach(video => {
    fetch(`https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${video.id}&key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const title = data.items[0]?.snippet.title || "Untitled Video";
            document.getElementById(video.elementId).innerText = title;
        })
        .catch(error => console.error("Error fetching video title:", error));
});
