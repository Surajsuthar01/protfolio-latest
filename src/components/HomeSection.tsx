import { useEffect, useState, memo } from "react";
import ServerAnimation from "./ServerAnimation";

type HomeSectionProps = {
  roles: string[];
  resumePath: string;

  heroImagePath: string;
};

const HomeSection = memo(function HomeSection({ roles, resumePath, heroImagePath }: HomeSectionProps) {
  // Typewriter State
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter Effect
  useEffect(() => {
    const handleType = () => {
      const currentRole = roles[currentRoleIndex];

      if (!isDeleting && displayText === currentRole) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setCurrentRoleIndex((prev) => (prev + 1) % roles.length);
      } else {
        const nextText = isDeleting
          ? currentRole.substring(0, displayText.length - 1)
          : currentRole.substring(0, displayText.length + 1);
        setDisplayText(nextText);
      }
    };

    const timer = setTimeout(handleType, isDeleting ? 50 : 100);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, currentRoleIndex, roles]);




  return (
    <section id="home" className="relative overflow-hidden pt-[8.8rem] pb-24 lg:pb-32">
      {/* Hero Background Effects */}
      <div className="absolute -inset-[8%] h-[72%] z-[1] pointer-events-none blur-2xl
        bg-[radial-gradient(16rem_10rem_at_18%_18%,rgba(255,181,97,0.34),transparent_70%),radial-gradient(18rem_12rem_at_42%_14%,rgba(255,208,146,0.3),transparent_72%),radial-gradient(20rem_12rem_at_78%_18%,rgba(255,194,121,0.25),transparent_72%)]
        light:bg-[radial-gradient(16rem_10rem_at_18%_18%,rgba(255,200,150,0.25),transparent_70%),radial-gradient(18rem_12rem_at_42%_14%,rgba(255,180,130,0.22),transparent_72%),radial-gradient(20rem_12rem_at_78%_18%,rgba(255,160,100,0.18),transparent_72%)]"
      />
      <div className="absolute inset-0 pointer-events-none z-[1] bg-gradient-to-b from-[rgba(16,11,8,0.24)] via-[rgba(16,11,8,0.05)] to-transparent
        light:from-[rgba(255,245,233,0.4)] light:via-[rgba(255,245,233,0.06)] light:to-transparent"
      />

      <div className="w-[min(1400px,88vw)] mx-auto relative z-[2] grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] gap-6 items-center">
        <div className="flex flex-col gap-1 items-start order-2 lg:order-1">

          <h1 className="flex flex-col gap-1 my-4 font-display text-[clamp(2rem,4vw,3.3rem)] leading-[1.14]">
            <span className="text-[0.6em] font-normal mb-2 block text-text">Hello, I'm</span>
            <span className="block w-fit text-[1.45em] mb-6 text-transparent bg-clip-text bg-[linear-gradient(90deg,#ff8a00,#ffbd7f,#ffebcd,#ff8a00)] bg-[length:300%_auto] animate-gradient-xy light:bg-[linear-gradient(90deg,#ff4d4d,#f9cb28,#ff4d4d)]">
              Suraj Suthar
            </span>
            <span className="text-[0.8em] mt-2 min-h-[1.4em] block text-cyan">
              {displayText}
              <span className="inline-block w-[2px] h-[1em] bg-cyan ml-[2px] align-middle animate-blink"></span>
            </span>
          </h1>

          <p className="m-0 max-w-[63ch] text-muted text-[1.02rem]">
            Building cloud-ready applications, automation pipelines, and reliable deployment systems
            with a practical engineering mindset.
          </p>

          <div className="mt-6 flex gap-3 flex-wrap">
            <a
              className="no-underline rounded-full font-bold py-3 px-4 border transition-all duration-700 ease-out hover:-translate-y-0.5 text-text border-line bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,193,132,0.1)] hover:border-[rgba(255,193,132,0.4)]
              light:hover:bg-[rgba(255,220,180,0.18)] light:hover:border-[rgba(255,200,150,0.52)]"
              href="#repos"
            >
              View GitHub Work
            </a>
            <a
              className="no-underline rounded-full font-bold py-3 px-4 border transition-all duration-700 ease-out hover:-translate-y-0.5 text-text border-line bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,193,132,0.1)] hover:border-[rgba(255,193,132,0.4)]
              light:hover:bg-[rgba(255,220,180,0.18)] light:hover:border-[rgba(255,200,150,0.52)]"
              href="#contact"
            >
              Contact Me
            </a>
            <a
              className="no-underline rounded-full font-bold py-3 px-4 border transition-all duration-700 ease-out hover:-translate-y-0.5 text-text border-line bg-[rgba(255,255,255,0.02)] hover:bg-[rgba(255,193,132,0.1)] hover:border-[rgba(255,193,132,0.4)]
               light:hover:bg-[rgba(255,220,180,0.18)] light:hover:border-[rgba(255,200,150,0.52)]"
              href={resumePath}
              download
            >
              Download Resume
            </a>
          </div>



          <div className="mt-12 p-6 border border-line rounded-2xl bg-[rgba(255,255,255,0.03)] backdrop-blur-sm w-full max-w-[63ch] flex flex-col gap-4 animate-fade-in-up">
            <div className="flex items-center justify-between w-full">
              <span className="text-sm font-bold text-muted uppercase tracking-wider">Infrastructure Status</span>
              <span className="text-xs text-muted flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-mint opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-mint"></span>
                </span>
                Operational
              </span>
            </div>

            <div className="flex items-center justify-between gap-0.5 overflow-hidden w-full px-1">
              {[0, 1, 2, 3, 4].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2 opacity-80 hover:opacity-100 transition-opacity">
                  <ServerAnimation width={100} height={65} className="text-cyan drop-shadow-[0_0_5px_rgba(20,255,236,0.3)]" index={i} />
                  <div className="w-1.5 h-1.5 rounded-full bg-mint shadow-[0_0_8px_var(--mint)] animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="flex justify-center relative z-[2] order-1 lg:order-2 mb-8 lg:mb-0 lg:mt-0">
          <div className="relative w-[min(500px,95vw)] group">
            <div
              className="absolute inset-[-6%] rounded-full bg-[linear-gradient(160deg,rgba(255,205,153,0.38),rgba(255,174,100,0.16)),url('/profile-suraj2.png')] bg-cover bg-center blur-2xl saturate-110 opacity-55 scale-[1.03] pointer-events-none z-0 transition-[transform,box-shadow,border-color,opacity] duration-500 ease-out
              light:opacity-15 light:blur-3xl light:saturate-100 group-hover:opacity-75 group-hover:blur-3xl group-hover:saturate-[1.3] light:group-hover:opacity-70 light:group-hover:blur-[45px] light:group-hover:saturate-[1.4]"
              aria-hidden="true"
            />
            <div className="w-full aspect-square rounded-full p-[0.34rem] bg-[linear-gradient(160deg,rgba(255,215,167,0.9),rgba(255,176,96,0.65))] shadow-[0_24px_36px_rgba(0,0,0,0.34)] transition-all duration-700 ease-out relative z-[1] group-hover:scale-[1.01] group-hover:shadow-[0_28px_46px_rgba(0,0,0,0.42)]">
              <div className="relative h-full rounded-full overflow-hidden after:content-[''] after:absolute after:inset-0 after:pointer-events-none after:bg-[radial-gradient(90%_70%_at_50%_0%,transparent_52%,rgba(0,0,0,0.12)_100%)]">
                <img
                  src={heroImagePath}
                  alt="Suraj Suthar"
                  className="w-full h-full rounded-full object-cover object-center block border-2 border-[rgba(255,233,214,0.54)] contrast-[1.02] saturate-[1.02] light:border-[rgba(255,230,200,0.9)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
});

export default HomeSection;
