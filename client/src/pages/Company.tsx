/*
 * AMBERN LTD — Affiliate Registration Kit (Password Protected)
 * Design Philosophy: Dark Intelligence / Corporate Power
 * Colors: #0A0A0A (bg), #E8650A (orange accent), #FFFFFF (text), #1A1A1A (cards)
 * Typography: Space Grotesk (headings) + Inter (body)
 * Purpose: Quick-copy panel for filling affiliate network application forms
 * Access: Password protected — PIN required
 */

import { useState } from "react";
import { Link } from "wouter";

const LOGO_V1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/ambern_logo_v1_d51e72ba.png";

const ACCESS_PIN = "536372";

// ─── All data you'll ever need for affiliate applications ───────────────────
const sections = [
  {
    id: "company",
    icon: "🏢",
    title: "Company Details",
    description: "Core registration info — used in every application form",
    fields: [
      { label: "Legal Company Name", value: "Ambern Ltd" },
      { label: "Trading Name", value: "Ambern" },
      { label: "Company Number (UK)", value: "16622550" },
      { label: "Company Type", value: "Private Limited Company" },
      { label: "Incorporation Date", value: "1 August 2025" },
      { label: "Jurisdiction", value: "England and Wales" },
      { label: "Country of Registration", value: "United Kingdom" },
      { label: "VAT Number", value: "Not yet registered (below threshold)" },
      { label: "Industry / SIC Code", value: "47910 — Retail sale via mail order houses or via Internet" },
    ],
  },
  {
    id: "address",
    icon: "📍",
    title: "Registered Address",
    description: "Official address as filed with Companies House",
    fields: [
      { label: "Full Registered Address", value: "71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom" },
      { label: "Address Line 1", value: "71-75 Shelton Street" },
      { label: "Address Line 2", value: "Covent Garden" },
      { label: "City", value: "London" },
      { label: "County / State", value: "Greater London" },
      { label: "Postcode / ZIP", value: "WC2H 9JQ" },
      { label: "Country", value: "United Kingdom" },
    ],
  },
  {
    id: "contact",
    icon: "📧",
    title: "Contact & Website",
    description: "Business contact details for affiliate applications",
    fields: [
      { label: "Business Email", value: "partnerships@ambern.uk" },
      { label: "Website URL", value: "https://ambern.uk" },
      { label: "Skype / Telegram", value: "partnerships@ambern.uk" },
    ],
  },
  {
    id: "director",
    icon: "👤",
    title: "Primary Director",
    description: "Director details — required by some networks (MaxBounty, Impact)",
    fields: [
      { label: "Full Name", value: "Vinicius Fernandes" },
      { label: "Role / Title", value: "Director" },
      { label: "Nationality", value: "Brazilian" },
      { label: "Country of Residence", value: "Brazil" },
      { label: "Appointed On", value: "1 August 2025" },
    ],
  },
  {
    id: "banking",
    icon: "🏦",
    title: "Bank Details (UK)",
    description: "Ambern Ltd — UK business bank account for commission payments",
    fields: [
      { label: "Account Name", value: "Ambern Ltd" },
      { label: "Sort Code", value: "23-08-01" },
      { label: "Account Number", value: "89777644" },
      { label: "Bank Country", value: "United Kingdom" },
      { label: "Account Currency", value: "GBP (British Pounds)" },
      { label: "Payment Method Preference", value: "Bank Transfer (BACS / CHAPS / SWIFT)" },
      { label: "Payment Currency (International)", value: "USD or GBP" },
      { label: "Tax Form (US networks)", value: "W-8BEN-E (foreign company — non-US entity)" },
      { label: "Minimum Payout Threshold", value: "$50 USD (or as set by network)" },
    ],
  },
  {
    id: "traffic",
    icon: "📣",
    title: "Traffic & Marketing Methods",
    description: "How you describe your traffic sources in applications",
    fields: [
      { label: "Primary Traffic Source", value: "Paid Search (Google Ads)" },
      { label: "Secondary Traffic Source", value: "Paid Social (Facebook / Meta Ads)" },
      { label: "Traffic Geographies", value: "United States, United Kingdom, Canada, Australia" },
      { label: "Monthly Ad Spend (approx.)", value: "$2,000 – $10,000 USD" },
      { label: "Promotion Method (short)", value: "PPC — Google Ads and Facebook Ads targeting Tier-1 English-speaking markets" },
      {
        label: "Promotion Method (full)",
        value:
          "Ambern Ltd runs performance-based paid media campaigns on Google Search, Google Display, and Meta (Facebook/Instagram) targeting English-speaking audiences in the US, UK, Canada and Australia. We use conversion-optimised landing pages, retargeting funnels, and audience segmentation to deliver qualified leads to affiliate programmes in the finance, cybersecurity, and SaaS verticals.",
      },
    ],
  },
  {
    id: "niches",
    icon: "🎯",
    title: "Niches & Verticals",
    description: "Your target verticals — select the relevant one per application",
    fields: [
      { label: "Primary Niche", value: "Financial Services — Gold IRA / Precious Metals" },
      { label: "Secondary Niche", value: "Cybersecurity — VPN / Digital Privacy" },
      { label: "Tertiary Niche", value: "SaaS — Business Software & Productivity" },
      { label: "Additional Niche", value: "Insurance — Life & Health" },
      { label: "Target Audience", value: "Adults 35–65, US/UK/CA/AU, interested in wealth protection and financial security" },
    ],
  },
  {
    id: "social",
    icon: "🌐",
    title: "Social & Compliance",
    description: "Links and compliance statements for network applications",
    fields: [
      { label: "Privacy Policy URL", value: "https://ambern.uk/privacy-policy" },
      { label: "Companies House Listing", value: "https://find-and-update.company-information.service.gov.uk/company/16622550" },
      { label: "Compliance Statement", value: "Ambern Ltd complies with UK GDPR, the UK Advertising Standards Authority (ASA) guidelines, and all applicable FTC disclosure requirements for affiliate marketing in the United States." },
      { label: "No Incentivised Traffic", value: "Confirmed — we do not use incentivised, toolbar, or coupon traffic" },
      { label: "No Brand Bidding (unless permitted)", value: "Confirmed — we respect brand bidding restrictions set by each programme" },
    ],
  },
];

// ─── Copy-to-clipboard field component ─────────────────────────────────────
function CopyField({ label, value }: { label: string; value: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isLong = value.length > 80;

  return (
    <div className="copy-field">
      <div className="copy-field-label">{label}</div>
      <div className={`copy-field-row${isLong ? " copy-field-row--tall" : ""}`}>
        <div className="copy-field-value">{value}</div>
        <button
          className={`copy-btn${copied ? " copy-btn--done" : ""}`}
          onClick={handleCopy}
          title="Copy to clipboard"
        >
          {copied ? (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polyline points="20 6 9 17 4 12" />
              </svg>
              Copied!
            </>
          ) : (
            <>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
                <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
              </svg>
              Copy
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Section component ──────────────────────────────────────────────────────
function Section({ section }: { section: typeof sections[0] }) {
  const [open, setOpen] = useState(true);

  return (
    <div className="kit-section">
      <button className="kit-section-header" onClick={() => setOpen(!open)}>
        <div className="kit-section-header-left">
          <span className="kit-section-icon">{section.icon}</span>
          <div>
            <div className="kit-section-title">{section.title}</div>
            <div className="kit-section-desc">{section.description}</div>
          </div>
        </div>
        <div className={`kit-section-chevron${open ? " kit-section-chevron--open" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </div>
      </button>
      {open && (
        <div className="kit-section-body">
          {section.fields.map((f) => (
            <CopyField key={f.label} label={f.label} value={f.value} />
          ))}
        </div>
      )}
    </div>
  );
}

// ─── Password Gate ──────────────────────────────────────────────────────────
function PasswordGate({ onUnlock }: { onUnlock: () => void }) {
  const [pin, setPin] = useState("");
  const [error, setError] = useState(false);
  const [shake, setShake] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pin === ACCESS_PIN) {
      onUnlock();
    } else {
      setError(true);
      setShake(true);
      setPin("");
      setTimeout(() => setShake(false), 600);
      setTimeout(() => setError(false), 3000);
    }
  };

  const handleDigit = (d: string) => {
    if (pin.length < 6) setPin((p) => p + d);
  };

  const handleDelete = () => setPin((p) => p.slice(0, -1));

  return (
    <div className="gate-overlay">
      <div className={`gate-card${shake ? " gate-shake" : ""}`}>
        <img src={LOGO_V1} alt="Ambern" className="gate-logo" />
        <div className="gate-title">Affiliate Registration Kit</div>
        <div className="gate-subtitle">Enter your PIN to access</div>

        {/* PIN dots */}
        <div className="gate-dots">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`gate-dot${i < pin.length ? " gate-dot--filled" : ""}${error ? " gate-dot--error" : ""}`} />
          ))}
        </div>

        {error && <div className="gate-error">Incorrect PIN. Try again.</div>}

        {/* Numpad */}
        <form onSubmit={handleSubmit}>
          <div className="gate-numpad">
            {["1","2","3","4","5","6","7","8","9","","0","⌫"].map((d, i) => (
              d === "" ? (
                <div key={i} />
              ) : d === "⌫" ? (
                <button key={i} type="button" className="gate-key gate-key--del" onClick={handleDelete}>{d}</button>
              ) : (
                <button key={i} type="button" className="gate-key" onClick={() => handleDigit(d)}>{d}</button>
              )
            ))}
          </div>
          <button type="submit" className="gate-submit" disabled={pin.length < 6}>
            Unlock
          </button>
        </form>
      </div>
    </div>
  );
}

// ─── Page ───────────────────────────────────────────────────────────────────
export default function Company() {
  const [unlocked, setUnlocked] = useState(false);

  return (
    <div className="ambern-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        .ambern-root { background: #0A0A0A; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; min-height: 100vh; }

        /* ── PASSWORD GATE ── */
        .gate-overlay { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0A0A0A; padding: 24px; }
        .gate-card { background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 16px; padding: 48px 40px; width: 100%; max-width: 360px; display: flex; flex-direction: column; align-items: center; gap: 0; }
        .gate-logo { width: 56px; height: 56px; object-fit: contain; margin-bottom: 20px; }
        .gate-title { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 6px; text-align: center; }
        .gate-subtitle { font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 32px; text-align: center; }
        .gate-dots { display: flex; gap: 12px; margin-bottom: 12px; }
        .gate-dot { width: 14px; height: 14px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); background: transparent; transition: all 0.15s; }
        .gate-dot--filled { background: #E8650A; border-color: #E8650A; box-shadow: 0 0 10px rgba(232,101,10,0.5); }
        .gate-dot--error { border-color: #f87171 !important; background: #f87171 !important; box-shadow: 0 0 10px rgba(248,113,113,0.5) !important; }
        .gate-error { font-size: 13px; color: #f87171; margin-bottom: 16px; text-align: center; }
        .gate-numpad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin-top: 24px; margin-bottom: 20px; width: 100%; }
        .gate-key { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; color: #fff; font-size: 20px; font-weight: 600; font-family: 'Space Grotesk', sans-serif; height: 60px; cursor: pointer; transition: all 0.15s; }
        .gate-key:hover { background: rgba(232,101,10,0.15); border-color: rgba(232,101,10,0.4); color: #E8650A; }
        .gate-key:active { transform: scale(0.95); }
        .gate-key--del { font-size: 18px; color: rgba(255,255,255,0.5); }
        .gate-submit { width: 100%; background: #E8650A; color: #fff; border: none; border-radius: 8px; padding: 14px; font-size: 15px; font-weight: 700; font-family: 'Space Grotesk', sans-serif; cursor: pointer; letter-spacing: 0.5px; transition: all 0.2s; }
        .gate-submit:hover:not(:disabled) { background: #ff7a1f; }
        .gate-submit:disabled { opacity: 0.35; cursor: not-allowed; }
        @keyframes gate-shake { 0%,100%{transform:translateX(0)} 20%{transform:translateX(-8px)} 40%{transform:translateX(8px)} 60%{transform:translateX(-6px)} 80%{transform:translateX(6px)} }
        .gate-shake { animation: gate-shake 0.5s ease; }

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
        .page-hero { padding: 140px 60px 60px; background: linear-gradient(180deg, #111 0%, #0A0A0A 100%); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .page-hero-breadcrumb { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #E8650A; margin-bottom: 20px; }
        .page-hero-breadcrumb a { color: rgba(255,255,255,0.4); text-decoration: none; }
        .page-hero-breadcrumb a:hover { color: #E8650A; }
        .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(32px, 4vw, 52px); font-weight: 800; letter-spacing: -2px; line-height: 1.1; margin-bottom: 16px; }
        .page-hero h1 span { color: #E8650A; }
        .page-hero-sub { font-size: 16px; color: rgba(255,255,255,0.55); max-width: 640px; line-height: 1.7; margin-bottom: 32px; }

        /* INSTRUCTIONS BANNER */
        .instructions { background: rgba(232,101,10,0.08); border: 1px solid rgba(232,101,10,0.25); border-radius: 8px; padding: 20px 28px; display: flex; gap: 16px; align-items: flex-start; max-width: 860px; }
        .instructions-icon { font-size: 22px; flex-shrink: 0; margin-top: 2px; }
        .instructions-text { font-size: 14px; color: rgba(255,255,255,0.7); line-height: 1.6; }
        .instructions-text strong { color: #E8650A; }

        /* MAIN LAYOUT */
        .kit-main { max-width: 900px; margin: 0 auto; padding: 60px; }

        /* SECTION */
        .kit-section { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 16px; overflow: hidden; }
        .kit-section-header { width: 100%; background: none; border: none; cursor: pointer; padding: 24px 28px; display: flex; align-items: center; justify-content: space-between; text-align: left; transition: background 0.2s; }
        .kit-section-header:hover { background: rgba(255,255,255,0.03); }
        .kit-section-header-left { display: flex; align-items: center; gap: 16px; }
        .kit-section-icon { font-size: 24px; width: 44px; height: 44px; background: rgba(232,101,10,0.12); border: 1px solid rgba(232,101,10,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .kit-section-title { font-family: 'Space Grotesk', sans-serif; font-size: 17px; font-weight: 700; color: #fff; margin-bottom: 4px; }
        .kit-section-desc { font-size: 13px; color: rgba(255,255,255,0.4); }
        .kit-section-chevron { color: rgba(255,255,255,0.4); transition: transform 0.25s; flex-shrink: 0; }
        .kit-section-chevron--open { transform: rotate(180deg); color: #E8650A; }

        /* SECTION BODY */
        .kit-section-body { padding: 0 28px 24px; display: flex; flex-direction: column; gap: 12px; border-top: 1px solid rgba(255,255,255,0.06); padding-top: 20px; }

        /* COPY FIELD */
        .copy-field { background: #0A0A0A; border: 1px solid rgba(255,255,255,0.07); border-radius: 6px; padding: 14px 16px; transition: border-color 0.2s; }
        .copy-field:hover { border-color: rgba(232,101,10,0.3); }
        .copy-field-label { font-size: 11px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: rgba(255,255,255,0.3); margin-bottom: 8px; }
        .copy-field-row { display: flex; align-items: center; gap: 12px; }
        .copy-field-row--tall { align-items: flex-start; }
        .copy-field-value { font-size: 14px; font-weight: 500; color: #fff; flex: 1; line-height: 1.5; word-break: break-word; }
        .copy-btn { display: flex; align-items: center; gap: 6px; background: rgba(255,255,255,0.06); border: 1px solid rgba(255,255,255,0.1); border-radius: 5px; color: rgba(255,255,255,0.6); font-size: 12px; font-weight: 600; padding: 7px 12px; cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: all 0.2s; font-family: 'Inter', sans-serif; }
        .copy-btn:hover { background: rgba(232,101,10,0.15); border-color: rgba(232,101,10,0.4); color: #E8650A; }
        .copy-btn--done { background: rgba(74,222,128,0.12) !important; border-color: rgba(74,222,128,0.4) !important; color: #4ade80 !important; }

        /* FOOTER */
        .footer { background: #050505; border-top: 1px solid rgba(255,255,255,0.06); padding: 40px 60px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.3); }
        .footer-reg-detail { font-size: 12px; color: rgba(255,255,255,0.2); margin-top: 4px; }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; }
        .footer-legal a:hover { color: #E8650A; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav { padding: 16px 24px; }
          .nav-links { display: none; }
          .page-hero { padding: 100px 24px 40px; }
          .kit-main { padding: 32px 20px; }
          .kit-section-header { padding: 18px 20px; }
          .kit-section-body { padding: 0 20px 20px; padding-top: 16px; }
          .footer { padding: 32px 24px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .gate-card { padding: 36px 24px; }
        }
      `}</style>

      {/* PASSWORD GATE */}
      {!unlocked && <PasswordGate onUnlock={() => setUnlocked(true)} />}

      {/* CONTENT (only shown when unlocked) */}
      {unlocked && (
        <>
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
              <a href="/">Home</a> &nbsp;/&nbsp; Affiliate Registration Kit
            </div>
            <h1>Affiliate Registration <span>Kit</span></h1>
            <p className="page-hero-sub">
              All Ambern Ltd data organised and ready to paste into affiliate network application forms.
              Click <strong style={{color:"#E8650A"}}>Copy</strong> next to any field and paste it directly.
            </p>
            <div className="instructions">
              <div className="instructions-icon">💡</div>
              <div className="instructions-text">
                <strong>How to use:</strong> Open the affiliate network application in another tab.
                Come back here, click <strong>Copy</strong> on the field you need, and paste it into the form.
                Each section is collapsible — click the header to expand or collapse it.
              </div>
            </div>
          </div>

          {/* KIT SECTIONS */}
          <main className="kit-main">
            {sections.map((section) => (
              <Section key={section.id} section={section} />
            ))}
          </main>

          {/* FOOTER */}
          <footer className="footer">
            <div className="footer-bottom">
              <div>
                <div className="footer-copy">© 2025 Ambern Ltd. All rights reserved.</div>
                <div className="footer-reg-detail">Registered in England & Wales — Company No. 16622550 — 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</div>
              </div>
              <div className="footer-legal">
                <Link href="/privacy-policy">Privacy Policy</Link>
                <a href="https://find-and-update.company-information.service.gov.uk/company/16622550" target="_blank" rel="noopener noreferrer">Companies House</a>
              </div>
            </div>
          </footer>
        </>
      )}
    </div>
  );
}
