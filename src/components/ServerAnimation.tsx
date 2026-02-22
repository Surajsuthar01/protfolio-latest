
import { memo } from "react";

const ServerAnimation = memo(function ServerAnimation({ width = 48, height = 24, className = "", index = 0 }: { width?: number, height?: number, className?: string, index?: number }) {
    // Generate deterministic delays based on index
    const d1 = `${(index * 0.2) % 2}s`;
    const d2 = `${(index * 0.3 + 0.2) % 2}s`;
    const d3 = `${(index * 0.5 + 0.5) % 2}s`;
    const d4 = `${(index * 0.7 + 0.1) % 2}s`;
    const d5 = `${(index * 0.4 + 0.3) % 2}s`;

    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            width={width}
            height={height}
            viewBox="0 0 48 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={className}
        >
            <rect width="44" height="8" x="2" y="2" rx="2" ry="2" />
            <rect width="44" height="8" x="2" y="14" rx="2" ry="2" />
            <line x1="6" x2="6.01" y1="6" y2="6" />
            <line x1="6" x2="6.01" y1="18" y2="18" />

            {/* Blinking Lights - Top Row (3) */}
            <circle cx="14" cy="6" r="1.5" className="animate-pulse fill-green-400 stroke-none drop-shadow-[0_0_3px_rgba(74,222,128,0.9)]" style={{ animationDuration: '1.5s', animationDelay: d1 }} />
            <circle cx="24" cy="6" r="1.5" className="animate-pulse fill-green-400 stroke-none drop-shadow-[0_0_3px_rgba(74,222,128,0.9)]" style={{ animationDuration: '1s', animationDelay: d2 }} />
            <circle cx="34" cy="6" r="1.5" className="animate-pulse fill-green-400 stroke-none drop-shadow-[0_0_3px_rgba(74,222,128,0.9)]" style={{ animationDuration: '1.8s', animationDelay: d5 }} />

            {/* Blinking Lights - Bottom Row (2) */}
            <circle cx="19" cy="18" r="1.5" className="animate-pulse fill-green-400 stroke-none drop-shadow-[0_0_3px_rgba(74,222,128,0.9)]" style={{ animationDuration: '1.2s', animationDelay: d3 }} />
            <circle cx="29" cy="18" r="1.5" className="animate-pulse fill-orange-400 stroke-none drop-shadow-[0_0_3px_rgba(251,146,60,0.9)]" style={{ animationDuration: '2s', animationDelay: d4 }} />
        </svg>
    );
});

export default ServerAnimation;
