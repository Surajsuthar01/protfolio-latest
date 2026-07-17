
import { memo } from "react";
import {
  GITHUB_URL,
  LINKEDIN_URL,
  HERO_IMAGE_PATH,
  LOCATION,
} from "../data/portfolio";

const AboutSection = memo(function AboutSection() {
  return (
    <section id="about" className="pt-60 pb-20 lg:pt-72 lg:pb-24">
      <div className="w-[min(1400px,88vw)] mx-auto">

        {/* Outer card */}
        <div className="rounded-[1.5rem] border border-line bg-[linear-gradient(165deg,var(--glass-card),rgba(255,255,255,0.05))] backdrop-blur-[6px]  overflow-hidden light:bg-[linear-gradient(165deg,rgba(255,255,255,0.85),rgba(255,248,240,0.75))]">

          {/* Tri-colour accent bar */}
          <div className="h-[3px] w-full bg-[linear-gradient(90deg,var(--cyan),#818cf8,#ffbd7f,var(--cyan))] opacity-70" />

          <div className="p-8 md:p-12 flex flex-col lg:flex-row gap-10">

            {/* ══════════════════════ LEFT SIDEBAR ══════════════════════ */}
            <aside className="lg:w-[300px] xl:w-[340px] flex flex-col gap-5 flex-shrink-0">

              {/* Avatar + identity block */}
              <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.03)] p-6 flex flex-col items-center gap-4 text-center light:bg-[rgba(255,255,255,0.5)]">
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full bg-[linear-gradient(135deg,var(--cyan),#818cf8,#ffbd7f)] p-[2px]">
                    <div className="w-full h-full rounded-full overflow-hidden bg-[var(--bg)]">
                      <img
                        src={HERO_IMAGE_PATH}
                        alt="Suraj Suthar"
                        className="w-full h-full object-cover rounded-full scale-[1.3] translate-y-2.5"
                        loading="lazy"
                      />
                    </div>
                  </div>
                  <span className="absolute bottom-1 right-1 w-4 h-4 bg-[#22c55e] rounded-full border-2 border-[var(--bg)] shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
                </div>

                <div>
                  <h2 className="font-display text-[1.2rem] font-extrabold mb-1 light:text-[#1a100b]">Suraj Suthar</h2>
                  <p className="text-[0.8rem] text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] via-[#818cf8] to-[#ffbd7f] font-bold leading-tight">
                    Full Stack · DevOps · Cloud Engineer
                  </p>
                </div>

                {/* Location chip */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full border border-line bg-[rgba(255,255,255,0.03)] text-muted text-[0.75rem] font-medium light:bg-[rgba(255,255,255,0.5)]">
                  <svg viewBox="0 0 24 24" className="w-3 h-3 flex-shrink-0" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  {LOCATION}
                </div>

                {/* Open to work badge */}
                <div className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[rgba(34,197,94,0.1)] border border-[rgba(34,197,94,0.3)] text-[#22c55e] text-[0.72rem] font-bold">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#22c55e] animate-pulse flex-shrink-0" />
                  Open to Opportunities
                </div>
              </div>

              {/* By the Numbers */}
              <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] p-5 light:bg-[rgba(255,255,255,0.5)]">
                <p className="text-[0.65rem] text-muted uppercase tracking-wider font-bold mb-3">By The Numbers</p>
                <div className="grid grid-cols-2 gap-2.5">
                  {[
                    { value: "300+", label: "LeetCode Solved",  color: "text-[var(--cyan)]"  },
                    { value: "8.8",   label: "CGPA · B.Tech",    color: "text-[#ffbd7f]"      },
                    { value: "7+",    label: "Certifications",   color: "text-[#818cf8]"      },
                    { value: "20+",   label: "GitHub Repos",     color: "text-[#22c55e]"      },
                  ].map((s) => (
                    <div key={s.label} className="flex flex-col items-center gap-0.5 p-3 rounded-xl border border-line bg-[rgba(255,255,255,0.02)] light:bg-[rgba(255,255,255,0.5)] text-center">
                      <span className={`text-[1.2rem] font-extrabold font-display ${s.color}`}>{s.value}</span>
                      <span className="text-[0.58rem] text-muted font-medium uppercase tracking-wide leading-tight">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Core tools */}
              <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] p-5 light:bg-[rgba(255,255,255,0.5)]">
                <p className="text-[0.65rem] text-muted uppercase tracking-wider font-bold mb-3">Core Tools</p>
                <div className="grid grid-cols-5 gap-2">
                  {[
                    { name: "Linux",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" },
                    { name: "Docker",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
                    { name: "Kubernetes", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
                    { name: "AWS",        icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                    { name: "Ansible",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ansible/ansible-original.svg" },
                    { name: "Terraform",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg" },
                    { name: "React",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
                    { name: "Node.js",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
                    { name: "Python",     icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
                    { name: "Jenkins",    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg" },
                  ].map((tool) => (
                    <div key={tool.name} className="group flex flex-col items-center gap-1" title={tool.name}>
                      <div className="w-9 h-9 rounded-lg border border-line bg-[rgba(255,255,255,0.04)] flex items-center justify-center hover:border-[rgba(129,140,248,0.4)] hover:bg-[rgba(129,140,248,0.06)] transition-[transform,background-color,border-color] duration-200 hover:scale-110 hover:-translate-y-0.5 light:bg-[rgba(255,255,255,0.6)]">
                        <img src={tool.icon} alt={tool.name} className="w-5 h-5 object-contain" loading="lazy" />
                      </div>
                      <span className="text-[0.55rem] text-muted truncate w-full text-center">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social links */}
              <div className="flex gap-2">
                <a href={GITHUB_URL} target="_blank" rel="noreferrer noopener"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-line bg-[rgba(255,255,255,0.03)] text-muted text-[0.78rem] font-bold hover:border-[rgba(255,255,255,0.3)] hover:text-text hover:bg-[rgba(255,255,255,0.06)] transition-all light:bg-[rgba(255,255,255,0.5)]">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                  GitHub
                </a>
                <a href={LINKEDIN_URL} target="_blank" rel="noreferrer noopener"
                  className="flex-1 flex items-center justify-center gap-2 py-2.5 rounded-xl border border-line bg-[rgba(255,255,255,0.03)] text-muted text-[0.78rem] font-bold hover:border-[rgba(10,102,194,0.4)] hover:text-[#0A66C2] hover:bg-[rgba(10,102,194,0.06)] transition-all light:bg-[rgba(255,255,255,0.5)]">
                  <svg viewBox="0 0 24 24" className="w-4 h-4" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                  LinkedIn
                </a>
              </div>
            </aside>

            {/* ══════════════════════ RIGHT CONTENT ══════════════════════ */}
            <div className="flex-1 flex flex-col gap-8">

              {/* ── Section label + hero bio ── */}
              <div>
                <p className="text-cyan text-[0.8rem] tracking-[0.12em] uppercase font-bold mb-3">About Me</p>
                <h2 className="font-display text-[clamp(1.4rem,2.6vw,2.1rem)] font-extrabold leading-[1.2] mb-5 light:text-[#1a100b]">
                  I build{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[#818cf8]">
                    full-stack products
                  </span>{" "}
                  &amp; ship them
                  <br />
                  with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#818cf8] to-[#ffbd7f]">
                    production-grade DevOps
                  </span>
                </h2>

                {/* Bio paragraphs — recruiter-optimised */}
                <div className="flex flex-col gap-3">
                  <p className="text-muted text-[0.94rem] leading-relaxed light:text-[#6b4c36]">
                    I'm <strong className="text-text light:text-[#1a100b]">Suraj Suthar</strong> — a{" "}
                    <strong className="text-text light:text-[#1a100b]">Computer Science graduate</strong> and software engineer
                    passionate about building reliable, scalable, and production-ready systems. I enjoy working across the entire
                    software development lifecycle, from designing intuitive user interfaces and developing backend services to
                    automating infrastructure and deployment pipelines.
                  </p>
                  <p className="text-muted text-[0.94rem] leading-relaxed light:text-[#6b4c36]">
                    My technical expertise spans{" "}
                    <strong className="text-text light:text-[#1a100b]">Frontend, Backend, DevOps, and Cloud Engineering</strong>.
                    I build modern web applications using{" "}
                    <strong className="text-text light:text-[#1a100b]">React, TypeScript, Node.js, Express, MongoDB, and SQL</strong>,
                    while designing cloud-native infrastructure with{" "}
                    <strong className="text-text light:text-[#1a100b]">Docker, Kubernetes, Jenkins, Terraform, Linux, and AWS</strong>.
                    As an{" "}
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[#ef4444] to-[#f97316]">
                      RHCSA-certified Linux Administrator
                    </strong>, I focus on automation, Infrastructure as Code, CI/CD, and building resilient production environments.
                  </p>
                  <p className="text-muted text-[0.94rem] leading-relaxed light:text-[#6b4c36]">
                    Beyond application development, I have hands-on experience with{" "}
                    <strong className="text-text light:text-[#1a100b]">production support, infrastructure monitoring,
                    ClickHouse, Grafana dashboards, Python automation, and system performance analysis</strong>,
                    where I work on automating operational workflows and building monitoring solutions for real-world systems.
                  </p>
                  <p className="text-muted text-[0.94rem] leading-relaxed light:text-[#6b4c36]">
                    Problem solving is a core part of my engineering mindset. Having solved{" "}
                    <strong className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--cyan)] to-[#818cf8]">
                      300+ LeetCode problems in C++
                    </strong>, I continuously strengthen my understanding of{" "}
                    <strong className="text-text light:text-[#1a100b]">Data Structures, Algorithms, system design,
                    and performance optimization</strong>, enabling me to build software that is not only functional
                    but also efficient and scalable.
                  </p>
                  <p className="text-muted text-[0.94rem] leading-relaxed light:text-[#6b4c36]">
                    I believe great software is more than writing code — it's about designing systems that are{" "}
                    <strong className="text-text light:text-[#1a100b]">maintainable, automated, observable, and built
                    to perform reliably in production</strong>. Every project I build is an opportunity to create
                    solutions that are clean, efficient, and engineered for scale.
                  </p>
                </div>
              </div>

              {/* ── What I Build — 3 cards ── */}
              <div>
                <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold mb-4">What I Build</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

                  {/* Full Stack */}
                  <div className="group flex flex-col gap-3 p-5 rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] hover:border-[rgba(129,140,248,0.4)] hover:bg-[rgba(129,140,248,0.04)] transition-[transform,box-shadow,border-color,background-color] duration-300 light:bg-[rgba(255,255,255,0.5)]">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(129,140,248,0.1)] border border-[rgba(129,140,248,0.2)] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#818cf8" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="16 18 22 12 16 6" />
                        <polyline points="8 6 2 12 8 18" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[0.92rem] font-bold mb-1 light:text-[#1a100b]">Full Stack Apps</h3>
                      <p className="text-[0.77rem] text-muted leading-relaxed mb-2">
                        MERN stack applications with React/TypeScript frontends, Node.js/Express backends, and MongoDB &amp; SQL databases.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["React", "TypeScript", "Node.js", "MongoDB"].map(t => (
                          <span key={t} className="text-[0.62rem] px-2 py-0.5 rounded-full bg-[rgba(129,140,248,0.08)] text-[#818cf8] border border-[rgba(129,140,248,0.15)] font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* DevOps & Cloud */}
                  <div className="group flex flex-col gap-3 p-5 rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] hover:border-[rgba(255,189,127,0.4)] hover:bg-[rgba(255,189,127,0.04)] transition-[transform,box-shadow,border-color,background-color] duration-300 light:bg-[rgba(255,255,255,0.5)]">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(255,153,0,0.1)] border border-[rgba(255,153,0,0.2)] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="#ffbd7f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
                        <line x1="8" y1="21" x2="16" y2="21" />
                        <line x1="12" y1="17" x2="12" y2="21" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[0.92rem] font-bold mb-1 light:text-[#1a100b]">DevOps &amp; Cloud</h3>
                      <p className="text-[0.77rem] text-muted leading-relaxed mb-2">
                        End-to-end CI/CD pipelines, container orchestration with Kubernetes, IaC with Terraform, and AWS cloud infrastructure.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["Docker", "Kubernetes", "Jenkins", "AWS"].map(t => (
                          <span key={t} className="text-[0.62rem] px-2 py-0.5 rounded-full bg-[rgba(255,189,127,0.08)] text-[#ffbd7f] border border-[rgba(255,189,127,0.15)] font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* DSA & Problem Solving */}
                  <div className="group flex flex-col gap-3 p-5 rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] hover:border-[rgba(0,212,255,0.3)] hover:bg-[rgba(0,212,255,0.04)] transition-[transform,box-shadow,border-color,background-color] duration-300 light:bg-[rgba(255,255,255,0.5)]">
                    <div className="w-10 h-10 rounded-xl bg-[rgba(0,212,255,0.1)] border border-[rgba(0,212,255,0.2)] flex items-center justify-center">
                      <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none" stroke="var(--cyan)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-[0.92rem] font-bold mb-1 light:text-[#1a100b]">DSA &amp; Problem Solving</h3>
                      <p className="text-[0.77rem] text-muted leading-relaxed mb-2">
                        300+ LeetCode problems solved in C++. Strong in arrays, trees, graphs, dynamic programming, and system design.
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {["C++", "LeetCode", "DSA", "System Design"].map(t => (
                          <span key={t} className="text-[0.62rem] px-2 py-0.5 rounded-full bg-[rgba(0,212,255,0.08)] text-[var(--cyan)] border border-[rgba(0,212,255,0.15)] font-medium">{t}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* ── Tech Arsenal (categorised) ── */}
              <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] p-5 light:bg-[rgba(255,255,255,0.4)]">
                <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold mb-4">Tech Arsenal</p>
                <div className="flex flex-col gap-3.5">
                  {[
                    {
                      cat: "Frontend",
                      color: "#818cf8",
                      bg: "rgba(129,140,248,0.08)",
                      border: "rgba(129,140,248,0.2)",
                      items: ["React", "TypeScript", "JavaScript", "Next.js", "HTML5", "CSS3", "Tailwind CSS"],
                    },
                    {
                      cat: "Backend",
                      color: "#22c55e",
                      bg: "rgba(34,197,94,0.08)",
                      border: "rgba(34,197,94,0.2)",
                      items: ["Node.js", "Express.js", "REST APIs", "MongoDB", "MySQL", "PostgreSQL"],
                    },
                    {
                      cat: "DevOps & Cloud",
                      color: "#ffbd7f",
                      bg: "rgba(255,189,127,0.08)",
                      border: "rgba(255,189,127,0.2)",
                      items: ["Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform", "AWS", "Prometheus", "Grafana"],
                    },
                    {
                      cat: "Languages & Tools",
                      color: "var(--cyan)",
                      bg: "rgba(0,212,255,0.08)",
                      border: "rgba(0,212,255,0.2)",
                      items: ["C++", "Python", "Bash", "Linux", "Git", "GitHub"],
                    },
                  ].map((row) => (
                    <div key={row.cat} className="flex flex-wrap items-center gap-2">
                      <span
                        className="text-[0.6rem] font-bold uppercase tracking-wider w-[95px] flex-shrink-0"
                        style={{ color: row.color }}
                      >
                        {row.cat}
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {row.items.map((t) => (
                          <span
                            key={t}
                            className="text-[0.68rem] px-2.5 py-0.5 rounded-full font-medium transition-transform hover:scale-105"
                            style={{ color: row.color, background: row.bg, border: `1px solid ${row.border}` }}
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── Currently Exploring ── */}
              <div className="rounded-2xl border border-line bg-[rgba(255,255,255,0.02)] p-5 light:bg-[rgba(255,255,255,0.4)]">
                <p className="text-[0.72rem] text-muted uppercase tracking-wider font-bold mb-4">Currently Exploring</p>
                <div className="flex flex-col gap-3">
                  {[
                    { label: "AWS Solutions Architect",            pct: 72, color: "bg-[#FF9900]",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-plain-wordmark.svg" },
                    { label: "GitOps with ArgoCD",                 pct: 58, color: "bg-[var(--cyan)]",  icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/argocd/argocd-original.svg" },
                    { label: "Prometheus & Grafana Observability", pct: 65, color: "bg-[#818cf8]",      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/grafana/grafana-original.svg" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-center gap-3">
                      <div className="w-7 h-7 rounded-lg border border-line bg-[rgba(255,255,255,0.04)] flex items-center justify-center flex-shrink-0">
                        <img src={item.icon} alt={item.label} className="w-4 h-4 object-contain" loading="lazy" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-[0.78rem] font-semibold light:text-[#1a100b]">{item.label}</span>
                          <span className="text-[0.68rem] text-muted">{item.pct}%</span>
                        </div>
                        <div className="h-1.5 rounded-full bg-[rgba(255,255,255,0.06)] light:bg-[rgba(0,0,0,0.08)] overflow-hidden">
                          <div
                            className={`h-full rounded-full ${item.color} transition-all duration-700`}
                            style={{ width: `${item.pct}%` }}
                          />
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>{/* end RIGHT */}
          </div>
        </div>
      </div>
    </section>
  );
});

export default AboutSection;
