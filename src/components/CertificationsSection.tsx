
import { memo, useState } from "react";
import { Link } from "react-router-dom";
import { certifications, awsEducateBadges, CREDLY_URL } from "../data/portfolio";

type Category = "all" | "linux" | "cloud" | "devops" | "security" | "database" | "os";

const CATEGORY_LABELS: Record<Category, string> = {
    all: "All",
    linux: "Linux",
    cloud: "Cloud",
    devops: "DevOps",
    security: "Security",
    database: "Database",
    os: "OS",
};

const CertificationsSection = memo(function CertificationsSection() {
    const [activeCategory, setActiveCategory] = useState<Category>("all");

    const filtered =
        activeCategory === "all"
            ? certifications
            : certifications.filter((c) => c.category === activeCategory);

    // Determine which categories actually exist in data
    const availableCategories: Category[] = ["all", ...Array.from(
        new Set(certifications.map((c) => c.category).filter(Boolean))
    ) as Category[]];

    return (
        <section id="certifications" className="py-20 lg:py-24">
            <div className="w-[min(1400px,88vw)] mx-auto">
                <div className="p-8 md:p-12 rounded-[1.5rem] w-full flex flex-col items-center relative border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[18px] backdrop-saturate-[1.2] overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

                    {/* Gradient accent border bar – Certifications theme */}
                    <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,#ef4444,#f97316,#ffbd7f,var(--cyan))] opacity-75 pointer-events-none" />

                    {/* Section Header */}
                    <div className="mb-10 text-center max-w-[800px] mx-auto">
                        <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-3">Certifications</p>
                        <h2 className="font-display text-[clamp(1.45rem,3vw,2.35rem)] font-extrabold m-0 leading-[1.2] mb-2">
                            Professional certifications and achievements
                        </h2>
                        <span className="inline-flex items-center gap-1.5 mt-2 px-3 py-1 rounded-full bg-[rgba(255,189,127,0.12)] border border-[rgba(255,189,127,0.25)] text-cyan text-[0.8rem] font-semibold">
                            <span className="relative flex h-1.5 w-1.5">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-cyan"></span>
                            </span>
                            {certifications.length} Active Certifications
                        </span>
                    </div>

                    {/* Category Filter Tabs */}
                    <div className="flex flex-wrap justify-center gap-2 mb-8">
                        {availableCategories.map((cat) => (
                            <button
                                key={cat}
                                onClick={() => setActiveCategory(cat)}
                                className={`px-4 py-1.5 rounded-full text-[0.82rem] font-semibold border transition-all duration-300 ${activeCategory === cat
                                    ? "bg-[rgba(255,189,127,0.18)] border-[rgba(255,189,127,0.5)] text-cyan shadow-[0_0_12px_rgba(255,189,127,0.18)]"
                                    : "border-line bg-[rgba(255,255,255,0.03)] text-muted hover:border-[rgba(255,189,127,0.3)] hover:text-text"
                                    }`}
                            >
                                {CATEGORY_LABELS[cat]}
                            </button>
                        ))}
                    </div>

                    {/* Cards Grid — same style as StackSection */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
                        {filtered.map((cert) => (
                            <article
                                key={cert.id}
                                className="relative flex flex-col items-center p-6 text-center transition-all duration-500 ease-out border border-line rounded-2xl bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl overflow-hidden hover:-translate-y-1 hover:border-[rgba(255,193,132,0.42)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))] light:hover:border-[#ffb74d] light:hover:shadow-[0_16px_32px_rgba(255,167,38,0.15)] group"
                            >
                                {/* Hover Glow Sweep — exactly like StackSection */}
                                <div className="absolute -inset-[50%] bg-[radial-gradient(circle,rgba(255,196,132,0.22),transparent_50%)] opacity-0 -translate-x-[20%] group-hover:opacity-100 group-hover:translate-x-[20%] transition-all duration-1000 pointer-events-none light:bg-[radial-gradient(circle,#ffa726,transparent_55%)] light:opacity-10" />

                                {/* Featured Ribbon */}
                                {cert.featured && (
                                    <div className="absolute top-0 right-0 overflow-hidden w-20 h-20 pointer-events-none">
                                        <div className="absolute top-[14px] right-[-20px] bg-[linear-gradient(90deg,#ff8c00,#ffbd7f)] text-[#1a100b] text-[0.62rem] font-bold px-6 py-[2px] rotate-45 shadow-sm">
                                            FEATURED
                                        </div>
                                    </div>
                                )}

                                {/* Issuer Logo */}
                                <div className="w-14 h-14 flex items-center justify-center mb-4 relative z-10 p-2 rounded-xl bg-[rgba(255,255,255,0.06)] border border-line light:bg-[rgba(255,255,255,0.7)] light:border-[rgba(255,160,100,0.2)]">
                                    {cert.issuerLogo ? (
                                        <img
                                            src={cert.issuerLogo}
                                            alt={`${cert.issuer} logo`}
                                            className="w-full h-full object-contain"
                                            loading="lazy"
                                        />
                                    ) : (
                                        /* Award medal SVG – no emoji */
                                        <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#ffbd7f" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="8" r="6" />
                                            <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11" />
                                        </svg>
                                    )}
                                </div>

                                {/* Category Badge */}
                                {cert.category && (
                                    <span className="text-[0.72rem] uppercase tracking-wider font-bold text-muted mb-1 relative z-10 light:text-[#8a6040]">
                                        {CATEGORY_LABELS[cert.category]}
                                    </span>
                                )}

                                {/* Name */}
                                <h3 className="text-[1rem] font-bold mb-1 relative z-10 leading-snug px-2 light:text-[#1a100b]">
                                    {cert.name}
                                </h3>

                                {/* Issuer */}
                                <p className="text-cyan text-[0.85rem] mb-3 relative z-10 font-semibold light:text-[#c0580a]">
                                    {cert.issuer}
                                </p>

                                {/* Date bar — styled like "percentage" bar in StackSection */}
                                <div className="w-full px-1 relative z-10 mb-3">
                                    <div className="w-full h-px bg-[rgba(255,255,255,0.1)] rounded-full light:bg-[rgba(0,0,0,0.08)]" />
                                    <span className="block text-[0.78rem] text-muted mt-2 light:text-[#776655]">{cert.date}</span>
                                </div>

                                {/* Credential ID Chip */}
                                {cert.credentialId && (
                                    <div className="relative z-10 mb-3">
                                        <span className="px-2.5 py-0.5 rounded-full bg-[rgba(255,189,127,0.1)] border border-[rgba(255,189,127,0.2)] text-[0.72rem] font-mono text-cyan light:bg-[rgba(255,160,100,0.12)] light:text-[#c0580a]">
                                            ID: {cert.credentialId}
                                        </span>
                                    </div>
                                )}

                                {/* Skill Tags */}
                                {cert.skills && cert.skills.length > 0 && (
                                    <div className="flex flex-wrap justify-center gap-1.5 relative z-10 mb-4">
                                        {cert.skills.slice(0, 4).map((skill) => (
                                            <span
                                                key={skill}
                                                className="px-2 py-0.5 bg-[rgba(255,255,255,0.05)] text-muted rounded-full text-[0.7rem] border border-line light:bg-[rgba(255,240,225,0.7)] light:text-[#6b4c36] light:border-[rgba(255,180,120,0.25)]"
                                            >
                                                {skill}
                                            </span>
                                        ))}
                                        {cert.skills.length > 4 && (
                                            <span className="px-2 py-0.5 text-muted rounded-full text-[0.7rem] border border-line bg-[rgba(255,255,255,0.03)]">
                                                +{cert.skills.length - 4}
                                            </span>
                                        )}
                                    </div>
                                )}

                                {/* View Details CTA */}
                                <Link
                                    to={`/certifications/${cert.id}`}
                                    className="relative z-10 mt-auto inline-flex items-center gap-1.5 px-5 py-2 rounded-full font-bold text-[0.82rem] bg-[rgba(255,189,127,0.1)] border border-[rgba(255,189,127,0.25)] text-cyan transition-all duration-300 hover:bg-[rgba(255,189,127,0.2)] hover:border-[rgba(255,189,127,0.5)] hover:shadow-[0_4px_16px_rgba(255,189,127,0.2)] hover:gap-2.5 light:text-[#c0580a] light:bg-[rgba(255,160,100,0.1)] light:border-[rgba(255,160,100,0.25)] light:hover:bg-[rgba(255,160,100,0.2)]"
                                >
                                    View Details →
                                </Link>
                            </article>
                        ))}
                    </div>

                    {filtered.length === 0 && (
                        <p className="text-muted text-center mt-4 text-[0.9rem]">No certifications in this category yet.</p>
                    )}
                </div>

                {/* ────────────────────────────────────────────────────────── */}
                {/* AWS Educate Badges — Separate Box */}
                {/* ────────────────────────────────────────────────────────── */}
                <div className="mt-8 rounded-[1.5rem] w-full border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[18px] backdrop-saturate-[1.2] overflow-hidden relative light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

                    {/* AWS orange accent line at top */}
                    <div className="h-[3px] w-full bg-[linear-gradient(90deg,#FF9900,#ffbd7f,#FF9900)] opacity-80" />

                    <div className="p-8 md:p-10">
                        {/* Box Header */}
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
                            <div className="flex items-center gap-3">
                                {/* AWS Logo */}
                                <div className="w-10 h-10 rounded-xl bg-[rgba(255,153,0,0.12)] border border-[rgba(255,153,0,0.25)] flex items-center justify-center flex-shrink-0 light:bg-[rgba(255,153,0,0.1)]">
                                    <svg viewBox="0 0 24 24" className="w-6 h-6" fill="#FF9900">
                                        <path d="M6.763 10.036c0 .296.032.535.088.71.064.176.144.368.256.576.04.063.056.127.056.183 0 .08-.048.16-.152.24l-.503.335a.383.383 0 0 1-.208.072c-.08 0-.16-.04-.239-.112a2.47 2.47 0 0 1-.287-.375 6.18 6.18 0 0 1-.248-.471c-.622.734-1.405 1.101-2.347 1.101-.67 0-1.205-.191-1.596-.574-.391-.384-.59-.894-.59-1.533 0-.678.239-1.23.726-1.644.487-.415 1.133-.623 1.955-.623.272 0 .551.024.846.064.296.04.6.104.918.176v-.583c0-.607-.127-1.030-.375-1.277-.255-.248-.686-.368-1.300-.368-.28 0-.568.031-.863.103-.295.072-.583.16-.862.272a2.287 2.287 0 0 1-.28.104.488.488 0 0 1-.127.023c-.112 0-.168-.08-.168-.247v-.391c0-.128.016-.224.056-.28a.597.597 0 0 1 .224-.167c.279-.144.614-.264 1.005-.36a4.84 4.84 0 0 1 1.246-.151c.95 0 1.644.216 2.091.647.439.43.662 1.085.662 1.963v2.586zm-3.24 1.214c.263 0 .534-.048.822-.144.287-.096.543-.271.758-.51.128-.152.224-.32.272-.512.047-.191.08-.423.08-.694v-.335a6.66 6.66 0 0 0-.735-.136 6.02 6.02 0 0 0-.75-.048c-.535 0-.926.104-1.19.32-.263.215-.39.518-.39.917 0 .375.095.655.295.846.191.2.47.296.838.296zm6.41.862c-.144 0-.240-.024-.304-.08-.063-.048-.12-.16-.168-.311L7.586 5.55a1.398 1.398 0 0 1-.072-.32c0-.128.064-.2.191-.2h.783c.151 0 .255.025.31.08.065.048.113.16.16.312l1.342 5.284 1.245-5.284c.04-.16.088-.264.151-.312a.549.549 0 0 1 .32-.08h.638c.159 0 .263.025.32.08.063.048.118.16.15.312l1.261 5.348 1.381-5.348c.048-.16.104-.264.16-.312a.52.52 0 0 1 .311-.08h.743c.127 0 .2.065.2.2 0 .04-.009.08-.017.128a1.137 1.137 0 0 1-.056.2l-1.923 6.17c-.048.16-.104.263-.168.311a.51.51 0 0 1-.303.08h-.687c-.16 0-.263-.025-.32-.08-.063-.056-.118-.16-.15-.32l-1.238-5.148-1.23 5.14c-.04.16-.087.264-.15.32-.065.056-.168.08-.32.08zm10.256.215c-.415 0-.83-.048-1.229-.143-.399-.096-.71-.2-.918-.32-.128-.071-.215-.151-.247-.223a.563.563 0 0 1-.048-.224v-.407c0-.167.064-.247.183-.247.048 0 .096.008.144.024.048.016.12.048.2.08.271.12.566.215.878.279.319.064.63.096.95.096.502 0 .894-.088 1.165-.264a.86.86 0 0 0 .415-.758.777.777 0 0 0-.215-.559c-.144-.151-.416-.287-.807-.415l-1.157-.36c-.583-.183-1.014-.454-1.277-.813a1.902 1.902 0 0 1-.4-1.158c0-.335.073-.63.216-.886.144-.255.335-.479.574-.654.24-.184.51-.32.83-.415.32-.096.655-.136 1.006-.136.175 0 .359.008.535.032.183.024.35.056.518.088.16.04.312.08.455.127.144.048.256.096.336.144a.69.69 0 0 1 .24.2.43.43 0 0 1 .071.263v.375c0 .168-.064.256-.184.256a.83.83 0 0 1-.303-.096 3.652 3.652 0 0 0-1.532-.311c-.455 0-.815.071-1.062.223-.248.152-.375.383-.375.71 0 .224.08.416.24.567.159.152.454.304.877.44l1.134.358c.574.184.99.44 1.237.767.247.327.367.702.367 1.117 0 .343-.072.655-.207.926-.144.272-.336.511-.583.703-.248.2-.543.343-.886.447-.36.111-.734.167-1.142.167zM21.698 16.207c-2.626 1.940-6.442 2.970-9.722 2.970-4.598 0-8.74-1.700-11.87-4.526-.247-.223-.025-.527.27-.351 3.384 1.963 7.559 3.153 11.877 3.153 2.914 0 6.114-.607 9.06-1.852.439-.2.814.287.385.606z" />
                                    </svg>
                                </div>
                                <div>
                                    <p className="text-[0.75rem] text-muted tracking-[0.1em] uppercase font-bold mb-0.5 light:text-[#8a6040]">AWS Educate</p>
                                    <h3 className="font-display text-[1.1rem] font-extrabold leading-tight light:text-[#1a100b]">
                                        Digital Learning Badges
                                    </h3>
                                </div>
                                {/* badge count */}
                                <span className="ml-2 px-2.5 py-0.5 rounded-full text-[0.72rem] font-bold bg-[rgba(255,153,0,0.12)] border border-[rgba(255,153,0,0.3)] text-[#FF9900]">
                                    {awsEducateBadges.length} Badges
                                </span>
                            </div>

                            {/* Credly CTA */}
                            <a
                                href={CREDLY_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-[0.8rem] font-bold border border-[rgba(255,153,0,0.3)] bg-[rgba(255,153,0,0.08)] text-[#FF9900] transition-all hover:bg-[rgba(255,153,0,0.18)] hover:border-[rgba(255,153,0,0.6)] hover:shadow-[0_4px_16px_rgba(255,153,0,0.2)] light:bg-[rgba(255,153,0,0.1)]"
                            >
                                <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                    <path d="M12 0C5.374 0 0 5.373 0 12c0 6.628 5.374 12 12 12 6.628 0 12-5.372 12-12C24 5.373 18.628 0 12 0zm0 2.824a9.174 9.174 0 0 1 0 18.352 9.174 9.174 0 0 1 0-18.352zm-1.09 4.823v.604h-.61v1.27h.61v3.983h1.27v-3.983h.61l.122-1.27h-.732v-.513c0-.299.061-.421.35-.421h.382V5.647h-.635c-.873 0-1.367.482-1.367 1.4z" />
                                </svg>
                                View All on Credly
                                <span className="text-[0.72rem] opacity-70">↗</span>
                            </a>
                        </div>

                        {/* Badges Grid */}
                        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
                            {awsEducateBadges.map((badge) => (
                                <a
                                    key={badge.id}
                                    href={badge.badgeUrl ?? CREDLY_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group flex flex-col items-center gap-3 p-4 rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-[rgba(255,153,0,0.4)] hover:bg-[rgba(255,153,0,0.06)] hover:shadow-[0_12px_32px_rgba(255,153,0,0.15)] text-center light:bg-[rgba(255,255,255,0.6)] light:hover:border-[rgba(255,153,0,0.4)] light:hover:bg-[rgba(255,248,235,0.8)]"
                                    title={badge.name}
                                >
                                    {/* Hexagonal badge container */}
                                    <div className="relative w-16 h-16 flex items-center justify-center">
                                        {/* Subtle hex background glow */}
                                        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle,rgba(255,153,0,0.18),transparent_70%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-125" />
                                        <img
                                            src={badge.imageUrl}
                                            alt={badge.name}
                                            className="w-14 h-14 object-contain drop-shadow-md group-hover:scale-105 transition-transform duration-300"
                                            loading="lazy"
                                            onError={(e) => {
                                                // fallback to AWS logo if badge image fails
                                                (e.target as HTMLImageElement).src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg";
                                            }}
                                        />
                                    </div>
                                    {/* Badge name */}
                                    <p className="text-[0.72rem] font-semibold leading-tight text-text group-hover:text-[#FF9900] transition-colors duration-300 light:text-[#1a100b] light:group-hover:text-[#cc7700]">
                                        {badge.name}
                                    </p>
                                </a>
                            ))}
                        </div>

                        {/* Footer note */}
                        <p className="mt-5 text-[0.75rem] text-muted text-center light:text-[#8a6040]">
                            Issued by <span className="text-[#FF9900] font-semibold">Amazon Web Services</span> via AWS Educate program · Verified on Credly
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
});

export default CertificationsSection;
