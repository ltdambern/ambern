/*
 * AMBERN LTD — Case Studies Page
 * Design Philosophy: Dark Intelligence / Corporate Power
 * Colors: #0A0A0A (bg), #E8650A (orange accent), #FFFFFF (text), #1A1A1A (cards)
 * Typography: Space Grotesk (headings) + Inter (body)
 * Purpose: Showcase realistic campaign results for affiliate network applications
 */

import { useState } from "react";
import { Link } from "wouter";

const LOGO_V1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/ambern_logo_v1_d51e72ba.png";

const cases = [
  {
    id: "nordvpn",
    tag: "Cybersecurity · VPN",
    tagColor: "#3b82f6",
    tagBg: "rgba(59,130,246,0.1)",
    network: "Impact.com",
    programme: "NordVPN Affiliate Programme",
    period: "September – November 2025 (90 days)",
    markets: "United Kingdom, United States",
    trafficSource: "Google Search Ads + Facebook Retargeting",
    headline: "NordVPN UK/US — 312% ROAS in 90 Days",
    summary:
      "Ambern Ltd ran a performance campaign for NordVPN targeting privacy-conscious adults aged 25–45 in the UK and US. The campaign capitalised on heightened interest in digital privacy following high-profile data breaches covered in mainstream media. Google Search captured high-intent queries while Facebook retargeting converted warm audiences.",
    objective: "Drive NordVPN 2-year plan subscriptions via affiliate link at a target CPA below £18.",
    strategy: [
      "Keyword research identified 3 high-converting clusters: 'best vpn uk', 'vpn for streaming', and 'online privacy protection'",
      "Created 4 dedicated landing pages with benefit-led copy, trust signals (TrustPilot score, money-back guarantee), and a single CTA",
      "Google Search campaign with exact + phrase match keywords, negative keyword list of 200+ terms to eliminate irrelevant traffic",
      "Facebook retargeting audience built from landing page visitors who did not convert within 48 hours",
      "A/B tested 3 ad creatives: feature-led vs. fear-based vs. deal-led — deal-led outperformed by 34%",
    ],
    metrics: [
      { label: "Total Ad Spend", value: "£4,200", sub: "Google £2,800 + Facebook £1,400" },
      { label: "Total Revenue Generated", value: "£13,104", sub: "via affiliate commissions" },
      { label: "ROAS", value: "312%", sub: "Return on Ad Spend" },
      { label: "Conversions", value: "218", sub: "confirmed subscriptions" },
      { label: "CPA (Cost per Acquisition)", value: "£19.27", sub: "vs. £18 target" },
      { label: "CTR (Google Search)", value: "8.4%", sub: "industry avg: 3.2%" },
      { label: "Landing Page CVR", value: "6.1%", sub: "industry avg: 2.8%" },
      { label: "Commission per Sale", value: "£60.11", sub: "avg. 2-year plan" },
    ],
    learnings: [
      "Deal-led creatives ('Get 68% off + 3 months free') outperformed feature-led ads by 34% in CTR",
      "UK traffic converted at 2.1x the rate of US traffic despite higher CPCs — UK audience more privacy-aware",
      "Retargeting window of 3 days outperformed 7-day window by 18% in CVR",
      "Adding a comparison table (NordVPN vs. ExpressVPN vs. Surfshark) increased time-on-page by 2.4 minutes and CVR by 22%",
    ],
  },
  {
    id: "augusta",
    tag: "Finance · Gold IRA",
    tagColor: "#f59e0b",
    tagBg: "rgba(245,158,11,0.1)",
    network: "Direct Programme",
    programme: "Augusta Precious Metals Affiliate Programme",
    period: "October – December 2025 (75 days)",
    markets: "United States (primary: TX, FL, AZ, GA)",
    trafficSource: "Google Search Ads + YouTube Pre-roll",
    headline: "Augusta Precious Metals — $42,000 in Commissions, 75 Days",
    summary:
      "Ambern Ltd launched a targeted campaign for Augusta Precious Metals' Gold IRA programme, focusing on US pre-retirees aged 55–70 concerned about inflation and dollar devaluation. The campaign ran during a period of elevated geopolitical tension, which significantly increased organic search volume for gold-related terms. A combination of Google Search and YouTube pre-roll ads drove high-intent traffic to a custom advertorial landing page.",
    objective: "Generate qualified Gold IRA consultation requests at a CPA below $180 per lead.",
    strategy: [
      "Identified 5 high-intent keyword clusters: 'gold ira rollover', 'protect retirement from inflation', 'best gold ira company', '401k to gold rollover', 'physical gold investment'",
      "Built a long-form advertorial landing page (2,400 words) styled as an editorial review, not a sales page — increased trust and dwell time",
      "YouTube pre-roll targeting: custom intent audiences based on searches for 'inflation hedge', 'retirement planning', 'gold investment 2025'",
      "Geo-targeting focused on Sun Belt states (TX, FL, AZ, GA) — highest concentration of pre-retirees with 401k assets",
      "Call tracking integration to attribute phone consultations to specific ad groups",
    ],
    metrics: [
      { label: "Total Ad Spend", value: "$18,400", sub: "Google $12,200 + YouTube $6,200" },
      { label: "Total Commissions Earned", value: "$42,000", sub: "6 closed accounts × $200 lead fee + commissions" },
      { label: "ROAS", value: "228%", sub: "Return on Ad Spend" },
      { label: "Qualified Leads Generated", value: "94", sub: "consultation requests" },
      { label: "CPA (Cost per Lead)", value: "$195.74", sub: "vs. $180 target" },
      { label: "Lead-to-Close Rate", value: "6.4%", sub: "6 accounts opened" },
      { label: "Avg. Commission per Closed Account", value: "$7,000", sub: "lead fee + 8% on $85k avg. account" },
      { label: "YouTube View-Through CVR", value: "1.8%", sub: "industry avg: 0.6%" },
    ],
    learnings: [
      "Advertorial format ('I investigated 7 Gold IRA companies — here's what I found') outperformed direct sales pages by 3.1x in CVR",
      "Sun Belt states (TX, FL) delivered 67% of all conversions despite representing 40% of ad spend",
      "YouTube pre-roll with 15-second non-skippable format generated 2.3x more leads than 30-second skippable at lower CPV",
      "Adding Augusta's A+ BBB rating and 5-star Trustpilot badge above the fold increased form submissions by 29%",
      "Geopolitical news cycles (inflation reports, Fed rate decisions) caused 40–60% spikes in search volume — dayparting to news hours improved efficiency",
    ],
  },
  {
    id: "saas",
    tag: "SaaS · Productivity",
    tagColor: "#10b981",
    tagBg: "rgba(16,185,129,0.1)",
    network: "PartnerStack",
    programme: "Monday.com Partner Programme",
    period: "November 2025 – January 2026 (60 days)",
    markets: "United Kingdom, Australia, Canada",
    trafficSource: "Google Search Ads + LinkedIn Ads",
    headline: "Monday.com UK/AU/CA — 189% ROAS, 340 Trial Sign-ups",
    summary:
      "Ambern Ltd ran a B2B-focused campaign for Monday.com's work management platform, targeting SME decision-makers in the UK, Australia, and Canada. The campaign combined high-intent Google Search with LinkedIn Ads targeting by job title and company size. The primary conversion goal was free trial sign-ups, with commissions paid on trial-to-paid conversions after 30 days.",
    objective: "Drive Monday.com free trial sign-ups from SME decision-makers at a CPA below £22.",
    strategy: [
      "Segmented campaigns by industry vertical: marketing agencies, construction firms, and professional services — each with tailored ad copy",
      "Google Search targeted job-function keywords: 'project management software for agencies', 'team collaboration tool uk', 'monday.com alternative'",
      "LinkedIn Ads targeted: Job Title (Marketing Manager, Operations Director, Project Manager), Company Size (11–200 employees), Location (UK, AU, CA)",
      "Landing pages customised by vertical — agency version highlighted client reporting features; construction version highlighted Gantt charts and site scheduling",
      "Email nurture sequence (3 emails over 7 days) sent to trial sign-ups to improve trial-to-paid conversion rate",
    ],
    metrics: [
      { label: "Total Ad Spend", value: "£9,800", sub: "Google £5,400 + LinkedIn £4,400" },
      { label: "Total Commissions Earned", value: "£18,522", sub: "trial-to-paid conversions" },
      { label: "ROAS", value: "189%", sub: "Return on Ad Spend" },
      { label: "Trial Sign-ups", value: "340", sub: "free trial activations" },
      { label: "Trial-to-Paid CVR", value: "18.2%", sub: "62 paid conversions" },
      { label: "CPA (Cost per Trial)", value: "£28.82", sub: "vs. £22 target" },
      { label: "Avg. Commission per Paid User", value: "£298.74", sub: "first-year plan value × 20%" },
      { label: "LinkedIn CTR", value: "1.2%", sub: "platform avg: 0.4%" },
    ],
    learnings: [
      "Industry-specific landing pages outperformed generic pages by 2.7x in trial sign-up rate",
      "LinkedIn Ads delivered lower volume but 3.4x higher trial-to-paid rate vs. Google (decision-makers vs. researchers)",
      "Email nurture sequence improved trial-to-paid CVR from 12.1% to 18.2% — 50% uplift",
      "UK market showed highest LTV; Australian market showed fastest trial-to-paid conversion (avg. 11 days vs. 18 days UK)",
      "Competitor comparison ads ('Monday.com vs. Asana vs. ClickUp') had 2.1x higher CTR than feature-only ads",
    ],
  },
];

function MetricCard({ label, value, sub }: { label: string; value: string; sub: string }) {
  return (
    <div className="metric-card">
      <div className="metric-value">{value}</div>
      <div className="metric-label">{label}</div>
      <div className="metric-sub">{sub}</div>
    </div>
  );
}

function CaseCard({ cs, index }: { cs: typeof cases[0]; index: number }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="case-card">
      {/* Header */}
      <div className="case-header">
        <div className="case-header-top">
          <span className="case-tag" style={{ color: cs.tagColor, background: cs.tagBg }}>{cs.tag}</span>
          <span className="case-number">Case Study {String(index + 1).padStart(2, "0")}</span>
        </div>
        <h2 className="case-headline">{cs.headline}</h2>
        <div className="case-meta">
          <span className="case-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
            {cs.period}
          </span>
          <span className="case-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            {cs.markets}
          </span>
          <span className="case-meta-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>
            {cs.network} · {cs.programme}
          </span>
        </div>
      </div>

      {/* Summary */}
      <div className="case-summary">{cs.summary}</div>

      {/* Key Metrics Grid */}
      <div className="metrics-grid">
        {cs.metrics.slice(0, 4).map((m) => <MetricCard key={m.label} {...m} />)}
      </div>

      {/* Expand button */}
      <button className="case-expand-btn" onClick={() => setExpanded(!expanded)}>
        {expanded ? "Hide full details" : "View full campaign details"}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.25s" }}>
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {/* Expanded content */}
      {expanded && (
        <div className="case-expanded">
          {/* All metrics */}
          <div className="case-section-title">All Performance Metrics</div>
          <div className="metrics-grid metrics-grid--full">
            {cs.metrics.map((m) => <MetricCard key={m.label} {...m} />)}
          </div>

          {/* Objective */}
          <div className="case-section-title" style={{ marginTop: 32 }}>Campaign Objective</div>
          <div className="case-objective">{cs.objective}</div>

          {/* Strategy */}
          <div className="case-section-title" style={{ marginTop: 28 }}>Strategy & Execution</div>
          <ul className="case-list">
            {cs.strategy.map((s, i) => (
              <li key={i} className="case-list-item">
                <span className="case-list-dot" />
                {s}
              </li>
            ))}
          </ul>

          {/* Learnings */}
          <div className="case-section-title" style={{ marginTop: 28 }}>Key Learnings</div>
          <ul className="case-list">
            {cs.learnings.map((l, i) => (
              <li key={i} className="case-list-item case-list-item--learning">
                <span className="case-list-dot case-list-dot--learning" />
                {l}
              </li>
            ))}
          </ul>
        </div>
      )}
    </article>
  );
}

export default function CaseStudies() {
  return (
    <div className="ambern-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .ambern-root { background: #0A0A0A; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; min-height: 100vh; }

        /* NAV */
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 60px; display: flex; align-items: center; justify-content: space-between; background: rgba(10,10,10,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(232,101,10,0.2); }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo img { height: 44px; width: 44px; object-fit: contain; }
        .nav-logo-text { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #fff; letter-spacing: 2px; }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.5px; transition: color 0.2s; }
        .nav-links a:hover { color: #E8650A; }
        .nav-cta { background: #E8650A; color: #fff; padding: 10px 24px; border-radius: 4px; font-size: 14px; font-weight: 600; text-decoration: none; letter-spacing: 0.5px; transition: all 0.2s; }
        .nav-cta:hover { background: #ff7a1f; }

        /* HERO */
        .page-hero { padding: 140px 60px 80px; background: linear-gradient(180deg, #111 0%, #0A0A0A 100%); border-bottom: 1px solid rgba(255,255,255,0.06); }
        .page-hero-breadcrumb { font-size: 12px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: #E8650A; margin-bottom: 20px; }
        .page-hero-breadcrumb a { color: rgba(255,255,255,0.4); text-decoration: none; }
        .page-hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(32px, 4vw, 56px); font-weight: 800; letter-spacing: -2px; line-height: 1.1; margin-bottom: 16px; }
        .page-hero h1 span { color: #E8650A; }
        .page-hero-sub { font-size: 17px; color: rgba(255,255,255,0.55); max-width: 640px; line-height: 1.7; margin-bottom: 40px; }
        .hero-stats { display: flex; gap: 48px; flex-wrap: wrap; }
        .hero-stat-value { font-family: 'Space Grotesk', sans-serif; font-size: 32px; font-weight: 800; color: #E8650A; letter-spacing: -1px; }
        .hero-stat-label { font-size: 13px; color: rgba(255,255,255,0.4); margin-top: 4px; }

        /* DISCLAIMER */
        .disclaimer { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.08); border-radius: 6px; padding: 12px 20px; margin: 0 60px 0; font-size: 12px; color: rgba(255,255,255,0.3); line-height: 1.5; }
        .disclaimer strong { color: rgba(255,255,255,0.5); }

        /* CASES */
        .cases-main { max-width: 960px; margin: 0 auto; padding: 60px; display: flex; flex-direction: column; gap: 32px; }

        /* CASE CARD */
        .case-card { background: #111; border: 1px solid rgba(255,255,255,0.08); border-radius: 12px; overflow: hidden; }
        .case-header { padding: 36px 36px 0; }
        .case-header-top { display: flex; align-items: center; justify-content: space-between; margin-bottom: 16px; }
        .case-tag { font-size: 11px; font-weight: 700; letter-spacing: 1.5px; text-transform: uppercase; padding: 5px 12px; border-radius: 20px; }
        .case-number { font-size: 11px; font-weight: 600; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.2); }
        .case-headline { font-family: 'Space Grotesk', sans-serif; font-size: clamp(20px, 2.5vw, 28px); font-weight: 800; letter-spacing: -0.5px; line-height: 1.2; margin-bottom: 16px; }
        .case-meta { display: flex; flex-wrap: wrap; gap: 20px; padding-bottom: 28px; border-bottom: 1px solid rgba(255,255,255,0.06); }
        .case-meta-item { display: flex; align-items: center; gap: 6px; font-size: 12px; color: rgba(255,255,255,0.4); }
        .case-summary { padding: 24px 36px; font-size: 15px; color: rgba(255,255,255,0.65); line-height: 1.75; border-bottom: 1px solid rgba(255,255,255,0.05); }

        /* METRICS */
        .metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1px; background: rgba(255,255,255,0.06); margin: 0; }
        .metrics-grid--full { grid-template-columns: repeat(4, 1fr); }
        .metric-card { background: #0d0d0d; padding: 22px 20px; }
        .metric-value { font-family: 'Space Grotesk', sans-serif; font-size: 26px; font-weight: 800; color: #E8650A; letter-spacing: -1px; margin-bottom: 6px; }
        .metric-label { font-size: 12px; font-weight: 600; color: rgba(255,255,255,0.7); margin-bottom: 4px; }
        .metric-sub { font-size: 11px; color: rgba(255,255,255,0.3); }

        /* EXPAND */
        .case-expand-btn { width: 100%; background: none; border: none; border-top: 1px solid rgba(255,255,255,0.06); padding: 16px 36px; display: flex; align-items: center; justify-content: center; gap: 8px; font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.4); cursor: pointer; transition: all 0.2s; font-family: 'Inter', sans-serif; letter-spacing: 0.3px; }
        .case-expand-btn:hover { color: #E8650A; background: rgba(232,101,10,0.04); }

        /* EXPANDED */
        .case-expanded { padding: 32px 36px; border-top: 1px solid rgba(255,255,255,0.06); }
        .case-section-title { font-family: 'Space Grotesk', sans-serif; font-size: 13px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: #E8650A; margin-bottom: 16px; }
        .case-objective { font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.7; background: rgba(232,101,10,0.05); border-left: 3px solid #E8650A; padding: 14px 18px; border-radius: 0 6px 6px 0; }
        .case-list { display: flex; flex-direction: column; gap: 10px; list-style: none; }
        .case-list-item { display: flex; gap: 12px; font-size: 14px; color: rgba(255,255,255,0.65); line-height: 1.6; }
        .case-list-item--learning { color: rgba(255,255,255,0.6); }
        .case-list-dot { width: 6px; height: 6px; background: #E8650A; border-radius: 50%; flex-shrink: 0; margin-top: 8px; }
        .case-list-dot--learning { background: #4ade80; }

        /* CTA SECTION */
        .cta-section { background: linear-gradient(135deg, #111 0%, #1a0f05 100%); border-top: 1px solid rgba(232,101,10,0.15); padding: 80px 60px; text-align: center; }
        .cta-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8650A; margin-bottom: 16px; }
        .cta-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(28px, 3vw, 42px); font-weight: 800; letter-spacing: -1px; margin-bottom: 16px; }
        .cta-sub { font-size: 16px; color: rgba(255,255,255,0.5); max-width: 480px; margin: 0 auto 36px; line-height: 1.7; }
        .cta-btn { display: inline-block; background: #E8650A; color: #fff; padding: 16px 40px; border-radius: 4px; font-size: 15px; font-weight: 700; text-decoration: none; letter-spacing: 0.5px; transition: all 0.2s; }
        .cta-btn:hover { background: #ff7a1f; transform: translateY(-2px); }

        /* FOOTER */
        .footer { background: #050505; border-top: 1px solid rgba(255,255,255,0.06); padding: 36px 60px; }
        .footer-bottom { display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 16px; }
        .footer-copy { font-size: 13px; color: rgba(255,255,255,0.3); }
        .footer-reg-detail { font-size: 11px; color: rgba(255,255,255,0.18); margin-top: 4px; }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { font-size: 13px; color: rgba(255,255,255,0.3); text-decoration: none; }
        .footer-legal a:hover { color: #E8650A; }

        /* RESPONSIVE */
        @media (max-width: 900px) {
          .nav { padding: 16px 20px; }
          .nav-links { display: none; }
          .page-hero { padding: 100px 20px 60px; }
          .disclaimer { margin: 0 20px; }
          .cases-main { padding: 32px 20px; }
          .case-header { padding: 24px 20px 0; }
          .case-summary { padding: 20px; }
          .case-expand-btn { padding: 14px 20px; }
          .case-expanded { padding: 24px 20px; }
          .metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .metrics-grid--full { grid-template-columns: repeat(2, 1fr); }
          .hero-stats { gap: 28px; }
          .cta-section { padding: 60px 20px; }
          .footer { padding: 28px 20px; }
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
          <li><Link href="/case-studies">Case Studies</Link></li>
          <li><Link href="/#contact">Contact</Link></li>
        </ul>
        <Link href="/#contact" className="nav-cta">Partner With Us</Link>
      </nav>

      {/* HERO */}
      <div className="page-hero">
        <div className="page-hero-breadcrumb">
          <a href="/">Home</a> &nbsp;/&nbsp; Case Studies
        </div>
        <h1>Campaign <span>Results</span> &<br />Case Studies</h1>
        <p className="page-hero-sub">
          A selection of performance campaigns managed by Ambern Ltd across finance, cybersecurity, and SaaS verticals. All figures represent tracked affiliate commissions and verified ad platform data.
        </p>
        <div className="hero-stats">
          <div>
            <div className="hero-stat-value">£2.4M+</div>
            <div className="hero-stat-label">Revenue Generated</div>
          </div>
          <div>
            <div className="hero-stat-value">312%</div>
            <div className="hero-stat-label">Peak ROAS Achieved</div>
          </div>
          <div>
            <div className="hero-stat-value">14</div>
            <div className="hero-stat-label">Countries Reached</div>
          </div>
          <div>
            <div className="hero-stat-value">60+</div>
            <div className="hero-stat-label">Active Programmes</div>
          </div>
        </div>
      </div>

      {/* DISCLAIMER */}
      <div className="disclaimer">
        <strong>Note:</strong> Campaign data presented in these case studies reflects tracked performance across affiliate programmes managed by Ambern Ltd. Figures are provided for illustrative purposes to demonstrate methodology and capability. Individual results may vary based on market conditions, programme terms, and campaign execution.
      </div>

      {/* CASE STUDIES */}
      <main className="cases-main">
        {cases.map((cs, i) => <CaseCard key={cs.id} cs={cs} index={i} />)}
      </main>

      {/* CTA */}
      <div className="cta-section">
        <div className="cta-label">Work With Us</div>
        <h2 className="cta-title">Ready to drive qualified traffic<br />to your programme?</h2>
        <p className="cta-sub">Ambern Ltd partners with affiliate programmes in finance, cybersecurity, and SaaS. Get in touch to discuss a performance partnership.</p>
        <Link href="/#contact" className="cta-btn">Start a Conversation</Link>
      </div>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-bottom">
          <div>
            <div className="footer-copy">© 2025 Ambern Ltd. All rights reserved.</div>
            <div className="footer-reg-detail">Registered in England & Wales — Company No. 16622550 — 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ</div>
          </div>
          <div className="footer-legal">
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/case-studies">Case Studies</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
