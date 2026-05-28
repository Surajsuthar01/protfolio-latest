
import { memo } from "react";
import { educationTimeline } from "../data/portfolio";


/* ─── Premium monogram badge per education level ────────────────────────────
   Each badge = bold initials ring + a crisp sub-icon beneath              */

/** B.Tech – "AC" monogram with graduation-cap sub-icon */
const CollegeLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 56 56" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="28" cy="28" r="27" stroke={color} strokeWidth="1.5" strokeOpacity="0.35" />
    {/* Inner tinted disc */}
    <circle cx="28" cy="28" r="22" fill={color} fillOpacity="0.08" />
    {/* Initials: AC */}
    <text x="28" y="26" textAnchor="middle" dominantBaseline="middle"
      fontSize="13" fontWeight="800" fontFamily="Inter,system-ui,sans-serif"
      fill={color} letterSpacing="-0.5">AC</text>
    {/* Graduation cap – sub icon */}
    <g transform="translate(28,39) scale(0.62)" fill={color}>
      {/* Board */}
      <path d="M-10-4l10-4 10 4-10 4z" fillOpacity="0.9" />
      {/* Left drop cord */}
      <path d="M-10 0v5" stroke={color} strokeWidth="1.6" strokeLinecap="round" />
      {/* Tassel dot */}
      <circle cx="-10" cy="6" r="1.4" fillOpacity="0.8" />
      {/* Right side base */}
      <path d="M10 0v3c0 2-4 4-10 4s-10-2-10-4v-3" stroke={color} strokeWidth="1.6" strokeLinecap="round" fill="none" fillOpacity="0" />
    </g>
  </svg>
);

/** GSS – government school monogram with building sub-icon */
const SchoolLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 56 56" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="28" cy="28" r="27" stroke={color} strokeWidth="1.5" strokeOpacity="0.35" />
    <circle cx="28" cy="28" r="22" fill={color} fillOpacity="0.08" />
    {/* Initials: GSS (abbr Govt Sr Sec School) */}
    <text x="28" y="26" textAnchor="middle" dominantBaseline="middle"
      fontSize="11" fontWeight="800" fontFamily="Inter,system-ui,sans-serif"
      fill={color} letterSpacing="-0.3">GSS</text>
    {/* Building sub-icon */}
    <g transform="translate(28,40) scale(0.55)">
      {/* Roof triangle */}
      <path d="M-11-4l11-6 11 6H-11z" fill={color} fillOpacity="0.85" />
      {/* Body */}
      <rect x="-9" y="-4" width="18" height="10" rx="0.8" fill={color} fillOpacity="0.2" stroke={color} strokeWidth="1.2" />
      {/* Door */}
      <rect x="-2.5" y="1" width="5" height="5" rx="1" fill={color} fillOpacity="0.5" />
      {/* Windows */}
      <rect x="-8" y="-2" width="4" height="3" rx="0.6" fill={color} fillOpacity="0.4" />
      <rect x="4" y="-2" width="4" height="3" rx="0.6" fill={color} fillOpacity="0.4" />
    </g>
  </svg>
);

/** VVM – secondary school monogram with book sub-icon */
const BookLogo = ({ color }: { color: string }) => (
  <svg viewBox="0 0 56 56" className="w-10 h-10" fill="none" xmlns="http://www.w3.org/2000/svg">
    {/* Outer ring */}
    <circle cx="28" cy="28" r="27" stroke={color} strokeWidth="1.5" strokeOpacity="0.35" />
    <circle cx="28" cy="28" r="22" fill={color} fillOpacity="0.08" />
    {/* Initials: VVM */}
    <text x="28" y="26" textAnchor="middle" dominantBaseline="middle"
      fontSize="10" fontWeight="800" fontFamily="Inter,system-ui,sans-serif"
      fill={color} letterSpacing="-0.3">VVM</text>
    {/* Open book sub-icon */}
    <g transform="translate(28,40) scale(0.6)" fill="none">
      {/* Left page */}
      <path d="M0-5 Q-6-6-12-5L-12 5 Q-6 4 0 5z" fill={color} fillOpacity="0.15" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      {/* Right page */}
      <path d="M0-5 Q6-6 12-5L12 5 Q6 4 0 5z" fill={color} fillOpacity="0.1" stroke={color} strokeWidth="1.2" strokeLinejoin="round" />
      {/* Spine */}
      <line x1="0" y1="-5" x2="0" y2="5" stroke={color} strokeWidth="1.2" strokeLinecap="round" />
    </g>
  </svg>
);

const LOGO_COMPONENTS: Record<string, React.ComponentType<{ color: string }>> = {
  btech: CollegeLogo,
  "senior-secondary": SchoolLogo,
  secondary: BookLogo,
};


/* ─── color/style map per entry ──────────────────────────────────────────── */
const LOGOS: Record<string, { color: string; bg: string; border: string }> = {
  btech: {
    color: "#ffbd7f",
    bg: "rgba(255,189,127,0.08)",
    border: "rgba(255,189,127,0.2)",
  },
  "senior-secondary": {
    color: "#818cf8",
    bg: "rgba(129,140,248,0.08)",
    border: "rgba(129,140,248,0.2)",
  },
  secondary: {
    color: "#22c55e",
    bg: "rgba(34,197,94,0.08)",
    border: "rgba(34,197,94,0.2)",
  },
};

const CalendarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" /><line x1="16" y1="2" x2="16" y2="6" /><line x1="8" y1="2" x2="8" y2="6" /><line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);

const LocationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" /><circle cx="12" cy="10" r="3" />
  </svg>
);

const StarIcon = () => (
  <svg viewBox="0 0 24 24" className="w-3.5 h-3.5" fill="currentColor">
    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
  </svg>
);

const EducationSection = memo(function EducationSection() {
  return (
    <section id="education" className="py-20 lg:py-24">
      <div className="w-[min(1400px,88vw)] mx-auto">

        {/* Outer card */}
        <div className="rounded-[1.5rem] border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[6px]  overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

          {/* Accent bar */}
          <div className="h-[3px] w-full bg-[linear-gradient(90deg,#818cf8,#ffbd7f,var(--cyan))] opacity-70" />

          <div className="p-8 md:p-12">

            {/* Header */}
            <div className="mb-12 text-center">
              <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-3">Education</p>
              <h2 className="font-display text-[clamp(1.45rem,3vw,2.35rem)] font-extrabold leading-[1.2] mb-3 light:text-[#1a100b]">
                Academic background &amp; qualifications
              </h2>
              <p className="text-muted text-[0.9rem] max-w-[520px] mx-auto">
                Built a strong foundation in Computer Science complemented by consistent academic excellence across all levels.
              </p>
              {/* Summary chips */}
              <div className="flex flex-wrap justify-center gap-3 mt-5">
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(255,189,127,0.3)] bg-[rgba(255,189,127,0.06)] text-[0.78rem] font-bold text-[#ffbd7f]">
                  <StarIcon />
                  CGPA 8.8 / 10
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(129,140,248,0.3)] bg-[rgba(129,140,248,0.06)] text-[0.78rem] font-bold text-[#818cf8]">
                  <CalendarIcon />
                  2020 – 2026
                </div>
                <div className="flex items-center gap-1.5 px-3.5 py-1.5 rounded-full border border-[rgba(34,197,94,0.3)] bg-[rgba(34,197,94,0.06)] text-[0.78rem] font-bold text-[#22c55e]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e]" />
                  Graduated 2026
                </div>
              </div>
            </div>

            {/* Timeline */}
            <div className="relative max-w-[900px] mx-auto">

              {/* Vertical connector line (desktop) */}
              <div className="hidden md:block absolute left-[2.15rem] top-8 bottom-8 w-px bg-[linear-gradient(180deg,#ffbd7f,#818cf8,#22c55e)] opacity-25" />

              <div className="flex flex-col gap-8">
                {educationTimeline.map((item) => {
                  const meta = LOGOS[item.id] ?? LOGOS["secondary"];
                  return (
                    <article
                      key={item.id}
                      className="group relative flex gap-6 p-7 md:p-8 rounded-2xl border border-line bg-[linear-gradient(165deg,rgba(38,28,20,0.32),rgba(255,255,255,0.03))] backdrop-blur-sm transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)] light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.7))]"
                      style={{
                        borderColor: item.current ? "rgba(255,189,127,0.35)" : undefined,
                      }}
                    >
                      {/* Hover border glow */}
                      <div
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{ boxShadow: `inset 0 0 0 1px ${meta.color}55` }}
                      />

                      {/* Icon / logo column */}
                      <div className="flex-shrink-0 flex flex-col items-center gap-3 pt-1">
                        <div
                          className="w-[4.5rem] h-[4.5rem] rounded-2xl flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-105"
                          style={{ background: meta.bg, border: `1.5px solid ${meta.border}` }}
                        >
                          {(() => { const Logo = LOGO_COMPONENTS[item.id] ?? BookLogo; return <Logo color={meta.color} />; })()}
                        </div>
                        {/* Connector dot for timeline */}
                        {item.current && (
                          <span
                            className="w-2.5 h-2.5 rounded-full animate-pulse hidden md:block"
                            style={{ background: meta.color }}
                          />
                        )}
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">

                        {/* Header row */}
                        <div className="flex flex-wrap items-start gap-2 justify-between mb-1">
                          <h3 className="text-[1.05rem] font-extrabold leading-tight light:text-[#1a100b]">
                            {item.institute}
                          </h3>
                          {item.current && (
                            <span className="text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[rgba(34,197,94,0.1)] text-[#22c55e] border border-[rgba(34,197,94,0.3)] flex items-center gap-1.5 flex-shrink-0">
                              <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse" />
                              Current
                            </span>
                          )}
                        </div>

                        {/* Degree / title */}
                        <p
                          className="text-[0.9rem] font-bold mb-3"
                          style={{ color: meta.color }}
                        >
                          {item.title}
                        </p>

                        {/* Meta chips row */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          <div className="flex items-center gap-1.5 text-[0.75rem] text-muted px-2.5 py-1 rounded-full border border-line bg-[rgba(255,255,255,0.03)] light:bg-[rgba(255,255,255,0.5)]">
                            <CalendarIcon />
                            {item.period}
                          </div>
                          <div className="flex items-center gap-1.5 text-[0.75rem] text-muted px-2.5 py-1 rounded-full border border-line bg-[rgba(255,255,255,0.03)] light:bg-[rgba(255,255,255,0.5)]">
                            <LocationIcon />
                            {item.location}
                          </div>
                          {item.score && (
                            <div
                              className="flex items-center gap-1.5 text-[0.75rem] font-bold px-2.5 py-1 rounded-full"
                              style={{
                                color: meta.color,
                                background: meta.bg,
                                border: `1px solid ${meta.border}`,
                              }}
                            >
                              <StarIcon />
                              {item.score}
                            </div>
                          )}
                        </div>

                        {/* Description */}
                        <p className="text-muted text-[0.88rem] leading-relaxed mb-5 light:text-[#6b4c36]">
                          {item.details}
                        </p>

                        {/* Achievement highlights — college only */}
                        {item.id === "btech" && (
                          <div className="mb-5 grid grid-cols-2 sm:grid-cols-4 gap-3">
                            {[
                              { label: "CGPA", value: "8.8", sub: "out of 10" },
                              { label: "Batch", value: "2026", sub: "Graduated" },
                              { label: "Projects", value: "5+", sub: "completed" },
                              { label: "Certs", value: "7+", sub: "earned" },
                            ].map((stat) => (
                              <div
                                key={stat.label}
                                className="flex flex-col items-center p-3 rounded-xl border border-[rgba(255,189,127,0.15)] bg-[rgba(255,189,127,0.04)] text-center"
                              >
                                <span className="text-[1.15rem] font-extrabold text-[#ffbd7f]">{stat.value}</span>
                                <span className="text-[0.62rem] uppercase tracking-wide text-muted font-bold">{stat.label}</span>
                                <span className="text-[0.58rem] text-muted">{stat.sub}</span>
                              </div>
                            ))}
                          </div>
                        )}

                        {/* Subject tags */}
                        {item.tags && (
                          <div className="border-t border-line pt-4">
                            <p className="text-[0.65rem] uppercase tracking-widest text-muted font-bold mb-2.5">Key Subjects</p>
                            <div className="flex flex-wrap gap-2">
                              {item.tags.map((tag) => (
                                <span
                                  key={tag}
                                  className="text-[0.72rem] px-2.5 py-1 rounded-full font-medium transition-all hover:scale-105"
                                  style={{
                                    color: meta.color,
                                    background: meta.bg,
                                    border: `1px solid ${meta.border}`,
                                  }}
                                >
                                  {tag}
                                </span>
                              ))}
                            </div>
                          </div>
                        )}
                      </div>
                    </article>
                  );
                })}
              </div>
            </div>

            {/* Footer note */}
            <div className="mt-10 text-center">
              <p className="text-[0.78rem] text-muted flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="w-3.5 h-3.5 text-[#22c55e]" fill="currentColor">
                  <path d="M12 22c5.52 0 10-4.48 10-10S17.52 2 12 2 2 6.48 2 12s4.48 10 10 10zm-1-14h2v6h-2zm0 8h2v2h-2z" />
                </svg>
                All academic records from Rajasthan Board of Secondary Education &amp; RTU | Now based in Pune, Maharashtra
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default EducationSection;
