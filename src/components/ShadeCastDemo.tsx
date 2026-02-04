"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";

/* ================================================================== */
/*  CONSTANTS                                                          */
/* ================================================================== */

interface ShadeCastDemoProps {
  className?: string;
}

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

// Sun altitude factor by month (Phoenix AZ latitude)
// 0 = very low winter sun, 1 = high summer sun
const ALTITUDE: Record<number, number> = {
  0: 0.45, 1: 0.55, 2: 0.65, 3: 0.80, 4: 0.90, 5: 1.0,
  6: 0.98, 7: 0.92, 8: 0.80, 9: 0.65, 10: 0.52, 11: 0.42,
};

// Canvas
const W = 600;
const H = 350;
const GROUND_Y = 270; // ground level

// Building (left side, side-view)
const BLDG = { x: 40, y: 110, w: 90, h: GROUND_Y - 110 };

// Shade sail — attached to building on left, held by pole on right
const SAIL_LEFT_X = BLDG.x + BLDG.w;   // building wall edge
const SAIL_RIGHT_X = 420;               // out to pole
const SAIL_Y = 158;                     // sail height (above ground)
const SAIL_THICK = 6;                   // visual thickness

// Steel pole on right side
const POLE_X = SAIL_RIGHT_X;

// Patio tables (side-view: table tops as ellipses at ground level)
const TABLES = [
  { x: 210, legH: 32, tw: 40, th: 8 },
  { x: 320, legH: 32, tw: 44, th: 8 },
];

// Sun arc path range
const SUN_LEFT = 60;
const SUN_RIGHT = W - 60;

/* ================================================================== */
/*  HELPERS                                                            */
/* ================================================================== */

function formatTime(hour: number): string {
  const h = Math.round(hour);
  if (h === 12) return "12:00 PM";
  if (h < 12) return `${h}:00 AM`;
  return `${h - 12}:00 PM`;
}

function lerp(a: number, b: number, t: number) {
  return a + (b - a) * Math.max(0, Math.min(1, t));
}

function lerpColor(a: string, b: string, t: number): string {
  const c = Math.max(0, Math.min(1, t));
  const ah = parseInt(a.slice(1), 16);
  const bh = parseInt(b.slice(1), 16);
  const rr = Math.round(lerp((ah >> 16) & 0xff, (bh >> 16) & 0xff, c));
  const gg = Math.round(lerp((ah >> 8) & 0xff, (bh >> 8) & 0xff, c));
  const bb = Math.round(lerp(ah & 0xff, bh & 0xff, c));
  return `#${((rr << 16) | (gg << 8) | bb).toString(16).padStart(6, "0")}`;
}

function getSunPos(hour: number, month: number) {
  const t = (hour - 6) / 12; // 0..1 across the day
  const alt = ALTITUDE[month];
  const x = SUN_LEFT + t * (SUN_RIGHT - SUN_LEFT);
  // Parabolic arc: peak at t=0.5, height depends on season
  const peakH = alt * 230;
  const y = GROUND_Y - 15 - peakH * 4 * t * (1 - t);
  return { x, y };
}

function getSkyColors(hour: number) {
  const t = (hour - 6) / 12;
  if (t < 0.12) {
    const p = t / 0.12;
    return { top: lerpColor("#D47040", "#6BB8E0", p), bottom: lerpColor("#C05820", "#A8CCE0", p) };
  }
  if (t > 0.88) {
    const p = (t - 0.88) / 0.12;
    return { top: lerpColor("#6BB8E0", "#D47040", p), bottom: lerpColor("#A8CCE0", "#C05820", p) };
  }
  return { top: "#87CEEB", bottom: "#B0D8F0" };
}

function getSunColor(hour: number): string {
  const t = (hour - 6) / 12;
  if (t < 0.15) return lerpColor("#FF8C42", "#FFD700", t / 0.15);
  if (t > 0.85) return lerpColor("#FFD700", "#FF8C42", (t - 0.85) / 0.15);
  return "#FFD700";
}

/**
 * Shadow projection — side view.
 * Project the left & right edges of the sail down to the ground
 * based on where the sun is in the sky.
 */
function projectShadow(sunX: number, sunY: number) {
  const sunHeight = GROUND_Y - sunY; // vertical distance sun → ground
  const sailHeight = GROUND_Y - SAIL_Y; // vertical distance sail → ground

  if (sunHeight <= 0) return null; // sun below horizon

  // Similar triangles: shadow extends from under the sail in the
  // opposite direction of the sun. The ratio sailHeight/sunHeight
  // determines how far the shadow shifts from the sail edge.

  // Left edge of sail → shadow
  const leftDx = SAIL_LEFT_X - sunX;
  const shadowLeftX = SAIL_LEFT_X + leftDx * (sailHeight / sunHeight);

  // Right edge of sail → shadow
  const rightDx = SAIL_RIGHT_X - sunX;
  const shadowRightX = SAIL_RIGHT_X + rightDx * (sailHeight / sunHeight);

  // Sort left/right and clamp to visible area
  const sL = Math.max(BLDG.x + BLDG.w - 10, Math.min(W - 10, Math.min(shadowLeftX, shadowRightX)));
  const sR = Math.max(BLDG.x + BLDG.w - 10, Math.min(W - 10, Math.max(shadowLeftX, shadowRightX)));

  return { left: sL, right: sR };
}

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

export default function ShadeCastDemo({ className = "" }: ShadeCastDemoProps) {
  const [hour, setHour] = useState(9);
  const [monthIdx, setMonthIdx] = useState(5); // June
  const [autoPlay, setAutoPlay] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animRef = useRef<number | null>(null);
  const lastTs = useRef(0);

  // Auto-play after 500ms delay
  useEffect(() => {
    const id = setTimeout(() => { lastTs.current = 0; setAutoPlay(true); }, 500);
    return () => clearTimeout(id);
  }, []);

  // requestAnimationFrame loop
  useEffect(() => {
    if (!autoPlay) { if (animRef.current) cancelAnimationFrame(animRef.current); return; }
    const cycle = 12000; // 12s per full day
    const tick = (ts: number) => {
      if (!lastTs.current) lastTs.current = ts;
      const dt = ts - lastTs.current;
      lastTs.current = ts;
      setHour(prev => { let n = prev + (dt / cycle) * 12; if (n >= 18) n = 6; return n; });
      animRef.current = requestAnimationFrame(tick);
    };
    animRef.current = requestAnimationFrame(tick);
    return () => { if (animRef.current) cancelAnimationFrame(animRef.current); };
  }, [autoPlay]);

  const onSlider = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setHour(parseFloat(e.target.value));
    setAutoPlay(false);
    if (pauseRef.current) clearTimeout(pauseRef.current);
    pauseRef.current = setTimeout(() => { lastTs.current = 0; setAutoPlay(true); }, 4000);
  }, []);

  // --- Computed values ---
  const sun = useMemo(() => getSunPos(hour, monthIdx), [hour, monthIdx]);
  const sunVis = sun.y < GROUND_Y;
  const sky = useMemo(() => getSkyColors(hour), [hour]);
  const sunClr = useMemo(() => getSunColor(hour), [hour]);
  const shadow = useMemo(() => projectShadow(sun.x, sun.y), [sun]);

  // Shadow opacity: stronger at midday, weaker at dawn/dusk
  const shadowOpacity = useMemo(() => {
    const t = (hour - 6) / 12;
    return 0.12 + Math.sin(t * Math.PI) * 0.28;
  }, [hour]);

  // Sun arc dotted trail
  const arcPath = useMemo(() => {
    const pts: string[] = [];
    for (let h = 6; h <= 18; h += 0.5) {
      const p = getSunPos(h, monthIdx);
      pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
    }
    return `M ${pts[0]} ${pts.slice(1).map(p => `L ${p}`).join(" ")}`;
  }, [monthIdx]);

  return (
    <div className={`relative rounded-2xl border border-sand/40 bg-cream shadow-lg shadow-charcoal/5 overflow-hidden ${className}`}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
        aria-label="ShadeCast shade sail shadow simulation — side view showing shadow movement throughout the day">
        <defs>
          <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.top} />
            <stop offset="100%" stopColor={sky.bottom} />
          </linearGradient>
          <radialGradient id="sc-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E7" />
            <stop offset="55%" stopColor={sunClr} />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.4" />
          </radialGradient>
          <filter id="sc-sh-blur">
            <feGaussianBlur stdDeviation="3" />
          </filter>
        </defs>

        {/* ===== SKY ===== */}
        <rect x="0" y="0" width={W} height={GROUND_Y} fill="url(#sc-sky)" />

        {/* Sun arc trail */}
        <path d={arcPath} fill="none" stroke="#D4A574" strokeWidth="1" strokeDasharray="4 6" opacity="0.22" />

        {/* ===== SUN ===== */}
        {sunVis && (
          <g>
            <circle cx={sun.x} cy={sun.y} r="30" fill={sunClr} opacity="0.06" />
            <circle cx={sun.x} cy={sun.y} r="22" fill="none" stroke={sunClr} strokeWidth="1.5" opacity="0.15" />
            <circle cx={sun.x} cy={sun.y} r="14" fill="url(#sc-sun)" opacity="0.9" />
            <circle cx={sun.x} cy={sun.y} r="8" fill="url(#sc-sun)" />
            {[0,45,90,135,180,225,270,315].map(a => {
              const r = (a * Math.PI) / 180;
              return <line key={a}
                x1={sun.x + Math.cos(r) * 16} y1={sun.y + Math.sin(r) * 16}
                x2={sun.x + Math.cos(r) * 23} y2={sun.y + Math.sin(r) * 23}
                stroke={sunClr} strokeWidth="1.5" strokeLinecap="round" opacity="0.28" />;
            })}
          </g>
        )}

        {/* ===== GROUND ===== */}
        <rect x="0" y={GROUND_Y} width={W} height={H - GROUND_Y} fill="#D4B896" />
        {/* Ground line */}
        <line x1="0" y1={GROUND_Y} x2={W} y2={GROUND_Y} stroke="#C4A07A" strokeWidth="2" />
        {/* Ground texture lines */}
        {[0,1,2,3].map(i => (
          <line key={`gl${i}`} x1="0" y1={GROUND_Y + 18 + i * 18} x2={W} y2={GROUND_Y + 18 + i * 18}
            stroke="#C4A880" strokeWidth="0.5" opacity="0.25" />
        ))}

        {/* ===== SHADOW ON GROUND ===== */}
        {shadow && sunVis && (
          <rect
            x={shadow.left}
            y={GROUND_Y}
            width={Math.max(5, shadow.right - shadow.left)}
            height={H - GROUND_Y}
            fill="#2D2D2D"
            opacity={shadowOpacity}
            filter="url(#sc-sh-blur)"
          />
        )}

        {/* ===== BUILDING (side view) ===== */}
        <rect x={BLDG.x} y={BLDG.y} width={BLDG.w} height={BLDG.h}
          fill="#9A928A" stroke="#7A7268" strokeWidth="1.5" />
        {/* Roof line */}
        <rect x={BLDG.x - 3} y={BLDG.y - 4} width={BLDG.w + 6} height={8} rx="1"
          fill="#8A8278" stroke="#7A7268" strokeWidth="0.5" />
        {/* Windows — 2 rows x 2 cols */}
        {[0,1].map(row => [0,1].map(col => (
          <rect key={`w${row}${col}`}
            x={BLDG.x + 14 + col * 45} y={BLDG.y + 18 + row * 52}
            width={24} height={30} rx="2"
            fill="#8AA8B8" opacity="0.6" stroke="#7A98A8" strokeWidth="0.8" />
        )))}
        {/* Door */}
        <rect x={BLDG.x + BLDG.w / 2 - 14} y={GROUND_Y - 52} width={28} height={52} rx="2"
          fill="#6A5A48" stroke="#5A4A38" strokeWidth="0.8" />
        <circle cx={BLDG.x + BLDG.w / 2 + 8} cy={GROUND_Y - 26} r="2" fill="#C4A87A" />
        {/* BUILDING label */}
        <text x={BLDG.x + BLDG.w / 2} y={BLDG.y - 12} textAnchor="middle" fontSize="9"
          fill="#7A7268" opacity="0.7" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1.5">BUILDING</text>

        {/* ===== PATIO TABLES (side view) ===== */}
        {TABLES.map((t, i) => (
          <g key={`t${i}`}>
            {/* Table leg */}
            <rect x={t.x - 3} y={GROUND_Y - t.legH} width={6} height={t.legH}
              fill="#7A6A58" />
            {/* Table top */}
            <rect x={t.x - t.tw / 2} y={GROUND_Y - t.legH - t.th} width={t.tw} height={t.th} rx="2"
              fill="#8A7A68" stroke="#6A5A48" strokeWidth="1" />
            {/* Left chair */}
            <rect x={t.x - t.tw / 2 - 16} y={GROUND_Y - 28} width={10} height={28} rx="2"
              fill="#6A6A6A" stroke="#5A5A5A" strokeWidth="0.8" />
            <rect x={t.x - t.tw / 2 - 16} y={GROUND_Y - 28} width={10} height={6} rx="1"
              fill="#5A5A5A" />
            {/* Right chair */}
            <rect x={t.x + t.tw / 2 + 6} y={GROUND_Y - 28} width={10} height={28} rx="2"
              fill="#6A6A6A" stroke="#5A5A5A" strokeWidth="0.8" />
            <rect x={t.x + t.tw / 2 + 6} y={GROUND_Y - 28} width={10} height={6} rx="1"
              fill="#5A5A5A" />
          </g>
        ))}

        {/* ===== STEEL POLE (right side) ===== */}
        {/* Base plate */}
        <ellipse cx={POLE_X} cy={GROUND_Y + 3} rx="10" ry="4" fill="#2D2D2D" opacity="0.4" />
        {/* Pole shaft */}
        <line x1={POLE_X} y1={GROUND_Y} x2={POLE_X} y2={SAIL_Y - 2}
          stroke="#2D2D2D" strokeWidth="5" strokeLinecap="round" />
        {/* Pole cap */}
        <circle cx={POLE_X} cy={SAIL_Y - 2} r="4" fill="#C45C26" />

        {/* ===== SHADE SAIL ===== */}
        {/* Tension cable from building to sail */}
        <line x1={SAIL_LEFT_X} y1={BLDG.y + 25} x2={SAIL_LEFT_X} y2={SAIL_Y}
          stroke="#888" strokeWidth="1.5" strokeDasharray="3 2" opacity="0.5" />
        {/* Sail body — slight drape curve */}
        <path
          d={`M ${SAIL_LEFT_X},${SAIL_Y}
              Q ${(SAIL_LEFT_X + SAIL_RIGHT_X) / 2},${SAIL_Y + 8} ${SAIL_RIGHT_X},${SAIL_Y}
              L ${SAIL_RIGHT_X},${SAIL_Y + SAIL_THICK}
              Q ${(SAIL_LEFT_X + SAIL_RIGHT_X) / 2},${SAIL_Y + SAIL_THICK + 6} ${SAIL_LEFT_X},${SAIL_Y + SAIL_THICK}
              Z`}
          fill="#C45C26" opacity="0.92"
        />
        {/* Sail highlight */}
        <path
          d={`M ${SAIL_LEFT_X + 15},${SAIL_Y + 2}
              Q ${(SAIL_LEFT_X + SAIL_RIGHT_X) / 2},${SAIL_Y + 6} ${SAIL_RIGHT_X - 15},${SAIL_Y + 2}`}
          fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.2" />
        {/* Wall bracket */}
        <circle cx={SAIL_LEFT_X} cy={SAIL_Y + SAIL_THICK / 2} r="3.5" fill="#2D2D2D" />
        <circle cx={SAIL_LEFT_X} cy={SAIL_Y + SAIL_THICK / 2} r="2" fill="#C45C26" />
        {/* SHADE SAIL label */}
        <text x={(SAIL_LEFT_X + SAIL_RIGHT_X) / 2} y={SAIL_Y - 12} textAnchor="middle" fontSize="9"
          fill="#C45C26" opacity="0.75" fontFamily="Inter,sans-serif" fontWeight="700" letterSpacing="1">SHADE SAIL</text>

        {/* ===== SHADED AREA label ===== */}
        {shadow && sunVis && (shadow.right - shadow.left) > 30 && (
          <text x={(shadow.left + shadow.right) / 2} y={GROUND_Y + 45} textAnchor="middle" fontSize="9"
            fill="#2D2D2D" opacity="0.5" fontFamily="Inter,sans-serif" fontWeight="600" letterSpacing="1">SHADED AREA</text>
        )}

        {/* ===== EAST / WEST labels ===== */}
        <text x="25" y={GROUND_Y - 8} textAnchor="middle" fontSize="9" fill="#D4A574" opacity="0.55"
          fontFamily="Inter,sans-serif" fontWeight="600">EAST</text>
        <text x={W - 25} y={GROUND_Y - 8} textAnchor="middle" fontSize="9" fill="#D4A574" opacity="0.55"
          fontFamily="Inter,sans-serif" fontWeight="600">WEST</text>

        {/* ===== COMPASS ROSE ===== */}
        <g transform={`translate(${W - 40}, 40)`}>
          <circle cx="0" cy="0" r="18" fill="#F5F0E6" stroke="#D4A574" strokeWidth="1" opacity="0.88" />
          <circle cx="0" cy="0" r="14" fill="none" stroke="#D4A574" strokeWidth="0.5" opacity="0.35" />
          <line x1="0" y1="-11" x2="0" y2="11" stroke="#2D2D2D" strokeWidth="0.5" opacity="0.2" />
          <line x1="-11" y1="0" x2="11" y2="0" stroke="#2D2D2D" strokeWidth="0.5" opacity="0.2" />
          <polygon points="0,-10 -2,-4 0,-6 2,-4" fill="#C45C26" opacity="0.9" />
          <polygon points="0,10 -2,4 0,6 2,4" fill="#2D2D2D" opacity="0.3" />
          <text x="0" y="-12" textAnchor="middle" fontSize="5.5" fontWeight="700" fill="#C45C26" fontFamily="Inter,sans-serif">N</text>
          <text x="0" y="18" textAnchor="middle" fontSize="5" fill="#2D2D2D" opacity="0.4" fontFamily="Inter,sans-serif">S</text>
          <text x="15" y="2" textAnchor="middle" fontSize="5" fill="#2D2D2D" opacity="0.4" fontFamily="Inter,sans-serif">E</text>
          <text x="-15" y="2" textAnchor="middle" fontSize="5" fill="#2D2D2D" opacity="0.4" fontFamily="Inter,sans-serif">W</text>
        </g>

        {/* ===== ShadeCast LIVE badge ===== */}
        <g transform="translate(20, 12)">
          <rect x="0" y="0" width="120" height="22" rx="11" fill="#2D2D2D" opacity="0.82" />
          <circle cx="13" cy="11" r="3.5" fill="#C45C26" />
          <circle cx="13" cy="11" r="5.5" fill="none" stroke="#C45C26" strokeWidth="0.7" opacity="0.4" />
          <text x="24" y="15" fontSize="8.5" fontWeight="700" fill="#F5F0E6" fontFamily="Inter,sans-serif" letterSpacing="0.5">ShadeCast</text>
          <text x="80" y="15" fontSize="6.5" fill="#D4A574" fontFamily="Inter,sans-serif">LIVE</text>
          <circle cx="100" cy="11" r="2.5" fill="#4ADE80" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* ===== CONTROLS ===== */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-sand/20 bg-cream-dark/30">
        {/* Time + Season row */}
        <div className="flex items-center justify-between mb-3">
          <div className="px-3 py-1 bg-charcoal/85 rounded-full">
            <span className="text-xs sm:text-sm font-semibold text-cream font-body tracking-wide">
              {formatTime(hour)}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-[10px] sm:text-xs text-charcoal/50 font-body mr-1">Season:</span>
            <select value={monthIdx} onChange={e => setMonthIdx(parseInt(e.target.value))}
              className="text-[10px] sm:text-xs bg-white/70 border border-sand/50 rounded-lg px-2 py-1 text-charcoal/80 font-body focus:outline-none focus:ring-1 focus:ring-copper/30 cursor-pointer">
              {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
            </select>
          </div>
        </div>

        {/* Time slider */}
        <div className="relative">
          <div className="flex justify-between mb-1 px-0.5">
            {["6AM","9AM","12PM","3PM","6PM"].map(l => (
              <span key={l} className="text-[9px] sm:text-[10px] text-charcoal/35 font-body">{l}</span>
            ))}
          </div>
          <div className="relative h-6 flex items-center">
            <div className="absolute inset-x-0 h-1.5 bg-sand/25 rounded-full" />
            <div className="absolute left-0 h-1.5 bg-copper/40 rounded-full"
              style={{ width: `${((hour - 6) / 12) * 100}%` }} />
            <input type="range" min="6" max="18" step="0.25" value={hour} onChange={onSlider}
              className="relative w-full h-6 appearance-none bg-transparent cursor-pointer z-10
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4
                [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-copper [&::-webkit-slider-thumb]:border-2
                [&::-webkit-slider-thumb]:border-white [&::-webkit-slider-thumb]:shadow-md [&::-webkit-slider-thumb]:cursor-pointer
                [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:rounded-full
                [&::-moz-range-thumb]:bg-copper [&::-moz-range-thumb]:border-2 [&::-moz-range-thumb]:border-white
                [&::-moz-range-thumb]:shadow-md [&::-moz-range-thumb]:cursor-pointer
                [&::-webkit-slider-runnable-track]:bg-transparent [&::-moz-range-track]:bg-transparent"
              aria-label="Time of day" />
          </div>
        </div>

        <p className="text-[10px] sm:text-xs text-charcoal/40 text-center tracking-wide font-body mt-3">
          ShadeCast&#8482; Simulation &mdash; Actual results use precise GPS coordinates and terrain data
        </p>
      </div>
    </div>
  );
}
