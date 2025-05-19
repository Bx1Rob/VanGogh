// Timeline data with actual events and paintings
const timeline = [
    {
        year: 1853,
        event: "Born in Groot-Zundert, Netherlands",
        description: "Vincent van Gogh's artistic journey began in the Netherlands, where he developed his early style influenced by Dutch masters and his deep connection to rural life.",
        paintings: []
    },
    {
        year: 1880,
        event: "Began his artistic career in Brussels",
        description: "In Brussels, Van Gogh started his formal art education, studying anatomy and perspective while developing his unique approach to capturing human emotion.",
        paintings: []
    },
    {
        year: 1885,
        event: "Created 'The Potato Eaters' in Nuenen",
        description: "This period marked Van Gogh's first major work, showcasing his commitment to portraying peasant life with raw emotional intensity and dark, earthy tones.",
        paintings: [{
            title: "The Potato Eaters",
            image: "https://upload.wikimedia.org/wikipedia/commons/8/8e/Vincent_van_Gogh_-_The_potato_eaters_-_Google_Art_Project_%285776925%29.jpg",
            location: "Nuenen, Netherlands"
        }]
    },
    {
        year: 1888,
        event: "Moved to Arles, France - A period of intense creativity",
        description: "In Arles, Van Gogh's style transformed dramatically. Inspired by the bright Provençal light, he developed his signature vibrant color palette and expressive brushwork.",
        paintings: [
            {
                title: "Sunflowers",
                image: "https://upload.wikimedia.org/wikipedia/commons/0/02/Vincent_van_Gogh_-_Sunflowers_%281888%2C_National_Gallery_London%29.jpg",
                location: "Arles, France"
            },
            {
                title: "Café Terrace at Night",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/3b/Vincent_van_Gogh,_Caf%C3%A9_Terrace_at_Night,_1888._Painting_inside_the_Kroller_Muller_Museum_-_panoramio.jpg",
                location: "Arles, France"
            },
            {
                title: "The Night Café",
                image: "https://upload.wikimedia.org/wikipedia/commons/7/76/Vincent_Willem_van_Gogh_076.jpg",
                location: "Arles, France"
            },
            {
                title: "Starry Night Over the Rhône",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/66/Starry_Night_Over_the_Rhone.jpg",
                location: "Arles, France"
            }
        ]
    },
    {
        year: 1889,
        event: "Created masterpieces in Saint-Rémy-de-Provence",
        description: "During his stay at the asylum in Saint-Rémy, Van Gogh created some of his most iconic works, characterized by swirling brushstrokes and emotional intensity.",
        paintings: [
            {
                title: "The Starry Night",
                image: "https://upload.wikimedia.org/wikipedia/commons/c/cd/VanGogh-starry_night.jpg",
                location: "Saint-Rémy-de-Provence, France"
            },
            {
                title: "Irises",
                image: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Irises-Vincent_van_Gogh.jpg",
                location: "Saint-Rémy-de-Provence, France"
            },
            {
                title: "Self-Portrait with Bandaged Ear",
                image: "https://upload.wikimedia.org/wikipedia/commons/6/62/Vincent_van_Gogh_-_Self_portrait_with_bandaged_ear_F529.jpg",
                location: "Arles, France"
            }
        ]
    },
    {
        year: 1890,
        event: "Final works in Auvers-sur-Oise",
        description: "In his final months, Van Gogh's work reached new heights of emotional expression, with paintings that reflect both his inner turmoil and his profound connection to nature.",
        paintings: [
            {
                title: "Portrait of Dr. Gachet",
                image: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Portrait_of_Dr._Gachet_%28second_version%29.jpg",
                location: "Auvers-sur-Oise, France"
            },
            {
                title: "Wheatfield with Crows",
                image: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Vincent_Van_Gogh_-_Wheatfield_with_Crows.jpg",
                location: "Auvers-sur-Oise, France"
            },
            {
                title: "The Church at Auvers",
                image: "https://upload.wikimedia.org/wikipedia/commons/b/b0/Vincent_Van_Gogh_-_The_Church_at_Auvers.jpg",
                location: "Auvers-sur-Oise, France"
            }
        ]
    }
];

// Function to create gallery items
function createGalleryItems() {
    const galleryGrid = document.querySelector('.gallery-grid');
    
    paintings.forEach(painting => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.innerHTML = `
            <div class="gallery-item-content">
                <img src="${painting.image}" alt="${painting.title}" loading="lazy">
                <h3>${painting.title}</h3>
                <p class="painting-id">Painting ID: ${painting.id}</p>
                <p class="location">Currently at: ${painting.location}</p>
                <p class="description">${painting.description}</p>
                <a href="painting.html?id=${painting.id}" class="learn-more">Learn More</a>
            </div>
        `;
        galleryGrid.appendChild(galleryItem);
    });
}

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all sections
document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    // Create gallery items if on gallery page
    if (document.querySelector('.gallery-grid')) {
        createGalleryItems();
    }
    
    // Create timeline if on timeline page
    if (document.querySelector('.timeline')) {
        createTimeline();
    }
    
    // Initialize the map
    initMap();
    
    // Add scroll event listener for navbar
    let lastScroll = 0;
    const navbar = document.querySelector('.nav-container');
    
    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;
        
        if (currentScroll <= 0) {
            navbar.classList.remove('scroll-up');
            return;
        }
        
        if (currentScroll > lastScroll && !navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-up');
            navbar.classList.add('scroll-down');
        } else if (currentScroll < lastScroll && navbar.classList.contains('scroll-down')) {
            navbar.classList.remove('scroll-down');
            navbar.classList.add('scroll-up');
        }
        lastScroll = currentScroll;
    });
});

function initMap() {
    // Check if the map container exists
    const mapContainer = document.getElementById('map');
    if (!mapContainer) return;

    // Add title and description above the map
    const mapTitle = document.createElement('h2');
    mapTitle.className = 'map-title';
    mapTitle.textContent = 'Journey of Van Gogh\'s Masterpieces';
    
    const mapDescription = document.createElement('p');
    mapDescription.className = 'map-description';
    mapDescription.textContent = 'Click on a marker to see where each painting was created and where it is currently displayed.';
    
    mapContainer.parentNode.insertBefore(mapDescription, mapContainer);
    mapContainer.parentNode.insertBefore(mapTitle, mapDescription);

    // Add loading animation
    const loadingContainer = document.createElement('div');
    loadingContainer.className = 'loading-container';
    loadingContainer.innerHTML = '<div class="loading-airplane">✈️</div>';
    mapContainer.appendChild(loadingContainer);

    // Initialize the map
    const map = L.map('map').setView([46.227638, 2.213749], 4);
    
    // Add the tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Remove loading animation when map is ready
    map.whenReady(() => {
        loadingContainer.remove();
    });

    // Group paintings by location with their current museum locations
    const locationGroups = {
        'Saint-Rémy-de-Provence': {
            lat: 43.6768,
            lng: 4.6305,
            paintings: [
                { title: 'The Starry Night (1889)', currentLocation: { lat: 40.7794, lng: -73.9632 }, museum: 'Museum of Modern Art, New York', id: 'starry-night' },
                { title: 'Irises (1889)', currentLocation: { lat: 34.0522, lng: -118.2437 }, museum: 'J. Paul Getty Museum, Los Angeles', id: 'irises' },
                { title: 'Almond Blossom (1890)', currentLocation: { lat: 52.3676, lng: 4.9041 }, museum: 'Van Gogh Museum, Amsterdam', id: 'almond-blossom' }
            ]
        },
        'Arles': {
            lat: 43.6768,
            lng: 4.6305,
            paintings: [
                { title: 'Self-Portrait with Bandaged Ear (1889)', currentLocation: { lat: 51.5074, lng: -0.1278 }, museum: 'Courtauld Gallery, London', id: 'self-portrait' },
                { title: 'Sunflowers (1888)', currentLocation: { lat: 51.5074, lng: -0.1278 }, museum: 'National Gallery, London', id: 'sunflowers' },
                { title: 'Café Terrace at Night (1888)', currentLocation: { lat: 52.3676, lng: 4.9041 }, museum: 'Kröller-Müller Museum, Otterlo', id: 'cafe-terrace' },
                { title: 'The Night Café (1888)', currentLocation: { lat: 41.8781, lng: -87.6298 }, museum: 'Yale University Art Gallery, New Haven', id: 'night-cafe' },
                { title: 'The Bedroom at Arles (1888)', currentLocation: { lat: 41.8781, lng: -87.6298 }, museum: 'Art Institute of Chicago', id: 'bedroom' },
                { title: 'The Starry Night Over the Rhone (1888)', currentLocation: { lat: 48.8566, lng: 2.3522 }, museum: 'Musée d\'Orsay, Paris', id: 'starry-night-rhone' }
            ]
        },
        'Auvers-sur-Oise': {
            lat: 49.0717,
            lng: 2.1707,
            paintings: [
                { title: 'The Church in Auvers (1890)', currentLocation: { lat: 48.8566, lng: 2.3522 }, museum: 'Musée d\'Orsay, Paris', id: 'church-auvers' },
                { title: 'Wheatfield with Crows (1890)', currentLocation: { lat: 52.3676, lng: 4.9041 }, museum: 'Van Gogh Museum, Amsterdam', id: 'wheatfield-crows' },
                { title: 'Portrait of Dr. Gachet (1890)', currentLocation: { lat: 48.8566, lng: 2.3522 }, museum: 'Musée d\'Orsay, Paris', id: 'dr-gachet' }
            ]
        },
        'Nuenen': {
            lat: 51.4543,
            lng: 5.4792,
            paintings: [
                { title: 'The Potato Eaters (1885)', currentLocation: { lat: 52.3676, lng: 4.9041 }, museum: 'Van Gogh Museum, Amsterdam', id: 'potato-eaters' }
            ]
        }
    };

    // Add markers for each location
    Object.entries(locationGroups).forEach(([location, data]) => {
        const popupContent = `
            <div class="map-popup">
                <h3>${location}</h3>
                <ul>
                    ${data.paintings.map(painting => `
                        <li>
                            <a href="#" class="painting-link" 
                               data-origin-lat="${data.lat}" 
                               data-origin-lng="${data.lng}"
                               data-dest-lat="${painting.currentLocation.lat}"
                               data-dest-lng="${painting.currentLocation.lng}"
                               data-museum="${painting.museum}"
                               data-painting-id="${painting.id}"
                               data-painting-title="${painting.title}">
                                ${painting.title}
                            </a>
                            <br>
                            <small>Currently at: ${painting.museum}</small>
                        </li>
                    `).join('')}
                </ul>
            </div>
        `;
        
        L.marker([data.lat, data.lng])
            .addTo(map)
            .bindPopup(popupContent);
    });

    // Add click event listeners to painting links
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('painting-link')) {
            e.preventDefault();
            
            const originLat = parseFloat(e.target.dataset.originLat);
            const originLng = parseFloat(e.target.dataset.originLng);
            const destLat = parseFloat(e.target.dataset.destLat);
            const destLng = parseFloat(e.target.dataset.destLng);
            const paintingId = e.target.dataset.paintingId;
            const paintingTitle = e.target.dataset.paintingTitle;
            const museum = e.target.dataset.museum;
            
            // Center map on destination
            map.setView([destLat, destLng], 12);
            
            // Add a marker at the destination with a custom popup
            const museumMarker = L.marker([destLat, destLng]).addTo(map);
            const popupContent = `
                <div class="museum-popup">
                    <h3>${paintingTitle}</h3>
                    <p>Currently displayed at: ${museum}</p>
                    <a href="painting.html?id=${paintingId}" class="learn-more-btn">Learn More About This Painting</a>
                </div>
            `;
            museumMarker.bindPopup(popupContent).openPopup();
        }
    });
}

// Load the Leaflet API
function loadLeafletAPI() {
    const script = document.createElement('script');
    script.src = 'https://unpkg.com/leaflet@1.7.1/dist/leaflet.js';
    script.async = true;
    script.defer = true;
    document.head.appendChild(script);
}

// Call the function to load the API
loadLeafletAPI();

function createTimeline() {
    const timelineContainer = document.querySelector('.timeline');
    if (!timelineContainer) return;

    // Add description at the top of the timeline
    const description = document.createElement('p');
    description.className = 'timeline-description';
    description.textContent = 'Explore Van Gogh\'s artistic evolution through his most significant works, from his early days in the Netherlands to his final masterpieces in France. Each painting tells a story of his emotional journey and artistic growth.';
    timelineContainer.appendChild(description);

    timeline.forEach(item => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        const paintingsHTML = item.paintings.map(painting => {
            // Find the painting ID from the locationGroups data
            const paintingId = Object.values(locationGroups).find(loc => 
                loc.paintings.some(p => p.title === painting.title)
            )?.paintings.find(p => p.title === painting.title)?.id;

            return `
                <a href="painting.html?id=${paintingId}" class="timeline-painting">
                    <img src="${painting.image}" alt="${painting.title}" loading="lazy">
                    <div class="painting-info">
                        <h4>${painting.title}</h4>
                        <p>${painting.location}</p>
                    </div>
                </a>
            `;
        }).join('');

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div class="timeline-year">${item.year}</div>
                <div class="timeline-event">${item.event}</div>
                <div class="timeline-description">${item.description}</div>
                <div class="timeline-paintings">
                    ${paintingsHTML}
                </div>
            </div>
        `;
        
        timelineContainer.appendChild(timelineItem);
    });
} 