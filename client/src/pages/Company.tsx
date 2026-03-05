/*
 * AMBERN LTD — Affiliate Registration Kit (Password Protected)
 * Design Philosophy: Dark Intelligence / Corporate Power
 * Colors: #0A0A0A (bg), #E8650A (orange accent), #FFFFFF (text), #1A1A1A (cards)
 * Typography: Space Grotesk (headings) + Inter (body)
 * Tabs: Affiliate Kit | W-8BEN-E Guide | Network Checklist | Bio Generator
 */

import { useState } from "react";
import { Link } from "wouter";

const LOGO_V1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/ambern_logo_v1_d51e72ba.png";

const ACCESS_PIN = "536372";

// ─── Affiliate Kit sections ─────────────────────────────────────────────────
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

// ─── Network Checklist data ────────────────────────────────────────────────
type CheckStatus = "done" | "pending" | "na";
interface CheckItem { item: string; status: CheckStatus; note?: string; }
interface NetworkEntry { id: string; name: string; tier: string; tierColor: string; vertical: string; commission: string; applyUrl: string; applyLabel: string; items: CheckItem[]; }

const networks: NetworkEntry[] = [
  {
    id: "nordvpn",
    name: "NordVPN",
    tier: "Direct Programme",
    tierColor: "#3b82f6",
    vertical: "Cybersecurity · VPN",
    commission: "Up to 100% first month + 30% recurring",
    applyUrl: "https://nordvpn.com/affiliate/",
    applyLabel: "Apply at nordvpn.com",
    items: [
      { item: "Professional website with clear traffic description", status: "done", note: "ambern.uk — live and indexed" },
      { item: "Business email (not Gmail)", status: "done", note: "partnerships@ambern.uk" },
      { item: "Privacy Policy page", status: "done", note: "ambern.uk/privacy-policy" },
      { item: "Select PPC as traffic method in application", status: "pending", note: "Choose 'Paid Search / PPC' in the form" },
      { item: "Describe traffic: Google Ads + Facebook Ads, US/UK markets", status: "pending", note: "Copy from Affiliate Kit > Traffic Methods" },
      { item: "No coupon/incentive traffic declaration", status: "pending", note: "Tick the confirmation box in the form" },
      { item: "Custom domain connected", status: "done", note: "ambern.uk active" },
    ],
  },
  {
    id: "shareasale",
    name: "ShareASale",
    tier: "Affiliate Network",
    tierColor: "#10b981",
    vertical: "Multi-vertical (Finance, SaaS, Health)",
    commission: "Varies by merchant — avg. 8–20%",
    applyUrl: "https://www.shareasale.com/shareasale.cfm",
    applyLabel: "Apply at shareasale.com",
    items: [
      { item: "Website URL (must be live and indexed)", status: "done", note: "ambern.uk" },
      { item: "Website description (2–3 sentences)", status: "done", note: "Copy from Affiliate Kit > Traffic Methods > Promotion Method (full)" },
      { item: "Primary promotion method selected", status: "pending", note: "Select 'Pay Per Click' in the application" },
      { item: "W-8BEN-E tax form submitted", status: "pending", note: "Upload PDF during registration — see W-8BEN-E tab" },
      { item: "Payment method configured (PayPal or bank)", status: "pending", note: "Add bank details from Banking section" },
      { item: "Privacy Policy URL provided", status: "done", note: "ambern.uk/privacy-policy" },
      { item: "Account approved (manual review ~24–48h)", status: "pending", note: "ShareASale manually reviews all new accounts" },
    ],
  },
  {
    id: "maxbounty",
    name: "MaxBounty",
    tier: "CPA Network",
    tierColor: "#f59e0b",
    vertical: "Finance, Insurance, Lead Gen",
    commission: "$50–$200+ per lead (CPA)",
    applyUrl: "https://www.maxbounty.com/apply.cfm",
    applyLabel: "Apply at maxbounty.com",
    items: [
      { item: "Website URL with clear affiliate marketing content", status: "done", note: "ambern.uk" },
      { item: "Phone number (MaxBounty calls to verify)", status: "pending", note: "Add your phone number — they call within 24–48h" },
      { item: "Describe traffic sources in detail", status: "pending", note: "Copy: 'Google Search Ads and Facebook Ads targeting US/UK adults 35–65 in finance and insurance verticals'" },
      { item: "Describe top 3 verticals you plan to promote", status: "pending", note: "Finance (Gold IRA), Insurance, Cybersecurity (VPN)" },
      { item: "Monthly ad spend range", status: "pending", note: "Enter: $2,000–$10,000 USD" },
      { item: "W-8BEN-E sent to accounting@maxbounty.com", status: "pending", note: "Email after account approval — see W-8BEN-E tab" },
      { item: "Skype ID provided (MaxBounty uses Skype for AM contact)", status: "pending", note: "Create a Skype account if you don't have one" },
    ],
  },
  {
    id: "impact",
    name: "Impact.com",
    tier: "Affiliate Network",
    tierColor: "#8b5cf6",
    vertical: "SaaS, Finance, E-commerce",
    commission: "Varies — avg. 15–30% recurring (SaaS)",
    applyUrl: "https://app.impact.com/signup/publisher",
    applyLabel: "Apply at impact.com",
    items: [
      { item: "Website URL", status: "done", note: "ambern.uk" },
      { item: "Business description and promotion methods", status: "done", note: "Copy from Affiliate Kit > Traffic Methods" },
      { item: "Select 'Paid Search' and 'Paid Social' as channels", status: "pending", note: "Multi-select in the application form" },
      { item: "Monthly traffic estimate", status: "pending", note: "Enter: 5,000–20,000 monthly visitors (estimated)" },
      { item: "W-8BEN-E completed in Impact's online wizard", status: "pending", note: "Impact has an online form — select 'Non-US Entity', fill as shown in W-8BEN-E tab" },
      { item: "Case study or campaign example provided", status: "done", note: "ambern.uk/case-studies — link in application" },
      { item: "Payment details added (bank or PayPal)", status: "pending", note: "Add UK bank details from Banking section" },
    ],
  },
  {
    id: "awin",
    name: "Awin",
    tier: "Affiliate Network",
    tierColor: "#ec4899",
    vertical: "Finance, Retail, Travel",
    commission: "Varies — avg. 5–15%",
    applyUrl: "https://www.awin.com/gb/publishers",
    applyLabel: "Apply at awin.com",
    items: [
      { item: "£5 registration deposit (refunded on first payment)", status: "pending", note: "One-time fee — refunded when you reach first payout" },
      { item: "Website URL", status: "done", note: "ambern.uk" },
      { item: "Website description and audience", status: "done", note: "Copy from Affiliate Kit > Traffic Methods" },
      { item: "Primary promotion method: PPC", status: "pending", note: "Select 'PPC / Paid Search' in the application" },
      { item: "Privacy Policy URL", status: "done", note: "ambern.uk/privacy-policy" },
      { item: "Tax information submitted", status: "pending", note: "Upload W-8BEN-E PDF — see W-8BEN-E tab" },
      { item: "Account approved (Awin reviews manually, ~3–5 days)", status: "pending", note: "Awin is stricter — ensure website looks professional" },
    ],
  },
  {
    id: "cj",
    name: "CJ Affiliate",
    tier: "Affiliate Network",
    tierColor: "#14b8a6",
    vertical: "Finance, SaaS, Retail",
    commission: "Varies — avg. 5–25%",
    applyUrl: "https://signup.cj.com/member/signup/publisher",
    applyLabel: "Apply at cj.com",
    items: [
      { item: "Website URL", status: "done", note: "ambern.uk" },
      { item: "Website description", status: "done", note: "Copy from Affiliate Kit > Traffic Methods" },
      { item: "Primary traffic method: Paid Search", status: "pending", note: "Select 'Paid Search' in the application" },
      { item: "W-8BEN-E completed online (CJ has an online form)", status: "pending", note: "Go to Account > Tax Forms after registration — see W-8BEN-E tab" },
      { item: "Monthly unique visitors estimate", status: "pending", note: "Enter: 5,000–20,000 (estimated)" },
      { item: "Payment method: direct deposit or check", status: "pending", note: "Add UK bank details or PayPal" },
      { item: "Account activated (CJ auto-approves most accounts)", status: "pending", note: "Usually instant — then apply to individual programmes" },
    ],
  },
];

// ─── W-8BEN-E fields ────────────────────────────────────────────────────────
const w8Groups = [
  {
    id: "part1",
    title: "Part I — Identification of Beneficial Owner",
    note: "Fill these fields exactly as shown. This is the most important part.",
    fields: [
      { line: "1", label: "Name of organization that is the beneficial owner", value: "Ambern Ltd" },
      { line: "2", label: "Country of incorporation or organization", value: "United Kingdom" },
      { line: "3", label: "Name of disregarded entity (if applicable)", value: "N/A — leave blank" },
      { line: "4", label: "Chapter 3 Status (entity type)", value: "Corporation" },
      { line: "5", label: "Chapter 4 Status (FATCA)", value: "Active NFFE (Non-Financial Foreign Entity)" },
      { line: "6", label: "Permanent residence address — Street", value: "71-75 Shelton Street" },
      { line: "6", label: "Permanent residence address — City/Town", value: "London" },
      { line: "6", label: "Permanent residence address — Country", value: "United Kingdom" },
      { line: "6", label: "Permanent residence address — Postcode", value: "WC2H 9JQ" },
      { line: "7", label: "Mailing address (if different)", value: "Same as permanent residence — leave blank" },
      { line: "8", label: "US taxpayer identification number (TIN)", value: "N/A — leave blank (UK company, no US TIN)" },
      { line: "9a", label: "GIIN (Global Intermediary Identification Number)", value: "N/A — leave blank" },
      { line: "9b", label: "Foreign TIN (UK Company Number)", value: "16622550" },
      { line: "10", label: "Reference number(s)", value: "Leave blank" },
    ],
  },
  {
    id: "part3",
    title: "Part III — Claim of Tax Treaty Benefits",
    note: "The UK–US tax treaty reduces withholding tax on business profits to 0%. Always claim this.",
    fields: [
      { line: "14a", label: "I certify that the beneficial owner is a resident of:", value: "United Kingdom" },
      { line: "14b", label: "Special rates and conditions — Article", value: "Article 7 — Business Profits" },
      { line: "14b", label: "Paragraph", value: "Paragraph 1" },
      { line: "14b", label: "Withholding rate claimed", value: "0%" },
      { line: "14b", label: "Type of income", value: "Business profits / commissions from affiliate marketing" },
      { line: "14b", label: "Additional conditions", value: "The beneficial owner is a corporation incorporated in the United Kingdom and is a resident of the United Kingdom for purposes of the UK–US Income Tax Treaty." },
    ],
  },
  {
    id: "part25",
    title: "Part XXV — Active NFFE",
    note: "Ambern Ltd qualifies as an Active NFFE because less than 50% of its income is passive.",
    fields: [
      { line: "39", label: "Active NFFE certification", value: "Check this box — Ambern Ltd is an Active NFFE. Less than 50% of the entity's gross income for the preceding calendar year is passive income and less than 50% of the assets held by the entity are assets that produce or are held for the production of passive income." },
    ],
  },
  {
    id: "cert",
    title: "Certification & Signature",
    note: "Sign with your full legal name as director. The form is valid for 3 years from the date signed.",
    fields: [
      { line: "—", label: "Print name of signer", value: "Vinicius Fernandes" },
      { line: "—", label: "Capacity in which acting", value: "Director, Ambern Ltd" },
      { line: "—", label: "Date format (US networks use MM/DD/YYYY)", value: "Use today's date in MM/DD/YYYY format" },
      { line: "—", label: "Form validity period", value: "3 years from date signed (or until information changes)" },
    ],
  },
  {
    id: "tips",
    title: "Network-Specific Tips",
    note: "How each major US network handles the W-8BEN-E.",
    fields: [
      { line: "ShareASale", label: "How to submit", value: "Upload PDF during registration under 'Tax Information' step. Select 'Foreign Entity' then upload signed W-8BEN-E." },
      { line: "CJ Affiliate", label: "How to submit", value: "Go to Account > Tax Forms > Add Tax Form. Select W-8BEN-E and fill the online version directly — no PDF needed." },
      { line: "Impact.com", label: "How to submit", value: "During onboarding, select 'Non-US Entity'. Impact has an online W-8BEN-E wizard — fill fields as shown above." },
      { line: "MaxBounty", label: "How to submit", value: "Email your signed W-8BEN-E PDF to accounting@maxbounty.com after account approval. Subject: 'W-8BEN-E — Ambern Ltd'." },
      { line: "PartnerStack", label: "How to submit", value: "Settings > Payout > Tax Information. Select 'I am not a US person' and complete the online W-8BEN-E form." },
      { line: "ClickBank", label: "How to submit", value: "Account Settings > Payment Information > Tax ID. Select 'Foreign Entity' and upload signed W-8BEN-E PDF." },
    ],
  },
];

// ─── Network Checklist components ──────────────────────────────────────────
const statusConfig: Record<CheckStatus, { label: string; color: string; bg: string; icon: string }> = {
  done:    { label: "Done",    color: "#4ade80", bg: "rgba(74,222,128,0.1)",  icon: "✓" },
  pending: { label: "To Do",   color: "#fbbf24", bg: "rgba(251,191,36,0.1)",  icon: "○" },
  na:      { label: "N/A",     color: "rgba(255,255,255,0.3)", bg: "rgba(255,255,255,0.05)", icon: "—" },
};

function NetworkCard({ net }: { net: NetworkEntry }) {
  const [open, setOpen] = useState(false);
  const done = net.items.filter(i => i.status === "done").length;
  const total = net.items.filter(i => i.status !== "na").length;
  const pct = Math.round((done / total) * 100);

  return (
    <div className="net-card">
      <button className="net-card-header" onClick={() => setOpen(!open)}>
        <div className="net-card-left">
          <div className="net-card-name">{net.name}</div>
          <div className="net-card-meta">
            <span className="net-tier" style={{ color: net.tierColor }}>{net.tier}</span>
            <span className="net-vertical">{net.vertical}</span>
          </div>
          <div className="net-commission">Commission: {net.commission}</div>
        </div>
        <div className="net-card-right">
          <div className="net-progress-wrap">
            <div className="net-progress-bar">
              <div className="net-progress-fill" style={{ width: `${pct}%`, background: pct === 100 ? "#4ade80" : net.tierColor }} />
            </div>
            <div className="net-progress-label" style={{ color: pct === 100 ? "#4ade80" : net.tierColor }}>{done}/{total} ready</div>
          </div>
          <div className={`kit-section-chevron${open ? " kit-section-chevron--open" : ""}`}>
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
          </div>
        </div>
      </button>
      {open && (
        <div className="net-card-body">
          <a href={net.applyUrl} target="_blank" rel="noopener noreferrer" className="net-apply-btn" style={{ borderColor: net.tierColor, color: net.tierColor }}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            {net.applyLabel}
          </a>
          <div className="net-checklist">
            {net.items.map((item, i) => {
              const cfg = statusConfig[item.status];
              return (
                <div key={i} className="net-check-item">
                  <span className="net-check-status" style={{ color: cfg.color, background: cfg.bg }}>{cfg.icon}</span>
                  <div className="net-check-content">
                    <div className="net-check-label" style={{ color: item.status === "done" ? "rgba(255,255,255,0.5)" : "#fff", textDecoration: item.status === "done" ? "line-through" : "none" }}>{item.item}</div>
                    {item.note && <div className="net-check-note">{item.note}</div>}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Copy field ─────────────────────────────────────────────────────────────
function CopyField({ label, value, line }: { label: string; value: string; line?: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(value);
    } catch {
      const el = document.createElement("textarea");
      el.value = value;
      document.body.appendChild(el);
      el.select();
      document.execCommand("copy");
      document.body.removeChild(el);
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isLong = value.length > 80;

  return (
    <div className="copy-field">
      <div className="copy-field-header">
        {line && line !== "—" && <span className="copy-field-line">Line {line}</span>}
        <div className="copy-field-label">{label}</div>
      </div>
      <div className={`copy-field-row${isLong ? " copy-field-row--tall" : ""}`}>
        <div className="copy-field-value">{value}</div>
        <button className={`copy-btn${copied ? " copy-btn--done" : ""}`} onClick={handleCopy} title="Copy">
          {copied ? (
            <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><polyline points="20 6 9 17 4 12" /></svg>Copied!</>
          ) : (
            <><svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="9" y="9" width="13" height="13" rx="2" /><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" /></svg>Copy</>
          )}
        </button>
      </div>
    </div>
  );
}

// ─── Collapsible section ────────────────────────────────────────────────────
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
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </button>
      {open && (
        <div className="kit-section-body">
          {section.fields.map((f) => <CopyField key={f.label} label={f.label} value={f.value} />)}
        </div>
      )}
    </div>
  );
}

// ─── W-8BEN-E group ─────────────────────────────────────────────────────────
function W8Group({ group }: { group: typeof w8Groups[0] }) {
  const [open, setOpen] = useState(true);
  return (
    <div className="kit-section">
      <button className="kit-section-header" onClick={() => setOpen(!open)}>
        <div className="kit-section-header-left">
          <div>
            <div className="kit-section-title">{group.title}</div>
            <div className="kit-section-desc">{group.note}</div>
          </div>
        </div>
        <div className={`kit-section-chevron${open ? " kit-section-chevron--open" : ""}`}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9" /></svg>
        </div>
      </button>
      {open && (
        <div className="kit-section-body">
          {group.fields.map((f) => <CopyField key={f.label} label={f.label} value={f.value} line={f.line} />)}
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

  const handleDigit = (d: string) => { if (pin.length < 6) setPin((p) => p + d); };
  const handleDelete = () => setPin((p) => p.slice(0, -1));

  return (
    <div className="gate-overlay">
      <div className={`gate-card${shake ? " gate-shake" : ""}`}>
        <img src={LOGO_V1} alt="Ambern" className="gate-logo" />
        <div className="gate-title">Affiliate Registration Kit</div>
        <div className="gate-subtitle">Enter your PIN to access</div>
        <div className="gate-dots">
          {Array.from({ length: 6 }).map((_, i) => (
            <div key={i} className={`gate-dot${i < pin.length ? " gate-dot--filled" : ""}${error ? " gate-dot--error" : ""}`} />
          ))}
        </div>
        {error && <div className="gate-error">Incorrect PIN. Try again.</div>}
        <form onSubmit={handleSubmit}>
          <div className="gate-numpad">
            {["1","2","3","4","5","6","7","8","9","","0","⌫"].map((d, i) => (
              d === "" ? <div key={i} /> :
              d === "⌫" ? <button key={i} type="button" className="gate-key gate-key--del" onClick={handleDelete}>{d}</button> :
              <button key={i} type="button" className="gate-key" onClick={() => handleDigit(d)}>{d}</button>
            ))}
          </div>
          <button type="submit" className="gate-submit" disabled={pin.length < 6}>Unlock</button>
        </form>
      </div>
    </div>
  );
}

// ─── Bio Generator Tab ─────────────────────────────────────────────────────
const BIO_DATA = [
  {
    key: "hotmart-long",
    platform: "Hotmart — Long Bio",
    icon: "🔥",
    limit: "500+ characters required",
    limitColor: "#f59e0b",
    tone: "Professional & descriptive",
    purpose: "Used in the Hotmart producer/affiliate profile page. Must be at least 500 characters or the form rejects it.",
    bio: "Ambern Ltd is a UK-registered performance marketing agency headquartered in London, specialising in paid traffic and affiliate marketing across Tier-1 markets including the United States, United Kingdom, Canada and Australia.\n\nWe partner with premium affiliate programmes in the finance, cybersecurity, SaaS and insurance verticals, driving qualified leads and conversions through Google Search Ads, Facebook Ads and YouTube pre-roll campaigns.\n\nOur approach combines data-driven audience targeting, conversion-optimised landing pages and rigorous A/B testing to deliver consistent, measurable results for the programmes we promote. We are committed to transparent, compliant and ethical marketing practices across all channels and markets we operate in.",
  },
  {
    key: "hotmart-short",
    platform: "Hotmart — Short Description",
    icon: "🔥",
    limit: "~200 characters",
    limitColor: "#f59e0b",
    tone: "Concise & direct",
    purpose: "Used in the shorter description field on Hotmart (some forms ask for a brief version). Keep it under 200 characters.",
    bio: "UK performance marketing agency. We drive qualified traffic to affiliate programmes in finance, cybersecurity and SaaS across the US, UK and Canada via Google Ads and Facebook Ads.",
  },
  {
    key: "twitter",
    platform: "Twitter / X",
    icon: "X",
    limit: "160 characters max",
    limitColor: "#60a5fa",
    tone: "Punchy & keyword-rich",
    purpose: "Twitter bio appears under your name on your profile. Maximum 160 characters. Should include what you do, where you are, and a link hook.",
    bio: "UK-registered performance marketing agency. Driving qualified traffic to affiliate programmes in finance, cybersecurity & SaaS. London",
  },
  {
    key: "linkedin",
    platform: "LinkedIn — Company Page",
    icon: "in",
    limit: "~220 characters (tagline)",
    limitColor: "#0ea5e9",
    tone: "Corporate & credibility-focused",
    purpose: "LinkedIn company page tagline (shown under the company name in search results). Keep it under 220 characters.",
    bio: "Performance marketing agency | Paid traffic for affiliate programmes in finance, cybersecurity & SaaS | UK-registered | US, UK, CA, AU markets",
  },
  {
    key: "maxbounty",
    platform: "MaxBounty — Application",
    icon: "MB",
    limit: "No strict limit — be detailed",
    limitColor: "#f59e0b",
    tone: "Specific & traffic-focused",
    purpose: "MaxBounty asks how you plan to promote offers. Be specific about traffic sources, verticals and monthly spend. Vague answers get rejected.",
    bio: "We run Google Search Ads and Facebook Ads targeting US and UK adults aged 35-65 in the finance, insurance and cybersecurity verticals. Primary offers: Gold IRA, VPN subscriptions, life insurance and SaaS tools. Monthly ad spend: $2,000-$10,000 USD. We use dedicated landing pages with conversion tracking and A/B testing. All traffic is paid - no coupon, incentive or email traffic.",
  },
  {
    key: "impact",
    platform: "Impact.com — Publisher Profile",
    icon: "IP",
    limit: "~300 characters recommended",
    limitColor: "#8b5cf6",
    tone: "Data-driven & professional",
    purpose: "Impact.com publisher profile description. Shown to advertisers when you apply to their programmes. Mention channels, markets and verticals clearly.",
    bio: "UK-based performance marketing agency driving paid search and paid social traffic to affiliate programmes in finance, SaaS and cybersecurity. We operate in the US, UK, Canada and Australia using Google Ads and Facebook Ads. See our campaign results at ambern.uk/case-studies.",
  },
  {
    key: "awin",
    platform: "Awin — Publisher Profile",
    icon: "AW",
    limit: "~250 characters recommended",
    limitColor: "#ec4899",
    tone: "Clear & compliance-aware",
    purpose: "Awin is stricter than other networks. They review your profile manually. Mention your traffic method, markets and that you comply with their policies.",
    bio: "UK-registered performance marketing agency. We promote affiliate programmes via PPC (Google Ads and Facebook Ads) in the US, UK and CA markets. Finance, cybersecurity and SaaS verticals. Fully compliant with Awin publisher policies.",
  },
  {
    key: "facebook",
    platform: "Facebook Business Page",
    icon: "fb",
    limit: "255 characters (short description)",
    limitColor: "#3b82f6",
    tone: "Accessible & benefit-led",
    purpose: "Facebook Page short description (shown under your page name in search). Maximum 255 characters.",
    bio: "Ambern Ltd - UK performance marketing agency. We connect audiences with the best offers in finance, cybersecurity and SaaS. Based in London.",
  },
];

function BioGeneratorTab({ bioCopied, copyBio }: { bioCopied: string | null; copyBio: (key: string, text: string) => void }) {
  return (
    <>
      <div className="instructions">
        <div className="instructions-icon">&#9998;</div>
        <div className="instructions-text">
          <strong>How to use:</strong> Each card shows a ready-to-paste bio for a specific platform. The <strong>PURPOSE</strong> label explains what the field is for and why it matters. Click <strong>Copy</strong> and paste directly into the form. Character count is shown at the bottom of each card.
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",gap:16}}>
        {BIO_DATA.map((b) => (
          <div key={b.key} style={{background:"#111",border:"1px solid rgba(255,255,255,0.08)",borderRadius:10,overflow:"hidden"}}>
            <div style={{padding:"18px 24px 14px",borderBottom:"1px solid rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"space-between",flexWrap:"wrap",gap:10}}>
              <div style={{display:"flex",alignItems:"center",gap:12}}>
                <div style={{width:36,height:36,borderRadius:8,background:"rgba(255,255,255,0.06)",display:"flex",alignItems:"center",justifyContent:"center",fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:12,color:"#fff",flexShrink:0}}>{b.icon}</div>
                <div>
                  <div style={{fontFamily:"'Space Grotesk',sans-serif",fontWeight:700,fontSize:15,color:"#fff"}}>{b.platform}</div>
                  <div style={{display:"flex",gap:10,marginTop:3,flexWrap:"wrap"}}>
                    <span style={{fontSize:11,fontWeight:700,color:b.limitColor,background:b.limitColor+"22",padding:"2px 8px",borderRadius:20}}>{b.limit}</span>
                    <span style={{fontSize:11,color:"rgba(255,255,255,0.35)"}}>{b.tone}</span>
                  </div>
                </div>
              </div>
              <button
                onClick={() => copyBio(b.key, b.bio)}
                style={{background: bioCopied === b.key ? "rgba(74,222,128,0.15)" : "rgba(232,101,10,0.12)",border:"1px solid "+(bioCopied === b.key ? "rgba(74,222,128,0.4)" : "rgba(232,101,10,0.3)"),color: bioCopied === b.key ? "#4ade80" : "#E8650A",padding:"8px 18px",borderRadius:6,fontSize:12,fontWeight:700,cursor:"pointer",fontFamily:"'Inter',sans-serif",transition:"all 0.2s",letterSpacing:"0.3px",whiteSpace:"nowrap"}}
              >
                {bioCopied === b.key ? "Copied!" : "Copy"}
              </button>
            </div>
            <div style={{padding:"12px 24px",background:"rgba(255,255,255,0.02)",borderBottom:"1px solid rgba(255,255,255,0.05)"}}>
              <span style={{fontSize:11,fontWeight:700,letterSpacing:"1.5px",textTransform:"uppercase" as const,color:"rgba(255,255,255,0.3)",marginRight:8}}>PURPOSE</span>
              <span style={{fontSize:12,color:"rgba(255,255,255,0.45)",lineHeight:1.5}}>{b.purpose}</span>
            </div>
            <div style={{padding:"16px 24px"}}>
              <pre style={{fontFamily:"'Inter',sans-serif",fontSize:13,color:"rgba(255,255,255,0.75)",lineHeight:1.7,whiteSpace:"pre-wrap",margin:0}}>{b.bio}</pre>
              <div style={{marginTop:10,fontSize:11,color:"rgba(255,255,255,0.25)"}}>{b.bio.length} characters</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────
export default function Company() {
  const [unlocked, setUnlocked] = useState(false);
  const [activeTab, setActiveTab] = useState<"kit" | "w8" | "checklist" | "bio">("kit");
  const [bioCopied, setBioCopied] = useState<string | null>(null);

  const copyBio = (key: string, text: string) => {
    navigator.clipboard.writeText(text);
    setBioCopied(key);
    setTimeout(() => setBioCopied(null), 2000);
  };

  return (
    <div className="ambern-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .ambern-root { background: #0A0A0A; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; min-height: 100vh; }

        /* GATE */
        .gate-overlay { min-height: 100vh; display: flex; align-items: center; justify-content: center; background: #0A0A0A; padding: 24px; }
        .gate-card { background: #111; border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; padding: 56px 48px 48px; width: 100%; max-width: 400px; display: flex; flex-direction: column; align-items: center; }
        .gate-logo { width: 56px; height: 56px; object-fit: contain; margin-bottom: 20px; }
        .gate-title { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #fff; margin-bottom: 6px; text-align: center; }
        .gate-subtitle { font-size: 13px; color: rgba(255,255,255,0.4); margin-bottom: 32px; text-align: center; }
        .gate-dots { display: flex; gap: 14px; margin-bottom: 16px; }
        .gate-dot { width: 16px; height: 16px; border-radius: 50%; border: 2px solid rgba(255,255,255,0.2); background: transparent; transition: all 0.15s; }
        .gate-dot--filled { background: #E8650A; border-color: #E8650A; box-shadow: 0 0 10px rgba(232,101,10,0.5); }
        .gate-dot--error { border-color: #f87171 !important; background: #f87171 !important; }
        .gate-error { font-size: 13px; color: #f87171; margin-bottom: 16px; text-align: center; }
        .gate-numpad { display: grid; grid-template-columns: repeat(3, 1fr); gap: 16px; margin-top: 32px; margin-bottom: 28px; width: 100%; }
        .gate-key { background: #1a1a1a; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; color: #fff; font-size: 22px; font-weight: 600; font-family: 'Space Grotesk', sans-serif; height: 72px; cursor: pointer; transition: all 0.15s; }
        .gate-key:hover { background: rgba(232,101,10,0.15); border-color: rgba(232,101,10,0.4); color: #E8650A; }
        .gate-key:active { transform: scale(0.95); }
        .gate-key--del { font-size: 18px; color: rgba(255,255,255,0.5); }
        .gate-submit { width: 100%; background: #E8650A; color: #fff; border: none; border-radius: 10px; padding: 18px; font-size: 16px; font-weight: 700; font-family: 'Space Grotesk', sans-serif; cursor: pointer; transition: all 0.2s; }
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
        .nav-cta:hover { background: #ff7a1f; }

        /* PAGE HERO */
        .page-hero { padding: 130px 60px 0; background: linear-gradient(180deg, #111 0%, #0A0A0A 100%); }
        .page-hero-breadcrumb { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #E8650A; margin-bottom: 20px; }
        .page-hero-breadcrumb a { color: rgba(255,255,255,0.4); text-decoration: none; }
        .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(28px, 4vw, 48px); font-weight: 800; letter-spacing: -2px; line-height: 1.1; margin-bottom: 12px; }
        .page-hero h1 span { color: #E8650A; }
        .page-hero-sub { font-size: 15px; color: rgba(255,255,255,0.5); max-width: 600px; line-height: 1.7; margin-bottom: 36px; }

        /* NETWORK CHECKLIST */
        .net-card { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 14px; overflow: hidden; }
        .net-card-header { width: 100%; background: none; border: none; cursor: pointer; padding: 22px 26px; display: flex; align-items: center; justify-content: space-between; text-align: left; transition: background 0.2s; }
        .net-card-header:hover { background: rgba(255,255,255,0.03); }
        .net-card-left { flex: 1; }
        .net-card-name { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; color: #fff; margin-bottom: 6px; }
        .net-card-meta { display: flex; gap: 12px; align-items: center; margin-bottom: 4px; flex-wrap: wrap; }
        .net-tier { font-size: 11px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; }
        .net-vertical { font-size: 12px; color: rgba(255,255,255,0.35); }
        .net-commission { font-size: 12px; color: rgba(255,255,255,0.4); }
        .net-card-right { display: flex; align-items: center; gap: 20px; flex-shrink: 0; }
        .net-progress-wrap { text-align: right; }
        .net-progress-bar { width: 100px; height: 4px; background: rgba(255,255,255,0.08); border-radius: 2px; margin-bottom: 6px; }
        .net-progress-fill { height: 100%; border-radius: 2px; transition: width 0.4s; }
        .net-progress-label { font-size: 11px; font-weight: 700; }
        .net-card-body { padding: 0 26px 24px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 20px; }
        .net-apply-btn { display: inline-flex; align-items: center; gap: 7px; border: 1px solid; border-radius: 5px; padding: 8px 16px; font-size: 12px; font-weight: 700; text-decoration: none; margin-bottom: 20px; transition: all 0.2s; letter-spacing: 0.3px; background: transparent; }
        .net-apply-btn:hover { opacity: 0.75; }
        .net-checklist { display: flex; flex-direction: column; gap: 10px; }
        .net-check-item { display: flex; gap: 12px; align-items: flex-start; }
        .net-check-status { width: 22px; height: 22px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 11px; font-weight: 700; flex-shrink: 0; margin-top: 1px; }
        .net-check-content { flex: 1; }
        .net-check-label { font-size: 14px; font-weight: 500; line-height: 1.4; margin-bottom: 3px; }
        .net-check-note { font-size: 12px; color: rgba(255,255,255,0.35); line-height: 1.4; }
        .checklist-legend { display: flex; gap: 20px; margin-bottom: 24px; flex-wrap: wrap; }
        .legend-item { display: flex; align-items: center; gap: 7px; font-size: 12px; color: rgba(255,255,255,0.5); }
        .legend-dot { width: 10px; height: 10px; border-radius: 50%; }

        /* TABS */
        .tabs-bar { display: flex; gap: 0; border-bottom: 1px solid rgba(255,255,255,0.08); padding: 0 60px; }
        .tab-btn { background: none; border: none; cursor: pointer; padding: 16px 28px; font-family: 'Space Grotesk', sans-serif; font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.4); letter-spacing: 0.5px; border-bottom: 2px solid transparent; margin-bottom: -1px; transition: all 0.2s; display: flex; align-items: center; gap: 8px; }
        .tab-btn:hover { color: rgba(255,255,255,0.7); }
        .tab-btn.tab-active { color: #E8650A; border-bottom-color: #E8650A; }
        .tab-badge { background: rgba(232,101,10,0.2); color: #E8650A; font-size: 10px; font-weight: 700; padding: 2px 7px; border-radius: 20px; letter-spacing: 0.5px; }
        .tab-badge-us { background: rgba(59,130,246,0.2); color: #60a5fa; }

        /* MAIN */
        .kit-main { max-width: 900px; margin: 0 auto; padding: 48px 60px 80px; }

        /* W8 BANNER */
        .w8-banner { background: rgba(59,130,246,0.07); border: 1px solid rgba(59,130,246,0.2); border-radius: 10px; padding: 20px 24px; margin-bottom: 32px; display: flex; gap: 14px; align-items: flex-start; }
        .w8-banner-icon { font-size: 22px; flex-shrink: 0; }
        .w8-banner-text { font-size: 13px; color: rgba(255,255,255,0.65); line-height: 1.6; }
        .w8-banner-text strong { color: #60a5fa; }
        .w8-download-link { display: inline-flex; align-items: center; gap: 6px; margin-top: 10px; background: rgba(59,130,246,0.15); border: 1px solid rgba(59,130,246,0.3); border-radius: 5px; padding: 7px 14px; font-size: 12px; font-weight: 600; color: #60a5fa; text-decoration: none; transition: all 0.2s; }
        .w8-download-link:hover { background: rgba(59,130,246,0.25); }

        /* INSTRUCTIONS */
        .instructions { background: rgba(232,101,10,0.07); border: 1px solid rgba(232,101,10,0.2); border-radius: 8px; padding: 16px 22px; display: flex; gap: 12px; align-items: flex-start; margin-bottom: 32px; }
        .instructions-icon { font-size: 18px; flex-shrink: 0; margin-top: 2px; }
        .instructions-text { font-size: 13px; color: rgba(255,255,255,0.6); line-height: 1.6; }
        .instructions-text strong { color: #E8650A; }

        /* SECTION */
        .kit-section { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 10px; margin-bottom: 14px; overflow: hidden; }
        .kit-section-header { width: 100%; background: none; border: none; cursor: pointer; padding: 22px 26px; display: flex; align-items: center; justify-content: space-between; text-align: left; transition: background 0.2s; }
        .kit-section-header:hover { background: rgba(255,255,255,0.03); }
        .kit-section-header-left { display: flex; align-items: center; gap: 14px; }
        .kit-section-icon { font-size: 22px; width: 42px; height: 42px; background: rgba(232,101,10,0.1); border: 1px solid rgba(232,101,10,0.2); border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .kit-section-title { font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 700; color: #fff; margin-bottom: 3px; }
        .kit-section-desc { font-size: 12px; color: rgba(255,255,255,0.38); }
        .kit-section-chevron { color: rgba(255,255,255,0.35); transition: transform 0.25s; flex-shrink: 0; }
        .kit-section-chevron--open { transform: rotate(180deg); color: #E8650A; }
        .kit-section-body { padding: 0 26px 22px; display: flex; flex-direction: column; gap: 10px; border-top: 1px solid rgba(255,255,255,0.05); padding-top: 18px; }

        /* COPY FIELD */
        .copy-field { background: #0A0A0A; border: 1px solid rgba(255,255,255,0.06); border-radius: 6px; padding: 12px 14px; transition: border-color 0.2s; }
        .copy-field:hover { border-color: rgba(232,101,10,0.25); }
        .copy-field-header { display: flex; align-items: center; gap: 8px; margin-bottom: 7px; }
        .copy-field-line { font-size: 10px; font-weight: 700; letter-spacing: 1px; text-transform: uppercase; color: #E8650A; background: rgba(232,101,10,0.1); border: 1px solid rgba(232,101,10,0.2); border-radius: 3px; padding: 2px 6px; white-space: nowrap; }
        .copy-field-label { font-size: 11px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.28); }
        .copy-field-row { display: flex; align-items: center; gap: 10px; }
        .copy-field-row--tall { align-items: flex-start; }
        .copy-field-value { font-size: 14px; font-weight: 500; color: #fff; flex: 1; line-height: 1.5; word-break: break-word; }
        .copy-btn { display: flex; align-items: center; gap: 5px; background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.09); border-radius: 5px; color: rgba(255,255,255,0.5); font-size: 11px; font-weight: 600; padding: 6px 11px; cursor: pointer; white-space: nowrap; flex-shrink: 0; transition: all 0.2s; font-family: 'Inter', sans-serif; }
        .copy-btn:hover { background: rgba(232,101,10,0.12); border-color: rgba(232,101,10,0.35); color: #E8650A; }
        .copy-btn--done { background: rgba(74,222,128,0.1) !important; border-color: rgba(74,222,128,0.35) !important; color: #4ade80 !important; }

        /* FOOTER */
        .footer { background: #050505; border-top: 1px solid rgba(255,255,255,0.06); padding: 36px 60px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.3); }
        .footer-reg-detail { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 4px; }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; }
        .footer-legal a:hover { color: #E8650A; }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .page-hero { padding: 90px 20px 0; }
          .tabs-bar { padding: 0 20px; overflow-x: auto; }
          .kit-main { padding: 28px 20px 60px; }
          .footer { padding: 28px 20px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
          .gate-card { padding: 32px 20px; }
        }
      `}</style>

      {/* PASSWORD GATE */}
      {!unlocked && <PasswordGate onUnlock={() => setUnlocked(true)} />}

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

          {/* HERO */}
          <div className="page-hero">
            <div className="page-hero-breadcrumb">
              <a href="/">Home</a> &nbsp;/&nbsp; Affiliate Registration Kit
            </div>
            <h1>Affiliate Registration <span>Kit</span></h1>
            <p className="page-hero-sub">
              All Ambern Ltd data ready to copy into affiliate network forms. Select a tab below.
            </p>
          </div>

          {/* TABS */}
          <div className="tabs-bar">
            <button
              className={`tab-btn${activeTab === "kit" ? " tab-active" : ""}`}
              onClick={() => setActiveTab("kit")}
            >
              📋 Affiliate Kit
              <span className="tab-badge">8 sections</span>
            </button>
            <button
              className={`tab-btn${activeTab === "w8" ? " tab-active" : ""}`}
              onClick={() => setActiveTab("w8")}
            >
              🇺🇸 W-8BEN-E Guide
              <span className="tab-badge tab-badge-us">US Networks</span>
            </button>
            <button
              className={`tab-btn${activeTab === "checklist" ? " tab-active" : ""}`}
              onClick={() => setActiveTab("checklist")}
            >
              ✅ Network Checklist
              <span className="tab-badge" style={{background:"rgba(74,222,128,0.15)",color:"#4ade80"}}>6 Networks</span>
            </button>
            <button
              className={`tab-btn${activeTab === "bio" ? " tab-active" : ""}`}
              onClick={() => setActiveTab("bio")}
            >
              ✍️ Bio Generator
              <span className="tab-badge" style={{background:"rgba(168,85,247,0.15)",color:"#c084fc"}}>8 Platforms</span>
            </button>
          </div>

          {/* TAB CONTENT */}
          <main className="kit-main">

            {/* ── AFFILIATE KIT TAB ── */}
            {activeTab === "kit" && (
              <>
                <div className="instructions">
                  <div className="instructions-icon">💡</div>
                  <div className="instructions-text">
                    <strong>How to use:</strong> Open the affiliate network application in another tab, click <strong>Copy</strong> on the field you need, and paste it into the form. Click any section header to collapse it.
                  </div>
                </div>
                {sections.map((s) => <Section key={s.id} section={s} />)}
              </>
            )}

            {/* ── BIO GENERATOR TAB ── */}
            {activeTab === "bio" && <BioGeneratorTab bioCopied={bioCopied} copyBio={copyBio} />}



            {/* ── NETWORK CHECKLIST TAB ── */}
            {activeTab === "checklist" && (
              <>
                <div className="instructions">
                  <div className="instructions-icon">✅</div>
                  <div className="instructions-text">
                    <strong>How to use:</strong> Expand each network to see exactly what you need before applying. Green = done, Yellow = still to do. Click the apply link to open the registration page.
                  </div>
                </div>
                <div className="checklist-legend">
                  <div className="legend-item"><div className="legend-dot" style={{background:"#4ade80"}} />Done — ready</div>
                  <div className="legend-item"><div className="legend-dot" style={{background:"#fbbf24"}} />To Do — action needed</div>
                </div>
                {networks.map((net) => <NetworkCard key={net.id} net={net} />)}
              </>
            )}

            {/* ── W-8BEN-E TAB ── */}
            {activeTab === "w8" && (
              <>
                <div className="w8-banner">
                  <div className="w8-banner-icon">📄</div>
                  <div className="w8-banner-text">
                    <strong>W-8BEN-E — Certificate of Foreign Status of Beneficial Owner</strong><br />
                    Required by all US affiliate networks (ShareASale, CJ, Impact, MaxBounty, ClickBank) to pay commissions to non-US companies without 30% withholding tax. The UK–US Tax Treaty reduces your rate to <strong>0%</strong>. Fill the fields below exactly as shown.
                    <br />
                    <a className="w8-download-link" href="https://www.irs.gov/pub/irs-pdf/fw8bene.pdf" target="_blank" rel="noopener noreferrer">
                      <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>
                      Download official W-8BEN-E PDF from IRS.gov
                    </a>
                  </div>
                </div>
                {w8Groups.map((g) => <W8Group key={g.id} group={g} />)}
              </>
            )}

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
