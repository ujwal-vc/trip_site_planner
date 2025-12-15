import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'

const app = document.querySelector('#app');

/* --- State Management --- */
let currentPage = 'home'; // 'home' or 'checklist'

/* --- Data: Itinerary --- */
const startDate = new Date('2026-01-18');
const endDate = new Date('2026-01-27');

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
      time: "11:30 AM - 01:30 PM",
      title: "Nizamuddin Station (Drop Luggage)",
      location: "Hazrat Nizamuddin Railway Station",
      image: "https://placehold.co/200x200/a855f7/white?text=Station",
      description: "Reach Nizamuddin Station and deposit luggage in the cloak room for safekeeping."
    },
    {
      time: "02:00 PM - 03:00 PM",
      title: "Humayun's Tomb & Food",
      location: "Mathura Road",
      image: "https://placehold.co/200x200/a78bfa/white?text=Humayun's+Tomb",
      description: "Explore the beautiful Mughal architecture of Humayun's Tomb and grab some quick bites nearby."
    },
    {
      time: "03:30 PM - 04:30 PM",
      title: "Red Fort",
      location: "Netaji Subhash Marg",
      image: "https://placehold.co/200x200/ef4444/white?text=Red+Fort",
      description: "Visit the historic Red Fort (Lal Qila) and admire the massive sandstone walls."
    },
    {
      time: "05:30 PM - 07:00 PM",
      title: "Chandni Chowk",
      location: "Old Delhi",
      image: "https://placehold.co/200x200/fbbf24/white?text=Chandni+Chowk",
      description: "Experience the chaos and charm of Old Delhi. Shop, eat street food (Paranthewali Gali), and explore."
    },
    {
      time: "07:30 PM - 08:00 PM",
      title: "India Gate & War Memorial",
      location: "Kartavya Path",
      image: "https://placehold.co/200x200/f472b6/white?text=India+Gate",
      description: "A quick evening visit to see the illuminated India Gate and War Memorial."
    },
    {
      time: "08:00 PM - 08:30 PM",
      title: "Dinner",
      location: "Near India Gate / Central Delhi",
      image: "https://placehold.co/200x200/f87171/white?text=Dinner",
      description: "Enjoy a hearty dinner before heading back to the station."
    },
    {
      time: "11:50 PM",
      title: "Train to Dehradun",
      location: "Hazrat Nizamuddin Station",
      image: "https://placehold.co/200x200/60a5fa/white?text=Train",
      description: "Board the train from Nizamuddin to Dehradun. Overnight journey."
    }
  ],
  "2026-01-19": [
    {
      time: "05:45 AM",
      title: "Arrival in Dehradun",
      location: "Dehradun Railway Station",
      image: "https://placehold.co/200x200/38bdf8/white?text=Dehradun",
      description: "Arrive at Dehradun station early morning."
    },
    {
      time: "08:00 AM",
      title: "Fresh Up & Ready",
      location: "Hotel in Dehradun",
      image: "https://placehold.co/200x200/f472b6/white?text=Hotel",
      description: "Check into a hotel to freshen up and get ready for the journey."
    },
    {
      time: "07:30 AM - 08:00 AM",
      title: "Assemble & Depart",
      location: "Dehradun",
      image: "https://placehold.co/200x200/fbbf24/white?text=Depart",
      description: "Gather with the group and start the drive towards Sankri (Base Camp)."
    },
    {
      time: "08:30 AM - 09:00 AM",
      title: "Breakfast Stop",
      location: "Purola / Roadside Dhaba",
      image: "https://placehold.co/200x200/a78bfa/white?text=Breakfast",
      description: "Stop for a hearty breakfast on the way."
    },
    {
      time: "01:30 PM - 02:00 PM",
      title: "Lunch Break",
      location: "Mori Area",
      image: "https://placehold.co/200x200/60a5fa/white?text=Lunch",
      description: "Enjoy lunch with scenic views."
    },
    {
      time: "04:30 PM - 05:30 PM",
      title: "Reach Sankri",
      location: "Sankri (6,400 ft)",
      image: "https://placehold.co/200x200/f87171/white?text=Sankri",
      description: "Arrive at Sankri base camp. The gateway to Har Ki Dun and Kedarkantha."
    },
    {
      time: "06:00 PM - 07:00 PM",
      title: "Check-in & Walk",
      location: "Sankri",
      image: "https://placehold.co/200x200/34d399/white?text=Walk",
      description: "Check-in to guesthouse/homestay. Tea and short acclimatization walk."
    },
    {
      time: "08:00 PM",
      title: "Dinner & Stay",
      location: "Sankri Guesthouse",
      image: "https://placehold.co/200x200/fb923c/white?text=Dinner",
      description: "Dinner and overnight stay."
    }
  ],
  "2026-01-20": [
    {
      time: "07:00 AM",
      title: "Wake up & Breakfast",
      location: "Sankri",
      image: "https://placehold.co/200x200/38bdf8/white?text=Morning",
      description: "Start the day with a good meal."
    },
    {
      time: "08:30 AM",
      title: "Start Trek",
      location: "Sankri -> Juda Ka Talab",
      image: "https://placehold.co/200x200/22c55e/white?text=Trek",
      description: "Begin the 4km trek towards Juda Ka Talab."
    },
    {
      time: "11:00 AM",
      title: "Short Break",
      location: "Trail",
      image: "https://placehold.co/200x200/f472b6/white?text=Break",
      description: "Water and snacks break."
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Reach Juda Ka Talab",
      location: "Juda Ka Talab (9,100 ft)",
      image: "https://placehold.co/200x200/3b82f6/white?text=Lake",
      description: "Arrive at the frozen lake campsite."
    },
    {
      time: "Afternoon",
      title: "Rest & Photography",
      location: "Campsite",
      image: "https://placehold.co/200x200/a855f7/white?text=Photo",
      description: "Acclimatization, relax and take photos of the stunning views."
    },
    {
      time: "07:30 PM",
      title: "Dinner & Stay",
      location: "Tents",
      image: "https://placehold.co/200x200/6366f1/white?text=Camp",
      description: "Dinner under the stars and overnight stay in tents."
    }
  ],
  "2026-01-21": [
    {
      time: "07:00 AM",
      title: "Breakfast",
      location: "Juda Ka Talab",
      image: "https://placehold.co/200x200/fbbf24/white?text=Food",
      description: "Fuel up for the day."
    },
    {
      time: "08:30 AM",
      title: "Start Trek",
      location: "towards Kedarkantha Base",
      image: "https://placehold.co/200x200/ef4444/white?text=Climb",
      description: "Trek ~4km towards the base camp."
    },
    {
      time: "11:30 AM",
      title: "Meadow Section",
      location: "Trail",
      image: "https://placehold.co/200x200/84cc16/white?text=Meadow",
      description: "Enjoy the scenic meadows and take a rest."
    },
    {
      time: "01:00 PM - 02:00 PM",
      title: "Reach Base Camp",
      location: "Kedarkantha Base Camp (11,250 ft)",
      image: "https://placehold.co/200x200/f97316/white?text=Base",
      description: "Arrive at the base camp. Spectacular views of peaks."
    },
    {
      time: "Afternoon",
      title: "Acclimatization",
      location: "Base Camp",
      image: "https://placehold.co/200x200/06b6d4/white?text=Relax",
      description: "Rest and acclimatize for the summit push."
    },
    {
      time: "07:00 PM",
      title: "Early Dinner & Sleep",
      location: "Tents",
      image: "https://placehold.co/200x200/1e293b/white?text=Sleep",
      description: "Early dinner and sleep for summit day preparation."
    }
  ],
  "2026-01-22": [
    {
      time: "02:30 AM - 03:00 AM",
      title: "Wake up",
      location: "Kedarkantha Base Camp",
      image: "https://placehold.co/200x200/facc15/white?text=Wake",
      description: "Wake up call and light snacks."
    },
    {
      time: "03:30 AM",
      title: "Start Summit Climb",
      location: "Summit Push",
      image: "https://placehold.co/200x200/e11d48/white?text=Summit",
      description: "Begin the climb to the peak in the dark under starlight."
    },
    {
      time: "07:00 AM - 08:00 AM",
      title: "Kedarkantha Summit",
      location: "Peak (12,500 ft)",
      image: "https://placehold.co/200x200/38bdf8/white?text=Peak",
      description: "Reach the summit for sunrise. 360-degree views of Himalayas."
    },
    {
      time: "08:30 AM",
      title: "Begin Descent",
      location: "Summit -> Base Camp",
      image: "https://placehold.co/200x200/94a3b8/white?text=Down",
      description: "Start descending back to base camp."
    },
    {
      time: "11:30 AM",
      title: "Back at Base Camp",
      location: "Base Camp",
      image: "https://placehold.co/200x200/fbbf24/white?text=Break",
      description: "Reach base camp for breakfast/lunch."
    },
    {
      time: "01:00 PM",
      title: "Continue Descent",
      location: "-> Juda Ka Talab",
      image: "https://placehold.co/200x200/22c55e/white?text=Walk",
      description: "Trek down to Juda Ka Talab campsite."
    },
    {
      time: "04:00 PM - 05:00 PM",
      title: "Reach Juda Ka Talab",
      location: "Campsite",
      image: "https://placehold.co/200x200/3b82f6/white?text=Camp",
      description: "Rest after a long day."
    },
    {
      time: "Night",
      title: "Dinner & Stay",
      location: "Tents",
      image: "https://placehold.co/200x200/4f46e5/white?text=Rest",
      description: "Celebratory dinner and overnight stay."
    }
  ],
  "2026-01-23": [
    {
      time: "07:00 AM",
      title: "Breakfast",
      location: "Juda Ka Talab",
      image: "https://placehold.co/200x200/fbbf24/white?text=Food",
      description: "Final mountain breakfast."
    },
    {
      time: "08:00 AM",
      title: "Descend to Sankri",
      location: "Trail",
      image: "https://placehold.co/200x200/10b981/white?text=Trek",
      description: "Walk down the final 4km to Sankri."
    },
    {
      time: "11:00 AM - 12:00 PM",
      title: "Reach Sankri",
      location: "Sankri Village",
      image: "https://placehold.co/200x200/f97316/white?text=Village",
      description: "Arrive at Sankri. End of trek."
    },
    {
      time: "12:30 PM",
      title: "Drive to Rishikesh",
      location: "Road Trip",
      image: "https://placehold.co/200x200/ef4444/white?text=Drive",
      description: "Start the long drive back towards Rishikesh (~10-11 hrs)."
    },
    {
      time: "03:30 PM",
      title: "Lunch Stop",
      location: "Enroute",
      image: "https://placehold.co/200x200/8b5cf6/white?text=Lunch",
      description: "Lunch break on the way."
    },
    {
      time: "08:30 PM - 09:30 PM",
      title: "Reach Rishikesh",
      location: "Rishikesh",
      image: "https://placehold.co/200x200/f472b6/white?text=Rishikesh",
      description: "Arrive in Rishikesh. Check-in to hotel/hostel."
    }
  ],
  "2026-01-24": [
    {
      time: "All Day",
      title: "Rishikesh Exploration",
      location: "Rishikesh",
      image: "https://placehold.co/200x200/ef4444/white?text=Rishikesh",
      description: "Day reserved for Rafting, Cafe Hopping, and exploring Rishikesh (Laxman Jhula, Beatles Ashram). (Plan TBD)"
    }
  ],
  "2026-01-25": [
    {
      time: "TBD",
      title: "Return to Delhi",
      location: "Rishikesh -> Delhi",
      image: "https://placehold.co/200x200/f59e0b/white?text=Bus",
      description: "Travel back to Delhi (Bus/Train). Overnight stay in Delhi or reach by morning."
    }
  ],
  "2026-01-26": [
    {
      time: "Morning",
      title: "Qutub Minar",
      location: "Mehrauli",
      image: "https://placehold.co/200x200/d97706/white?text=Qutub",
      description: "Visit the UNESCO World Heritage Site, Qutub Minar, the tallest brick minaret in the world."
    },
    {
      time: "Afternoon",
      title: "Akshardham Temple",
      location: "New Delhi",
      image: "https://placehold.co/200x200/be123c/white?text=Temple",
      description: "Explore the magnificent Swaminarayan Akshardham complex. Note: Phones/Electronics not allowed inside."
    },
    {
      time: "Evening",
      title: "Leisure / Shopping",
      location: "Delhi",
      image: "https://placehold.co/200x200/ec4899/white?text=Shop",
      description: "Last minute shopping or relaxing dinner."
    },
    {
      time: "08:30 PM",
      title: "Head to Airport",
      location: "Indira Gandhi International Airport (DEL)",
      image: "https://placehold.co/200x200/3b82f6/white?text=Airport",
      description: "Reach airport for check-in and security."
    },
    {
      time: "10:55 PM",
      title: "Flight to Bangalore",
      location: "DEL -> BLR",
      image: "https://placehold.co/200x200/06b6d4/white?text=Fly",
      description: "Board flight back home."
    }
  ],
  "2026-01-27": [
    {
      time: "02:00 AM",
      title: "Home Sweet Home",
      location: "Bangalore (BLR)",
      image: "https://placehold.co/200x200/10b981/white?text=Home",
      description: "Land in Bangalore. Trip Ends! 🏠❤️"
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
