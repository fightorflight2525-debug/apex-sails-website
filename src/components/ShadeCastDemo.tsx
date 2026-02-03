"use client";

interface ShadeCastDemoProps {
  className?: string;
}

export default function ShadeCastDemo({ className = "" }: ShadeCastDemoProps) {
  return (
    <div
      className={`relative rounded-2xl border border-sand/40 bg-cream shadow-lg shadow-charcoal/5 overflow-hidden ${className}`}
    >
      {/* Inline keyframes */}
      <style>{`
        @keyframes sun-traverse {
          0%   { cx: 60;  cy: 230; }
          10%  { cx: 100; cy: 140; }
          25%  { cx: 170; cy: 70;  }
          50%  { cx: 300; cy: 30;  }
          75%  { cx: 430; cy: 70;  }
          90%  { cx: 500; cy: 140; }
          100% { cx: 540; cy: 230; }
        }

        @keyframes sun-glow {
          0%, 100% { r: 14; opacity: 0.6; }
          50%      { r: 20; opacity: 0.95; }
        }

        @keyframes sun-halo {
          0%, 100% { r: 22; opacity: 0.15; }
          50%      { r: 30; opacity: 0.35; }
        }

        @keyframes shadow-morph {
          0% {
            d: path("M 200,195 L 250,175 L 310,195 L 270,210 Z");
            opacity: 0.12;
            filter: blur(6px);
          }
          8% {
            d: path("M 175,200 L 225,185 L 295,200 L 255,215 Z");
            opacity: 0.18;
            filter: blur(5px);
          }
          20% {
            d: path("M 215,215 L 260,200 L 325,215 L 285,235 Z");
            opacity: 0.28;
            filter: blur(3px);
          }
          35% {
            d: path("M 240,230 L 275,215 L 335,225 L 300,245 Z");
            opacity: 0.38;
            filter: blur(2px);
          }
          50% {
            d: path("M 260,238 L 290,225 L 340,235 L 310,250 Z");
            opacity: 0.45;
            filter: blur(1.5px);
          }
          65% {
            d: path("M 280,230 L 320,215 L 370,225 L 340,245 Z");
            opacity: 0.38;
            filter: blur(2px);
          }
          80% {
            d: path("M 310,215 L 360,200 L 410,215 L 370,235 Z");
            opacity: 0.28;
            filter: blur(3px);
          }
          92% {
            d: path("M 350,200 L 395,185 L 440,200 L 405,215 Z");
            opacity: 0.18;
            filter: blur(5px);
          }
          100% {
            d: path("M 370,195 L 410,175 L 460,195 L 430,210 Z");
            opacity: 0.12;
            filter: blur(6px);
          }
        }

        @keyframes shadow-secondary {
          0% {
            d: path("M 190,205 L 245,180 L 305,200 L 265,220 Z");
            opacity: 0.06;
          }
          50% {
            d: path("M 255,242 L 288,228 L 345,240 L 315,258 Z");
            opacity: 0.2;
          }
          100% {
            d: path("M 360,205 L 405,180 L 455,200 L 425,220 Z");
            opacity: 0.06;
          }
        }

        @keyframes time-slide {
          0%   { left: 4%;  }
          50%  { left: 48%; }
          100% { left: 92%; }
        }

        @keyframes time-7am  { 0%, 14% { opacity: 1; } 15%, 100% { opacity: 0; } }
        @keyframes time-8am  { 14% { opacity: 0; } 15%, 24% { opacity: 1; } 25%, 100% { opacity: 0; } }
        @keyframes time-9am  { 24% { opacity: 0; } 25%, 34% { opacity: 1; } 35%, 100% { opacity: 0; } }
        @keyframes time-10am { 34% { opacity: 0; } 35%, 44% { opacity: 1; } 45%, 100% { opacity: 0; } }
        @keyframes time-11am { 44% { opacity: 0; } 45%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
        @keyframes time-12pm { 49% { opacity: 0; } 50%, 54% { opacity: 1; } 55%, 100% { opacity: 0; } }
        @keyframes time-1pm  { 54% { opacity: 0; } 55%, 64% { opacity: 1; } 65%, 100% { opacity: 0; } }
        @keyframes time-2pm  { 64% { opacity: 0; } 65%, 74% { opacity: 1; } 75%, 100% { opacity: 0; } }
        @keyframes time-3pm  { 74% { opacity: 0; } 75%, 84% { opacity: 1; } 85%, 100% { opacity: 0; } }
        @keyframes time-4pm  { 84% { opacity: 0; } 85%, 89% { opacity: 1; } 90%, 100% { opacity: 0; } }
        @keyframes time-5pm  { 89% { opacity: 0; } 90%, 96% { opacity: 1; } 97%, 100% { opacity: 0; } }
        @keyframes time-6pm  { 96% { opacity: 0; } 97%, 100% { opacity: 1; } }

        @keyframes sky-color {
          0%, 100% { stop-color: #F5C68A; }
          15%      { stop-color: #FAD89E; }
          50%      { stop-color: #87CEEB; }
          85%      { stop-color: #FAD89E; }
        }

        @keyframes sky-horizon {
          0%, 100% { stop-color: #F0A050; }
          15%      { stop-color: #F5C68A; }
          50%      { stop-color: #B0D8F0; }
          85%      { stop-color: #F5C68A; }
        }

        @keyframes sun-color {
          0%, 100% { stop-color: #FF8C42; }
          50%      { stop-color: #FFD700; }
        }

        @keyframes pulse-ring {
          0%, 100% { r: 16; opacity: 0; }
          50%      { r: 28; opacity: 0.15; }
        }

        @keyframes furniture-shadow {
          0%   { transform: translate(-8px, 3px) scaleX(1.6); opacity: 0.08; }
          50%  { transform: translate(0px, 2px) scaleX(1); opacity: 0.15; }
          100% { transform: translate(8px, 3px) scaleX(1.6); opacity: 0.08; }
        }

        @keyframes dot-pulse {
          0%, 100% { opacity: 0.4; r: 2; }
          50%      { opacity: 1; r: 3; }
        }

        .shade-sun {
          animation: sun-traverse 12s ease-in-out infinite;
        }
        .shade-sun-glow {
          animation: sun-traverse 12s ease-in-out infinite, sun-glow 12s ease-in-out infinite;
        }
        .shade-sun-halo {
          animation: sun-traverse 12s ease-in-out infinite, sun-halo 12s ease-in-out infinite;
        }
        .shade-sun-pulse {
          animation: sun-traverse 12s ease-in-out infinite, pulse-ring 12s ease-in-out infinite;
        }
        .shade-shadow-primary {
          animation: shadow-morph 12s ease-in-out infinite;
        }
        .shade-shadow-secondary {
          animation: shadow-secondary 12s ease-in-out infinite;
        }
        .shade-time-marker {
          animation: time-slide 12s ease-in-out infinite;
        }

        .shade-time-7am  { animation: time-7am  12s ease-in-out infinite; }
        .shade-time-8am  { animation: time-8am  12s ease-in-out infinite; }
        .shade-time-9am  { animation: time-9am  12s ease-in-out infinite; }
        .shade-time-10am { animation: time-10am 12s ease-in-out infinite; }
        .shade-time-11am { animation: time-11am 12s ease-in-out infinite; }
        .shade-time-12pm { animation: time-12pm 12s ease-in-out infinite; }
        .shade-time-1pm  { animation: time-1pm  12s ease-in-out infinite; }
        .shade-time-2pm  { animation: time-2pm  12s ease-in-out infinite; }
        .shade-time-3pm  { animation: time-3pm  12s ease-in-out infinite; }
        .shade-time-4pm  { animation: time-4pm  12s ease-in-out infinite; }
        .shade-time-5pm  { animation: time-5pm  12s ease-in-out infinite; }
        .shade-time-6pm  { animation: time-6pm  12s ease-in-out infinite; }

        .shade-sky-upper { animation: sky-color 12s ease-in-out infinite; }
        .shade-sky-lower { animation: sky-horizon 12s ease-in-out infinite; }
        .shade-sun-fill  { animation: sun-color 12s ease-in-out infinite; }
        .shade-furniture-shadow { animation: furniture-shadow 12s ease-in-out infinite; }
        .shade-dot-pulse { animation: dot-pulse 3s ease-in-out infinite; }
      `}</style>

      <svg
        viewBox="0 0 600 360"
        className="w-full h-auto"
        aria-label="ShadeCast shade sail shadow simulation showing shadow movement throughout the day"
        role="img"
      >
        <defs>
          {/* Sky gradient */}
          <linearGradient id="skyGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" className="shade-sky-upper" stopColor="#87CEEB" />
            <stop offset="100%" className="shade-sky-lower" stopColor="#B0D8F0" />
          </linearGradient>

          {/* Ground gradient - warm concrete */}
          <linearGradient id="groundGrad" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#E8E0D0" />
            <stop offset="100%" stopColor="#DDD4C2" />
          </linearGradient>

          {/* Sail gradient - copper tones */}
          <linearGradient id="sailGrad" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#C45C26" />
            <stop offset="50%" stopColor="#D4732E" />
            <stop offset="100%" stopColor="#C45C26" />
          </linearGradient>

          {/* Sun gradient */}
          <radialGradient id="sunGrad" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E7" />
            <stop offset="60%" className="shade-sun-fill" stopColor="#FFD700" />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.6" />
          </radialGradient>

          {/* Patio tile pattern */}
          <pattern id="tilePattern" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
            <rect width="30" height="30" fill="none" />
            <line x1="0" y1="0" x2="30" y2="0" stroke="#CCC0AC" strokeWidth="0.5" strokeOpacity="0.5" />
            <line x1="0" y1="0" x2="0" y2="30" stroke="#CCC0AC" strokeWidth="0.5" strokeOpacity="0.5" />
          </pattern>

          {/* Subtle noise texture */}
          <filter id="groundTexture">
            <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="3" result="noise" />
            <feColorMatrix type="saturate" values="0" in="noise" result="gray" />
            <feBlend in="SourceGraphic" in2="gray" mode="soft-light" />
          </filter>

          {/* Post shadow filter */}
          <filter id="postShadow">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#2D2D2D" floodOpacity="0.25" />
          </filter>

          {/* Sail edge glow */}
          <filter id="sailGlow">
            <feDropShadow dx="0" dy="1" stdDeviation="2" floodColor="#C45C26" floodOpacity="0.3" />
          </filter>

          {/* Sun arc path */}
          <path id="sunArc" d="M 60,230 Q 160,20 300,10 Q 440,20 540,230" fill="none" />
        </defs>

        {/* ===== SKY AREA ===== */}
        <rect x="0" y="0" width="600" height="200" fill="url(#skyGrad)" />

        {/* Sun arc trail (subtle dotted path) */}
        <path
          d="M 60,230 Q 160,-10 300,10 Q 440,-10 540,230"
          fill="none"
          stroke="#D4A574"
          strokeWidth="1"
          strokeDasharray="4 6"
          opacity="0.3"
        />

        {/* ===== SUN ===== */}
        {/* Outer pulse ring */}
        <circle
          className="shade-sun-pulse"
          cx="300" cy="30"
          r="24"
          fill="#FFD700"
          opacity="0"
        />
        {/* Halo */}
        <circle
          className="shade-sun-halo"
          cx="300" cy="30"
          r="26"
          fill="none"
          stroke="#FFD700"
          strokeWidth="1.5"
          opacity="0.2"
        />
        {/* Glow */}
        <circle
          className="shade-sun-glow"
          cx="300" cy="30"
          r="18"
          fill="url(#sunGrad)"
          opacity="0.8"
        />
        {/* Core */}
        <circle
          className="shade-sun"
          cx="300" cy="30"
          r="10"
          fill="url(#sunGrad)"
        />

        {/* ===== GROUND PLANE ===== */}
        <rect x="0" y="160" width="600" height="200" fill="url(#groundGrad)" />
        <rect x="0" y="160" width="600" height="200" fill="url(#tilePattern)" />

        {/* Patio border / edge lines */}
        <rect
          x="120" y="170" width="360" height="150"
          fill="none"
          stroke="#C9B99A"
          strokeWidth="1.5"
          strokeDasharray="none"
          rx="2"
          opacity="0.6"
        />

        {/* Inner patio fill (slightly lighter) */}
        <rect
          x="122" y="172" width="356" height="146"
          fill="#EDE5D5"
          opacity="0.4"
          rx="1"
        />

        {/* ===== SHADOW (behind everything on ground) ===== */}
        {/* Secondary shadow (softer, larger) */}
        <path
          className="shade-shadow-secondary"
          d="M 255,242 L 288,228 L 345,240 L 315,258 Z"
          fill="#2D2D2D"
          opacity="0.15"
          style={{ filter: "blur(8px)" }}
        />
        {/* Primary shadow */}
        <path
          className="shade-shadow-primary"
          d="M 260,238 L 290,225 L 340,235 L 310,250 Z"
          fill="#2D2D2D"
          opacity="0.35"
        />

        {/* ===== FURNITURE (tables/chairs) ===== */}
        {/* Table 1 */}
        <g>
          <ellipse
            className="shade-furniture-shadow"
            cx="290" cy="252" rx="12" ry="4"
            fill="#2D2D2D" opacity="0.1"
          />
          <rect x="284" y="238" width="12" height="12" rx="1" fill="#8B7355" opacity="0.7" />
          {/* Chairs */}
          <rect x="276" y="242" width="6" height="6" rx="1" fill="#8B7355" opacity="0.5" />
          <rect x="298" y="242" width="6" height="6" rx="1" fill="#8B7355" opacity="0.5" />
        </g>

        {/* Table 2 */}
        <g>
          <ellipse
            className="shade-furniture-shadow"
            cx="345" cy="275" rx="10" ry="3"
            fill="#2D2D2D" opacity="0.1"
          />
          <circle cx="345" cy="268" r="6" fill="#8B7355" opacity="0.6" />
          {/* Chairs */}
          <rect x="334" y="272" width="5" height="5" rx="1" fill="#8B7355" opacity="0.45" />
          <rect x="350" y="272" width="5" height="5" rx="1" fill="#8B7355" opacity="0.45" />
        </g>

        {/* ===== LANDSCAPING ACCENTS ===== */}
        {/* Planter boxes */}
        <rect x="125" y="290" width="20" height="20" rx="2" fill="#6B8F5E" opacity="0.4" />
        <rect x="125" y="290" width="20" height="20" rx="2" fill="none" stroke="#5A7D4E" strokeWidth="0.5" opacity="0.5" />
        <rect x="455" y="290" width="20" height="20" rx="2" fill="#6B8F5E" opacity="0.4" />
        <rect x="455" y="290" width="20" height="20" rx="2" fill="none" stroke="#5A7D4E" strokeWidth="0.5" opacity="0.5" />
        {/* Small hedge row */}
        <rect x="130" y="175" width="340" height="4" rx="2" fill="#7FA06E" opacity="0.25" />

        {/* ===== SHADE SAIL STRUCTURE (HyPar) ===== */}
        {/* Post shadows on ground */}
        <ellipse cx="232" cy="215" rx="3" ry="1.5" fill="#2D2D2D" opacity="0.2" />
        <ellipse cx="278" cy="200" rx="3" ry="1.5" fill="#2D2D2D" opacity="0.2" />
        <ellipse cx="338" cy="200" rx="3" ry="1.5" fill="#2D2D2D" opacity="0.2" />
        <ellipse cx="288" cy="220" rx="3" ry="1.5" fill="#2D2D2D" opacity="0.2" />

        {/* Posts (vertical lines from ground to sail corners) */}
        <line x1="230" y1="215" x2="230" y2="185" stroke="#555" strokeWidth="2.5" strokeLinecap="round" filter="url(#postShadow)" />
        <line x1="276" y1="200" x2="276" y2="168" stroke="#555" strokeWidth="2.5" strokeLinecap="round" filter="url(#postShadow)" />
        <line x1="336" y1="200" x2="336" y2="172" stroke="#555" strokeWidth="2.5" strokeLinecap="round" filter="url(#postShadow)" />
        <line x1="286" y1="220" x2="286" y2="192" stroke="#555" strokeWidth="2.5" strokeLinecap="round" filter="url(#postShadow)" />

        {/* Post caps */}
        <circle cx="230" cy="185" r="2.5" fill="#C45C26" />
        <circle cx="276" cy="168" r="2.5" fill="#C45C26" />
        <circle cx="336" cy="172" r="2.5" fill="#C45C26" />
        <circle cx="286" cy="192" r="2.5" fill="#C45C26" />

        {/* Tensioned cables (catenary edges) */}
        <path
          d="M 230,185 Q 253,174 276,168"
          fill="none" stroke="#888" strokeWidth="0.8" opacity="0.6"
        />
        <path
          d="M 276,168 Q 306,166 336,172"
          fill="none" stroke="#888" strokeWidth="0.8" opacity="0.6"
        />
        <path
          d="M 336,172 Q 311,184 286,192"
          fill="none" stroke="#888" strokeWidth="0.8" opacity="0.6"
        />
        <path
          d="M 286,192 Q 258,190 230,185"
          fill="none" stroke="#888" strokeWidth="0.8" opacity="0.6"
        />

        {/* Sail membrane (HyPar curved quad) */}
        <path
          d="M 230,185 Q 253,170 276,168 Q 306,163 336,172 Q 311,180 286,192 Q 258,190 230,185 Z"
          fill="url(#sailGrad)"
          opacity="0.88"
          filter="url(#sailGlow)"
        />
        {/* Sail surface texture lines */}
        <path
          d="M 245,182 Q 280,170 320,175"
          fill="none" stroke="#A34D20" strokeWidth="0.4" opacity="0.4"
        />
        <path
          d="M 240,186 Q 280,175 330,178"
          fill="none" stroke="#A34D20" strokeWidth="0.4" opacity="0.3"
        />
        <path
          d="M 260,180 L 290,185"
          fill="none" stroke="#fff" strokeWidth="0.3" opacity="0.15"
        />

        {/* ===== COMPASS INDICATOR ===== */}
        <g transform="translate(540, 190)">
          <circle cx="0" cy="0" r="22" fill="#F5F0E6" stroke="#D4A574" strokeWidth="1" opacity="0.9" />
          <circle cx="0" cy="0" r="18" fill="none" stroke="#D4A574" strokeWidth="0.5" opacity="0.5" />
          {/* Compass cross */}
          <line x1="0" y1="-15" x2="0" y2="15" stroke="#2D2D2D" strokeWidth="0.5" opacity="0.3" />
          <line x1="-15" y1="0" x2="15" y2="0" stroke="#2D2D2D" strokeWidth="0.5" opacity="0.3" />
          {/* North arrow */}
          <polygon points="0,-14 -3,-6 0,-8 3,-6" fill="#C45C26" opacity="0.9" />
          {/* South arrow */}
          <polygon points="0,14 -3,6 0,8 3,6" fill="#2D2D2D" opacity="0.4" />
          {/* Labels */}
          <text x="0" y="-16" textAnchor="middle" fontSize="7" fontWeight="700" fill="#C45C26" fontFamily="Inter, sans-serif">N</text>
          <text x="0" y="22" textAnchor="middle" fontSize="6" fill="#2D2D2D" opacity="0.5" fontFamily="Inter, sans-serif">S</text>
          <text x="19" y="3" textAnchor="middle" fontSize="6" fill="#2D2D2D" opacity="0.5" fontFamily="Inter, sans-serif">E</text>
          <text x="-19" y="3" textAnchor="middle" fontSize="6" fill="#2D2D2D" opacity="0.5" fontFamily="Inter, sans-serif">W</text>
        </g>

        {/* ===== BUILDING / STRUCTURE WALL ===== */}
        <rect x="100" y="155" width="400" height="12" rx="1" fill="#C9B99A" opacity="0.5" />
        <rect x="100" y="155" width="400" height="12" rx="1" fill="none" stroke="#B8A888" strokeWidth="0.5" opacity="0.4" />
        {/* Door / opening */}
        <rect x="180" y="155" width="30" height="12" fill="#A89070" opacity="0.4" />
        <rect x="390" y="155" width="30" height="12" fill="#A89070" opacity="0.4" />

        {/* ===== LABELS ===== */}
        {/* "Patio" label */}
        <text x="300" y="305" textAnchor="middle" fontSize="9" fill="#2D2D2D" opacity="0.25" fontFamily="Inter, sans-serif" letterSpacing="3">
          PATIO AREA
        </text>

        {/* E / W horizon labels */}
        <text x="40" y="240" textAnchor="middle" fontSize="8" fill="#D4A574" opacity="0.6" fontFamily="Inter, sans-serif" fontWeight="600">
          EAST
        </text>
        <text x="560" y="240" textAnchor="middle" fontSize="8" fill="#D4A574" opacity="0.6" fontFamily="Inter, sans-serif" fontWeight="600">
          WEST
        </text>

        {/* ===== TIME DISPLAY ===== */}
        <g>
          {/* Timeline track */}
          <rect x="80" y="338" width="440" height="3" rx="1.5" fill="#D4A574" opacity="0.2" />

          {/* Animated dot on track */}
          <circle
            className="shade-dot-pulse"
            style={{
              animation: "dot-pulse 3s ease-in-out infinite",
              position: "relative",
            }}
            cx="300" cy="339.5" r="2"
            fill="#C45C26"
          >
            <animate attributeName="cx" dur="12s" repeatCount="indefinite"
              values="80;120;180;260;300;340;400;460;520"
              keyTimes="0;0.1;0.2;0.4;0.5;0.6;0.8;0.9;1"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
            />
          </circle>

          {/* Time tick marks */}
          {[
            { x: 80, label: "7AM" },
            { x: 160, label: "9" },
            { x: 260, label: "11" },
            { x: 300, label: "12PM" },
            { x: 340, label: "1" },
            { x: 440, label: "4" },
            { x: 520, label: "6PM" },
          ].map((t) => (
            <g key={t.label}>
              <line x1={t.x} y1="335" x2={t.x} y2="341" stroke="#D4A574" strokeWidth="1" opacity="0.4" />
              <text x={t.x} y="351" textAnchor="middle" fontSize="7" fill="#2D2D2D" opacity="0.4" fontFamily="Inter, sans-serif">
                {t.label}
              </text>
            </g>
          ))}

          {/* Animated time readout */}
          <g>
            <rect x="245" y="322" width="56" height="16" rx="8" fill="#2D2D2D" opacity="0.85" />

            {/* Time labels stacked, each with show/hide animation */}
            {[
              { cls: "shade-time-7am", text: "7:00 AM" },
              { cls: "shade-time-8am", text: "8:00 AM" },
              { cls: "shade-time-9am", text: "9:00 AM" },
              { cls: "shade-time-10am", text: "10:00 AM" },
              { cls: "shade-time-11am", text: "11:00 AM" },
              { cls: "shade-time-12pm", text: "12:00 PM" },
              { cls: "shade-time-1pm", text: "1:00 PM" },
              { cls: "shade-time-2pm", text: "2:00 PM" },
              { cls: "shade-time-3pm", text: "3:00 PM" },
              { cls: "shade-time-4pm", text: "4:00 PM" },
              { cls: "shade-time-5pm", text: "5:00 PM" },
              { cls: "shade-time-6pm", text: "6:00 PM" },
            ].map((t) => (
              <text
                key={t.cls}
                className={t.cls}
                x="273" y="333"
                textAnchor="middle"
                fontSize="8"
                fontWeight="600"
                fill="#F5F0E6"
                fontFamily="Inter, sans-serif"
                opacity="0"
              >
                {t.text}
              </text>
            ))}

            {/* Pill position animation */}
            <animateTransform
              attributeName="transform"
              type="translate"
              dur="12s"
              repeatCount="indefinite"
              values="-195,0; -140,0; -60,0; 0,0; 60,0; 140,0; 195,0"
              keyTimes="0;0.15;0.35;0.5;0.65;0.85;1"
              calcMode="spline"
              keySplines="0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1;0.4 0 0.6 1"
            />
          </g>
        </g>

        {/* ===== TITLE / BADGE ===== */}
        <g transform="translate(30, 20)">
          <rect x="0" y="0" width="130" height="24" rx="12" fill="#2D2D2D" opacity="0.8" />
          <circle cx="14" cy="12" r="4" fill="#C45C26" />
          <circle cx="14" cy="12" r="6" fill="none" stroke="#C45C26" strokeWidth="0.8" opacity="0.5" />
          <text x="26" y="16" fontSize="9" fontWeight="700" fill="#F5F0E6" fontFamily="Inter, sans-serif" letterSpacing="0.5">
            ShadeCast
          </text>
          <text x="86" y="16" fontSize="7" fill="#D4A574" fontFamily="Inter, sans-serif">
            LIVE
          </text>
          {/* Blinking dot */}
          <circle cx="108" cy="12" r="2.5" fill="#4ADE80" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* Disclaimer label */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-sand/20 bg-cream-dark/30">
        <p className="text-[10px] sm:text-xs text-charcoal/40 text-center tracking-wide font-body">
          ShadeCast&#8482; Simulation &mdash; Actual results use precise GPS coordinates and terrain data
        </p>
      </div>
    </div>
  );
}
