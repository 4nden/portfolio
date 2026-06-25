const portfolioData = {
  videos: [
    {
      title: "Every Stockholm Metro Station | ITK LAN 0x41 - Trailer",
      embedUrl: "https://www.youtube.com/embed/tDU9B-dWwgE"
    },
    {
      title: "ITK LAN 0x3F - Trailer",
      embedUrl: "https://www.youtube.com/embed/W941dEhb0zY"
    },
    {
      title: "ITK LAN 0x3E - Trailer",
      embedUrl: "https://www.youtube.com/embed/aeLw1ikbHzI"
    },
    {
      title: "A Minekraft ITexKursion",
      embedUrl: "https://www.youtube.com/embed/7bWtw3FLIFQ"
    },
    {
      title: "ITK Reception Movie - 2025",
      embedUrl: "https://www.youtube.com/embed/Iz6EgI9KFiA"
    },
    {
      title: "ITK Reception Movie - 2024",
      embedUrl: "https://www.youtube.com/embed/zd89YSMTwOo"
    },
    {
      title: "ITK LAN 0x3C - Teaser Trailer",
      embedUrl: "https://www.youtube.com/embed/vW7x2a3YBs0"
    },
    {
      title: "Welcome to TMEIT - Reception Video 2024",
      embedUrl: "https://www.youtube.com/embed/W9uJE4HACds"
    },
    {
      title: "British Pub 20/09 (Trailer) -TMEIT",
      embedUrl: "https://www.youtube.com/embed/z_d-z80WoLg"
    },
    {
      title: "Eurovision Pub (09/05) - Teaser",
      embedUrl: "https://www.youtube.com/embed/Ble-ab-PZak"
    },
    {
      title: "TMEIT Presents - How to Ovve",
      embedUrl: "https://www.youtube.com/embed/2JmzmjrIvsI"
    }
  ],
  graphicDesign: [
    {
      title: "Custom Committee Patch",
      imagePath: "images/patch1.png"
    },
    {
      title: "Promotional Poster",
      imagePath: "images/poster1.png"
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = portfolioData;
} else {
    window.portfolioData = portfolioData;
}
