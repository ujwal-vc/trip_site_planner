(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();const n=document.querySelector("#app"),l=new Date("2025-01-18"),c=new Date("2025-01-26"),d=i=>new Intl.DateTimeFormat("en-US",{weekday:"long",month:"short",day:"numeric"}).format(i),h={"2025-01-18":[{time:"07:40 AM - 12:00 PM",title:"Flight to Delhi",location:"Bangalore (BLR) -> Delhi (DEL)",image:"https://placehold.co/200x200/38bdf8/white?text=Flight",description:"Depart from Bangalore (BLR) and arrive in New Delhi (DEL). Transfer to hotel and freshen up."},{time:"02:00 PM - 02:00 PM",title:"India Gate & War Memorial",location:"Kartavya Path, New Delhi",image:"https://placehold.co/200x200/f472b6/white?text=India+Gate",description:"Start at India Gate for photos and a walk around the lawns. Visit the National War Memorial nearby for a glimpse of India's military history."},{time:"02:00 PM - 03:30 PM",title:"Lunch & Chill",location:"Khan Market / Connaught Place",image:"https://placehold.co/200x200/fbbf24/white?text=Lunch",description:"Head to Khan Market or Connaught Place (CP). Enjoy a relaxed lunch (Biryani, North Indian, or Burgers) and browse shops or relax in Central Park."},{time:"03:30 PM - 05:30 PM",title:"Humayun’s Tomb or Qutub Minar",location:"Mathura Road / Seth Sarai",image:"https://placehold.co/200x200/a78bfa/white?text=Humayun's+Tomb",description:"<strong>Option A:</strong> Humayun’s Tomb (Mughal architecture, gardens).<br><strong>Option B:</strong> Qutub Minar (UNESCO site, tall minaret)."},{time:"05:30 PM - 07:00 PM",title:"Sunset & Early Evening",location:"Sunder Nursery / Hauz Khas",image:"https://placehold.co/200x200/60a5fa/white?text=Sunset",description:"If Humayun’s: Sunder Nursery for lake/cafe vibes.<br>If Qutub: Hauz Khas Village for sunset and rooftop cafes."},{time:"07:00 PM - 08:00 PM",title:"Dinner & Night Vibes",location:"Connaught Place (CP)",image:"https://placehold.co/200x200/f87171/white?text=Dinner",description:"Return to Connaught Place for lively pubs/cafes, or stay near Khan Market/Lodhi Road for a quieter dinner."}]},u=(i,a)=>{const r=[];let o=new Date(i);for(;o<=a;)r.push(new Date(o)),o.setDate(o.getDate()+1);return r},p=u(l,c),g=()=>p.map((a,r)=>{const o=a.toISOString().split("T")[0],e=h[o];let t="";return e?t=e.map(s=>`
        <div class="schedule-item">
          ${s.image?`<img src="${s.image}" alt="${s.title}" class="schedule-thumb" />`:""}
          <div class="schedule-time">${s.time}</div>
          <div class="schedule-info">
            <h4>${s.title}</h4>
            ${s.location?`
              <div class="location-tag">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
                ${s.location}
              </div>
            `:""}
            <p>${s.description}</p>
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
            <div class="date-label">${d(a)}</div>
            <h3 class="day-title">Day ${r+1}</h3>
          </div>
          <div class="day-details">
            ${t}
          </div>
        </div>
      </div>
    `}).join("");n.innerHTML=`
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

      <p>January 18 - January 26, 2025</p>
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
      ${g()}
    </div>
  </div>

  <footer class="site-footer">
    <div class="footer-content">
      <p class="footer-title">A Personal Project Website</p>
      <p class="footer-desc">Designed to simplify travel planning and capture moments.</p>
      <div class="footer-links">
        <span>© 2025 Journey to the Horizon</span>
        <span class="separator">•</span>
        <span>Built with Vite & Vanilla JS</span>
      </div>
    </div>
  </footer>
`;window.toggleCard=i=>{i.closest(".timeline-item").classList.toggle("expanded-width"),i.classList.toggle("expanded")};const m={threshold:.1,rootMargin:"0px"},f=new IntersectionObserver(i=>{i.forEach(a=>{a.isIntersecting&&a.target.classList.add("visible")})},m);document.querySelectorAll(".timeline-item").forEach(i=>{f.observe(i)});
