import { useLocation } from "react-router-dom";

type NavLink = {
  id: string;
  label: string;
};

type NavbarProps = {
  navLinks: NavLink[];
  githubUrl: string;
  linkedinUrl: string;
  resumePath: string;
  theme: "dark" | "light";
  onThemeToggle: () => void;
};

function Navbar({
  navLinks,
  githubUrl,
  linkedinUrl,
  resumePath,
  theme,
  onThemeToggle
}: NavbarProps) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header className="fixed top-4 left-0 right-0 flex justify-center z-40 pointer-events-none">
      <div className="pointer-events-auto w-[min(1240px,calc(100vw_-_1.5rem))] flex items-center justify-between gap-1.5 rounded-full border border-[var(--glass-border)] bg-[var(--glass-bg)] backdrop-blur-xl backdrop-saturate-[1.25] shadow-[0_18px_48px_rgba(0,0,0,0.32),inset_0_1px_0_rgba(255,255,255,0.24)] p-2 px-2.5 relative light:shadow-[0_14px_36px_rgba(124,79,45,0.12),inset_0_1px_0_rgba(255,245,235,0.56)]">
        {/* Glow effect for light mode */}
        <div className="absolute inset-[1px] rounded-full z-[-1] hidden light:block bg-gradient-to-br from-[rgba(244,211,173,0.16)] to-[rgba(241,193,110,0.12)] pointer-events-none" />

        <a
          href="/"
          className="w-fit min-w-0 max-w-none rounded-full flex flex-col items-start justify-center gap-0.5 py-1.5 px-3.5 no-underline text-[#1a120b] border border-[rgba(255,194,140,0.4)] bg-gradient-to-br from-mint to-cyan shadow-[inset_0_1px_0_rgba(255,255,255,0.4)] hover:opacity-95 transition-opacity light:text-[#fffaf5] light:border-[rgba(250,228,203,0.76)] light:from-[rgba(255,184,132,0.95)] light:to-[rgba(255,146,106,0.9)]"
          aria-label="Home"
        >
          <span className="font-display font-extrabold text-sm leading-tight">Suraj Suthar</span>
        </a>

        <nav className="hidden md:flex items-center gap-1 flex-1 min-w-0 justify-center overflow-x-auto scrollbar-none">
          {navLinks.map((item) => (
            <a
              key={item.id}
              href={isHome ? `#${item.id}` : `/#${item.id}`}
              className="no-underline text-muted text-[0.82rem] py-2 px-2.5 rounded-full transition-all whitespace-nowrap hover:text-text hover:bg-[rgba(255,193,132,0.14)] light:hover:text-black light:hover:bg-[rgba(246,193,170,0.2)]"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-1 shrink-0">
          <a
            className="no-underline text-muted text-[0.82rem] py-2 px-2.5 rounded-full transition-all whitespace-nowrap hover:text-text hover:bg-[rgba(255,193,132,0.14)] light:hover:text-black light:hover:bg-[rgba(246,193,170,0.2)]"
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="no-underline text-muted text-[0.82rem] py-2 px-2.5 rounded-full transition-all whitespace-nowrap hover:text-text hover:bg-[rgba(255,193,132,0.14)] light:hover:text-black light:hover:bg-[rgba(246,193,170,0.2)]"
            href={linkedinUrl}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="hidden sm:block no-underline text-muted text-[0.82rem] py-2 px-2.5 rounded-full transition-all whitespace-nowrap hover:text-text hover:bg-[rgba(255,193,132,0.14)] light:hover:text-black light:hover:bg-[rgba(246,193,170,0.2)]"
            href={resumePath}
            download
          >
            Resume
          </a>
          <button
            type="button"
            className="border border-line rounded-full bg-[rgba(255,255,255,0.03)] text-muted text-[0.78rem] p-2 px-3 cursor-pointer transition-all hover:text-text hover:border-[rgba(255,193,132,0.42)] hover:bg-[rgba(255,193,132,0.14)] light:hover:border-[rgba(170,213,246,0.56)] light:hover:bg-[rgba(170,213,246,0.2)]"
            onClick={onThemeToggle}
            aria-label="Toggle light or dark theme"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
