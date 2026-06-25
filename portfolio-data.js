const portfolioData = {
  videos: [
    {
      title: "Campaign Video 1",
      description: "Promotional campaign video focusing on fast-paced pacing and audience retention.",
      embedUrl: "https://www.youtube.com/embed/tDU9B-dWwgE"
    },
    {
      title: "Campaign Video 2",
      description: "High-quality production for wide audiences.",
      embedUrl: "https://www.youtube.com/embed/W941dEhb0zY"
    },
    {
      title: "Campaign Video 3",
      description: "Event highlight reel.",
      embedUrl: "https://www.youtube.com/embed/aeLw1ikbHzI"
    },
    {
      title: "Brand Story",
      description: "Narrative-driven horizontal content.",
      embedUrl: "https://www.youtube.com/embed/7bWtw3FLIFQ"
    },
    {
      title: "Promotional 1",
      description: "Dynamic product showcase.",
      embedUrl: "https://www.youtube.com/embed/Iz6EgI9KFiA"
    },
    {
      title: "Promotional 2",
      description: "Engaging commercial spot.",
      embedUrl: "https://www.youtube.com/embed/zd89YSMTwOo"
    },
    {
      title: "Event Recap 1",
      description: "Capturing the energy of live events.",
      embedUrl: "https://www.youtube.com/embed/vW7x2a3YBs0"
    },
    {
      title: "Event Recap 2",
      description: "Action-packed event coverage.",
      embedUrl: "https://www.youtube.com/embed/W9uJE4HACds"
    },
    {
      title: "Campaign Video 4",
      description: "Visual storytelling at its finest.",
      embedUrl: "https://www.youtube.com/embed/z_d-z80WoLg"
    },
    {
      title: "Campaign Video 5",
      description: "Cinematic and engaging.",
      embedUrl: "https://www.youtube.com/embed/Ble-ab-PZak"
    },
    {
      title: "Campaign Video 6",
      description: "Modern brand promotion.",
      embedUrl: "https://www.youtube.com/embed/2JmzmjrIvsI"
    }
  ],
  graphicDesign: [
    {
      title: "Custom Committee Patch",
      description: "Vector asset designed for physical merchandise embroidery.",
      imagePath: "images/patch1.png"
    },
    {
      title: "Promotional Poster",
      description: "Print and digital asset created using Adobe Illustrator.",
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
