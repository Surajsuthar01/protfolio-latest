import { useParams, Link } from "react-router-dom";
import { certifications, LINKEDIN_URL } from "../data/portfolio";
import SEOMeta from "../components/SEOMeta";

const CATEGORY_LABELS: Record<string, string> = {
    linux: "Linux",
    cloud: "Cloud",
    devops: "DevOps",
    security: "Security",
    database: "Database",
    os: "Operating Systems",
};

function CertificateDetails() {
    const { id } = useParams<{ id: string }>();
    const cert = certifications.find((c) => c.id === id);

    if (!cert) {
        return (
            <div className="min-h-screen pt-28 pb-12 px-4 flex items-center justify-center">
                <SEOMeta title="Certificate Not Found | Suraj Suthar" />
                <main className="text-center">
                    <div className="p-8 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl">
                        <h2 className="text-2xl font-bold mb-4">Certificate Not Found</h2>
                        <Link to="/" className="text-cyan font-bold hover:underline">← Back to Home</Link>
                    </div>
                </main>
            </div>
        );
    }

    const isVerified = Boolean(cert.verifyUrl);

    return (
        <div className="min-h-screen pt-28 pb-16 px-4 md:px-8 max-w-7xl mx-auto">
            <SEOMeta
                title={`${cert.name} | Suraj Suthar`}
                description={`View Suraj Suthar's certification: ${cert.name} issued by ${cert.issuer}.`}
                url={`/certifications/${cert.id}`}
            />
            <main className="w-full">

                {/* Back Breadcrumb */}
                <div className="mb-8">
                    <Link
                        to="/#certifications"
                        className="inline-flex items-center gap-2 text-muted text-[0.88rem] hover:text-cyan transition-colors duration-200 group"
                    >
                        <span className="transition-transform duration-200 group-hover:-translate-x-1">←</span>
                        Back to Certifications
                    </Link>
                </div>

                {/* Hero Header */}
                <div className="relative rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.5),rgba(255,255,255,0.04))] backdrop-blur-xl overflow-hidden p-8 md:p-12 mb-8 text-center light:bg-[linear-gradient(165deg,rgba(255,255,255,0.9),rgba(255,248,240,0.8))] light:border-[rgba(255,150,50,0.2)]">
                    {/* Background glow */}
                    <div className="absolute -inset-[30%] bg-[radial-gradient(ellipse_at_center,rgba(255,189,127,0.15),transparent_60%)] pointer-events-none" />

                    {/* Featured ribbon */}
                    {cert.featured && (
                        <div className="absolute top-0 right-0 overflow-hidden w-24 h-24 pointer-events-none">
                            <div className="absolute top-[18px] right-[-22px] bg-[linear-gradient(90deg,#ff8c00,#ffbd7f)] text-[#1a100b] text-[0.65rem] font-bold px-7 py-[3px] rotate-45 shadow-sm">
                                FEATURED
                            </div>
                        </div>
                    )}

                    <div className="relative z-10">
                        {/* Issuer Logo */}
                        {cert.issuerLogo && (
                            <div className="flex justify-center mb-5">
                                <div className="w-20 h-20 p-3 rounded-2xl bg-[rgba(255,255,255,0.07)] border border-line flex items-center justify-center shadow-[0_8px_24px_rgba(0,0,0,0.2)] light:bg-white light:border-[rgba(255,160,100,0.2)]">
                                    <img
                                        src={cert.issuerLogo}
                                        alt={`${cert.issuer} logo`}
                                        className="w-full h-full object-contain"
                                    />
                                </div>
                            </div>
                        )}

                        {/* Category + Verification Pill */}
                        <div className="flex flex-wrap justify-center gap-2 mb-4">
                            {cert.category && (
                                <span className="px-3 py-1 rounded-full bg-[rgba(255,189,127,0.1)] border border-[rgba(255,189,127,0.25)] text-cyan text-[0.78rem] font-semibold uppercase tracking-wider light:text-[#c0580a] light:bg-[rgba(255,160,100,0.12)]">
                                    {CATEGORY_LABELS[cert.category] ?? cert.category}
                                </span>
                            )}
                            <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[0.78rem] font-semibold border ${isVerified
                                ? "bg-[rgba(100,255,180,0.08)] border-[rgba(100,255,180,0.2)] text-[#7fdc9f]"
                                : "bg-[rgba(255,255,255,0.05)] border-line text-muted"
                                }`}>
                                <span className={`w-1.5 h-1.5 rounded-full inline-block ${isVerified ? "bg-[#7fdc9f] shadow-[0_0_6px_#7fdc9f]" : "bg-muted"}`} />
                                {isVerified ? "Verified" : "Not Linked"}
                            </span>
                        </div>

                        <h1 className="text-[clamp(1.6rem,3.5vw,2.6rem)] font-display font-bold mb-3 leading-tight">
                            {cert.name}
                        </h1>
                        <p className="text-xl text-cyan mb-5 font-semibold light:text-[#c0580a]">{cert.issuer}</p>

                        <div className="flex flex-wrap justify-center gap-6 text-muted text-[0.92rem]">
                            <span className="flex items-center gap-2">
                                <span className="text-cyan">📅</span> {cert.date}
                            </span>
                            {cert.credentialId && (
                                <span className="flex items-center gap-2">
                                    <span className="text-cyan">🔑</span>
                                    Credential ID: <strong className="text-text font-mono bg-[rgba(255,255,255,0.07)] px-2 py-0.5 rounded light:bg-[rgba(255,200,150,0.15)] light:text-[#6b3a1a]">{cert.credentialId}</strong>
                                </span>
                            )}
                        </div>
                    </div>
                </div>

                {/* Body: left wide + right sidebar */}
                <div className="grid grid-cols-1 lg:grid-cols-[1.5fr_1fr] gap-6 items-start">

                    {/* LEFT column */}
                    <div className="flex flex-col gap-6">

                        {/* Overview */}
                        <div className="p-7 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl light:bg-[rgba(255,255,255,0.9)] light:border-[rgba(255,150,50,0.15)]">
                            <h3 className="text-base font-bold text-cyan mb-4 uppercase tracking-wider flex items-center gap-2 light:text-[#c0580a]">
                                <span>📋</span> Overview
                            </h3>
                            <p className="text-muted leading-relaxed">{cert.details}</p>
                            {cert.fullDescription && (
                                <p className="mt-3 leading-relaxed font-medium text-text">{cert.fullDescription}</p>
                            )}
                        </div>

                        {/* Key Learning Objectives */}
                        {cert.objectives && cert.objectives.length > 0 && (
                            <div className="p-7 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl light:bg-[rgba(255,255,255,0.9)] light:border-[rgba(255,150,50,0.15)]">
                                <h3 className="text-base font-bold text-cyan mb-5 uppercase tracking-wider flex items-center gap-2 light:text-[#c0580a]">
                                    <span>🎯</span> Key Learning Objectives
                                </h3>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                                    {cert.objectives.map((obj, i) => (
                                        <div key={i} className="flex gap-3 text-muted items-start">
                                            <span className="mt-0.5 flex-shrink-0 w-5 h-5 rounded-full bg-[rgba(255,189,127,0.15)] border border-[rgba(255,189,127,0.3)] flex items-center justify-center text-cyan text-[0.7rem] font-bold light:bg-[rgba(255,160,100,0.15)] light:text-[#c0580a]">
                                                ✓
                                            </span>
                                            <span className="text-[0.9rem] leading-relaxed">{obj}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Industry Value */}
                        {cert.industryValue && (
                            <div className="p-7 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl light:bg-[rgba(255,255,255,0.9)] light:border-[rgba(255,150,50,0.15)]">
                                <h3 className="text-base font-bold text-cyan mb-4 uppercase tracking-wider flex items-center gap-2 light:text-[#c0580a]">
                                    <span>🌐</span> Industry Value & Impact
                                </h3>
                                <p className="text-muted leading-relaxed">{cert.industryValue}</p>
                            </div>
                        )}
                    </div>

                    {/* RIGHT sidebar */}
                    <div className="flex flex-col gap-6">

                        {/* Skills */}
                        {cert.skills && cert.skills.length > 0 && (
                            <div className="p-7 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl light:bg-[rgba(255,255,255,0.9)] light:border-[rgba(255,150,50,0.15)]">
                                <h3 className="text-base font-bold text-cyan mb-4 uppercase tracking-wider flex items-center gap-2 light:text-[#c0580a]">
                                    <span>⚙️</span> Core Skills
                                </h3>
                                <div className="flex flex-wrap gap-2">
                                    {cert.skills.map((skill) => (
                                        <span
                                            key={skill}
                                            className="px-3 py-1 bg-[rgba(255,193,132,0.1)] text-cyan rounded-full text-[0.82rem] border border-[rgba(255,193,132,0.2)] font-medium light:bg-[rgba(255,160,100,0.12)] light:text-[#c0580a] light:border-[rgba(255,160,100,0.3)]"
                                        >
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Verify */}
                        <div className="p-7 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl light:bg-[rgba(255,255,255,0.9)] light:border-[rgba(255,150,50,0.15)]">
                            <h3 className="text-base font-bold text-cyan mb-4 uppercase tracking-wider flex items-center gap-2 light:text-[#c0580a]">
                                <span>🔍</span> Verify Certification
                            </h3>
                            {cert.verifyUrl ? (
                                <a
                                    href={cert.verifyUrl}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="inline-flex items-center justify-center gap-2 w-full px-6 py-3 bg-gradient-to-r from-[#ff8c00] to-[#ffbd7f] text-[#1a100b] font-bold rounded-full transition-all hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(255,140,0,0.3)] text-[0.9rem]"
                                >
                                    ↗ View on Credly
                                </a>
                            ) : (
                                <div className="px-4 py-3 rounded-xl bg-[rgba(255,255,255,0.04)] border border-line text-center">
                                    <p className="text-muted text-[0.85rem]">No public verify link available.</p>
                                </div>
                            )}
                        </div>

                        {/* LinkedIn Connect */}
                        <div className="p-7 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-xl light:bg-[rgba(255,255,255,0.9)] light:border-[rgba(255,150,50,0.15)]">
                            <h3 className="text-base font-bold text-cyan mb-4 uppercase tracking-wider flex items-center gap-2 light:text-[#c0580a]">
                                <span>🔗</span> View on LinkedIn
                            </h3>
                            <a
                                href={LINKEDIN_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="flex items-center justify-center gap-3 w-full py-3 bg-[#0a66c2] text-white font-bold rounded-xl transition-all hover:bg-[#004182] hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(10,102,194,0.35)] text-[0.9rem]"
                            >
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 23.2 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                </svg>
                                View LinkedIn Profile
                            </a>
                        </div>

                        {/* Navigation to other certs */}
                        <div className="p-5 rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] text-center light:bg-[rgba(255,255,255,0.7)] light:border-[rgba(255,150,50,0.15)]">
                            <p className="text-muted text-[0.8rem] mb-3">Explore more certifications</p>
                            <Link
                                to="/#certifications"
                                className="inline-flex items-center gap-1.5 text-cyan font-semibold text-[0.85rem] hover:underline underline-offset-2 light:text-[#c0580a]"
                            >
                                ← All Certifications
                            </Link>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default CertificateDetails;
