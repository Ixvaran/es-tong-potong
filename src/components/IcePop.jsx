import { useId } from "react";

const flavorConfig = {
    stroberi: {
        body: "#F43F7A", light: "#FF7BAA", dark: "#C72E5F",
        bits: [
            { type: "ellipse", cx: 42, cy: 130, rx: 4, ry: 6, fill: "#FFE0E8", opacity: 0.7 },
            { type: "ellipse", cx: 78, cy: 165, rx: 4, ry: 6, fill: "#FFE0E8", opacity: 0.7 },
            { type: "ellipse", cx: 58, cy: 200, rx: 4, ry: 6, fill: "#FFE0E8", opacity: 0.7 },
        ],
    },
    mangga: {
        body: "#FFB347", light: "#FFD083", dark: "#E08A1F",
        bits: [
            { type: "ellipse", cx: 48, cy: 140, rx: 5, ry: 3, fill: "#FFE5BD", opacity: 0.7 },
            { type: "ellipse", cx: 75, cy: 180, rx: 5, ry: 3, fill: "#FFE5BD", opacity: 0.7 },
        ],
    },
    melon: {
        body: "#9EDB76", light: "#C5E8A8", dark: "#6BAC4F",
        bits: [
            { type: "circle", cx: 44, cy: 135, r: 3, fill: "#3A2725", opacity: 0.35 },
            { type: "circle", cx: 72, cy: 170, r: 3, fill: "#3A2725", opacity: 0.35 },
            { type: "circle", cx: 55, cy: 200, r: 3, fill: "#3A2725", opacity: 0.35 },
        ],
    },
    cookies: {
        body: "#D4A574", light: "#E6C9A8", dark: "#A37A4D",
        bits: [
            { type: "circle", cx: 40, cy: 135, r: 5, fill: "#54261D", opacity: 0.85 },
            { type: "circle", cx: 75, cy: 150, r: 4, fill: "#54261D", opacity: 0.85 },
            { type: "circle", cx: 55, cy: 180, r: 6, fill: "#54261D", opacity: 0.85 },
            { type: "circle", cx: 80, cy: 205, r: 4, fill: "#54261D", opacity: 0.85 },
            { type: "circle", cx: 35, cy: 200, r: 3, fill: "#54261D", opacity: 0.85 },
        ],
    },
};

export default function IcePop({ flavor = "stroberi", className = "" }) {
    const c = flavorConfig[flavor] || flavorConfig.stroberi;
    const rawId = useId();
    const id = `ice-${flavor}-${rawId.replace(/[^a-zA-Z0-9]/g, "")}`;

    return (
        <svg
            viewBox="0 0 120 280"
            className={className}
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id={`${id}-body`} x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor={c.light} />
                    <stop offset="55%" stopColor={c.body} />
                    <stop offset="100%" stopColor={c.dark} />
                </linearGradient>
                <linearGradient id={`${id}-choco`} x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#6B3528" />
                    <stop offset="100%" stopColor="#3A1F18" />
                </linearGradient>
                <clipPath id={`${id}-clip`}>
                    <rect x="20" y="44" width="80" height="186" rx="22" />
                </clipPath>
            </defs>

            {/* Wooden stick */}
            <rect x="52" y="222" width="16" height="52" rx="3" fill="#E8C9A0" />
            <rect x="52" y="222" width="5" height="52" rx="2" fill="#D4B484" opacity="0.5" />

            {/* Ice cream body */}
            <rect
                x="20" y="44" width="80" height="186" rx="22"
                fill={`url(#${id}-body)`}
            />

            {/* Inside the body (clipped) */}
            <g clipPath={`url(#${id}-clip)`}>
                {/* Flavor bits */}
                {c.bits.map((b, i) =>
                    b.type === "circle" ? (
                        <circle key={i} cx={b.cx} cy={b.cy} r={b.r} fill={b.fill} opacity={b.opacity} />
                    ) : (
                        <ellipse key={i} cx={b.cx} cy={b.cy} rx={b.rx} ry={b.ry} fill={b.fill} opacity={b.opacity} />
                    )
                )}

                {/* Body shine */}
                <rect x="28" y="90" width="5" height="130" rx="2.5" fill="white" opacity="0.18" />

                {/* Chocolate coating with drips */}
                <path
                    d="M 20 44 L 100 44 L 100 90 
             Q 98 130, 96 90 
             Q 92 155, 88 90 
             Q 84 130, 80 90 
             Q 76 150, 72 90 
             Q 68 125, 64 90 
             Q 60 155, 56 90 
             Q 52 130, 48 90 
             Q 44 145, 40 90 
             Q 36 125, 32 90 
             Q 28 150, 24 90 
             Q 22 125, 20 90 Z"
                    fill={`url(#${id}-choco)`}
                />
                {/* Chocolate top sheen */}
                <rect x="20" y="44" width="80" height="3" fill="#8B4A38" opacity="0.6" />
            </g>
        </svg>
    );
}