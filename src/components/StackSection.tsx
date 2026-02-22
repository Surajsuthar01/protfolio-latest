
import { memo } from "react";
import { devopsTools } from "../data/portfolio";

/* ─── Category accent colours ────────────────────────────────────────────── */
const CATEGORY_META: Record<string, { color: string; bg: string; border: string; label: string }> = {
  "Operating System": { color: "#fbbf24", bg: "rgba(251,191,36,0.08)", border: "rgba(251,191,36,0.22)", label: "OS & Shell" },
  Cloud: { color: "#FF9900", bg: "rgba(255,153,0,0.08)", border: "rgba(255,153,0,0.22)", label: "Cloud" },
  Containerization: { color: "#2496ED", bg: "rgba(36,150,237,0.08)", border: "rgba(36,150,237,0.22)", label: "Containers" },
  Orchestration: { color: "#326CE5", bg: "rgba(50,108,229,0.08)", border: "rgba(50,108,229,0.22)", label: "Orchestration" },
  "Version Control": { color: "#f05032", bg: "rgba(240,80,50,0.08)", border: "rgba(240,80,50,0.22)", label: "Version Control" },
  Automation: { color: "#EE0000", bg: "rgba(238,0,0,0.07)", border: "rgba(238,0,0,0.2)", label: "Automation" },
  IaC: { color: "#7B42BC", bg: "rgba(123,66,188,0.08)", border: "rgba(123,66,188,0.22)", label: "Infra as Code" },
  "CI/CD": { color: "#D33833", bg: "rgba(211,56,51,0.08)", border: "rgba(211,56,51,0.2)", label: "CI/CD" },
  Monitoring: { color: "#E6522C", bg: "rgba(230,82,44,0.08)", border: "rgba(230,82,44,0.22)", label: "Monitoring" },
  Visualization: { color: "#F46800", bg: "rgba(244,104,0,0.08)", border: "rgba(244,104,0,0.22)", label: "Visualization" },
};

const DEFAULT_META = { color: "#ffbd7f", bg: "rgba(255,189,127,0.08)", border: "rgba(255,189,127,0.2)", label: "Other" };

/* ─── Category groups for the grid layout ───────────────────────────────── */
const CATEGORY_ORDER = [
  { key: "Core Infrastructure", cats: ["Operating System", "Version Control"] },
  { key: "Cloud & Containers", cats: ["Cloud", "Containerization", "Orchestration"] },
  { key: "Automation & IaC", cats: ["Automation", "IaC", "CI/CD"] },
  { key: "Observability", cats: ["Monitoring", "Visualization"] },
];

const StackSection = memo(function StackSection() {
  /* Organise tools into domain groups */
  const grouped = CATEGORY_ORDER.map(({ key, cats }) => ({
    groupLabel: key,
    tools: devopsTools.filter((t) => t.category != null && (cats as string[]).includes(t.category)),
  }));

  /* Top proficiency tools (80%+) for featured row */
  const featured = [...devopsTools]
    .sort((a, b) => (b.percentage ?? 0) - (a.percentage ?? 0))
    .slice(0, 4);

  return (
    <section id="stack" className="py-20 lg:py-24">
      <div className="w-[min(1400px,88vw)] mx-auto">

        {/* Outer card */}
        <div className="rounded-[1.5rem] border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[18px] backdrop-saturate-[1.2] overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

          {/* Accent bar */}
          <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--cyan),#7B42BC,#FF9900,var(--cyan))] opacity-70" />

          <div className="p-8 md:p-12">

            {/* ── Header ── */}
            <div className="text-center mb-12">
              <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-3">Tech Stack</p>
              <h2 className="font-display text-[clamp(1.45rem,3vw,2.35rem)] font-extrabold leading-[1.2] mb-3 light:text-[#1a100b]">
                Tools I work with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[#ffbd7f]">every day</span>
              </h2>
              <p className="text-muted text-[0.9rem] max-w-[500px] mx-auto">
                A curated toolkit built around Linux, cloud infrastructure, and modern DevOps workflows.
              </p>

              {/* Category pill legend */}
              <div className="flex flex-wrap justify-center gap-2 mt-5">
                {Object.entries(CATEGORY_META).map(([, m]) => (
                  <span key={m.label} className="text-[0.68rem] font-bold px-2.5 py-1 rounded-full" style={{ color: m.color, background: m.bg, border: `1px solid ${m.border}` }}>
                    {m.label}
                  </span>
                ))}
              </div>
            </div>

            {/* ── Featured / Top 4 tools ── */}
            <div className="mb-10">
              <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold mb-4">Highest Proficiency</p>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {featured.map((tool) => {
                  const m = (CATEGORY_META as Record<string, typeof DEFAULT_META>)[tool.category ?? ""] ?? DEFAULT_META;
                  return (
                    <div
                      key={tool.name}
                      className="group relative flex flex-col items-center gap-3 p-5 rounded-2xl border transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_32px_rgba(0,0,0,0.2)] overflow-hidden light:bg-[rgba(255,255,255,0.6)]"
                      style={{ borderColor: m.border, background: m.bg }}
                    >
                      {/* Glow */}
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl" style={{ boxShadow: `inset 0 0 0 1px ${m.color}55` }} />

                      <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-[rgba(255,255,255,0.06)] border border-[rgba(255,255,255,0.1)] transition-transform duration-300 group-hover:scale-110 light:bg-[rgba(255,255,255,0.8)]">
                        <img src={tool.logo} alt={tool.name} className="w-9 h-9 object-contain" loading="lazy" />
                      </div>

                      <div className="text-center">
                        <p className="font-bold text-[0.92rem] light:text-[#1a100b]">{tool.name}</p>
                        <p className="text-[0.68rem] font-medium mt-0.5" style={{ color: m.color }}>{m.label}</p>
                      </div>

                      {/* Arc / score badge */}
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[0.72rem] font-extrabold" style={{ color: m.color, background: `${m.color}18` }}>
                        <svg viewBox="0 0 12 12" className="w-2.5 h-2.5" fill={m.color}><circle cx="6" cy="6" r="5" /></svg>
                        {tool.percentage}%
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* ── Grouped categories ── */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {grouped.map(({ groupLabel, tools }) => (
                tools.length === 0 ? null : (
                  <div key={groupLabel} className="rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] p-6 light:bg-[rgba(255,255,255,0.4)]">
                    <p className="text-[0.72rem] uppercase tracking-wider font-bold text-muted mb-5">{groupLabel}</p>
                    <div className="flex flex-col gap-4">
                      {tools.map((tool) => {
                        const m = (CATEGORY_META as Record<string, typeof DEFAULT_META>)[tool.category ?? ""] ?? DEFAULT_META;
                        return (
                          <div key={tool.name} className="group flex items-center gap-4">
                            {/* Logo box */}
                            <div
                              className="w-11 h-11 flex-shrink-0 rounded-xl flex items-center justify-center border transition-transform duration-200 group-hover:scale-105 light:bg-[rgba(255,255,255,0.8)]"
                              style={{ background: m.bg, borderColor: m.border }}
                            >
                              <img src={tool.logo} alt={tool.name} className="w-7 h-7 object-contain" loading="lazy" />
                            </div>

                            {/* Label + bar */}
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between mb-1.5">
                                <div className="flex items-center gap-2">
                                  <span className="text-[0.88rem] font-bold light:text-[#1a100b]">{tool.name}</span>
                                  <span className="text-[0.62rem] font-bold px-2 py-0.5 rounded-full" style={{ color: m.color, background: m.bg, border: `1px solid ${m.border}` }}>{m.label}</span>
                                </div>
                                <span className="text-[0.75rem] font-extrabold" style={{ color: m.color }}>{tool.percentage}%</span>
                              </div>
                              {/* Track */}
                              <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.07)] light:bg-[rgba(0,0,0,0.07)] overflow-hidden">
                                <div
                                  className="h-full rounded-full transition-all duration-700"
                                  style={{ width: `${tool.percentage}%`, background: `linear-gradient(90deg, ${m.color}99, ${m.color})` }}
                                />
                              </div>
                              <p className="text-[0.72rem] text-muted mt-1 leading-snug">{tool.desc}</p>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                )
              ))}
            </div>

            {/* ── Footer stat strip ── */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4 pt-8 border-t border-line">
              {[
                { value: "10+", label: "Technologies", color: "text-[var(--cyan)]" },
                { value: "4", label: "Domains", color: "text-[#ffbd7f]" },
                { value: "98%", label: "Peak Proficiency", color: "text-[#22c55e]" },
                { value: "2+", label: "Years Hands-on", color: "text-[#818cf8]" },
              ].map((s) => (
                <div key={s.label} className="flex flex-col items-center gap-0.5 text-center">
                  <span className={`text-[1.6rem] font-extrabold font-display ${s.color}`}>{s.value}</span>
                  <span className="text-[0.72rem] uppercase tracking-wide text-muted font-bold">{s.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default StackSection;
