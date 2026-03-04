/**
 * AMBERN LTD — Privacy Policy Page
 * GDPR-compliant privacy policy in English
 * Last updated: March 2026
 */

export default function PrivacyPolicy() {
  const LOGO_V1 = "https://d2xsxph8kpxj0f.cloudfront.net/310519663400200484/j3swkrTrMmDAtC9ABvjL9m/ambern_logo_v1_d51e72ba.png";

  return (
    <div style={{ background: "#0A0A0A", color: "#fff", minHeight: "100vh", fontFamily: "'Inter', sans-serif" }}>
      {/* Navbar */}
      <nav style={{ position: "sticky", top: 0, zIndex: 100, background: "rgba(10,10,10,0.95)", borderBottom: "1px solid rgba(255,255,255,0.06)", padding: "0 60px", display: "flex", alignItems: "center", justifyContent: "space-between", height: "72px" }}>
        <a href="/" style={{ display: "flex", alignItems: "center", gap: "12px", textDecoration: "none" }}>
          <img src={LOGO_V1} alt="Ambern" style={{ height: "36px", width: "36px", objectFit: "contain" }} />
          <span style={{ fontFamily: "'Space Grotesk', sans-serif", fontWeight: 700, fontSize: "18px", color: "#fff", letterSpacing: "1px" }}>AMBERN</span>
        </a>
        <a href="/" style={{ background: "#E8650A", color: "#fff", padding: "10px 24px", borderRadius: "4px", fontSize: "14px", fontWeight: 600, textDecoration: "none", letterSpacing: "0.5px" }}>← Back to Home</a>
      </nav>

      {/* Content */}
      <div style={{ maxWidth: "860px", margin: "0 auto", padding: "80px 40px" }}>
        {/* Header */}
        <div style={{ marginBottom: "60px", borderBottom: "1px solid rgba(255,255,255,0.08)", paddingBottom: "40px" }}>
          <div style={{ fontSize: "11px", fontWeight: 700, letterSpacing: "3px", textTransform: "uppercase", color: "#E8650A", marginBottom: "16px" }}>Legal</div>
          <h1 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "clamp(36px, 5vw, 56px)", fontWeight: 800, letterSpacing: "-2px", lineHeight: 1.1, marginBottom: "20px" }}>Privacy Policy</h1>
          <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "15px", lineHeight: 1.7 }}>
            Last updated: <strong style={{ color: "rgba(255,255,255,0.8)" }}>1 March 2026</strong> &nbsp;|&nbsp; Effective date: <strong style={{ color: "rgba(255,255,255,0.8)" }}>1 March 2026</strong>
          </p>
        </div>

        {/* Sections */}
        {[
          {
            title: "1. Who We Are",
            content: `Ambern Ltd ("Ambern", "we", "us", or "our") is a company registered in England and Wales under Company Number 16622550. Our registered office is at 71-75 Shelton Street, Covent Garden, London, WC2H 9JQ, United Kingdom.

We operate as an international digital marketing and affiliate marketing agency. For the purposes of the UK General Data Protection Regulation (UK GDPR) and the EU General Data Protection Regulation (EU GDPR), Ambern Ltd is the data controller of personal data collected through this website.

If you have any questions about this Privacy Policy or how we handle your personal data, please contact us at: partnerships@ambern.uk`
          },
          {
            title: "2. What Data We Collect",
            content: `We collect the following categories of personal data:

**Data you provide directly:**
• Full name (first and last name)
• Email address
• Company or network name
• Message content submitted via our contact form

**Data collected automatically:**
• IP address and approximate geolocation
• Browser type and version
• Operating system
• Pages visited and time spent on the site
• Referring URL (how you arrived at our website)
• Device type (desktop, mobile, tablet)

**Cookies and tracking technologies:**
We use cookies and similar technologies. Please see Section 8 (Cookies) for full details.`
          },
          {
            title: "3. How We Use Your Data",
            content: `We use your personal data for the following purposes:

• **To respond to your enquiries** — when you submit our contact form, we use your name, email and message to respond to your request (Legal basis: Legitimate interests / Contract performance).
• **To manage business relationships** — to communicate with affiliate networks, brand partners and programme managers (Legal basis: Legitimate interests).
• **To improve our website** — we analyse anonymous usage data to understand how visitors interact with our site and to improve its content and performance (Legal basis: Legitimate interests).
• **To comply with legal obligations** — we may process your data where required by applicable law, including UK and EU data protection law (Legal basis: Legal obligation).
• **Marketing communications** — we will only send you marketing communications if you have explicitly opted in to receive them. You may withdraw consent at any time (Legal basis: Consent).`
          },
          {
            title: "4. Legal Bases for Processing (GDPR)",
            content: `Under the UK GDPR and EU GDPR, we rely on the following legal bases:

• **Article 6(1)(a) — Consent:** For marketing communications and non-essential cookies.
• **Article 6(1)(b) — Contract:** To respond to your enquiries and fulfil any contractual obligations.
• **Article 6(1)(c) — Legal obligation:** To comply with applicable laws and regulations.
• **Article 6(1)(f) — Legitimate interests:** To operate and improve our website, prevent fraud, and maintain business relationships. We have conducted a Legitimate Interests Assessment (LIA) and determined that our interests do not override your rights and freedoms.`
          },
          {
            title: "5. How We Share Your Data",
            content: `We do not sell, rent or trade your personal data to third parties. We may share your data with:

• **Service providers:** Third-party companies that help us operate our website and business, including Formspree Inc. (contact form processing) and Vercel Inc. (website hosting). These providers act as data processors and are bound by contractual obligations to protect your data.
• **Affiliate networks and programme managers:** Only where you have explicitly requested us to share your information as part of a partnership enquiry.
• **Legal authorities:** Where required by law, court order, or to protect the rights, property or safety of Ambern Ltd or others.
• **Business transfers:** In the event of a merger, acquisition or sale of assets, your data may be transferred as part of that transaction, subject to the same privacy protections.

All third-party service providers are required to implement appropriate technical and organisational measures to protect your personal data.`
          },
          {
            title: "6. International Data Transfers",
            content: `Some of our service providers are based outside the United Kingdom and the European Economic Area (EEA). Where we transfer personal data internationally, we ensure appropriate safeguards are in place, including:

• Standard Contractual Clauses (SCCs) approved by the European Commission or the UK Information Commissioner's Office (ICO).
• Transfers to countries with an adequacy decision from the UK Government or European Commission.

Specifically, our website is hosted by Vercel Inc. (United States) and contact form submissions are processed by Formspree Inc. (United States). Both providers are subject to appropriate data transfer mechanisms.`
          },
          {
            title: "7. Data Retention",
            content: `We retain your personal data only for as long as necessary to fulfil the purposes for which it was collected:

• **Contact form submissions:** Retained for up to 2 years from the date of submission, or until the business relationship concludes.
• **Website analytics data:** Retained in anonymised form for up to 26 months.
• **Legal and compliance records:** Retained for up to 7 years as required by UK law.

After the applicable retention period, your data will be securely deleted or anonymised.`
          },
          {
            title: "8. Cookies",
            content: `Our website uses cookies and similar tracking technologies. Cookies are small text files placed on your device.

**Essential cookies:** Required for the website to function correctly. These cannot be disabled.

**Analytics cookies:** We may use analytics tools to understand how visitors use our website. These cookies collect anonymous, aggregated data about page views, session duration and navigation paths.

**Third-party cookies:** Our website may include content or functionality from third-party services that set their own cookies (e.g., embedded maps or social media buttons).

You can control cookies through your browser settings. Disabling certain cookies may affect the functionality of our website. For more information, visit www.allaboutcookies.org.`
          },
          {
            title: "9. Your Rights Under GDPR",
            content: `If you are located in the United Kingdom or European Economic Area, you have the following rights regarding your personal data:

• **Right of access (Article 15):** You have the right to request a copy of the personal data we hold about you.
• **Right to rectification (Article 16):** You have the right to request correction of inaccurate or incomplete data.
• **Right to erasure (Article 17):** You have the right to request deletion of your personal data ("right to be forgotten"), subject to certain legal exceptions.
• **Right to restriction of processing (Article 18):** You have the right to request that we restrict the processing of your data in certain circumstances.
• **Right to data portability (Article 20):** You have the right to receive your data in a structured, machine-readable format.
• **Right to object (Article 21):** You have the right to object to processing based on legitimate interests or for direct marketing purposes.
• **Right to withdraw consent (Article 7(3)):** Where processing is based on consent, you may withdraw it at any time without affecting the lawfulness of prior processing.

To exercise any of these rights, please contact us at partnerships@ambern.uk. We will respond within 30 days. You also have the right to lodge a complaint with the UK Information Commissioner's Office (ICO) at ico.org.uk, or with your local supervisory authority within the EU.`
          },
          {
            title: "10. Data Security",
            content: `We implement appropriate technical and organisational security measures to protect your personal data against unauthorised access, alteration, disclosure or destruction. These measures include:

• Encrypted data transmission using HTTPS/TLS protocols
• Access controls limiting data access to authorised personnel only
• Regular review of our data processing practices and security procedures
• Use of reputable, security-certified third-party service providers

However, no method of transmission over the internet is 100% secure. While we strive to protect your data, we cannot guarantee absolute security.`
          },
          {
            title: "11. Children's Privacy",
            content: `Our website is not directed at children under the age of 16. We do not knowingly collect personal data from children. If you believe we have inadvertently collected data from a child, please contact us immediately at partnerships@ambern.uk and we will take prompt action to delete such data.`
          },
          {
            title: "12. Links to Third-Party Websites",
            content: `Our website may contain links to third-party websites, including affiliate programme pages and partner networks. We are not responsible for the privacy practices or content of those websites. We encourage you to review the privacy policies of any third-party sites you visit.`
          },
          {
            title: "13. Changes to This Privacy Policy",
            content: `We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements or other factors. When we make material changes, we will update the "Last updated" date at the top of this page. We encourage you to review this policy periodically.

Your continued use of our website after any changes constitutes your acceptance of the updated Privacy Policy.`
          },
          {
            title: "14. Contact Us",
            content: `If you have any questions, concerns or requests regarding this Privacy Policy or our data processing practices, please contact us:

**Ambern Ltd**
Data Controller
71-75 Shelton Street, Covent Garden
London, WC2H 9JQ
United Kingdom

Email: partnerships@ambern.uk
Company No: 16622550 (Registered in England and Wales)

For complaints regarding our handling of your personal data, you may also contact the UK Information Commissioner's Office (ICO):
Website: ico.org.uk | Telephone: 0303 123 1113`
          },
        ].map((section) => (
          <div key={section.title} style={{ marginBottom: "48px" }}>
            <h2 style={{ fontFamily: "'Space Grotesk', sans-serif", fontSize: "22px", fontWeight: 700, color: "#fff", marginBottom: "16px", paddingBottom: "12px", borderBottom: "1px solid rgba(255,255,255,0.06)" }}>
              {section.title}
            </h2>
            <div style={{ color: "rgba(255,255,255,0.65)", fontSize: "15px", lineHeight: 1.8, whiteSpace: "pre-line" }}>
              {section.content.split(/\*\*(.*?)\*\*/g).map((part, i) =>
                i % 2 === 1
                  ? <strong key={i} style={{ color: "rgba(255,255,255,0.9)", fontWeight: 600 }}>{part}</strong>
                  : <span key={i}>{part}</span>
              )}
            </div>
          </div>
        ))}

        {/* Footer note */}
        <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid rgba(255,255,255,0.08)", textAlign: "center" }}>
          <p style={{ color: "rgba(255,255,255,0.3)", fontSize: "13px", lineHeight: 1.6 }}>
            © {new Date().getFullYear()} Ambern Ltd. Registered in England & Wales · Company No. 16622550<br />
            71-75 Shelton Street, Covent Garden, London, WC2H 9JQ
          </p>
        </div>
      </div>
    </div>
  );
}
