// Pre-built templates — instant, no API required.
// Each returns a complete HTML string populated with business info.

function detectType(name, handle, desc) {
  const text = `${name} ${handle} ${desc}`.toLowerCase();
  if (/barber|hair|fade|cut|salon|beauty|spa|nail|lash|wax|facial/.test(text)) return 'beauty';
  if (/restaurant|food|eat|cafe|coffee|pizza|taco|burger|kitchen|chef|catering/.test(text)) return 'food';
  if (/plumb|electric|hvac|roof|clean|landscap|paint|contactor|handyman|repair|construction/.test(text)) return 'home';
  if (/gym|fitness|personal trainer|yoga|crossfit|workout|health|wellness/.test(text)) return 'fitness';
  if (/dentist|doctor|medical|clinic|therapy|chiro|optom|derma/.test(text)) return 'medical';
  return 'default';
}

const palettes = {
  beauty:  { primary: '#C084FC', bg: '#0F0A1A', card: '#1A0F2E', accent: '#E879F9', text: '#F3E8FF' },
  food:    { primary: '#F97316', bg: '#0C0A06', card: '#1C1208', accent: '#FB923C', text: '#FEF3C7' },
  home:    { primary: '#2563EB', bg: '#060B18', card: '#0D1830', accent: '#3B82F6', text: '#EFF6FF' },
  fitness: { primary: '#10B981', bg: '#051210', card: '#081F1A', accent: '#34D399', text: '#ECFDF5' },
  medical: { primary: '#0EA5E9', bg: '#050D18', card: '#091A2E', accent: '#38BDF8', text: '#F0F9FF' },
  default: { primary: '#2563EB', bg: '#060B18', card: '#0D1830', accent: '#3B82F6', text: '#EFF6FF' },
};

function buildTemplate(name, handle, desc, type) {
  const p = palettes[type] || palettes.default;
  const displayHandle = handle.startsWith('@') ? handle : '@' + handle;
  const igUrl = `https://instagram.com/${handle.replace('@','')}`;
  const year = new Date().getFullYear();

  const services = {
    beauty:  ['Custom Website', 'Social Media Content', 'Lead Automation', 'Online Booking Setup'],
    food:    ['Custom Website', 'Social Media Content', 'Review Management', 'Online Ordering Setup'],
    home:    ['Custom Website', 'Google & Meta Ads', 'Lead Follow-Up System', 'Review Generation'],
    fitness: ['Custom Website', 'Social Media Content', 'Lead Automation', 'Client Retention System'],
    medical: ['Custom Website', 'Patient Lead Generation', 'Reputation Management', 'Appointment Automation'],
    default: ['Custom Website', 'Social Media Content', 'Lead Generation', 'Marketing Automation'],
  }[type] || ['Custom Website', 'Social Media Content', 'Lead Generation', 'Marketing Automation'];

  const taglines = {
    beauty:  'Look and feel your best — every single day.',
    food:    'Made with love. Served with pride.',
    home:    'Reliable. Professional. Done right the first time.',
    fitness: 'Train harder. Live better. Feel unstoppable.',
    medical: 'Your health, in the right hands.',
    default: 'Premium service. Real results.',
  }[type] || 'Your business, elevated.';

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"/>
<meta name="viewport" content="width=device-width,initial-scale=1.0"/>
<title>${name}</title>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet"/>
<style>
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
:root{--p:${p.primary};--bg:${p.bg};--card:${p.card};--a:${p.accent};--t:${p.text}}
html{scroll-behavior:smooth}
body{font-family:'Inter',sans-serif;background:var(--bg);color:var(--t);line-height:1.6}
a{color:inherit;text-decoration:none}
/* NAV */
nav{position:sticky;top:0;z-index:100;display:flex;align-items:center;justify-content:space-between;padding:18px 40px;background:rgba(0,0,0,0.7);backdrop-filter:blur(16px);border-bottom:1px solid rgba(255,255,255,0.06)}
.nav-brand{font-size:20px;font-weight:900;letter-spacing:-0.5px}
.nav-cta{background:var(--p);color:#fff;padding:10px 22px;border-radius:100px;font-weight:700;font-size:14px;transition:opacity 0.2s}
.nav-cta:hover{opacity:0.85}
/* HERO */
.hero{min-height:90vh;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;padding:80px 24px;background:radial-gradient(ellipse 80% 50% at 50% 0%,color-mix(in srgb,var(--p) 20%,transparent),transparent 70%)}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:rgba(255,255,255,0.06);border:1px solid rgba(255,255,255,0.1);padding:8px 18px;border-radius:100px;font-size:13px;font-weight:600;margin-bottom:28px;color:var(--a)}
.hero h1{font-size:clamp(36px,6vw,72px);font-weight:900;line-height:1.05;letter-spacing:-2px;max-width:800px;margin-bottom:20px}
.hero h1 span{color:var(--a)}
.hero p{font-size:18px;color:rgba(255,255,255,0.55);max-width:480px;margin-bottom:40px}
.hero-actions{display:flex;gap:14px;flex-wrap:wrap;justify-content:center}
.btn{padding:15px 32px;border-radius:100px;font-weight:700;font-size:16px;transition:all 0.2s;cursor:pointer;border:none;font-family:inherit}
.btn-main{background:var(--p);color:#fff}
.btn-main:hover{opacity:0.85;transform:translateY(-2px)}
.btn-ghost{background:transparent;border:1px solid rgba(255,255,255,0.12);color:#fff}
.btn-ghost:hover{border-color:var(--a);color:var(--a)}
/* ABOUT */
.section{padding:100px 24px;max-width:1100px;margin:0 auto}
.section-label{font-size:11px;font-weight:800;letter-spacing:3px;text-transform:uppercase;color:var(--a);margin-bottom:14px}
.section h2{font-size:clamp(28px,4vw,48px);font-weight:900;letter-spacing:-1px;margin-bottom:20px;line-height:1.1}
.about-grid{display:grid;grid-template-columns:1fr 1fr;gap:60px;align-items:center}
.about-img{width:100%;aspect-ratio:4/3;background:var(--card);border-radius:20px;overflow:hidden}
.about-img img{width:100%;height:100%;object-fit:cover}
/* SERVICES */
.services-section{background:var(--card);padding:100px 24px}
.services-inner{max-width:1100px;margin:0 auto;text-align:center}
.services-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:24px;margin-top:48px}
.service-card{background:var(--bg);border:1px solid rgba(255,255,255,0.07);border-radius:18px;padding:32px 24px;text-align:left;transition:border 0.2s}
.service-card:hover{border-color:var(--a)}
.service-icon{width:44px;height:44px;background:color-mix(in srgb,var(--p) 15%,transparent);border-radius:12px;display:flex;align-items:center;justify-content:center;margin-bottom:18px;font-size:20px}
.service-card h3{font-size:18px;font-weight:700;margin-bottom:8px}
.service-card p{font-size:14px;color:rgba(255,255,255,0.45);line-height:1.6}
/* PROOF */
.proof-section{padding:100px 24px;max-width:900px;margin:0 auto;text-align:center}
.proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:32px;margin-top:48px}
.proof-stat{display:flex;flex-direction:column;gap:8px}
.proof-number{font-size:52px;font-weight:900;color:var(--a);letter-spacing:-2px}
.proof-label{font-size:15px;color:rgba(255,255,255,0.45)}
/* TESTIMONIAL */
.testimonial{background:var(--card);border:1px solid rgba(255,255,255,0.07);border-radius:24px;padding:48px;max-width:700px;margin:60px auto 0;text-align:left}
.testimonial p{font-size:18px;line-height:1.7;color:rgba(255,255,255,0.8);margin-bottom:24px;font-style:italic}
.testimonial .author{font-weight:700;font-size:15px}
/* CTA SECTION */
.cta-section{padding:120px 24px;text-align:center;background:radial-gradient(ellipse 60% 80% at 50% 100%,color-mix(in srgb,var(--p) 15%,transparent),transparent)}
.cta-section h2{font-size:clamp(28px,4vw,52px);font-weight:900;letter-spacing:-1px;margin-bottom:16px}
.cta-section p{color:rgba(255,255,255,0.5);font-size:17px;margin-bottom:40px}
/* CONTACT */
.contact-section{background:var(--card);padding:100px 24px}
.contact-inner{max-width:600px;margin:0 auto;text-align:center}
.contact-form{margin-top:40px;display:flex;flex-direction:column;gap:14px}
.contact-form input,.contact-form textarea{width:100%;background:var(--bg);border:1px solid rgba(255,255,255,0.08);color:#fff;font-family:inherit;font-size:15px;padding:14px 16px;border-radius:12px;outline:none;transition:border 0.2s}
.contact-form input:focus,.contact-form textarea:focus{border-color:var(--a)}
.contact-form textarea{min-height:120px;resize:vertical}
.contact-form input::placeholder,.contact-form textarea::placeholder{color:rgba(255,255,255,0.2)}
/* FOOTER */
footer{padding:40px 24px;text-align:center;border-top:1px solid rgba(255,255,255,0.06);font-size:13px;color:rgba(255,255,255,0.3)}
footer a{color:var(--a);margin:0 12px}
/* RESPONSIVE */
@media(max-width:768px){
  nav{padding:16px 20px}
  .about-grid{grid-template-columns:1fr}
  .proof-grid{grid-template-columns:1fr}
  .section{padding:60px 20px}
}
</style>
</head>
<body>

<nav>
  <div class="nav-brand">${name}</div>
  <a class="nav-cta" href="#contact">Get In Touch</a>
</nav>

<section class="hero">
  <div class="hero-badge">⭐ ${displayHandle} on Instagram</div>
  <h1>Welcome to <span>${name}</span></h1>
  <p>${taglines}</p>
  <div class="hero-actions">
    <a class="btn btn-main" href="#contact">Work With Us</a>
    <a class="btn btn-ghost" href="${igUrl}" target="_blank">Follow on Instagram</a>
  </div>
</section>

<div class="section">
  <div class="about-grid">
    <div>
      <div class="section-label">About Us</div>
      <h2>Who We Are</h2>
      <p style="color:rgba(255,255,255,0.55);margin-bottom:24px;">${desc || `We are ${name} — a passionate team dedicated to delivering exceptional service and real results for every client we work with.`}</p>
      <p style="color:rgba(255,255,255,0.55);">Based in our community, we've built our reputation on trust, quality, and going above and beyond. Find us on Instagram at <a href="${igUrl}" style="color:var(--a);font-weight:600;">${displayHandle}</a>.</p>
    </div>
    <div class="about-img">
      <img src="https://placehold.co/600x450/${p.bg.replace('#','')}/ffffff?text=${encodeURIComponent(name)}" alt="${name}" />
    </div>
  </div>
</div>

<div class="services-section">
  <div class="services-inner">
    <div class="section-label">What We Offer</div>
    <h2>Our Services</h2>
    <div class="services-grid">
      ${services.map((s, desc, i) => `
      <div class="service-card">
        <div class="service-icon">${['✦','◈','⬡','◇'][i]}</div>
        <h3>${s}</h3>
        <p>${[
          `Everything you need to show up professionally — built and launched so you don't have to figure it out.`,
          `Content that actually represents your brand, posted consistently so you stay top of mind.`,
          `Automations and systems that follow up, qualify, and convert leads — without you lifting a finger.`,
          `Targeted outreach and ad campaigns that bring real buyers to your door.`,
        ][i] || `Delivered with care and precision so you can focus on running your business.`}</p>
      </div>`).join('')}
    </div>
  </div>
</div>

<div class="proof-section">
  <div class="section-label">Our Results</div>
  <h2>Why Clients Choose Us</h2>
  <div class="proof-grid">
    <div class="proof-stat">
      <div class="proof-number">200+</div>
      <div class="proof-label">Happy Clients</div>
    </div>
    <div class="proof-stat">
      <div class="proof-number">4.8★</div>
      <div class="proof-label">Average Rating</div>
    </div>
    <div class="proof-stat">
      <div class="proof-number">98%</div>
      <div class="proof-label">Would Refer a Friend</div>
    </div>
  </div>
  <div class="testimonial">
    <p>"I was skeptical at first, but within two weeks of working with them my phone wouldn't stop ringing. Best investment I've made for my business — period."</p>
    <div class="author">— Maria T., Local Business Owner</div>
  </div>
</div>

<div class="cta-section">
  <h2>Ready to get started?</h2>
  <p>Let's have a quick conversation and see if we're the right fit for you.</p>
  <a class="btn btn-main" href="#contact">Book a Free Call →</a>
</div>

<div class="contact-section" id="contact">
  <div class="contact-inner">
    <div class="section-label">Get In Touch</div>
    <h2>Let's Talk</h2>
    <p style="color:rgba(255,255,255,0.45);margin-top:12px;">Fill out the form below and we'll get back to you within 24 hours.</p>
    <form class="contact-form" onsubmit="return false;">
      <input type="text" placeholder="Your Name" />
      <input type="email" placeholder="Your Email" />
      <input type="tel" placeholder="Your Phone (optional)" />
      <textarea placeholder="Tell us about what you need..."></textarea>
      <button type="submit" class="btn btn-main">Send Message →</button>
    </form>
  </div>
</div>

<footer>
  <p>${name} · Find us on Instagram: <a href="${igUrl}" target="_blank">${displayHandle}</a></p>
  <p style="margin-top:12px">© ${year} ${name}. All rights reserved. · Website by <a href="https://welcomelane.com" target="_blank">Welcome Lane</a></p>
</footer>

</body>
</html>`;
}

module.exports = { buildTemplate, detectType };
