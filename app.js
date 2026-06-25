document.addEventListener('DOMContentLoaded', () => {
    // Make sure portfolioData is loaded
    if (typeof portfolioData === 'undefined') {
        console.error('Portfolio data not found!');
        return;
    }

    // Initialize Grids
    initVideos(portfolioData.videos);
    initGraphicDesign(portfolioData.graphicDesign);
    initLightbox();
});

function initVideos(videos) {
    const grid = document.getElementById('videos-grid');
    if (!grid || !videos) return;

    videos.forEach(video => {
        const card = createVideoCard(video);
        grid.appendChild(card);
    });
}

function initGraphicDesign(graphics) {
    const grid = document.getElementById('graphic-grid');
    if (!grid || !graphics) return;

    graphics.forEach(graphic => {
        const card = document.createElement('div');
        card.className = 'card';
        
        card.innerHTML = `
            <div class="media-wrapper horizontal">
                <img src="${graphic.imagePath}" alt="${graphic.title}" class="graphic-img" loading="lazy">
            </div>
            <div class="card-content">
                <h3 class="card-title">${graphic.title}</h3>
                <p class="card-desc">${graphic.description}</p>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

function createVideoCard(video) {
    const card = document.createElement('div');
    card.className = 'card';

    // Default to horizontal aspect ratio for the combined video section
    card.innerHTML = `
        <div class="media-wrapper horizontal">
            <iframe 
                src="${video.embedUrl}" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                allowfullscreen
                loading="lazy">
            </iframe>
        </div>
        <div class="card-content">
            <h3 class="card-title">${video.title}</h3>
        </div>
    `;

    return card;
}

function initLightbox() {
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const closeBtn = document.getElementById('lightbox-close');

    // Use event delegation for dynamic images
    document.body.addEventListener('click', (e) => {
        if (e.target.classList.contains('graphic-img')) {
            lightboxImg.src = e.target.src;
            lightboxImg.alt = e.target.alt;
            lightbox.classList.add('active');
            document.body.style.overflow = 'hidden'; // Prevent scrolling
        }
    });

    closeBtn.addEventListener('click', closeLightbox);
    
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox.classList.contains('active')) {
            closeLightbox();
        }
    });

    function closeLightbox() {
        lightbox.classList.remove('active');
        document.body.style.overflow = ''; 
        setTimeout(() => {
            lightboxImg.src = '';
        }, 300); // Wait for transition
    }
}
