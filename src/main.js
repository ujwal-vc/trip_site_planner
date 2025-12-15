import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const app = document.querySelector('#app');

/* --- State Management --- */
let currentPage = 'home'; // 'home' or 'checklist'

/* --- Data: Itinerary --- */
const startDate = new Date('2026-01-18');
const endDate = new Date('2026-01-26');

const formatDate = (date) => {
  return new Intl.DateTimeFormat('en-US', { weekday: 'long', month: 'short', day: 'numeric' }).format(date);
};

const itineraryData = {
  "2026-01-18": [
    {
      time: "07:40 AM - 10:50 AM",
      title: "Flight to Delhi",
      location: "Bangalore (BLR) -> Delhi (DEL)",
      image: "https://placehold.co/200x200/38bdf8/white?text=Flight",
      description: "Depart from Bangalore (BLR) and arrive in New Delhi (DEL). Transfer to hotel and freshen up."
    },
    {
      time: "02:00 PM - 02:00 PM",
      title: "India Gate & War Memorial",
      location: "Kartavya Path, New Delhi",
      image: "https://placehold.co/200x200/f472b6/white?text=India+Gate",
      description: "Start at India Gate for photos and a walk around the lawns. Visit the National War Memorial nearby for a glimpse of India's military history."
    },
    {
      time: "02:00 PM - 03:30 PM",
      title: "Lunch & Chill",
      location: "Khan Market / Connaught Place",
      image: "https://placehold.co/200x200/fbbf24/white?text=Lunch",
      description: "Head to Khan Market or Connaught Place (CP). Enjoy a relaxed lunch (Biryani, North Indian, or Burgers) and browse shops or relax in Central Park."
    },
    {
      time: "03:30 PM - 05:30 PM",
      title: "Humayun’s Tomb or Qutub Minar",
      location: "Mathura Road / Seth Sarai",
      image: "https://placehold.co/200x200/a78bfa/white?text=Humayun's+Tomb",
      description: "<strong>Option A:</strong> Humayun’s Tomb (Mughal architecture, gardens).<br><strong>Option B:</strong> Qutub Minar (UNESCO site, tall minaret)."
    },
    {
      time: "05:30 PM - 07:00 PM",
      title: "Sunset & Early Evening",
      location: "Sunder Nursery / Hauz Khas",
      image: "https://placehold.co/200x200/60a5fa/white?text=Sunset",
      description: "If Humayun’s: Sunder Nursery for lake/cafe vibes.<br>If Qutub: Hauz Khas Village for sunset and rooftop cafes."
    },
    {
      time: "07:00 PM - 08:00 PM",
      title: "Dinner & Night Vibes",
      location: "Connaught Place (CP)",
      image: "https://placehold.co/200x200/f87171/white?text=Dinner",
      description: "Return to Connaught Place for lively pubs/cafes, or stay near Khan Market/Lodhi Road for a quieter dinner."
    }
  ]
};

const getDates = (start, end) => {
  const dates = [];
  let current = new Date(start);
  while (current <= end) {
    dates.push(new Date(current));
    current.setDate(current.getDate() + 1);
  }
  return dates;
};

const tripDates = getDates(startDate, endDate);

/* --- Data: Packing List --- */
const packingList = {
  "Essentials & Money": [
    "Cash (4-5k)",
    "Carry Bags",
    "Tickets & ID Cards",
    "Sun Glasses"
  ],
  "Clothing": [
    "Thermals",
    "Socks",
    "Shoes",
    "Beanie",
    "Gloves",
    "Fleece Jacket",
    "Outer Jacket"
  ],
  "Electronics": [
    "Power Bank",
    "Torch Light"
  ],
  "Toiletries": [
    "Toothbrush & Paste",
    "Soap",
    "Scent / Perfume",
    "Towel",
    "Wet Wipes",
    "Shower Gel",
    "Toilet Paper",
    "Moisturizer"
  ],
  "Health & Safety": [
    "Band-aids",
    "Safety Pins",
    "Masks",
    "Tablets (Altitude Sickness)",
    "Tablets (Motion Sickness)",
    "Tablets (Digestion)"
  ],
  "Snacks & Misc": [
    "Mentos / Center Fresh",
    "Protein Bars"
  ]
};


/* --- Components --- */

const Navbar = () => `
  <nav class="navbar fixed-top navbar-expand-lg" style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(10px); border-bottom: 1px solid var(--glass-border);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="font-family: var(--font-heading); color: var(--primary); font-size: 1.5rem;" onclick="navigateTo('home'); return false;">Journey 2026</a>
      <div class="d-flex gap-3">
        <button class="btn btn-sm ${currentPage === 'home' ? 'btn-light' : 'btn-outline-light'}" onclick="navigateTo('home')">Itinerary</button>
        <button class="btn btn-sm ${currentPage === 'checklist' ? 'btn-light' : 'btn-outline-light'}" onclick="navigateTo('checklist')">Packing List</button>
      </div>
    </div>
  </nav>
`;

const Footer = () => `
  <footer class="site-footer">
    <div class="footer-content">
      <p class="footer-title">A Personal Project Website</p>
      <p class="footer-desc">Designed to simplify travel planning and capture moments.</p>
      <div class="footer-links">
        <span>© 2026 Journey to the Horizon</span>
        <span class="separator">•</span>
        <span>Built with Vite & Vanilla JS</span>
      </div>
    </div>
  </footer>
`;

const RenderTimeline = () => {
  return tripDates.map((date, index) => {
    const dateKey = date.toISOString().split('T')[0];
    const dayData = itineraryData[dateKey];

    let detailsHtml = '';
    if (dayData) {
      detailsHtml = dayData.map(item => `
        <div class="schedule-item">
          ${item.image ? `<img src="${item.image}" alt="${item.title}" class="schedule-thumb" />` : ''}
          <div class="schedule-time">${item.time}</div>
          <div class="schedule-info">
            <h4>${item.title}</h4>
            ${item.location ? `
              <div class="location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${item.location}
              </div>
            ` : ''}
            <p>${item.description}</p>
          </div>
        </div>
      `).join('');
    } else {
      detailsHtml = `<p style="text-align:center; color: var(--text-muted); font-style: italic;">Planning in progress...</p>`;
    }

    return `
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card" onclick="toggleCard(this)">
          <div class="caret-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="card-header">
            <div class="date-label">${formatDate(date)}</div>
            <h3 class="day-title">Day ${index + 1}</h3>
          </div>
          <div class="day-details">
            ${detailsHtml}
          </div>
        </div>
      </div>
    `;
  }).join('');
};

const HomePage = () => `
  <div class="hero">
    <div class="hero-background-grid">
      <img src="images/delhi_wallpaper.webp" class="hero-bg-img" alt="Delhi">
      <img src="images/agra_taj_wallpaper.jpeg" class="hero-bg-img" alt="Agra">
      <img src="images/kedarkanth_wallpaper.jpeg" class="hero-bg-img" alt="Mountains">
      <img src="images/Rishikesh.jpeg" class="hero-bg-img" alt="Rishikesh">
      <div class="hero-overlay"></div>
    </div>
    <div class="hero-content">
      <h1>The Journey Awaits</h1>
      <p>January 18 - January 26, 2026</p>
      <div style="margin-top: 2rem;">
        <span class="text-gradient" style="font-size: 1.2rem; font-weight: 600;">9 Days of Adventure</span>
      </div>
    </div>
    <div class="scroll-indicator">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
        <path d="M7 13l5 5 5-5M7 6l5 5 5-5"/>
      </svg>
    </div>
  </div>

  <div class="container timeline-section">
    <div class="timeline">
      ${RenderTimeline()}
    </div>
  </div>
`;

const ChecklistPage = () => {
  const categoriesHtml = Object.entries(packingList).map(([category, items]) => `
    <div class="col-md-6 mb-4">
      <div class="glass-card h-100" style="padding: 1.5rem;">
        <h3 style="color: var(--primary); font-family: var(--font-heading); margin-bottom: 1rem;">${category}</h3>
        <ul class="list-unstyled">
          ${items.map(item => `
            <li class="d-flex align-items-center mb-2" style="font-size: 1.1rem; color: var(--text-main);">
              <input class="form-check-input me-3" type="checkbox" id="${item.replace(/\s+/g, '')}" style="width: 1.2em; height: 1.2em; border-color: var(--primary); background-color: transparent;">
              <label class="form-check-label" for="${item.replace(/\s+/g, '')}">${item}</label>
            </li>
          `).join('')}
        </ul>
      </div>
    </div>
  `).join('');

  return `
    <div class="container" style="padding-top: 100px; min-height: 80vh;">
      <div class="text-center mb-5">
        <h1 class="text-gradient" style="font-family: var(--font-heading); font-size: 3rem;">Packing List</h1>
        <p style="color: var(--text-muted);">Don't forget the essentials!</p>
      </div>
      <div class="row">
        ${categoriesHtml}
      </div>
    </div>
  `;
};

/* --- Router & Rendering --- */

window.navigateTo = (page) => {
  currentPage = page;
  renderApp();
  window.scrollTo(0, 0);
};

const renderApp = () => {
  app.innerHTML = `
    ${Navbar()}
    <main>
      ${currentPage === 'home' ? HomePage() : ChecklistPage()}
    </main>
    ${Footer()}
  `;

  // Re-attach observers if on home page
  if (currentPage === 'home') {
    attachObservers();
  }
};

/* --- Event Handlers & Observers --- */

window.toggleCard = (card) => {
  const item = card.closest('.timeline-item');
  item.classList.toggle('expanded-width');
  card.classList.toggle('expanded');
};

const attachObservers = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.timeline-item').forEach(item => {
    observer.observe(item);
  });
}

// Initial Render
renderApp();
