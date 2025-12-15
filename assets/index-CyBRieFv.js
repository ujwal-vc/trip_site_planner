(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))a(t);new MutationObserver(t=>{for(const e of t)if(e.type==="childList")for(const n of e.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&a(n)}).observe(document,{childList:!0,subtree:!0});function o(t){const e={};return t.integrity&&(e.integrity=t.integrity),t.referrerPolicy&&(e.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?e.credentials="include":t.crossOrigin==="anonymous"?e.credentials="omit":e.credentials="same-origin",e}function a(t){if(t.ep)return;t.ep=!0;const e=o(t);fetch(t.href,e)}})();const c=document.querySelector("#app");let r="home";const d=new Date("2026-01-18"),h=new Date("2026-01-26"),g=i=>new Intl.DateTimeFormat("en-US",{weekday:"long",month:"short",day:"numeric"}).format(i),p={"2026-01-18":[{time:"07:40 AM - 10:50 AM",title:"Flight to Delhi",location:"Bangalore (BLR) -> Delhi (DEL)",image:"https://placehold.co/200x200/38bdf8/white?text=Flight",description:"Depart from Bangalore (BLR) and arrive in New Delhi (DEL). Transfer to hotel and freshen up."},{time:"02:00 PM - 02:00 PM",title:"India Gate & War Memorial",location:"Kartavya Path, New Delhi",image:"https://placehold.co/200x200/f472b6/white?text=India+Gate",description:"Start at India Gate for photos and a walk around the lawns. Visit the National War Memorial nearby for a glimpse of India's military history."},{time:"02:00 PM - 03:30 PM",title:"Lunch & Chill",location:"Khan Market / Connaught Place",image:"https://placehold.co/200x200/fbbf24/white?text=Lunch",description:"Head to Khan Market or Connaught Place (CP). Enjoy a relaxed lunch (Biryani, North Indian, or Burgers) and browse shops or relax in Central Park."},{time:"03:30 PM - 05:30 PM",title:"Humayun’s Tomb or Qutub Minar",location:"Mathura Road / Seth Sarai",image:"https://placehold.co/200x200/a78bfa/white?text=Humayun's+Tomb",description:"<strong>Option A:</strong> Humayun’s Tomb (Mughal architecture, gardens).<br><strong>Option B:</strong> Qutub Minar (UNESCO site, tall minaret)."},{time:"05:30 PM - 07:00 PM",title:"Sunset & Early Evening",location:"Sunder Nursery / Hauz Khas",image:"https://placehold.co/200x200/60a5fa/white?text=Sunset",description:"If Humayun’s: Sunder Nursery for lake/cafe vibes.<br>If Qutub: Hauz Khas Village for sunset and rooftop cafes."},{time:"07:00 PM - 08:00 PM",title:"Dinner & Night Vibes",location:"Connaught Place (CP)",image:"https://placehold.co/200x200/f87171/white?text=Dinner",description:"Return to Connaught Place for lively pubs/cafes, or stay near Khan Market/Lodhi Road for a quieter dinner."}]},u=(i,s)=>{const o=[];let a=new Date(i);for(;a<=s;)o.push(new Date(a)),a.setDate(a.getDate()+1);return o},m=u(d,h),v={"Essentials & Money":["Cash (4-5k)","Carry Bags","Tickets & ID Cards","Sun Glasses"],Clothing:["Thermals","Socks","Shoes","Beanie","Gloves","Fleece Jacket","Outer Jacket"],Electronics:["Power Bank","Torch Light"],Toiletries:["Toothbrush & Paste","Soap","Scent / Perfume","Towel","Wet Wipes","Shower Gel","Toilet Paper","Moisturizer"],"Health & Safety":["Band-aids","Safety Pins","Masks","Tablets (Altitude Sickness)","Tablets (Motion Sickness)","Tablets (Digestion)"],"Snacks & Misc":["Mentos / Center Fresh","Protein Bars"]},f=()=>`
  <nav class="navbar fixed-top navbar-expand-lg" style="background: rgba(15, 23, 42, 0.8); backdrop-filter: blur(10px); border-bottom: 1px solid var(--glass-border);">
    <div class="container-fluid">
      <a class="navbar-brand" href="#" style="font-family: var(--font-heading); color: var(--primary); font-size: 1.5rem;" onclick="navigateTo('home'); return false;">Journey 2026</a>
      <div class="d-flex gap-3">
        <button class="btn btn-sm ${r==="home"?"btn-light":"btn-outline-light"}" onclick="navigateTo('home')">Itinerary</button>
        <button class="btn btn-sm ${r==="checklist"?"btn-light":"btn-outline-light"}" onclick="navigateTo('checklist')">Packing List</button>
      </div>
    </div>
  </nav>
`,b=()=>`
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
`,y=()=>m.map((i,s)=>{const o=i.toISOString().split("T")[0],a=p[o];let t="";return a?t=a.map(e=>`
        <div class="schedule-item">
          ${e.image?`<img src="${e.image}" alt="${e.title}" class="schedule-thumb" />`:""}
          <div class="schedule-time">${e.time}</div>
          <div class="schedule-info">
            <h4>${e.title}</h4>
            ${e.location?`
              <div class="location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${e.location}
              </div>
            `:""}
            <p>${e.description}</p>
          </div>
        </div>
      `).join(""):t='<p style="text-align:center; color: var(--text-muted); font-style: italic;">Planning in progress...</p>',`
      <div class="timeline-item">
        <div class="timeline-dot"></div>
        <div class="glass-card" onclick="toggleCard(this)">
          <div class="caret-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
              <path d="M6 9l6 6 6-6"/>
            </svg>
          </div>
          <div class="card-header">
            <div class="date-label">${g(i)}</div>
            <h3 class="day-title">Day ${s+1}</h3>
          </div>
          <div class="day-details">
            ${t}
          </div>
        </div>
      </div>
    `}).join(""),w=()=>`
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
      ${y()}
    </div>
  </div>
`,k=()=>`
    <div class="container" style="padding-top: 100px; min-height: 80vh;">
      <div class="text-center mb-5">
        <h1 class="text-gradient" style="font-family: var(--font-heading); font-size: 3rem;">Packing List</h1>
        <p style="color: var(--text-muted);">Don't forget the essentials!</p>
      </div>
      <div class="row">
        ${Object.entries(v).map(([s,o])=>`
    <div class="col-md-6 mb-4">
      <div class="glass-card h-100" style="padding: 1.5rem;">
        <h3 style="color: var(--primary); font-family: var(--font-heading); margin-bottom: 1rem;">${s}</h3>
        <ul class="list-unstyled">
          ${o.map(a=>`
            <li class="d-flex align-items-center mb-2" style="font-size: 1.1rem; color: var(--text-main);">
              <input class="form-check-input me-3" type="checkbox" id="${a.replace(/\s+/g,"")}" style="width: 1.2em; height: 1.2em; border-color: var(--primary); background-color: transparent;">
              <label class="form-check-label" for="${a.replace(/\s+/g,"")}">${a}</label>
            </li>
          `).join("")}
        </ul>
      </div>
    </div>
  `).join("")}
      </div>
    </div>
  `;window.navigateTo=i=>{r=i,l(),window.scrollTo(0,0)};const l=()=>{c.innerHTML=`
    ${f()}
    <main>
      ${r==="home"?w():k()}
    </main>
    ${b()}
  `,r==="home"&&x()};window.toggleCard=i=>{i.closest(".timeline-item").classList.toggle("expanded-width"),i.classList.toggle("expanded")};const x=()=>{const i={threshold:.1,rootMargin:"0px"},s=new IntersectionObserver(o=>{o.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},i);document.querySelectorAll(".timeline-item").forEach(o=>{s.observe(o)})};l();
