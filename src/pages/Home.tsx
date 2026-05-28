import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import SEOMeta from "../components/SEOMeta";
import HomeSection from "../components/HomeSection";
import AboutSection from "../components/AboutSection";
import EducationSection from "../components/EducationSection";
import StackSection from "../components/StackSection";
import CertificationsSection from "../components/CertificationsSection";
import {
    roles,
    leetcodeBadges,
    GITHUB_USERNAME,
    GITHUB_URL,
    LINKEDIN_URL,
    LEETCODE_USERNAME,
    LEETCODE_URL,
    EMAIL,
    PHONE,
    WHATSAPP_URL,
    LOCATION,
    RESUME_PATH,
    HERO_IMAGE_PATH,
} from "../data/portfolio";






/**
 * Home component serves as the main landing page of the portfolio.
 * It manages state for repositories and handles navigation logic.
 */
function Home() {
    const [emailCopied, setEmailCopied] = useState<boolean>(false);


    // Router hooks for navigation tracking
    const location = useLocation();

    // Scroll to certifications section when navigating back from a certificate detail page
    // Scroll to certifications section when navigating back from a certificate detail page
    useEffect(() => {
        if (location.state && (location.state as { scrollTo?: string }).scrollTo === "certifications") {
            const el = document.getElementById("certifications");
            if (el) {
                el.scrollIntoView({ behavior: "smooth", block: "start" });
            }
        } else if (location.hash) {
            // Handle standard hash navigation (refresh or direct link)
            const id = location.hash.replace("#", "");
            const element = document.getElementById(id);
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                }, 100);
            }
        }
    }, [location]);

    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(EMAIL);
            setEmailCopied(true);
            window.setTimeout(() => setEmailCopied(false), 1800);
        } catch (_error) {
            setEmailCopied(false);
        }
    };

    return (
        <>
            <SEOMeta
                title="Suraj Suthar | DevOps & Cloud Engineer"
                description="DevOps & Cloud Engineer building scalable infrastructure, container orchestration, and CI/CD pipelines."
                url="/"
            />
            <HomeSection
                roles={roles}
                resumePath={RESUME_PATH}
                heroImagePath={HERO_IMAGE_PATH}
            />

            <AboutSection />

            <EducationSection />

            <StackSection />

            <CertificationsSection />

            {/* ═══════════════════════════════════════════════
                LEETCODE SECTION
            ═══════════════════════════════════════════════ */}
            <section id="leetcode" className="py-20 lg:py-24">
                <div className="w-[min(1400px,88vw)] mx-auto">
                    <div className="rounded-[1.5rem] border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[6px]  overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

                        {/* Accent bar */}
                        <div className="h-[3px] w-full bg-[linear-gradient(90deg,#FFA116,#ffbd7f,#00b8a3,#FFA116)] opacity-70" />

                        <div className="p-6 md:p-10">

                            {/* ── Header ── */}
                            <div className="text-center mb-8">
                                <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-2">Competitive Programming</p>
                                <h2 className="font-display text-[clamp(1.45rem,3vw,2.35rem)] font-extrabold leading-[1.2] mb-2 light:text-[#1a100b]">
                                    <span className="text-[#FFA116]">300+</span> Problems Solved on{" "}
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFA116] to-[#ffbd7f]">LeetCode</span>
                                </h2>
                                <p className="text-muted text-[0.85rem] max-w-[500px] mx-auto">
                                    Strong DSA foundations in C++. Completed curated study plans across all difficulty levels.
                                </p>
                            </div>

                            {/* ── Two-column: Leetcard + Details ── */}
                            <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr] gap-6 items-start">

                                {/* LEFT: Live Dashboard */}
                                <div>
                                    <a
                                        href={LEETCODE_URL}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="block transition-[transform,box-shadow,border-color,opacity] duration-500 hover:scale-[1.015] hover:shadow-[0_8px_28px_rgba(255,161,22,0.18)] rounded-xl"
                                        aria-label="LeetCode stats card"
                                    >
                                        <img
                                            className="w-full h-auto rounded-xl shadow-lg border border-[rgba(255,161,22,0.18)]"
                                            src={`https://leetcard.jacoblin.cool/${LEETCODE_USERNAME}?theme=dark&font=Manrope&ext=contest`}
                                            alt={`LeetCode stats for ${LEETCODE_USERNAME}`}
                                            loading="lazy"
                                        />
                                    </a>
                                    <p className="text-center text-[0.65rem] text-muted flex items-center justify-center gap-1.5 mt-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                                        Live stats &middot; auto-updates &middot; <span className="text-cyan font-semibold">@{LEETCODE_USERNAME}</span>
                                    </p>
                                </div>

                                {/* RIGHT: Achievements + Topics + CTAs */}
                                <div className="flex flex-col gap-5">

                                    {/* Achievements */}
                                    <div>
                                        <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold mb-3">Achievements & Badges</p>
                                        <div className="flex flex-col gap-2.5">
                                            <div className="flex items-center gap-3 p-3 rounded-xl border border-[rgba(255,161,22,0.2)] bg-[rgba(255,161,22,0.04)] hover:border-[rgba(255,161,22,0.4)] transition-[transform,box-shadow,border-color,background-color] duration-300">
                                                <div className="w-9 h-9 rounded-lg bg-[rgba(255,161,22,0.15)] flex items-center justify-center flex-shrink-0">
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="#FFA116"><path d="M12 23a7.5 7.5 0 0 1-5.138-12.963C8.204 8.774 11.5 6.5 11 1.5c6 4 9 8 3 14 1 0 2.5 0 3-2.5.5 1 .5 2 .5 3.5a7.5 7.5 0 0 1-5.5 7z"/></svg>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-[0.8rem] font-bold text-[#FFA116] leading-tight">50 Days Badge 2025</p>
                                                    <span className="inline-flex items-center gap-1 text-[0.6rem] text-[#22c55e] font-bold uppercase"><span className="w-1 h-1 rounded-full bg-[#22c55e] animate-pulse" />Active</span>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-xl border border-[rgba(129,140,248,0.2)] bg-[rgba(129,140,248,0.04)] hover:border-[rgba(129,140,248,0.4)] transition-[transform,box-shadow,border-color,background-color] duration-300">
                                                <div className="w-9 h-9 rounded-lg bg-[rgba(129,140,248,0.15)] flex items-center justify-center flex-shrink-0">
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#818cf8" strokeWidth="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M3 5v14c0 1.66 4.03 3 9 3s9-1.34 9-3V5"/><path d="M3 12c0 1.66 4.03 3 9 3s9-1.34 9-3"/></svg>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-[0.8rem] font-bold text-[#818cf8] leading-tight">Top SQL 50</p>
                                                    <p className="text-[0.6rem] text-muted">Completed &middot; 13 Feb 2026</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-3 p-3 rounded-xl border border-[rgba(0,212,255,0.2)] bg-[rgba(0,212,255,0.04)] hover:border-[rgba(0,212,255,0.4)] transition-[transform,box-shadow,border-color,background-color] duration-300">
                                                <div className="w-9 h-9 rounded-lg bg-[rgba(0,212,255,0.12)] flex items-center justify-center flex-shrink-0">
                                                    <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="var(--cyan)" strokeWidth="2"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
                                                </div>
                                                <div className="min-w-0 flex-1">
                                                    <p className="text-[0.8rem] font-bold text-[var(--cyan)] leading-tight">Top Interview 150</p>
                                                    <p className="text-[0.6rem] text-muted">Completed &middot; 06 Feb 2026</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* DSA Topics */}
                                    <div>
                                        <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold mb-2">DSA Topics Covered</p>
                                        <div className="flex flex-wrap gap-1.5">
                                            {leetcodeBadges.map((badge) => (
                                                <span key={badge} className="text-[0.68rem] px-2.5 py-0.5 rounded-full bg-[rgba(255,161,22,0.06)] text-[#FFA116] border border-[rgba(255,161,22,0.2)] font-semibold hover:bg-[rgba(255,161,22,0.14)] transition-[transform,background-color,border-color] duration-200 cursor-default">
                                                    {badge}
                                                </span>
                                            ))}
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-3 pt-1">
                                        <a href={LEETCODE_URL} target="_blank" rel="noreferrer noopener"
                                            className="inline-flex items-center gap-2 no-underline rounded-full font-bold py-2 px-5 text-[0.82rem] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 bg-[#FFA116] text-[#1a1a1a] hover:bg-[#ffb733] hover:shadow-[0_6px_20px_rgba(255,161,22,0.4)]">
                                            <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                                                <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.187.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.186c-.38-.375-.57-.5-.64-.61a2.067 2.067 0 0 1-.46-.955 2.26 2.26 0 0 1 .09-1.07 2.094 2.094 0 0 1 .491-.815l4.919-5.271 4.899-5.271a3.037 3.037 0 0 1 4.204-.077l.02.018 2.396 2.392a1.378 1.378 0 0 0 1.951-.003c.537-.54.537-1.414 0-1.955l-2.396-2.392A5.323 5.323 0 0 0 13.483 0z" />
                                            </svg>
                                            View Profile
                                        </a>
                                        <a href={`https://leetcode.com/${LEETCODE_USERNAME}/`} target="_blank" rel="noreferrer noopener"
                                            className="inline-flex items-center gap-2 no-underline rounded-full font-bold py-2 px-5 text-[0.82rem] border border-[rgba(255,161,22,0.3)] text-[#FFA116] bg-[rgba(255,161,22,0.05)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:bg-[rgba(255,161,22,0.12)] hover:border-[rgba(255,161,22,0.55)]">
                                            Solve Along
                                        </a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                REPOSITORIES SECTION
            ═══════════════════════════════════════════════ */}
            <section id="repos" className="py-20 lg:py-24">
                <div className="w-[min(1400px,88vw)] mx-auto">
                    <div className="p-8 md:p-12 rounded-[1.5rem] w-full flex flex-col items-center relative border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[6px]  overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

                        {/* Gradient accent border – Projects/GitHub theme */}
                        <div className="absolute top-0 left-0 right-0 h-[3px] bg-[linear-gradient(90deg,var(--cyan),#818cf8,#ffbd7f,var(--cyan))] opacity-75 pointer-events-none" />

                        {/* Section Header */}
                        <div className="mb-10 text-center max-w-[800px] mx-auto w-full">
                            <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-3">Projects</p>
                            <h2 className="font-display text-[clamp(1.45rem,3vw,2.35rem)] font-extrabold m-0 leading-[1.2] mb-2">
                                Handpicked GitHub projects
                            </h2>
                            <p className="text-muted text-[0.92rem] mt-2">
                                A curated selection of repositories showcasing full-stack, scripting, and web development skills.
                            </p>
                            <a
                                href={GITHUB_URL}
                                target="_blank"
                                rel="noreferrer noopener"
                                className="inline-flex items-center gap-2 mt-4 px-4 py-1.5 rounded-full text-[0.8rem] font-semibold border border-line bg-[rgba(255,255,255,0.04)] text-muted hover:border-[rgba(255,189,127,0.4)] hover:text-cyan hover:bg-[rgba(255,189,127,0.06)] transition-all"
                            >
                                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
                                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                </svg>
                                View all repos on GitHub →
                            </a>
                        </div>

                        {/* Cards Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
                            {/* ── MERN Notes App ── */}
                            <article className="group flex flex-col p-6 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-sm transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out hover:-translate-y-1.5 hover:border-[rgba(255,193,132,0.42)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))] light:hover:border-[#ffb74d] light:hover:shadow-[0_16px_32px_rgba(255,167,38,0.15)] overflow-hidden relative">
                                <div className="absolute -inset-[50%] bg-[radial-gradient(circle,rgba(255,196,132,0.12),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                {/* Header */}
                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(240,219,79,0.12)] border border-[rgba(240,219,79,0.2)] flex items-center justify-center flex-shrink-0">
                                            {/* MongoDB leaf – official devicon */}
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" alt="MongoDB" className="w-5 h-5 object-contain" />
                                        </div>
                                        <div>
                                            <span className="text-[0.68rem] text-muted uppercase tracking-wider font-bold">Full-Stack</span>
                                            <h3 className="text-[1rem] font-bold leading-tight light:text-[#1a100b]">mern-notes-app</h3>
                                        </div>
                                    </div>
                                    <a
                                        href="https://github.com/Surajsuthar01/mern-notes-app"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="text-muted hover:text-cyan transition-colors flex-shrink-0"
                                        aria-label="Open on GitHub"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                </div>

                                <p className="text-muted text-[0.88rem] leading-relaxed mb-5 flex-1 relative z-10">
                                    Full-stack MERN notes application with MongoDB, Express, React, and Node.js. Features CRUD operations, REST API, and a clean UI for managing personal notes.
                                </p>

                                {/* Tech tags */}
                                <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                                    {["MongoDB", "Express.js", "React", "Node.js", "REST API"].map(tag => (
                                        <span key={tag} className="text-[0.7rem] px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-line text-muted font-medium light:bg-[rgba(255,240,225,0.7)] light:text-[#6b4c36] light:border-[rgba(255,180,120,0.25)]">{tag}</span>
                                    ))}
                                </div>

                                {/* Footer row */}
                                <div className="flex items-center justify-between pt-4 border-t border-line relative z-10">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#f0db4f] flex-shrink-0" />
                                        <span className="text-[0.75rem] text-muted font-medium">JavaScript</span>
                                    </div>
                                    <a
                                        href="https://github.com/Surajsuthar01/mern-notes-app"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-cyan hover:text-text transition-colors group/btn"
                                    >
                                        View on GitHub
                                        <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                                    </a>
                                </div>
                            </article>

                            {/* ── Suraj Logistic ── */}
                            <article className="group flex flex-col p-6 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-sm transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out hover:-translate-y-1.5 hover:border-[rgba(255,193,132,0.42)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))] light:hover:border-[#ffb74d] light:hover:shadow-[0_16px_32px_rgba(255,167,38,0.15)] overflow-hidden relative">
                                <div className="absolute -inset-[50%] bg-[radial-gradient(circle,rgba(255,196,132,0.12),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.12)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center flex-shrink-0">
                                            {/* JavaScript – official devicon */}
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" className="w-5 h-5 object-contain rounded" />
                                        </div>
                                        <div>
                                            <span className="text-[0.68rem] text-muted uppercase tracking-wider font-bold">Web App</span>
                                            <h3 className="text-[1rem] font-bold leading-tight light:text-[#1a100b]">surajlogistic</h3>
                                        </div>
                                    </div>
                                    <a
                                        href="https://github.com/Surajsuthar01/surajlogistic"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="text-muted hover:text-cyan transition-colors flex-shrink-0"
                                        aria-label="Open on GitHub"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                </div>

                                <p className="text-muted text-[0.88rem] leading-relaxed mb-5 flex-1 relative z-10">
                                    Logistics management web application built to streamline shipment tracking, route management, and delivery operations.
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                                    {["JavaScript", "Web App", "Logistics", "Tracking", "UI/UX"].map(tag => (
                                        <span key={tag} className="text-[0.7rem] px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-line text-muted font-medium light:bg-[rgba(255,240,225,0.7)] light:text-[#6b4c36] light:border-[rgba(255,180,120,0.25)]">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-line relative z-10">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#f0db4f] flex-shrink-0" />
                                        <span className="text-[0.75rem] text-muted font-medium">JavaScript</span>
                                    </div>
                                    <a
                                        href="https://github.com/Surajsuthar01/surajlogistic"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-cyan hover:text-text transition-colors group/btn"
                                    >
                                        View on GitHub
                                        <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                                    </a>
                                </div>
                            </article>

                            {/* ── Bash Scripting ── */}
                            <article className="group flex flex-col p-6 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.34),rgba(255,255,255,0.05))] backdrop-blur-sm transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out hover:-translate-y-1.5 hover:border-[rgba(255,193,132,0.42)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.28)] light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))] light:hover:border-[#ffb74d] light:hover:shadow-[0_16px_32px_rgba(255,167,38,0.15)] overflow-hidden relative">
                                <div className="absolute -inset-[50%] bg-[radial-gradient(circle,rgba(255,196,132,0.12),transparent_50%)] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                                <div className="flex items-start justify-between mb-4 relative z-10">
                                    <div className="flex items-center gap-2">
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(34,197,94,0.12)] border border-[rgba(34,197,94,0.2)] flex items-center justify-center flex-shrink-0">
                                            {/* Bash – official devicon */}
                                            <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg" alt="Bash" className="w-5 h-5 object-contain" />
                                        </div>
                                        <div>
                                            <span className="text-[0.68rem] text-muted uppercase tracking-wider font-bold">DevOps / Linux</span>
                                            <h3 className="text-[1rem] font-bold leading-tight light:text-[#1a100b]">bash_scripting</h3>
                                        </div>
                                    </div>
                                    <a
                                        href="https://github.com/Surajsuthar01/bash_scripting"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="text-muted hover:text-cyan transition-colors flex-shrink-0"
                                        aria-label="Open on GitHub"
                                    >
                                        <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </a>
                                </div>

                                <p className="text-muted text-[0.88rem] leading-relaxed mb-5 flex-1 relative z-10">
                                    Collection of Bash automation scripts for Linux system administration — covering file management, user provisioning, log rotation, and DevOps workflows.
                                </p>

                                <div className="flex flex-wrap gap-1.5 mb-5 relative z-10">
                                    {["Bash", "Shell", "Linux", "Automation", "DevOps"].map(tag => (
                                        <span key={tag} className="text-[0.7rem] px-2 py-0.5 rounded-full bg-[rgba(255,255,255,0.05)] border border-line text-muted font-medium light:bg-[rgba(255,240,225,0.7)] light:text-[#6b4c36] light:border-[rgba(255,180,120,0.25)]">{tag}</span>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between pt-4 border-t border-line relative z-10">
                                    <div className="flex items-center gap-1.5">
                                        <span className="w-2.5 h-2.5 rounded-full bg-[#89e051] flex-shrink-0" />
                                        <span className="text-[0.75rem] text-muted font-medium">Shell</span>
                                    </div>
                                    <a
                                        href="https://github.com/Surajsuthar01/bash_scripting"
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        className="inline-flex items-center gap-1.5 text-[0.78rem] font-bold text-cyan hover:text-text transition-colors group/btn"
                                    >
                                        View on GitHub
                                        <span className="group-hover/btn:translate-x-0.5 transition-transform">→</span>
                                    </a>
                                </div>
                            </article>
                        </div>
                    </div>
                </div>
            </section>

            {/* ═══════════════════════════════════════════════
                CONTACT SECTION
            ═══════════════════════════════════════════════ */}
            <section id="contact" className="py-20 lg:py-24">
                <div className="w-[min(1400px,88vw)] mx-auto">
                    <div className="rounded-[1.5rem] border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[6px]  overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

                        {/* Amber accent bar */}
                        <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--cyan),#ffbd7f,var(--cyan))] opacity-70" />

                        <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-12">

                            {/* ── Left: Headline + Contact Info ── */}
                            <div className="flex-1 flex flex-col justify-between gap-8">
                                <div>
                                    <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-3">Get In Touch</p>
                                    <h2 className="font-display text-[clamp(1.6rem,3.5vw,2.6rem)] font-extrabold leading-[1.15] mb-4 light:text-[#1a100b]">
                                        Let's build something<br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ffbd7f] to-[var(--cyan)]">deployment-ready</span>
                                    </h2>
                                    <p className="text-muted text-[0.95rem] leading-relaxed max-w-[480px] light:text-[#6b4c36]">
                                        Open to full-time DevOps roles, freelance infrastructure work, and exciting open-source collaborations.
                                        Drop me a message — I respond quickly!
                                    </p>
                                </div>

                                {/* Contact Info Chips */}
                                <div className="flex flex-col gap-3">
                                    {/* Email */}
                                    <div className="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-[rgba(255,255,255,0.03)] group hover:border-[rgba(255,189,127,0.3)] transition-colors light:bg-[rgba(255,255,255,0.5)]">
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(255,189,127,0.1)] border border-[rgba(255,189,127,0.2)] flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#ffbd7f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <rect x="2" y="4" width="20" height="16" rx="2" />
                                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                            </svg>
                                        </div>
                                        <div className="flex-1 min-w-0">
                                            <p className="text-[0.68rem] text-muted uppercase tracking-wider font-bold">Email</p>
                                            <a href={`mailto:${EMAIL}`} className="text-[0.88rem] font-semibold text-text hover:text-cyan transition-colors truncate block light:text-[#1a100b]">
                                                {EMAIL}
                                            </a>
                                        </div>
                                        <button
                                            type="button"
                                            onClick={copyEmail}
                                            className="flex-shrink-0 text-[0.72rem] px-2.5 py-1 rounded-full border border-line bg-[rgba(255,255,255,0.04)] text-muted hover:bg-[rgba(255,189,127,0.1)] hover:text-cyan hover:border-[rgba(255,189,127,0.3)] transition-all font-semibold"
                                        >
                                            {emailCopied ? "✓ Copied" : "Copy"}
                                        </button>
                                    </div>

                                    {/* Phone */}
                                    <div className="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,189,127,0.3)] transition-colors light:bg-[rgba(255,255,255,0.5)]">
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.2)] flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.36 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.11 1.2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 8.91a16 16 0 0 0 5.06 5.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[0.68rem] text-muted uppercase tracking-wider font-bold">Phone</p>
                                            <p className="text-[0.88rem] font-semibold text-text light:text-[#1a100b]">{PHONE}</p>
                                        </div>
                                    </div>

                                    {/* Location */}
                                    <div className="flex items-center gap-3 p-3.5 rounded-xl border border-line bg-[rgba(255,255,255,0.03)] hover:border-[rgba(255,189,127,0.3)] transition-colors light:bg-[rgba(255,255,255,0.5)]">
                                        <div className="w-9 h-9 rounded-lg bg-[rgba(99,102,241,0.1)] border border-[rgba(99,102,241,0.2)] flex items-center justify-center flex-shrink-0">
                                            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                                                <circle cx="12" cy="10" r="3" />
                                            </svg>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-[0.68rem] text-muted uppercase tracking-wider font-bold">Location</p>
                                            <p className="text-[0.88rem] font-semibold text-text light:text-[#1a100b]">{LOCATION}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* ── Right: Social / Action Cards ── */}
                            <div className="lg:w-[420px] flex flex-col gap-4">
                                <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold">Connect & Reach Out</p>

                                {/* WhatsApp */}
                                <a
                                    href={WHATSAPP_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(37,211,102,0.4)] hover:bg-[rgba(37,211,102,0.06)] hover:shadow-[0_8px_24px_rgba(37,211,102,0.12)] light:bg-[rgba(255,255,255,0.6)]"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[#25D366] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(37,211,102,0.3)] group-hover:shadow-[0_6px_20px_rgba(37,211,102,0.45)] transition-shadow">
                                        <svg viewBox="0 0 24 24" className="w-6 h-6" fill="white">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-[0.95rem] light:text-[#1a100b]">WhatsApp</p>
                                        <p className="text-[0.78rem] text-muted">Chat with me directly</p>
                                    </div>
                                    <span className="text-muted text-[0.8rem] group-hover:text-[#25D366] transition-colors">↗</span>
                                </a>

                                {/* LinkedIn */}
                                <a
                                    href={LINKEDIN_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(10,102,194,0.4)] hover:bg-[rgba(10,102,194,0.06)] hover:shadow-[0_8px_24px_rgba(10,102,194,0.15)] light:bg-[rgba(255,255,255,0.6)]"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[#0A66C2] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(10,102,194,0.3)] group-hover:shadow-[0_6px_20px_rgba(10,102,194,0.45)] transition-shadow">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                                            <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-[0.95rem] light:text-[#1a100b]">LinkedIn</p>
                                        <p className="text-[0.78rem] text-muted">Professional network & profile</p>
                                    </div>
                                    <span className="text-muted text-[0.8rem] group-hover:text-[#0A66C2] transition-colors">↗</span>
                                </a>

                                {/* GitHub */}
                                <a
                                    href={GITHUB_URL}
                                    target="_blank"
                                    rel="noreferrer noopener"
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.25)] hover:bg-[rgba(255,255,255,0.06)] hover:shadow-[0_8px_24px_rgba(255,255,255,0.08)] light:bg-[rgba(255,255,255,0.6)] light:hover:border-[rgba(36,41,47,0.4)] light:hover:bg-[rgba(36,41,47,0.06)]"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[#24292f] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(0,0,0,0.3)] group-hover:shadow-[0_6px_20px_rgba(0,0,0,0.5)] transition-shadow">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="white">
                                            <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-[0.95rem] light:text-[#1a100b]">GitHub</p>
                                        <p className="text-[0.78rem] text-muted">@{GITHUB_USERNAME} — source code & projects</p>
                                    </div>
                                    <span className="text-muted text-[0.8rem] group-hover:text-text transition-colors">↗</span>
                                </a>

                                {/* Email Me */}
                                <a
                                    href={`mailto:${EMAIL}`}
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,189,127,0.4)] hover:bg-[rgba(255,189,127,0.06)] hover:shadow-[0_8px_24px_rgba(255,189,127,0.12)] light:bg-[rgba(255,255,255,0.6)]"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,#ffbd7f,#ff8c00)] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(255,140,0,0.3)] group-hover:shadow-[0_6px_20px_rgba(255,140,0,0.45)] transition-shadow">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="2" y="4" width="20" height="16" rx="2" />
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-[0.95rem] light:text-[#1a100b]">Email Me</p>
                                        <p className="text-[0.78rem] text-muted truncate">{EMAIL}</p>
                                    </div>
                                    <span className="text-muted text-[0.8rem] group-hover:text-cyan transition-colors">↗</span>
                                </a>

                                {/* Resume Download */}
                                <a
                                    href={RESUME_PATH}
                                    download
                                    className="group flex items-center gap-4 p-4 rounded-2xl border border-[rgba(255,189,127,0.25)] bg-[rgba(255,189,127,0.06)] transition-[transform,box-shadow,border-color,background-color] duration-300 hover:-translate-y-0.5 hover:border-[rgba(255,189,127,0.5)] hover:bg-[rgba(255,189,127,0.12)] hover:shadow-[0_8px_24px_rgba(255,189,127,0.2)] light:bg-[rgba(255,240,220,0.7)]"
                                >
                                    <div className="w-11 h-11 rounded-xl bg-[linear-gradient(135deg,#818cf8,#6366f1)] flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(99,102,241,0.3)] group-hover:shadow-[0_6px_20px_rgba(99,102,241,0.45)] transition-shadow">
                                        <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                                            <polyline points="7 10 12 15 17 10" />
                                            <line x1="12" y1="15" x2="12" y2="3" />
                                        </svg>
                                    </div>
                                    <div className="flex-1">
                                        <p className="font-bold text-[0.95rem] light:text-[#1a100b]">Download Resume</p>
                                        <p className="text-[0.78rem] text-muted">PDF — latest version</p>
                                    </div>
                                    <span className="text-[0.75rem] font-bold px-2 py-0.5 rounded-full bg-[rgba(129,140,248,0.15)] text-[#818cf8] border border-[rgba(129,140,248,0.3)]">PDF</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Home;
