/**
 * AMBERN LTD — International Digital Marketing Agency
 * Design Philosophy: Dark Intelligence / Corporate Power
 * Colors: #0A0A0A (bg), #E8650A (orange accent), #FFFFFF (text), #1A1A1A (cards)
 * Typography: Space Grotesk (headings) + Inter (body)
 * Layout: Full-width sections, asymmetric, cinematic
 */

import { useState, useEffect, useRef, FormEvent } from "react";

// Formspree endpoint — delivers to ltdambern@gmail.com
const FORMSPREE_ENDPOINT = "https://formspree.io/f/xpwzgvqe";

const LOGO_V1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/ambern_logo_v1_d51e72ba.png";
const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/hero_bg-Rw8TVnNcGQccFWRSBnyLoR.webp";
const SERVICES_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/services_bg-8aQRj27sT4yRfQBPPyQvSH.webp";
const LONDON_OFFICE = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/london_office-6R5FRFnvMdYvxFUaatfByn.webp";
const STATS_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/stats_bg-4uRmkGVFN3NRVUmdGVhY24.webp";

const services = [
  {
    icon: "🛡️",
    title: "Cybersecurity & VPN",
    desc: "We drive high-intent audiences to leading VPN and cybersecurity brands across the US, UK, Canada and Australia through precision-targeted paid media campaigns.",
    tags: ["NordVPN", "ExpressVPN", "Surfshark"],
  },
  {
    icon: "📈",
    title: "Finance & Precious Metals",
    desc: "We connect qualified investors with gold IRA providers and wealth protection platforms, generating premium leads with exceptional lifetime value.",
    tags: ["Gold IRA", "BullionVault", "GoldBroker"],
  },
  {
    icon: "🌐",
    title: "SaaS & Web Hosting",
    desc: "We promote industry-leading hosting and SaaS platforms to entrepreneurs and developers globally, leveraging our Tier-1 affiliate network relationships.",
    tags: ["Hostinger", "Namecheap", "v0 / Vercel"],
  },
  {
    icon: "🔒",
    title: "Insurance Lead Generation",
    desc: "We generate high-quality insurance leads across life, health and property verticals in the US market through compliant, conversion-optimised funnels.",
    tags: ["Life Insurance", "Health Plans", "CPL Campaigns"],
  },
  {
    icon: "💻",
    title: "Paid Media Management",
    desc: "Full-service Facebook Ads and Google Ads management for affiliate campaigns. From audience research and creative production to optimisation and scaling.",
    tags: ["Facebook Ads", "Google Ads", "PPC"],
  },
  {
    icon: "🌍",
    title: "International Market Entry",
    desc: "Leveraging our London headquarters and global network, we help brands enter Tier-1 markets including the US, UK, EU, Canada and Australia.",
    tags: ["US Market", "UK & EU", "APAC"],
  },
];

// Stats with numeric targets for count-up animation
const stats = [
  { prefix: "£", target: 2.4, suffix: "M+", decimals: 1, label: "Revenue Generated for Partners" },
  { prefix: "",  target: 14,  suffix: "",   decimals: 0, label: "Countries Reached" },
  { prefix: "",  target: 60,  suffix: "+",  decimals: 0, label: "Affiliate Programmes Active" },
  { prefix: "",  target: 340, suffix: "%",  decimals: 0, label: "Average ROAS for Clients" },
];

const networks = [
  { name: "ShareASale", tier: "Tier 2 Network" },
  { name: "CJ Affiliate", tier: "Tier 2 Network" },
  { name: "Awin", tier: "Tier 2 Network" },
  { name: "Impact.com", tier: "Tier 1 Network" },
  { name: "MaxBounty", tier: "Tier 1 Network" },
  { name: "PartnerStack", tier: "Tier 1 Network" },
];

const faqs = [
  {
    q: "Where is Ambern Ltd registered?",
    a: "Ambern Ltd is a registered company in England and Wales, operating from London, United Kingdom. Our registration provides us with access to Tier-1 affiliate networks and financial programmes globally.",
  },
  {
    q: "Which markets do you operate in?",
    a: "Our primary focus markets are the United States, United Kingdom, Canada, Australia, and Western Europe. We run paid media campaigns targeting English-speaking Tier-1 audiences with high purchasing power.",
  },
  {
    q: "What traffic sources do you use?",
    a: "We specialise in paid media, primarily Facebook Ads (Meta) and Google Ads (PPC). All traffic is compliant, brand-safe and targeted to high-intent audiences in approved geographies.",
  },
  {
    q: "How do you ensure compliance with affiliate programmes?",
    a: "We adhere strictly to each programme's terms of service. Our campaigns are reviewed by our compliance team before launch, and we maintain transparent reporting with all our affiliate partners.",
  },
];

function useCountUp(target: number, duration: number, decimals: number, start: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!start) return;
    let startTime: number | null = null;
    const multiplier = Math.pow(10, decimals);
    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease-out cubic for a satisfying deceleration
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target * multiplier) / multiplier);
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [target, duration, decimals, start]);
  return count;
}

function StatCard({ prefix, target, suffix, decimals, label }: { prefix: string; target: number; suffix: string; decimals: number; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const count = useCountUp(target, 2000, decimals, visible);
  const displayValue = decimals > 0 ? count.toFixed(decimals) : count.toString();
  return (
    <div ref={ref} className="stat-card">
      <div
        className="stat-value"
        style={{
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0) scale(1)" : "translateY(24px) scale(0.92)",
          transition: "opacity 0.5s ease, transform 0.5s cubic-bezier(0.16,1,0.3,1)",
        }}
      >
        {prefix}{displayValue}{suffix}
      </div>
      <div className="stat-label" style={{ opacity: visible ? 1 : 0, transition: "opacity 0.5s ease 0.2s" }}>{label}</div>
    </div>
  );
}

function FaqItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        <span>{q}</span>
        <span className="faq-icon" style={{ transform: open ? "rotate(45deg)" : "rotate(0deg)", transition: "transform 0.3s ease" }}>+</span>
      </div>
      <div className="faq-answer" style={{ maxHeight: open ? "300px" : "0", opacity: open ? 1 : 0, transition: "all 0.4s ease" }}>
        <p>{a}</p>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [formStatus, setFormStatus] = useState<"idle" | "sending" | "success" | "error">("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setFormStatus("sending");
    const form = e.currentTarget;
    const data = new FormData(form);
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (res.ok) {
        setFormStatus("success");
        form.reset();
      } else {
        setFormStatus("error");
      }
    } catch {
      setFormStatus("error");
    }
  }
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="ambern-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;600;700;800&family=Inter:wght@300;400;500;600&display=swap');

        * { margin: 0; padding: 0; box-sizing: border-box; }
        .ambern-root { background: #0A0A0A; color: #FFFFFF; font-family: 'Inter', sans-serif; overflow-x: hidden; }

        /* NAV */
        .nav { position: fixed; top: 0; left: 0; right: 0; z-index: 100; padding: 20px 60px; display: flex; align-items: center; justify-content: space-between; transition: all 0.3s ease; }
        .nav.scrolled { background: rgba(10,10,10,0.95); backdrop-filter: blur(20px); border-bottom: 1px solid rgba(232,101,10,0.2); padding: 14px 60px; }
        .nav-logo { display: flex; align-items: center; gap: 12px; text-decoration: none; }
        .nav-logo img { height: 44px; width: 44px; object-fit: contain; }
        .nav-logo-text { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 700; color: #fff; letter-spacing: 2px; }
        .nav-links { display: flex; gap: 36px; list-style: none; }
        .nav-links a { color: rgba(255,255,255,0.75); text-decoration: none; font-size: 14px; font-weight: 500; letter-spacing: 0.5px; transition: color 0.2s; }
        .nav-links a:hover { color: #E8650A; }
        .nav-cta { background: #E8650A; color: #fff; padding: 10px 24px; border-radius: 4px; font-size: 14px; font-weight: 600; text-decoration: none; letter-spacing: 0.5px; transition: all 0.2s; }
        .nav-cta:hover { background: #ff7a1f; transform: translateY(-1px); }
        .nav-hamburger { display: none; flex-direction: column; gap: 5px; cursor: pointer; }
        .nav-hamburger span { display: block; width: 24px; height: 2px; background: #fff; transition: all 0.3s; }

        /* HERO */
        .hero { min-height: 100vh; position: relative; display: flex; align-items: center; overflow: hidden; }
        .hero-bg { position: absolute; inset: 0; background-image: url(${HERO_BG}); background-size: cover; background-position: center; background-repeat: no-repeat; animation: kenBurns 20s ease-in-out infinite alternate; }
        @keyframes kenBurns {
          0%   { background-size: 110%; background-position: 55% 45%; }
          50%  { background-size: 125%; background-position: 45% 55%; }
          100% { background-size: 115%; background-position: 50% 48%; }
        }
        @media (max-width: 768px) {
          .hero-bg { background-size: cover; background-position: center center; animation: none; }
        }
        .hero-overlay { position: absolute; inset: 0; background: linear-gradient(135deg, rgba(10,10,10,0.85) 0%, rgba(10,10,10,0.5) 50%, rgba(10,10,10,0.7) 100%); }
        /* Floating particles */
        .hero-particles { position: absolute; inset: 0; overflow: hidden; pointer-events: none; z-index: 1; }
        .particle { position: absolute; border-radius: 50%; background: rgba(232,101,10,0.6); animation: floatParticle linear infinite; }
        .particle:nth-child(1)  { width:3px; height:3px; left:10%; top:20%; animation-duration:12s; animation-delay:0s; }
        .particle:nth-child(2)  { width:2px; height:2px; left:25%; top:60%; animation-duration:18s; animation-delay:2s; }
        .particle:nth-child(3)  { width:4px; height:4px; left:40%; top:30%; animation-duration:15s; animation-delay:4s; }
        .particle:nth-child(4)  { width:2px; height:2px; left:60%; top:70%; animation-duration:20s; animation-delay:1s; }
        .particle:nth-child(5)  { width:3px; height:3px; left:75%; top:25%; animation-duration:14s; animation-delay:3s; }
        .particle:nth-child(6)  { width:2px; height:2px; left:85%; top:50%; animation-duration:16s; animation-delay:5s; }
        .particle:nth-child(7)  { width:4px; height:4px; left:15%; top:80%; animation-duration:22s; animation-delay:0.5s; }
        .particle:nth-child(8)  { width:2px; height:2px; left:50%; top:15%; animation-duration:13s; animation-delay:6s; }
        .particle:nth-child(9)  { width:3px; height:3px; left:90%; top:40%; animation-duration:17s; animation-delay:2.5s; }
        .particle:nth-child(10) { width:2px; height:2px; left:35%; top:90%; animation-duration:19s; animation-delay:1.5s; }
        @keyframes floatParticle {
          0%   { transform: translateY(0px) translateX(0px); opacity: 0; }
          10%  { opacity: 1; }
          90%  { opacity: 0.6; }
          100% { transform: translateY(-120px) translateX(30px); opacity: 0; }
        }
        /* Hero content entrance animation */
        .hero-content { animation: heroEntrance 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards; }
        @keyframes heroEntrance {
          from { opacity: 0; transform: translateY(40px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        .hero-content { position: relative; z-index: 2; padding: 0 60px; max-width: 780px; }
        .hero-badge { display: inline-flex; align-items: center; gap: 8px; background: rgba(232,101,10,0.15); border: 1px solid rgba(232,101,10,0.4); padding: 6px 16px; border-radius: 100px; font-size: 12px; font-weight: 600; letter-spacing: 1.5px; text-transform: uppercase; color: #E8650A; margin-bottom: 28px; }
        .hero-badge::before { content: ''; width: 6px; height: 6px; background: #E8650A; border-radius: 50%; animation: pulse 2s infinite; }
        @keyframes pulse { 0%,100% { opacity: 1; } 50% { opacity: 0.3; } }
        .hero h1 { font-family: 'Space Grotesk', sans-serif; font-size: clamp(42px, 6vw, 80px); font-weight: 800; line-height: 1.05; letter-spacing: -2px; margin-bottom: 24px; }
        .hero h1 span { color: #E8650A; }
        .hero-sub { font-size: 18px; line-height: 1.7; color: rgba(255,255,255,0.7); max-width: 560px; margin-bottom: 40px; font-weight: 300; }
        .hero-actions { display: flex; gap: 16px; flex-wrap: wrap; }
        .btn-primary { background: #E8650A; color: #fff; padding: 16px 36px; border-radius: 4px; font-size: 15px; font-weight: 600; text-decoration: none; letter-spacing: 0.5px; transition: all 0.2s; display: inline-block; }
        .btn-primary:hover { background: #ff7a1f; transform: translateY(-2px); box-shadow: 0 8px 30px rgba(232,101,10,0.4); }
        .btn-outline { border: 1px solid rgba(255,255,255,0.3); color: #fff; padding: 16px 36px; border-radius: 4px; font-size: 15px; font-weight: 500; text-decoration: none; transition: all 0.2s; display: inline-block; }
        .btn-outline:hover { border-color: #E8650A; color: #E8650A; }
        .hero-scroll { position: absolute; bottom: 40px; left: 60px; display: flex; align-items: center; gap: 12px; color: rgba(255,255,255,0.4); font-size: 12px; letter-spacing: 2px; text-transform: uppercase; }
        .hero-scroll-line { width: 40px; height: 1px; background: rgba(255,255,255,0.3); }

        /* TRUST BAR */
        .trust-bar { background: #111; border-top: 1px solid rgba(255,255,255,0.06); border-bottom: 1px solid rgba(255,255,255,0.06); padding: 20px 60px; display: flex; align-items: center; justify-content: space-between; gap: 20px; flex-wrap: wrap; }
        .trust-item { display: flex; align-items: center; gap: 10px; color: rgba(255,255,255,0.5); font-size: 13px; font-weight: 500; letter-spacing: 0.5px; }
        .trust-item-icon { color: #E8650A; font-size: 16px; }
        .trust-divider { width: 1px; height: 20px; background: rgba(255,255,255,0.1); }

        /* SECTION COMMON */
        .section { padding: 100px 60px; }
        .section-label { font-size: 11px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase; color: #E8650A; margin-bottom: 16px; }
        .section-title { font-family: 'Space Grotesk', sans-serif; font-size: clamp(32px, 4vw, 52px); font-weight: 700; line-height: 1.1; letter-spacing: -1px; margin-bottom: 20px; }
        .section-desc { font-size: 17px; color: rgba(255,255,255,0.6); line-height: 1.7; max-width: 560px; font-weight: 300; }

        /* ABOUT */
        .about { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .about-image { position: relative; border-radius: 8px; overflow: hidden; }
        .about-image img { width: 100%; height: 480px; object-fit: cover; display: block; }
        .about-image-overlay { position: absolute; inset: 0; background: linear-gradient(to top, rgba(10,10,10,0.6) 0%, transparent 50%); }
        .about-badge { position: absolute; bottom: 24px; left: 24px; background: rgba(10,10,10,0.9); border: 1px solid rgba(232,101,10,0.4); padding: 12px 20px; border-radius: 6px; }
        .about-badge-title { font-family: 'Space Grotesk', sans-serif; font-size: 22px; font-weight: 700; color: #E8650A; }
        .about-badge-sub { font-size: 12px; color: rgba(255,255,255,0.6); letter-spacing: 1px; }
        .about-text .section-desc { margin-bottom: 32px; max-width: 100%; }
        .about-list { list-style: none; display: flex; flex-direction: column; gap: 12px; }
        .about-list li { display: flex; align-items: flex-start; gap: 12px; font-size: 15px; color: rgba(255,255,255,0.75); line-height: 1.5; }
        .about-list li::before { content: '→'; color: #E8650A; font-weight: 700; flex-shrink: 0; margin-top: 1px; }

        /* SERVICES */
        .services-section { position: relative; overflow: hidden; }
        .services-bg { position: absolute; inset: 0; background-image: url(${SERVICES_BG}); background-size: cover; background-position: center; opacity: 0.3; }
        .services-overlay { position: absolute; inset: 0; background: rgba(10,10,10,0.85); }
        .services-inner { position: relative; z-index: 2; }
        .services-header { display: flex; justify-content: space-between; align-items: flex-end; margin-bottom: 60px; flex-wrap: wrap; gap: 24px; }
        .services-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px; }
        .service-card { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.08); border-radius: 8px; padding: 36px 32px; transition: all 0.3s ease; cursor: default; }
        .service-card:hover { background: rgba(232,101,10,0.08); border-color: rgba(232,101,10,0.3); transform: translateY(-4px); }
        .service-icon { font-size: 32px; margin-bottom: 20px; }
        .service-title { font-family: 'Space Grotesk', sans-serif; font-size: 20px; font-weight: 600; margin-bottom: 12px; }
        .service-desc { font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; margin-bottom: 20px; font-weight: 300; }
        .service-tags { display: flex; flex-wrap: wrap; gap: 8px; }
        .service-tag { background: rgba(232,101,10,0.12); border: 1px solid rgba(232,101,10,0.25); color: #E8650A; font-size: 11px; font-weight: 600; padding: 4px 10px; border-radius: 100px; letter-spacing: 0.5px; }

        /* STATS */
        .stats-section { position: relative; overflow: hidden; }
        .stats-bg { position: absolute; inset: 0; background-image: url(${STATS_BG}); background-size: cover; background-position: center; opacity: 0.25; }
        .stats-overlay { position: absolute; inset: 0; background: rgba(10,10,10,0.8); }
        .stats-inner { position: relative; z-index: 2; text-align: center; }
        .stats-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 40px; margin-top: 60px; }
        .stat-card { text-align: center; }
        .stat-value { font-family: 'Space Grotesk', sans-serif; font-size: clamp(36px, 5vw, 60px); font-weight: 800; color: #E8650A; letter-spacing: -2px; line-height: 1; margin-bottom: 12px; }
        .stat-label { font-size: 14px; color: rgba(255,255,255,0.55); font-weight: 400; letter-spacing: 0.5px; line-height: 1.4; }

        /* NETWORKS */
        .networks-section { background: #0D0D0D; }
        .networks-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 20px; margin-top: 48px; }
        .network-card { background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.07); border-radius: 6px; padding: 28px 24px; display: flex; align-items: center; justify-content: space-between; transition: all 0.2s; }
        .network-card:hover { border-color: rgba(232,101,10,0.3); background: rgba(232,101,10,0.05); }
        .network-name { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 600; }
        .network-tier { font-size: 11px; color: #E8650A; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; background: rgba(232,101,10,0.1); padding: 4px 10px; border-radius: 100px; }

        /* FAQ */
        .faq-section { background: #0A0A0A; }
        .faq-layout { display: grid; grid-template-columns: 1fr 1.5fr; gap: 80px; align-items: start; }
        .faq-list { display: flex; flex-direction: column; gap: 0; }
        .faq-item { border-bottom: 1px solid rgba(255,255,255,0.08); padding: 24px 0; cursor: pointer; }
        .faq-question { display: flex; justify-content: space-between; align-items: center; gap: 16px; font-family: 'Space Grotesk', sans-serif; font-size: 16px; font-weight: 600; color: #fff; }
        .faq-icon { font-size: 24px; color: #E8650A; flex-shrink: 0; line-height: 1; }
        .faq-answer { overflow: hidden; }
        .faq-answer p { padding-top: 16px; font-size: 14px; color: rgba(255,255,255,0.6); line-height: 1.7; font-weight: 300; }

        /* CONTACT */
        .contact-section { background: #111; }
        .contact-layout { display: grid; grid-template-columns: 1fr 1fr; gap: 80px; align-items: center; }
        .contact-info { display: flex; flex-direction: column; gap: 28px; margin-top: 32px; }
        .contact-item { display: flex; align-items: flex-start; gap: 16px; }
        .contact-icon { width: 44px; height: 44px; background: rgba(232,101,10,0.12); border: 1px solid rgba(232,101,10,0.25); border-radius: 6px; display: flex; align-items: center; justify-content: center; font-size: 18px; flex-shrink: 0; }
        .contact-item-title { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.4); margin-bottom: 4px; }
        .contact-item-value { font-size: 15px; color: #fff; font-weight: 500; }
        .contact-form { display: flex; flex-direction: column; gap: 16px; }
        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-field { display: flex; flex-direction: column; gap: 8px; }
        .form-label { font-size: 12px; font-weight: 600; letter-spacing: 1px; text-transform: uppercase; color: rgba(255,255,255,0.5); }
        .form-input, .form-textarea { background: rgba(255,255,255,0.04); border: 1px solid rgba(255,255,255,0.1); border-radius: 4px; padding: 14px 16px; color: #fff; font-size: 14px; font-family: 'Inter', sans-serif; outline: none; transition: border-color 0.2s; width: 100%; }
        .form-input:focus, .form-textarea:focus { border-color: #E8650A; }
        .form-textarea { resize: vertical; min-height: 120px; }
        .form-submit { background: #E8650A; color: #fff; border: none; padding: 16px 32px; border-radius: 4px; font-size: 15px; font-weight: 600; cursor: pointer; letter-spacing: 0.5px; transition: all 0.2s; font-family: 'Inter', sans-serif; }
        .form-submit:hover { background: #ff7a1f; transform: translateY(-1px); box-shadow: 0 8px 30px rgba(232,101,10,0.35); }

        /* FOOTER */
        .footer { background: #070707; border-top: 1px solid rgba(255,255,255,0.06); padding: 60px 60px 40px; }
        .footer-top { display: grid; grid-template-columns: 2fr 1fr 1fr 1fr; gap: 60px; margin-bottom: 48px; }
        .footer-brand { display: flex; flex-direction: column; gap: 16px; }
        .footer-logo { display: flex; align-items: center; gap: 10px; }
        .footer-logo img { height: 36px; width: 36px; object-fit: contain; }
        .footer-logo-text { font-family: 'Space Grotesk', sans-serif; font-size: 18px; font-weight: 700; letter-spacing: 2px; color: #fff; }
        .footer-brand-desc { font-size: 13px; color: rgba(255,255,255,0.4); line-height: 1.7; max-width: 280px; font-weight: 300; }
        .footer-reg { font-size: 11px; color: rgba(255,255,255,0.25); line-height: 1.6; }
        .footer-col-title { font-size: 11px; font-weight: 700; letter-spacing: 2px; text-transform: uppercase; color: rgba(255,255,255,0.5); margin-bottom: 20px; }
        .footer-links { list-style: none; display: flex; flex-direction: column; gap: 10px; }
        .footer-links a { color: rgba(255,255,255,0.45); text-decoration: none; font-size: 13px; transition: color 0.2s; }
        .footer-links a:hover { color: #E8650A; }
        .footer-bottom { border-top: 1px solid rgba(255,255,255,0.06); padding-top: 28px; display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: 12px; }
        .footer-copy { font-size: 12px; color: rgba(255,255,255,0.25); }
        .footer-legal { display: flex; gap: 24px; }
        .footer-legal a { font-size: 12px; color: rgba(255,255,255,0.25); text-decoration: none; transition: color 0.2s; }
        .footer-legal a:hover { color: rgba(255,255,255,0.5); }

        /* MOBILE */
        @media (max-width: 1024px) {
          .services-grid { grid-template-columns: repeat(2, 1fr); }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .networks-grid { grid-template-columns: repeat(2, 1fr); }
          .footer-top { grid-template-columns: 1fr 1fr; }
          .about { grid-template-columns: 1fr; }
          .faq-layout { grid-template-columns: 1fr; }
          .contact-layout { grid-template-columns: 1fr; }
        }
        @media (max-width: 768px) {
          .nav { padding: 16px 24px; }
          .nav.scrolled { padding: 12px 24px; }
          .nav-links { display: none; }
          .nav-cta { display: none; }
          .nav-hamburger { display: flex; }
          .section { padding: 70px 24px; }
          .hero-content { padding: 0 24px; }
          .hero-scroll { left: 24px; }
          .trust-bar { padding: 16px 24px; flex-direction: column; align-items: flex-start; gap: 12px; }
          .trust-divider { display: none; }
          .services-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: repeat(2, 1fr); }
          .networks-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .footer { padding: 48px 24px 32px; }
          .footer-top { grid-template-columns: 1fr; gap: 32px; }
          .footer-bottom { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      {/* NAV */}
      <nav className={`nav ${scrolled ? "scrolled" : ""}`}>
        <a href="#" className="nav-logo">
          <img src={LOGO_V1} alt="Ambern Ltd" />
          <span className="nav-logo-text">AMBERN</span>
        </a>
        <ul className="nav-links">
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#networks">Networks</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="/company">Company</a></li>
        </ul>
        <a href="#contact" className="nav-cta">Partner With Us</a>
        <div className="nav-hamburger" onClick={() => setMenuOpen(!menuOpen)}>
          <span /><span /><span />
        </div>
      </nav>

      {/* HERO */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-overlay" />
        <div className="hero-particles">
          {[...Array(10)].map((_, i) => <div key={i} className="particle" />)}
        </div>
        <div className="hero-content">
          <div className="hero-badge">London, United Kingdom · Est. 2024</div>
          <h1>
            Performance<br />
            Marketing at<br />
            <span>Global Scale.</span>
          </h1>
          <p className="hero-sub">
            Ambern Ltd is an international digital marketing agency headquartered in London. We drive qualified traffic to premium affiliate programmes across finance, cybersecurity, SaaS and insurance verticals in Tier-1 markets worldwide.
          </p>
          <div className="hero-actions">
            <a href="#contact" className="btn-primary">Partner With Us</a>
            <a href="#services" className="btn-outline">Our Services</a>
          </div>
        </div>
        <div className="hero-scroll">
          <div className="hero-scroll-line" />
          Scroll to explore
        </div>
      </section>

      {/* TRUST BAR */}
      <div className="trust-bar">
        <div className="trust-item"><span className="trust-item-icon">🏢</span> Registered in England & Wales</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="trust-item-icon">🌍</span> Operating in 14 Countries</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="trust-item-icon">📊</span> Facebook Ads & Google Ads Specialists</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="trust-item-icon">🔗</span> 60+ Active Affiliate Programmes</div>
        <div className="trust-divider" />
        <div className="trust-item"><span className="trust-item-icon">✅</span> Fully Compliant Traffic</div>
      </div>

      {/* ABOUT */}
      <section className="section" id="about">
        <div className="about">
          <div className="about-image">
            <img src={LONDON_OFFICE} alt="Ambern Ltd London Office" />
            <div className="about-image-overlay" />
            <div className="about-badge">
              <div className="about-badge-title">London HQ</div>
              <div className="about-badge-sub">England & Wales · Registered</div>
            </div>
          </div>
          <div className="about-text">
            <div className="section-label">About Ambern Ltd</div>
            <h2 className="section-title">Built for the Global Affiliate Economy</h2>
            <p className="section-desc">
              Ambern Ltd was founded with a single mission: to bridge the gap between high-quality paid traffic and the world's most lucrative affiliate programmes. Operating from London, we have the regulatory standing and network access that most agencies simply cannot match.
            </p>
            <ul className="about-list">
              <li>Tier-1 affiliate network partnerships across ShareASale, CJ Affiliate, Awin, Impact.com and MaxBounty</li>
              <li>Dedicated paid media teams specialising in Facebook Ads and Google Ads for affiliate verticals</li>
              <li>Full compliance framework ensuring all campaigns adhere to each programme's terms of service</li>
              <li>Transparent reporting and real-time performance dashboards for all partner programmes</li>
              <li>Focused on high-value verticals: finance, cybersecurity, SaaS, hosting and insurance</li>
            </ul>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section className="section services-section" id="services">
        <div className="services-bg" />
        <div className="services-overlay" />
        <div className="services-inner">
          <div className="services-header">
            <div>
              <div className="section-label">What We Do</div>
              <h2 className="section-title">Our Core Verticals</h2>
            </div>
            <p className="section-desc" style={{ marginBottom: 0 }}>
              We operate across six high-performance affiliate verticals, each managed by specialists with deep knowledge of the niche, the audience and the conversion mechanics.
            </p>
          </div>
          <div className="services-grid">
            {services.map((s) => (
              <div className="service-card" key={s.title}>
                <div className="service-icon">{s.icon}</div>
                <div className="service-title">{s.title}</div>
                <div className="service-desc">{s.desc}</div>
                <div className="service-tags">
                  {s.tags.map((t) => <span className="service-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="section stats-section">
        <div className="stats-bg" />
        <div className="stats-overlay" />
        <div className="stats-inner">
          <div className="section-label">Our Track Record</div>
          <h2 className="section-title">Results That Speak for Themselves</h2>
          <div className="stats-grid">
            {stats.map((s) => <StatCard key={s.label} prefix={s.prefix} target={s.target} suffix={s.suffix} decimals={s.decimals} label={s.label} />)}
          </div>
        </div>
      </section>

      {/* NETWORKS */}
      <section className="section networks-section" id="networks">
        <div className="section-label">Our Network Access</div>
        <h2 className="section-title">Tier-1 Affiliate Networks</h2>
        <p className="section-desc">
          Our London registration and proven track record gives us direct access to the world's most exclusive affiliate networks — the same networks that are difficult or impossible to access without an established international presence.
        </p>
        <div className="networks-grid">
          {networks.map((n) => (
            <div className="network-card" key={n.name}>
              <span className="network-name">{n.name}</span>
              <span className="network-tier">{n.tier}</span>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ */}
      <section className="section faq-section">
        <div className="faq-layout">
          <div>
            <div className="section-label">Common Questions</div>
            <h2 className="section-title">Frequently Asked Questions</h2>
            <p className="section-desc">
              Everything you need to know about Ambern Ltd, our operations and how we work with affiliate programmes and brand partners.
            </p>
          </div>
          <div className="faq-list">
            {faqs.map((f) => <FaqItem key={f.q} q={f.q} a={f.a} />)}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section className="section contact-section" id="contact">
        <div className="contact-layout">
          <div>
            <div className="section-label">Get In Touch</div>
            <h2 className="section-title">Partner With Ambern Ltd</h2>
            <p className="section-desc">
              Whether you are an affiliate network, a brand looking for quality traffic, or a programme manager evaluating our application — we welcome the conversation.
            </p>
            <div className="contact-info">
              <div className="contact-item">
                <div className="contact-icon">🏢</div>
                <div>
                  <div className="contact-item-title">Registered Office</div>
                  <div className="contact-item-value">London, England & Wales, United Kingdom</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">📧</div>
                <div>
                  <div className="contact-item-title">Email</div>
                  <div className="contact-item-value">partnerships@ambern.uk</div>
                </div>
              </div>
              <div className="contact-item">
                <div className="contact-icon">🌍</div>
                <div>
                  <div className="contact-item-title">Markets</div>
                  <div className="contact-item-value">US · UK · Canada · Australia · EU</div>
                </div>
              </div>
            </div>
          </div>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-field">
                <label className="form-label">First Name</label>
                <input className="form-input" type="text" name="firstName" placeholder="John" required />
              </div>
              <div className="form-field">
                <label className="form-label">Last Name</label>
                <input className="form-input" type="text" name="lastName" placeholder="Smith" required />
              </div>
            </div>
            <div className="form-field">
              <label className="form-label">Company / Network</label>
              <input className="form-input" type="text" name="company" placeholder="e.g. ShareASale, NordVPN, etc." />
            </div>
            <div className="form-field">
              <label className="form-label">Email Address</label>
              <input className="form-input" type="email" name="email" placeholder="john@company.com" required />
            </div>
            <div className="form-field">
              <label className="form-label">Message</label>
              <textarea className="form-textarea" name="message" placeholder="Tell us about your programme or enquiry..." required />
            </div>
            {formStatus === "success" && (
              <div style={{ background: "rgba(34,197,94,0.12)", border: "1px solid rgba(34,197,94,0.35)", borderRadius: "6px", padding: "16px 20px", color: "#4ade80", fontSize: "14px", fontWeight: 500 }}>
                ✅ Message sent! We'll get back to you within 24 hours.
              </div>
            )}
            {formStatus === "error" && (
              <div style={{ background: "rgba(239,68,68,0.12)", border: "1px solid rgba(239,68,68,0.35)", borderRadius: "6px", padding: "16px 20px", color: "#f87171", fontSize: "14px", fontWeight: 500 }}>
                ❌ Something went wrong. Please email us directly at partnerships@ambern.uk
              </div>
            )}
            <button className="form-submit" type="submit" disabled={formStatus === "sending" || formStatus === "success"} style={{ opacity: formStatus === "sending" ? 0.7 : 1 }}>
              {formStatus === "sending" ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src={LOGO_V1} alt="Ambern Ltd" />
              <span className="footer-logo-text">AMBERN</span>
            </div>
            <p className="footer-brand-desc">
              International digital marketing agency headquartered in London, specialising in performance-based affiliate marketing across Tier-1 global markets.
            </p>
            <p className="footer-reg">
              Ambern Ltd · Company No. 16622550<br />
              Registered in England & Wales<br />
              71-75 Shelton Street, Covent Garden<br />
              London, WC2H 9JQ, United Kingdom
            </p>
          </div>
          <div>
            <div className="footer-col-title">Services</div>
            <ul className="footer-links">
              <li><a href="#services">Cybersecurity & VPN</a></li>
              <li><a href="#services">Finance & Precious Metals</a></li>
              <li><a href="#services">SaaS & Web Hosting</a></li>
              <li><a href="#services">Insurance Lead Gen</a></li>
              <li><a href="#services">Paid Media Management</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Networks</div>
            <ul className="footer-links">
              <li><a href="#networks">ShareASale</a></li>
              <li><a href="#networks">CJ Affiliate</a></li>
              <li><a href="#networks">Awin</a></li>
              <li><a href="#networks">Impact.com</a></li>
              <li><a href="#networks">MaxBounty</a></li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">Company</div>
            <ul className="footer-links">
              <li><a href="#about">About Us</a></li>
              <li><a href="#contact">Contact</a></li>
              <li><a href="#contact">Partner With Us</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p className="footer-copy">© 2025 Ambern Ltd. All rights reserved. Registered in England & Wales · Company No. 16622550</p>
          <div className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Cookie Policy</a>
            <a href="/company" style={{opacity:0.25,fontSize:"11px",letterSpacing:"0.5px"}}>&#9679;</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
