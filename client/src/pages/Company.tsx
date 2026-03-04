/*
 * AMBERN LTD — Company / About Page
 * Design Philosophy: Dark Intelligence / Corporate Power
 * Colors: #0A0A0A (bg), #E8650A (orange accent), #FFFFFF (text), #1A1A1A (cards)
 * Typography: Space Grotesk (headings) + Inter (body)
 * Data source: Companies House UK — Company No. 16622550
 */

import { Link } from "wouter";

const LOGO_V1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/ambern_logo_v1_d51e72ba.png";
const LONDON_OFFICE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/london_office-6R5FRFnvMdYvxFUaatfByn.webp";

const companyData = {
  name: "AMBERN LTD",
  number: "16622550",
  status: "Active",
  type: "Private Limited Company",
  incorporated: "1 August 2025",
  registeredAddress: "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
  jurisdiction: "England & Wales",
  sic: "47910 — Retail sale via mail order houses or via Internet",
  confirmationDue: "14 August 2026",
  accountsDue: "1 May 2027",
  companiesHouseUrl: "https://find-and-update.company-information.service.gov.uk/company/16622550",
};

const directors = [
  {
    name: "Vinicius Fernandes",
    role: "Director & Company Secretary",
    nationality: "Brazilian",
    appointedOn: "1 August 2025",
    address: "71-75 Shelton Street, Covent Garden, London, United Kingdom, WC2H 9JQ",
  },
  {
    name: "Eduardo Nunes Angelus",
    role: "Director & Company Secretary",
    nationality: "Brazilian",
    appointedOn: "1 August 2025",
    address: "Rio Grande do Sul, Brazil",
  },
];

const milestones = [
  { year: "Aug 2025", event: "Ambern Ltd incorporated in England & Wales", icon: "🏢" },
  { year: "Q4 2025", event: "First affiliate programme partnerships established", icon: "🤝" },
  { year: "Q1 2026", event: "Tier-1 network access secured (ShareASale, Awin, CJ Affiliate)", icon: "🌐" },
  { year: "Q2 2026", event: "Expansion into US finance and cybersecurity verticals", icon: "📈" },
  { year: "Q3 2026", event: "Target: 60+ active affiliate programmes across 14 countries", icon: "🎯" },
];

export default function Company() {
  return (
    <div className="ambern-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        .ambern-root { background: #0A0A0A; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; }

        /* NAV */
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 60px; display: flex; align-items: center; justify-content: space-between; background: rgba(10,10,10,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(232,101,10,0.2); }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo img { height: 44px; width: 44px; object-fit: contain; }
        .nav-logo-text { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #fff; letter-spacing: 2px; }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.5px; transition: color 0.2s; }
        .nav-links a:hover, .nav-links a.active { color: #E8650A; }
        .nav-cta { background: #E8650A; color: #fff; padding: 10px 24px; border-radius: 4px; font-size: 14px; font-weight: 600; text-decoration: none; letter-spacing: 0.5px; transition: all 0.2s; }
        .nav-cta:hover { background: #ff7a1f; transform: translateY(-1px); }

        /* PAGE HERO */
        .page-hero { padding: 160px 60px 80px; background: linear-gradient(180deg, #111 0%, #0A0A0A 100%); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .page-hero-breadcrumb { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #E8650A; margin-bottom: 20px; }
        .page-hero-breadcrumb a { color: rgba(255,255,255,0.4); text-decoration: none; }
        .page-hero-breadcrumb a:hover { color: #E8650A; }
        .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(36px, 5vw, 64px); font-weight: 800; letter-spacing: -2px; line-height: 1.1; margin-bottom: 20px; }
        .page-hero h1 span { color: #E8650A; }
        .page-hero-sub { font-size: 18px; color: rgba(255,255,255,0.6); max-width: 600px; line-height: 1.7; }

        /* SECTION */
        .cp-section { padding: 80px 60px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .cp-section:last-child { border-bottom: none; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8650A; margin-bottom: 12px; }
        .section-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(24px, 3vw, 36px); font-weight: 700; letter-spacing: -1px; margin-bottom: 40px; }

        /* COMPANY REGISTRATION CARD */
        .reg-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 0; border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; overflow: hidden; }
        .reg-row { display: contents; }
        .reg-label { background: #111; padding: 18px 24px; font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.4); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .reg-value { background: #0A0A0A; padding: 18px 24px; font-size: 14px; font-weight: 500; color: #fff; border-bottom: 1px solid rgba(255,255,255,0.06); border-left: 1px solid rgba(255,255,255,0.06); }
        .reg-value.highlight { color: #E8650A; font-weight: 700; }
        .reg-value.active { color: #4ade80; font-weight: 700; }
        .reg-value a { color: #E8650A; text-decoration: none; }
        .reg-value a:hover { text-decoration: underline; }

        /* DIRECTORS */
        .directors-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(340px, 1fr)); gap: 24px; }
        .director-card { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 32px; position: relative; overflow: hidden; }
        .director-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: #E8650A; }
        .director-avatar { width: 56px; height: 56px; background: rgba(232,101,10,0.15); border: 1px solid rgba(232,101,10,0.3); border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 22px; margin-bottom: 20px; }
        .director-name { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; margin-bottom: 6px; }
        .director-role { font-size: 13px; font-weight: 600; color: #E8650A; letter-spacing: 0.5px; margin-bottom: 20px; }
        .director-details { display: flex; flex-direction: column; gap: 10px; }
        .director-detail { display: flex; gap: 12px; font-size: 13px; color: rgba(255,255,255,0.6); }
        .director-detail-label { color: rgba(255,255,255,0.3); min-width: 90px; font-size: 11px; text-transform: uppercase; letter-spacing: 1px; padding-top: 2px; }

        /* TIMELINE */
        .timeline { position: relative; padding-left: 40px; }
        .timeline::before { content: ''; position: absolute; left: 8px; top: 0; bottom: 0; width: 1px; background: rgba(232,101,10,0.3); }
        .timeline-item { position: relative; margin-bottom: 40px; }
        .timeline-item::before { content: ''; position: absolute; left: -36px; top: 6px; width: 12px; height: 12px; background: #E8650A; border-radius: 50%; box-shadow: 0 0 12px rgba(232,101,10,0.5); }
        .timeline-year { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #E8650A; margin-bottom: 6px; }
        .timeline-event { font-size: 16px; font-weight: 500; color: rgba(255,255,255,0.85); display: flex; align-items: center; gap: 10px; }

        /* ABOUT LAYOUT */
        .about-company { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .about-company-image { position: relative; border-radius: 8px; overflow: hidden; }
        .about-company-image img { width: 100%; height: 400px; object-fit: cover; display: block; }
        .about-company-image-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,10,10,0.3), rgba(232,101,10,0.1)); }
        .ch-badge { position: absolute; bottom: 20px; left: 20px; background: rgba(10,10,10,0.9); border: 1px solid rgba(232,101,10,0.4); border-radius: 6px; padding: 12px 16px; }
        .ch-badge-title { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700; color: #E8650A; }
        .ch-badge-sub { font-size: 11px; color: rgba(255,255,255,0.5); margin-top: 2px; }
        .about-company-text p { font-size: 16px; color: rgba(255,255,255,0.7); line-height: 1.8; margin-bottom: 20px; }
        .about-company-text p:last-child { margin-bottom: 0; }

        /* FOOTER */
        .footer { background: #050505; border-top: 1px solid rgba(255,255,255,0.06); padding: 60px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; padding-top: 30px; border-top: 1px solid rgba(255,255,255,0.06); flex-wrap: wrap; gap: 16px; }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.3); }
        .footer-reg-detail { font-size: 12px; color: rgba(255,255,255,0.2); margin-top: 6px; }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; }
        .footer-legal a:hover { color: #E8650A; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 120px 24px 60px; }
          .cp-section { padding: 60px 24px; }
          .reg-grid { grid-template-columns: 1fr; }
          .reg-value { border-left: none; }
          .about-company { grid-template-columns: 1fr; }
          .footer { padding: 40px 24px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav className="nav">
        <Link href="/" className="nav-logo">
          <img src={LOGO_V1} alt="Ambern Ltd" />
          <span className="nav-logo-text">AMBERN</span>
        </Link>
        <ul className="nav-links">
          <li><Link href="/#about">About</Link></li>
          <li><Link href="/#services">Services</Link></li>
          <li><Link href="/#networks">Networks</Link></li>
          <li><a href="/company" className="active">Company</a></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
        <Link href="/#contact" className="nav-cta">Partner With Us</Link>
      </nav>

      {/* PAGE HERO */}
      <div className="page-hero">
        <div className="page-hero-breadcrumb">
          <a href="/">Home</a> &nbsp;/&nbsp; Company Information
        </div>
        <h1>Ambern Ltd —<br /><span>Official Company</span> Information</h1>
        <p className="page-hero-sub">
          Full corporate registration details as filed with Companies House, England & Wales. Verified and publicly available at company number <strong style={{color:"#E8650A"}}>16622550</strong>.
        </p>
      </div>

      {/* REGISTRATION DETAILS */}
      <section className="cp-section">
        <div className="section-label">Companies House Record</div>
        <h2 className="section-title">Official Registration Details</h2>
        <div className="reg-grid">
          <div className="reg-label">Company Name</div>
          <div className="reg-value highlight">{companyData.name}</div>

          <div className="reg-label">Company Number</div>
          <div className="reg-value highlight">{companyData.number}</div>

          <div className="reg-label">Company Status</div>
          <div className="reg-value active">✓ {companyData.status}</div>

          <div className="reg-label">Company Type</div>
          <div className="reg-value">{companyData.type}</div>

          <div className="reg-label">Incorporated On</div>
          <div className="reg-value">{companyData.incorporated}</div>

          <div className="reg-label">Jurisdiction</div>
          <div className="reg-value">{companyData.jurisdiction}</div>

          <div className="reg-label">Registered Office</div>
          <div className="reg-value">{companyData.registeredAddress}</div>

          <div className="reg-label">Nature of Business (SIC)</div>
          <div className="reg-value">{companyData.sic}</div>

          <div className="reg-label">Confirmation Statement Due</div>
          <div className="reg-value">{companyData.confirmationDue}</div>

          <div className="reg-label">First Accounts Due</div>
          <div className="reg-value">{companyData.accountsDue}</div>

          <div className="reg-label">Companies House Record</div>
          <div className="reg-value">
            <a href={companyData.companiesHouseUrl} target="_blank" rel="noopener noreferrer">
              View on Companies House ↗
            </a>
          </div>
        </div>
      </section>

      {/* DIRECTORS */}
      <section className="cp-section">
        <div className="section-label">Officers</div>
        <h2 className="section-title">Directors & Company Secretaries</h2>
        <div className="directors-grid">
          {directors.map((d) => (
            <div className="director-card" key={d.name}>
              <div className="director-avatar">👤</div>
              <div className="director-name">{d.name}</div>
              <div className="director-role">{d.role}</div>
              <div className="director-details">
                <div className="director-detail">
                  <span className="director-detail-label">Nationality</span>
                  <span>{d.nationality}</span>
                </div>
                <div className="director-detail">
                  <span className="director-detail-label">Appointed</span>
                  <span>{d.appointedOn}</span>
                </div>
                <div className="director-detail">
                  <span className="director-detail-label">Address</span>
                  <span>{d.address}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT THE COMPANY */}
      <section className="cp-section">
        <div className="section-label">Our Story</div>
        <h2 className="section-title">About Ambern Ltd</h2>
        <div className="about-company">
          <div className="about-company-image">
            <img src={LONDON_OFFICE} alt="Ambern Ltd — London, Covent Garden" />
            <div className="about-company-image-overlay" />
            <div className="ch-badge">
              <div className="ch-badge-title">Covent Garden, London</div>
              <div className="ch-badge-sub">71-75 Shelton Street · WC2H 9JQ</div>
            </div>
          </div>
          <div className="about-company-text">
            <p>
              Ambern Ltd is a Private Limited Company incorporated in England and Wales on 1 August 2025, registered at 71-75 Shelton Street, Covent Garden, London — one of the most prestigious business addresses in the United Kingdom.
            </p>
            <p>
              The company was founded by Vinicius Fernandes and Eduardo Nunes Angelus with a clear mandate: to build a world-class performance marketing operation that leverages the credibility of a UK-registered entity to access the highest-tier affiliate programmes and brand partnerships globally.
            </p>
            <p>
              Registered under SIC code 47910 (Retail sale via mail order houses or via Internet), Ambern Ltd operates at the intersection of digital marketing, affiliate commerce and international media buying — specialising in paid traffic for finance, cybersecurity, SaaS and insurance verticals across Tier-1 English-speaking markets.
            </p>
            <p>
              Our London registration is not merely a legal formality. It is our primary competitive advantage: it grants us access to Tier-1 affiliate networks, financial programmes and brand partnerships that are simply not available to operators without an established international corporate presence.
            </p>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="cp-section">
        <div className="section-label">Company Journey</div>
        <h2 className="section-title">Our Milestones</h2>
        <div className="timeline">
          {milestones.map((m) => (
            <div className="timeline-item" key={m.year}>
              <div className="timeline-year">{m.year}</div>
              <div className="timeline-event"><span>{m.icon}</span> {m.event}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-bottom">
          <div>
            <p className="footer-copy">© 2025 Ambern Ltd. All rights reserved.</p>
            <p className="footer-reg-detail">
              Registered in England & Wales · Company No. 16622550 · 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
            </p>
          </div>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="https://find-and-update.company-information.service.gov.uk/company/16622550" target="_blank" rel="noopener noreferrer">Companies House ↗</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
