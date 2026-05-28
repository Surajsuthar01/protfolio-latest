import { useEffect, useState, lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
// Lazy load the details page
const CertificateDetails = lazy(() => import("./pages/CertificateDetails"));
import {
  GITHUB_URL,
  LINKEDIN_URL,
  RESUME_PATH,
  navLinks,
} from "./data/portfolio";

function App() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("portfolio-theme", theme);
  }, [theme]);

  // Cursor Glow Animation
  useEffect(() => {
    let pointerX = window.innerWidth / 2;
    let pointerY = window.innerHeight / 2;
    let glowX = pointerX;
    let glowY = pointerY;
    let rafId = 0;

    const handlePointerMove = (event: PointerEvent) => {
      pointerX = event.clientX;
      pointerY = event.clientY;
    };

    const animate = () => {
      glowX += (pointerX - glowX) * 0.08;
      glowY += (pointerY - glowY) * 0.08;
      // Only update if moved enough (avoids constant repaints)
      const dx = Math.abs(pointerX - glowX);
      const dy = Math.abs(pointerY - glowY);
      if (dx > 0.5 || dy > 0.5) {
        document.documentElement.style.setProperty("--cursor-x", `${glowX}px`);
        document.documentElement.style.setProperty("--cursor-y", `${glowY}px`);
      }
      rafId = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove);
    rafId = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <BrowserRouter>
      <div className="relative min-h-screen bg-bg text-text overflow-hidden selection:bg-cyan selection:text-bg font-sans transition-colors duration-300">
        <div className="fixed top-[-100px] left-[-100px] w-[350px] h-[350px] rounded-full blur-[80px] opacity-[0.12] pointer-events-none z-0 bg-mint will-change-transform" />
        <div className="fixed bottom-[10%] right-[-100px] w-[350px] h-[350px] rounded-full blur-[80px] opacity-[0.12] pointer-events-none z-0 bg-[#64b5f6] will-change-transform" />

        {/* Cursor Glow - Implementation in index.css as it depends on CSS variables for position */}
        <div className="cursor-glow" aria-hidden="true" />

        <Navbar
          navLinks={navLinks}
          githubUrl={GITHUB_URL}
          linkedinUrl={LINKEDIN_URL}
          resumePath={RESUME_PATH}
          theme={theme}
          onThemeToggle={() => setTheme((prev) => (prev === "dark" ? "light" : "dark"))}
        />

        <Suspense fallback={<div className="flex items-center justify-center min-h-[50vh] text-cyan text-xl font-mono">Loading...</div>}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certifications/:id" element={<CertificateDetails />} />
          </Routes>
        </Suspense>

        <footer className="relative z-10 py-8 border-t border-line mt-20 text-[0.9rem] text-muted">
          <div className="w-[min(1400px,88vw)] mx-auto flex justify-between items-center">
            <p>Copyright 2026 Suraj Suthar</p>
            <a
              href="/"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }}
              className="hover:text-cyan transition-colors"
            >
              Back to top
            </a>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
