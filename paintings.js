// Van Gogh paintings data
const paintings = [
    {
        title: "The Starry Night",
        id: "F612",
        year: 1889,
        description: "One of Van Gogh's most famous works, painted in Saint-Rémy-de-Provence.",
        personalDescription: "This painting has always held a special place in my heart. The way Van Gogh captured the swirling night sky, with those bold, expressive brushstrokes, creates a sense of movement that's almost hypnotic. The cypress tree in the foreground, reaching up like a dark flame, adds such a powerful contrast to the vibrant blues and yellows of the sky. It's incredible how he transformed a simple night scene into something so emotionally charged and alive.",
        location: "Museum of Modern Art (MoMA), New York, USA",
        image: "images/The Starry Night.jpg",
        source: "https://www.moma.org/collection/works/79802"
    },
    {
        title: "Café Terrace at Night",
        id: "F467",
        year: 1888,
        description: "A colorful night scene of the cafe terrace on the Place du Forum in Arles.",
        personalDescription: "There's something magical about how Van Gogh captured the warm glow of the café lights against the deep blue of the night sky. The way the yellow light spills onto the cobblestone street creates such a welcoming atmosphere. I love how he used the stars to frame the scene, making the night feel alive and full of possibility.",
        location: "Kröller-Müller Museum, Otterlo, Netherlands",
        image: "images/cafe-terrace-at-night.jpg",
        source: "https://krollermuller.nl/en/vincent-van-gogh-terrace-of-a-cafe-at-night"
    },
    {
        title: "Irises",
        id: "F608",
        year: 1889,
        description: "Painted in the garden of the asylum at Saint-Rémy-de-Provence.",
        personalDescription: "The irises in this painting seem to dance across the canvas, each one with its own personality. I'm particularly drawn to how Van Gogh captured the delicate curves of the petals and the rich variations in the purple hues. It's amazing how he found such beauty in the hospital garden during a difficult period of his life.",
        location: "J. Paul Getty Museum, Los Angeles, USA",
        image: "images/Irises-Vincent_van_Gogh.jpg",
        source: "https://www.getty.edu/art/collection/objects/826/vincent-van-gogh-irises-dutch-1889/"
    },
    {
        title: "Portrait of Dr. Gachet",
        id: "F754",
        year: 1890,
        description: "One of Van Gogh's most famous portraits, painted in Auvers-sur-Oise.",
        personalDescription: "The doctor's thoughtful expression in this portrait always moves me. You can see the weight of his concern in his eyes, and the way Van Gogh captured the relationship between artist and physician is incredibly touching. The swirling background adds an emotional intensity that makes this one of my favorite portraits.",
        location: "Musée d'Orsay, Paris, France",
        image: "images/portrait-of-dr-gachet.jpg",
        source: "https://www.musee-orsay.fr/en/artworks/le-docteur-paul-gachet-210"
    },
    {
        title: "Sunflowers",
        id: "F454",
        year: 1888,
        description: "Part of Van Gogh's famous Sunflowers series, painted in Arles.",
        personalDescription: "These sunflowers have such incredible energy - they seem to reach out from the canvas. I love how Van Gogh captured the different stages of the flowers' lives, from fresh blooms to wilting petals. The bold yellows against the blue background create such a striking contrast that always lifts my spirits.",
        location: "National Gallery, London, UK",
        image: "images/Vincent_van_Gogh_-_Sunflowers_-_VGM_F458.jpg",
        source: "https://www.nationalgallery.org.uk/paintings/vincent-van-gogh-sunflowers"
    },
    {
        title: "Bedroom in Arles",
        id: "F482",
        year: 1888,
        description: "A depiction of Van Gogh's bedroom at 2 Place Lamartine in Arles.",
        personalDescription: "This painting gives us such an intimate glimpse into Van Gogh's world. I'm fascinated by how he used color to create a sense of calm and order in his personal space. The slightly tilted angles and bold colors make the room feel alive, yet peaceful - it's like we're seeing the world through his eyes.",
        location: "Van Gogh Museum, Amsterdam, Netherlands",
        image: "images/the-bedroom-at-arles.jpg",
        source: "https://www.vangoghmuseum.nl/en/collection/s0047V1962"
    },
    {
        title: "The Potato Eaters",
        id: "F82",
        year: 1885,
        description: "One of Van Gogh's early masterpieces, depicting peasant life.",
        personalDescription: "This painting has always struck me with its raw honesty. The way Van Gogh captured the weathered faces of the peasants, illuminated by the dim light, shows such deep respect for their lives. The earthy tones and rough brushstrokes create a powerful sense of the harsh reality they faced, yet there's dignity in every face.",
        location: "Van Gogh Museum, Amsterdam, Netherlands",
        image: "images/potato-eaters.jpg",
        source: "https://www.vangoghmuseum.nl/en/collection/s0005V1962"
    },
    {
        title: "Starry Night Over the Rhône",
        id: "F474",
        year: 1888,
        description: "A night scene of the Rhône River in Arles, painted before The Starry Night.",
        personalDescription: "The way the city lights reflect on the water in this painting creates such a peaceful atmosphere. I love how Van Gogh captured the subtle movement of the river and the twinkling stars above. It's a more serene night scene than The Starry Night, but equally captivating in its own way.",
        location: "Musée d'Orsay, Paris, France",
        image: "images/the-starry-night-over-the-rhone.jpg",
        source: "https://www.musee-orsay.fr/fr/oeuvres/la-nuit-etoilee-78696"
    },
    {
        title: "The Night Café",
        id: "F463",
        year: 1888,
        description: "A vivid interior scene of the Café de la Gare in Arles.",
        personalDescription: "The intense colors in this painting create such a powerful atmosphere. I'm always struck by how Van Gogh used the warm yellows and greens to convey the late-night mood of the café. The empty tables and chairs tell a story of loneliness, yet the vibrant colors make the scene feel alive with emotion.",
        location: "Yale University Art Gallery, New Haven, USA",
        image: "images/the night cafe.jpg",
        source: "https://artgallery.yale.edu/collections/objects/12507"
    },
    {
        title: "Wheatfield with Crows",
        id: "F779",
        year: 1890,
        description: "One of Van Gogh's last paintings, created in Auvers-sur-Oise.",
        personalDescription: "This painting has always moved me deeply, knowing it was one of Van Gogh's last works. The dramatic sky and the crows flying overhead create such a powerful sense of emotion. The way the paths seem to lead nowhere adds to the painting's haunting quality, making it one of his most poignant works.",
        location: "Van Gogh Museum, Amsterdam, Netherlands",
        image: "images/Wheatfield with Crows.jpg",
        source: "https://www.vangoghmuseum.nl/en/collection/s0149V1962"
    },
    {
        title: "Almond Blossom",
        id: "F671",
        year: 1890,
        description: "A celebration of new life, painted for his newborn nephew.",
        personalDescription: "This painting always brings a smile to my face. The delicate pink and white blossoms against the clear blue sky create such a sense of hope and renewal. It's touching to know Van Gogh painted this to celebrate new life, and you can feel his joy in every brushstroke.",
        location: "Van Gogh Museum, Amsterdam, Netherlands",
        image: "images/almond-blossom.jpg",
        source: "https://www.vangoghmuseum.nl/en/collection/s0176V1962"
    },
    {
        title: "Self-Portrait with Bandaged Ear",
        id: "F527",
        year: 1889,
        description: "Painted after Van Gogh cut off his left ear following a breakdown.",
        personalDescription: "This self-portrait always strikes me with its raw honesty. Despite the bandaged ear, Van Gogh's expression is remarkably calm and focused. I'm amazed by his courage in confronting his own image during such a difficult time, and the way he used color to convey his emotional state.",
        location: "Courtauld Gallery, London, UK",
        image: "images/Self-Portrait with Bandaged Ear.jpg",
        source: "https://courtauld.ac.uk/highlights/self-portrait-with-bandaged-ear/"
    },
    {
        title: "The Church at Auvers",
        id: "F789",
        year: 1890,
        description: "A depiction of the church in Auvers-sur-Oise, painted shortly before his death.",
        personalDescription: "The way Van Gogh transformed this familiar church into something so expressive always fascinates me. The distorted perspective and vibrant colors create a sense of movement and energy that's uniquely his. It's one of my favorites for how it shows his ability to see the world in his own distinctive way.",
        location: "Musée d'Orsay, Paris, France",
        image: "images/The_Church_in_Auvers.jpg",
        source: "https://www.musee-orsay.fr/fr/collections/catalogue-des-oeuvres/notice.html?nnumid=755"
    }
]; 