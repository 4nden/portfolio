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
      title: "IT Patch",
      description: "Patch design for KTH's IT Chapter.",
      imagePath: "images/it-patch.png"
    },
    {
      title: "LAN 0x43",
      description: "Patch design for Halloween LAN event.",
      imagePath: "images/LAN0x43_new.png"
    },
    {
      title: "Game Show Patch",
      description: "Patch design for a Gameshow event.",
      imagePath: "images/gameshowpatch.png"
    },
    {
      title: "Nyckeln 0x02",
      description: "Drink Patch design.",
      imagePath: "images/Nyckeln0x02.png"
    },
    {
      title: "0x41 Design",
      description: "Patch design for LAN event.",
      imagePath: "images/0x41design.png"
    },
    {
      title: "n0llegasque Patch",
      description: "Patch Design for the final dinner (finsitttning) of the Media Technology Chapter's Reception.",
      imagePath: "images/n0g_ver1.1.2.png"
    },
    {
      title: "Eurovision Patch",
      description: "Designed for the pub hosted by the IT chapter's mastery (TMEIT) during the 2025 Eurovision finals.",
      imagePath: "images/eurovisionpatch.png"
    },
    {
      title: "IT Chapter Logos",
      description: "Updated logos (with and without chip emblem) designed for the IT Chapter/Sektionen (KTH).",
      imagePaths: ["images/it-chip.png", "images/bolt-duo.png"]
    },
    {
      title: "Kistan 2.0 LED Sign",
      description: "Designed for a custom LED sign at the IT chapter's student locale, Kistan 2.0, taking inspiration from the bar in Cyberpunk 2077.",
      imagePath: "images/kistan.png"
    },
    {
      title: "NymbLAN Logo",
      description: "Logo designed for one of Sweden's largest LAN events.",
      imagePath: "images/NymbLAN-logo2.png"
    }
  ]
};

// Export for use in app.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = portfolioData;
} else {
  window.portfolioData = portfolioData;
}
