"use client";

import { useState, useCallback, useMemo, useEffect, useRef } from "react";

/* ================================================================== */
/*  TYPES & CONSTANTS                                                  */
/* ================================================================== */

interface ShadeCastDemoProps {
  className?: string;
}

interface Pt {
  x: number;
  y: number;
}

const MONTHS = [
  "Jan","Feb","Mar","Apr","May","Jun",
  "Jul","Aug","Sep","Oct","Nov","Dec",
];

// Solar noon altitude factor by month (Phoenix, AZ latitude)
const ALTITUDE: Record<number, number> = {
  0: 0.52, 1: 0.60, 2: 0.72, 3: 0.83, 4: 0.92, 5: 0.97,
  6: 0.95, 7: 0.89, 8: 0.78, 9: 0.65, 10: 0.54, 11: 0.48,
};

const W = 600;
const H = 420;
const SKY_H = 175;  // sky area height

// --- Patio ground plane (isometric-ish top-down view) ---
const PATIO_Y = SKY_H;          // top of patio area
const GROUND_H = H - SKY_H;     // patio area height

// --- Building: a simple gray bar along the top edge of the patio ---
const BLDG = { x: 80, y: PATIO_Y, w: 440, h: 28 };

// --- Sail corners (quadrilateral HyPar) ---
// Two corners attach to building wall, two extend outward on steel poles
// This creates a large canopy covering the seating area
const SAIL: Pt[] = [
  { x: 130, y: PATIO_Y + BLDG.h },       // A: left building attachment
  { x: 470, y: PATIO_Y + BLDG.h },       // B: right building attachment
  { x: 440, y: PATIO_Y + BLDG.h + 135 }, // C: right outer pole
  { x: 160, y: PATIO_Y + BLDG.h + 135 }, // D: left outer pole
];

// Sail "3D" height above ground — used for shadow projection
// Higher corners at building wall, slightly lower at outer poles (realistic drape)
const SAIL_HEIGHT = [90, 90, 70, 70]; // px above ground plane in our "3D space"

// --- Pole positions: the two outer poles ---
const POLES = [
  { top: SAIL[2], base: { x: SAIL[2].x, y: SAIL[2].y + 6 } }, // right outer
  { top: SAIL[3], base: { x: SAIL[3].x, y: SAIL[3].y + 6 } }, // left outer
];

// --- Patio furniture: 3 table+chair sets under the sail ---
const TABLES = [
  { x: 220, y: PATIO_Y + BLDG.h + 55,  r: 14, chairs: 4 },  // left table
  { x: 320, y: PATIO_Y + BLDG.h + 80,  r: 16, chairs: 4 },  // center table (bigger)
  { x: 410, y: PATIO_Y + BLDG.h + 50,  r: 13, chairs: 3 },  // right table
];

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
  const r = Math.round(lerp((ah >> 16) & 0xff, (bh >> 16) & 0xff, c));
  const g = Math.round(lerp((ah >> 8) & 0xff, (bh >> 8) & 0xff, c));
  const bl = Math.round(lerp(ah & 0xff, bh & 0xff, c));
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, "0")}`;
}

function getSunPos(hour: number, month: number): Pt {
  const t = (hour - 6) / 12; // 0..1
  const x = 30 + t * (W - 60);
  const alt = ALTITUDE[month];
  const arcH = alt * 165;
  const y = SKY_H - 5 - arcH * 4 * t * (1 - t);
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
 * Project a sail corner's shadow onto the ground.
 * sunX/sunY are in SVG sky coords. We treat the sail corner as being
 * `height` px "above" its ground position. The sun angle determines
 * where the shadow lands on the ground.
 */
function projectCorner(sun: Pt, corner: Pt, height: number): Pt {
  // Sun angle relative to the corner's ground position
  // dx = horizontal offset of sun from corner
  // The "virtual sun height" is how far the sun is above the ground
  // plane in our projection model
  const sunVirtualH = (SKY_H + 30) - sun.y; // higher sun = taller virtual height
  if (sunVirtualH <= 0) return { x: corner.x, y: corner.y };

  const dx = sun.x - corner.x;

  // Shadow offset = opposite direction from sun, scaled by height/sunHeight ratio
  const shadowScale = height / sunVirtualH;
  const sx = corner.x - dx * shadowScale;
  const sy = corner.y + height * shadowScale * 0.3; // slight vertical spread for depth

  return {
    x: Math.max(0, Math.min(W, sx)),
    y: Math.max(PATIO_Y, Math.min(H, sy)),
  };
}

/* ================================================================== */
/*  COMPONENT                                                          */
/* ================================================================== */

export default function ShadeCastDemo({ className = "" }: ShadeCastDemoProps) {
  const [hour, setHour] = useState(6);
  const [monthIdx, setMonthIdx] = useState(5); // June
  const [autoPlay, setAutoPlay] = useState(false);
  const pauseRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const animRef = useRef<number | null>(null);
  const lastTs = useRef(0);

  // Start auto-play after 500ms
  useEffect(() => {
    const id = setTimeout(() => { lastTs.current = 0; setAutoPlay(true); }, 500);
    return () => clearTimeout(id);
  }, []);

  // Animation loop
  useEffect(() => {
    if (!autoPlay) { if (animRef.current) cancelAnimationFrame(animRef.current); return; }
    const cycle = 12000;
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

  // --- Computed ---
  const sun = useMemo(() => getSunPos(hour, monthIdx), [hour, monthIdx]);
  const sunVis = sun.y < SKY_H + 5;
  const sky = useMemo(() => getSkyColors(hour), [hour]);
  const sunClr = useMemo(() => getSunColor(hour), [hour]);

  // Shadow projection
  const shadowPts = useMemo(() => {
    return SAIL.map((c, i) => projectCorner(sun, c, SAIL_HEIGHT[i]));
  }, [sun]);

  const shadowPath = useMemo(() => {
    if (shadowPts.length < 4) return "";
    return `M ${shadowPts.map(p => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" L ")} Z`;
  }, [shadowPts]);

  const shadowVis = useMemo(() => {
    const t = (hour - 6) / 12;
    const s = Math.sin(t * Math.PI);
    return { opacity: 0.1 + s * 0.3, blur: 7 - s * 5 };
  }, [hour]);

  // Sun arc dotted path
  const arcPath = useMemo(() => {
    const pts: string[] = [];
    for (let h = 6; h <= 18; h += 0.5) {
      const p = getSunPos(h, monthIdx);
      pts.push(`${p.x.toFixed(1)},${p.y.toFixed(1)}`);
    }
    return `M ${pts[0]} ${pts.slice(1).map(p => `L ${p}`).join(" ")}`;
  }, [monthIdx]);

  // Sail SVG path (HyPar: curved quadrilateral)
  const sailPath = useMemo(() => {
    const [A, B, C, D] = SAIL;
    return `M ${A.x},${A.y}
            Q ${(A.x + B.x) / 2},${A.y - 8} ${B.x},${B.y}
            Q ${B.x + 10},${(B.y + C.y) / 2} ${C.x},${C.y}
            Q ${(C.x + D.x) / 2},${C.y + 6} ${D.x},${D.y}
            Q ${D.x - 10},${(D.y + A.y) / 2} ${A.x},${A.y}
            Z`;
  }, []);

  // Chair positions around a table
  const chairPositions = useCallback((cx: number, cy: number, r: number, count: number) => {
    const chairs: Pt[] = [];
    for (let i = 0; i < count; i++) {
      const angle = (i / count) * Math.PI * 2 - Math.PI / 2;
      chairs.push({
        x: cx + Math.cos(angle) * (r + 8),
        y: cy + Math.sin(angle) * (r + 8),
      });
    }
    return chairs;
  }, []);

  return (
    <div className={`relative rounded-2xl border border-sand/40 bg-cream shadow-lg shadow-charcoal/5 overflow-hidden ${className}`}>
      <svg viewBox={`0 0 ${W} ${H}`} className="w-full h-auto" role="img"
        aria-label="ShadeCast shade sail shadow simulation showing shadow movement throughout the day">
        <defs>
          <linearGradient id="sc-sky" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor={sky.top} />
            <stop offset="100%" stopColor={sky.bottom} />
          </linearGradient>
          <radialGradient id="sc-sun" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#FFF8E7" />
            <stop offset="55%" stopColor={sunClr} />
            <stop offset="100%" stopColor="#FF8C42" stopOpacity="0.5" />
          </radialGradient>
          {/* Patio concrete pattern */}
          <pattern id="sc-patio" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
            <rect width="20" height="20" fill="none" />
            <line x1="0" y1="20" x2="20" y2="20" stroke="#C4B8A0" strokeWidth="0.5" opacity="0.4" />
            <line x1="20" y1="0" x2="20" y2="20" stroke="#C4B8A0" strokeWidth="0.5" opacity="0.4" />
          </pattern>
          <filter id="sc-blur">
            <feGaussianBlur stdDeviation={shadowVis.blur} />
          </filter>
          <filter id="sc-pole-sh">
            <feDropShadow dx="1" dy="2" stdDeviation="1" floodColor="#2D2D2D" floodOpacity="0.25" />
          </filter>
        </defs>

        {/* ===== SKY ===== */}
        <rect x="0" y="0" width={W} height={SKY_H} fill="url(#sc-sky)" />

        {/* Sun arc trail */}
        <path d={arcPath} fill="none" stroke="#D4A574" strokeWidth="1" strokeDasharray="3 5" opacity="0.25" />

        {/* ===== SUN ===== */}
        {sunVis && (
          <g>
            <circle cx={sun.x} cy={sun.y} r="26" fill={sunClr} opacity="0.07" />
            <circle cx={sun.x} cy={sun.y} r="20" fill="none" stroke={sunClr} strokeWidth="1.5" opacity="0.18" />
            <circle cx={sun.x} cy={sun.y} r="13" fill="url(#sc-sun)" opacity="0.9" />
            <circle cx={sun.x} cy={sun.y} r="7" fill="url(#sc-sun)" />
            {[0,45,90,135,180,225,270,315].map(a => {
              const r = (a * Math.PI) / 180;
              return <line key={a}
                x1={sun.x+Math.cos(r)*15} y1={sun.y+Math.sin(r)*15}
                x2={sun.x+Math.cos(r)*21} y2={sun.y+Math.sin(r)*21}
                stroke={sunClr} strokeWidth="1.5" strokeLinecap="round" opacity="0.3" />;
            })}
          </g>
        )}

        {/* ===== PATIO GROUND PLANE ===== */}
        <rect x="0" y={PATIO_Y} width={W} height={GROUND_H} fill="#DDD0BA" />
        <rect x="0" y={PATIO_Y} width={W} height={GROUND_H} fill="#D4A574" opacity="0.15" />
        <rect x="0" y={PATIO_Y} width={W} height={GROUND_H} fill="url(#sc-patio)" />

        {/* Patio border / decorative edge */}
        <rect x={BLDG.x - 10} y={PATIO_Y + BLDG.h + 2} width={BLDG.w + 20} height={155} rx="3"
          fill="none" stroke="#C4B8A0" strokeWidth="1.5" opacity="0.4" strokeDasharray="6 4" />

        {/* ===== BUILDING (simple bar along top of patio) ===== */}
        <rect x={BLDG.x} y={BLDG.y} width={BLDG.w} height={BLDG.h} rx="2"
          fill="#A0988A" stroke="#8A8278" strokeWidth="1" />
        {/* Building windows */}
        {[0,1,2,3,4,5,6,7].map(i => (
          <rect key={`bw${i}`} x={BLDG.x + 12 + i * 54} y={BLDG.y + 6} width={36} height={16} rx="1"
            fill="#7A95A8" opacity="0.5" stroke="#6A8598" strokeWidth="0.5" />
        ))}
        {/* Building label */}
        <text x={BLDG.x + BLDG.w / 2} y={BLDG.y - 5} textAnchor="middle" fontSize="8"
          fill="#8A8278" opacity="0.6" fontFamily="Inter, sans-serif" letterSpacing="2">BUILDING</text>

        {/* ===== PATIO FURNITURE (tables + chairs) — drawn BEFORE shadow ===== */}
        {/* We draw furniture, then shadow OVER it, then sail on top */}
        {TABLES.map((t, ti) => (
          <g key={`table-${ti}`}>
            {/* Chair shadows (tiny ellipses) */}
            {chairPositions(t.x, t.y, t.r, t.chairs).map((ch, ci) => (
              <ellipse key={`cs-${ti}-${ci}`} cx={ch.x + 1} cy={ch.y + 1} rx="4.5" ry="3"
                fill="#2D2D2D" opacity="0.06" />
            ))}
            {/* Table shadow */}
            <ellipse cx={t.x + 2} cy={t.y + 2} rx={t.r + 2} ry={t.r + 2}
              fill="#2D2D2D" opacity="0.06" />
            {/* Table top */}
            <circle cx={t.x} cy={t.y} r={t.r} fill="#A09080" stroke="#8A7A6A" strokeWidth="1" />
            <circle cx={t.x} cy={t.y} r={t.r - 3} fill="none" stroke="#B8A898" strokeWidth="0.5" opacity="0.5" />
            {/* Chairs */}
            {chairPositions(t.x, t.y, t.r, t.chairs).map((ch, ci) => (
              <g key={`ch-${ti}-${ci}`}>
                <circle cx={ch.x} cy={ch.y} r="5" fill="#8A7A6A" stroke="#7A6A5A" strokeWidth="0.8" />
                <circle cx={ch.x} cy={ch.y} r="3" fill="#9A8A7A" opacity="0.6" />
              </g>
            ))}
          </g>
        ))}

        {/* ===== SHADOW ON GROUND (semi-transparent OVER tables/patio) ===== */}
        {sunVis && shadowPath && (
          <path d={shadowPath} fill="#2D2D2D" opacity={shadowVis.opacity} filter="url(#sc-blur)" />
        )}

        {/* ===== STEEL POLES (dark gray, from ground to sail corners) ===== */}
        {POLES.map((p, i) => (
          <g key={`pole-${i}`}>
            {/* Base plate */}
            <ellipse cx={p.base.x} cy={p.base.y + 2} rx="7" ry="3" fill="#2D2D2D" opacity="0.35" />
            {/* Pole shaft */}
            <line x1={p.base.x} y1={p.base.y} x2={p.top.x} y2={p.top.y}
              stroke="#2D2D2D" strokeWidth="4" strokeLinecap="round" filter="url(#sc-pole-sh)" />
            {/* Cap */}
            <circle cx={p.top.x} cy={p.top.y} r="3.5" fill="#C45C26" />
          </g>
        ))}

        {/* Building-side brackets (smaller, attached to wall) */}
        <circle cx={SAIL[0].x} cy={SAIL[0].y} r="3" fill="#2D2D2D" />
        <circle cx={SAIL[0].x} cy={SAIL[0].y} r="2" fill="#C45C26" />
        <circle cx={SAIL[1].x} cy={SAIL[1].y} r="3" fill="#2D2D2D" />
        <circle cx={SAIL[1].x} cy={SAIL[1].y} r="2" fill="#C45C26" />

        {/* ===== SHADE SAIL (HyPar quadrilateral) ===== */}
        {/* Tensioned cable edges */}
        <path d={`M ${SAIL[0].x},${SAIL[0].y} L ${SAIL[1].x},${SAIL[1].y} L ${SAIL[2].x},${SAIL[2].y} L ${SAIL[3].x},${SAIL[3].y} Z`}
          fill="none" stroke="#A05020" strokeWidth="1.2" opacity="0.4" />

        {/* Sail fill — curved HyPar quadrilateral */}
        <path d={sailPath} fill="#C45C26" opacity="0.72" />

        {/* Sail fabric texture / highlights */}
        <path d={`M ${SAIL[0].x + 20},${SAIL[0].y + 8}
                  Q ${(SAIL[0].x + SAIL[1].x) / 2},${SAIL[0].y + 2} ${SAIL[1].x - 20},${SAIL[1].y + 8}`}
          fill="none" stroke="#fff" strokeWidth="0.6" opacity="0.15" />
        <path d={`M ${SAIL[3].x + 15},${SAIL[3].y - 8}
                  Q ${(SAIL[3].x + SAIL[2].x) / 2},${SAIL[3].y - 2} ${SAIL[2].x - 15},${SAIL[2].y - 8}`}
          fill="none" stroke="#fff" strokeWidth="0.5" opacity="0.1" />
        {/* Cross-sail line for HyPar curvature feel */}
        <path d={`M ${SAIL[0].x + 30},${SAIL[0].y + 20}
                  Q ${(SAIL[0].x + SAIL[2].x) / 2},${(SAIL[0].y + SAIL[2].y) / 2 - 5} ${SAIL[2].x - 30},${SAIL[2].y - 15}`}
          fill="none" stroke="#D4732E" strokeWidth="0.4" opacity="0.3" />

        {/* ===== COMPASS ROSE ===== */}
        <g transform="translate(560, 210)">
          <circle cx="0" cy="0" r="20" fill="#F5F0E6" stroke="#D4A574" strokeWidth="1" opacity="0.9" />
          <circle cx="0" cy="0" r="16" fill="none" stroke="#D4A574" strokeWidth="0.5" opacity="0.4" />
          <line x1="0" y1="-13" x2="0" y2="13" stroke="#2D2D2D" strokeWidth="0.5" opacity="0.25" />
          <line x1="-13" y1="0" x2="13" y2="0" stroke="#2D2D2D" strokeWidth="0.5" opacity="0.25" />
          <polygon points="0,-12 -2.5,-5 0,-7 2.5,-5" fill="#C45C26" opacity="0.9" />
          <polygon points="0,12 -2.5,5 0,7 2.5,5" fill="#2D2D2D" opacity="0.35" />
          <text x="0" y="-14" textAnchor="middle" fontSize="6" fontWeight="700" fill="#C45C26" fontFamily="Inter,sans-serif">N</text>
          <text x="0" y="20" textAnchor="middle" fontSize="5.5" fill="#2D2D2D" opacity="0.45" fontFamily="Inter,sans-serif">S</text>
          <text x="17" y="2.5" textAnchor="middle" fontSize="5.5" fill="#2D2D2D" opacity="0.45" fontFamily="Inter,sans-serif">E</text>
          <text x="-17" y="2.5" textAnchor="middle" fontSize="5.5" fill="#2D2D2D" opacity="0.45" fontFamily="Inter,sans-serif">W</text>
        </g>

        {/* E / W labels */}
        <text x="22" y={SKY_H + 14} textAnchor="middle" fontSize="8" fill="#D4A574" opacity="0.5"
          fontFamily="Inter,sans-serif" fontWeight="600">EAST</text>
        <text x={W - 22} y={SKY_H + 14} textAnchor="middle" fontSize="8" fill="#D4A574" opacity="0.5"
          fontFamily="Inter,sans-serif" fontWeight="600">WEST</text>

        {/* Patio area label */}
        <text x={W / 2} y={H - 12} textAnchor="middle" fontSize="8" fill="#A09080" opacity="0.4"
          fontFamily="Inter,sans-serif" letterSpacing="3">PATIO SEATING AREA</text>

        {/* ===== ShadeCast LIVE badge ===== */}
        <g transform="translate(24, 14)">
          <rect x="0" y="0" width="125" height="22" rx="11" fill="#2D2D2D" opacity="0.82" />
          <circle cx="13" cy="11" r="3.5" fill="#C45C26" />
          <circle cx="13" cy="11" r="5.5" fill="none" stroke="#C45C26" strokeWidth="0.7" opacity="0.45" />
          <text x="24" y="15" fontSize="8.5" fontWeight="700" fill="#F5F0E6" fontFamily="Inter,sans-serif" letterSpacing="0.5">ShadeCast</text>
          <text x="82" y="15" fontSize="6.5" fill="#D4A574" fontFamily="Inter,sans-serif">LIVE</text>
          <circle cx="103" cy="11" r="2.5" fill="#4ADE80" opacity="0.9">
            <animate attributeName="opacity" values="0.9;0.3;0.9" dur="2s" repeatCount="indefinite" />
          </circle>
        </g>
      </svg>

      {/* ===== CONTROLS ===== */}
      <div className="px-4 py-3 sm:px-6 sm:py-4 border-t border-sand/20 bg-cream-dark/30">
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
