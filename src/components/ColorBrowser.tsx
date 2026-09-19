"use client";

// S314 Package A: "Browse colors, patterns, textures" button + the color pop-up.
// Two tabs (Shade sail colors | Post colors), both always visible at the top;
// the grid scrolls inside the dialog. Data lives in src/lib/colors.ts and is
// loaded on first open (dynamic import) so the landing pages stay light.
// Accessible dialog: role="dialog" + aria-modal, Esc / X / backdrop close,
// body scroll lock, focus trap, focus returns to the button on close.

import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { CSSProperties, KeyboardEvent as ReactKeyboardEvent, ReactNode } from "react";
import { createPortal } from "react-dom";
import type { PostColor, SailColor } from "@/lib/colors";

type ColorsModule = typeof import("@/lib/colors");
type TabId = "sails" | "posts";

const BUTTON_LABEL = "Browse colors, patterns, textures";
const TABS: { id: TabId; label: string }[] = [
  { id: "sails", label: "Shade sail colors" },
  { id: "posts", label: "Post colors" },
];

let colorsPromise: Promise<ColorsModule> | null = null;
function loadColors(): Promise<ColorsModule> {
  if (!colorsPromise) {
    colorsPromise = import("@/lib/colors").catch((err) => {
      colorsPromise = null;
      throw err;
    });
  }
  return colorsPromise;
}

// ---------- swatch chips (CSS only; screen colors are approximate) ----------

function sailChipStyle(c: SailColor): CSSProperties {
  const knit =
    "repeating-linear-gradient(0deg, rgba(255,255,255,0.10) 0 1px, transparent 1px 4px), " +
    "repeating-linear-gradient(90deg, rgba(0,0,0,0.08) 0 1px, transparent 1px 4px)";
  if (c.stripes) {
    const [a, b] = c.stripes;
    return {
      backgroundColor: c.hex,
      backgroundImage: `${knit}, repeating-linear-gradient(90deg, ${a} 0 4px, ${b} 4px 9px)`,
    };
  }
  return { backgroundColor: c.hex, backgroundImage: knit };
}

function postChipStyle(c: PostColor): CSSProperties {
  // A soft highlight whose strength follows the official gloss digit (0 = flat, 9 = high gloss).
  const shine = (0.04 + c.glossLevel * 0.035).toFixed(3);
  const sheen = `linear-gradient(135deg, rgba(255,255,255,${shine}) 0%, rgba(255,255,255,0) 55%)`;
  const speckle =
    "radial-gradient(rgba(0,0,0,0.22) 0.8px, transparent 1.3px) 0 0 / 5px 5px, " +
    "radial-gradient(rgba(255,255,255,0.16) 0.8px, transparent 1.3px) 2px 3px / 6px 6px";
  const hammer =
    "radial-gradient(circle, rgba(255,255,255,0.30) 0 1.6px, transparent 2.4px) 0 0 / 9px 8px, " +
    "radial-gradient(circle, rgba(0,0,0,0.25) 0 1.4px, transparent 2.2px) 4px 4px / 9px 8px";
  const metal =
    "linear-gradient(115deg, rgba(255,255,255,0) 15%, rgba(255,255,255,0.38) 45%, rgba(255,255,255,0) 72%)";
  const vein =
    "repeating-linear-gradient(35deg, rgba(255,255,255,0.18) 0 1px, transparent 1px 7px), " +
    "repeating-linear-gradient(-55deg, rgba(0,0,0,0.25) 0 1px, transparent 1px 9px)";
  const wrinkle = "repeating-linear-gradient(60deg, rgba(0,0,0,0.20) 0 1px, transparent 1px 4px)";
  let layers: string;
  switch (c.surface) {
    case "Texture":
    case "Special":
      layers = `${speckle}, ${sheen}`;
      break;
    case "Hammer":
    case "Hammertone":
      layers = `${hammer}, ${sheen}`;
      break;
    case "Metallic":
    case "Pearlescent":
      layers = `${metal}, ${sheen}`;
      break;
    case "Vein":
      layers = `${vein}, ${sheen}`;
      break;
    case "Wrinkle":
      layers = `${wrinkle}, ${sheen}`;
      break;
    default:
      layers = sheen;
  }
  return { background: `${layers}, ${c.hex}` };
}

// ---------- the button (the only export) ----------

export default function ColorBrowserButton({
  className,
  tone = "light",
}: {
  className?: string;
  tone?: "light" | "dark";
}) {
  const [open, setOpen] = useState(false);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const close = useCallback(() => {
    setOpen(false);
    // Return focus to the button that opened the pop-up.
    requestAnimationFrame(() => buttonRef.current?.focus());
  }, []);

  const prefetch = () => {
    loadColors().catch(() => {});
  };

  const toneClass =
    tone === "dark"
      ? "border-white/40 text-white hover:bg-white/10 focus-visible:outline-white"
      : "border-copper/50 bg-white text-copper hover:bg-copper hover:text-white hover:border-copper focus-visible:outline-copper";

  return (
    <>
      <button
        ref={buttonRef}
        type="button"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => {
          prefetch();
          setOpen(true);
        }}
        onPointerEnter={prefetch}
        onFocus={prefetch}
        className={[
          "group inline-flex items-center justify-center gap-2.5 rounded-full border px-6 py-3 text-base font-semibold transition-colors duration-200",
          "focus-visible:outline-2 focus-visible:outline-offset-2",
          toneClass,
          className ?? "",
        ].join(" ")}
      >
        <span aria-hidden="true" className="flex -space-x-1.5">
          <span className="h-4 w-4 rounded-full border-2 border-white bg-[#B08C63]" />
          <span className="h-4 w-4 rounded-full border-2 border-white bg-[#363E45]" />
          <span className="h-4 w-4 rounded-full border-2 border-white bg-copper" />
        </span>
        <span className="text-balance">{BUTTON_LABEL}</span>
      </button>
      {open ? <ColorDialog onClose={close} /> : null}
    </>
  );
}

// ---------- the dialog ----------

const FOCUSABLE =
  'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';

function ColorDialog({ onClose }: { onClose: () => void }) {
  const [data, setData] = useState<ColorsModule | null>(null);
  const [failed, setFailed] = useState(false);
  const [tab, setTab] = useState<TabId>("sails");
  const [selected, setSelected] = useState<string | null>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Record<TabId, HTMLButtonElement | null>>({ sails: null, posts: null });
  const lastCardId = useRef<string | null>(null);
  const baseId = useId();

  // Load the data (already prefetched by the button in most cases).
  useEffect(() => {
    let alive = true;
    loadColors()
      .then((m) => {
        if (alive) setData(m);
      })
      .catch(() => {
        if (alive) setFailed(true);
      });
    return () => {
      alive = false;
    };
  }, []);

  // Body scroll lock + initial focus on the selected tab.
  useEffect(() => {
    const body = document.body;
    const prevOverflow = body.style.overflow;
    const prevPad = body.style.paddingRight;
    const gap = window.innerWidth - document.documentElement.clientWidth;
    body.style.overflow = "hidden";
    if (gap > 0) body.style.paddingRight = `${gap}px`;
    tabRefs.current.sails?.focus({ preventScroll: true });
    return () => {
      body.style.overflow = prevOverflow;
      body.style.paddingRight = prevPad;
    };
  }, []);

  const scrollTop = () => {
    if (scrollRef.current) scrollRef.current.scrollTop = 0;
  };

  const selectTab = (id: TabId, focus = false) => {
    setTab(id);
    setSelected(null);
    lastCardId.current = null;
    scrollTop();
    if (focus) tabRefs.current[id]?.focus();
  };

  const openDetails = (id: string) => {
    lastCardId.current = id;
    setSelected(id);
    scrollTop();
    requestAnimationFrame(() => {
      document.getElementById(`${baseId}-detail-title`)?.focus({ preventScroll: true });
    });
  };

  const backToGrid = () => {
    const id = lastCardId.current;
    setSelected(null);
    requestAnimationFrame(() => {
      if (!id) return;
      const card = document.getElementById(`${baseId}-card-${id}`);
      card?.focus({ preventScroll: true });
      card?.scrollIntoView({ block: "center" });
    });
  };

  const onDialogKeyDown = (e: ReactKeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Escape") {
      e.stopPropagation();
      onClose();
      return;
    }
    if (e.key !== "Tab" || !dialogRef.current) return;
    const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (n) => n.offsetParent !== null || n === document.activeElement,
    );
    if (nodes.length === 0) return;
    const first = nodes[0];
    const last = nodes[nodes.length - 1];
    const active = document.activeElement;
    if (e.shiftKey && (active === first || !dialogRef.current.contains(active))) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && active === last) {
      e.preventDefault();
      first.focus();
    }
  };

  const onTabKeyDown = (e: ReactKeyboardEvent<HTMLButtonElement>) => {
    const i = TABS.findIndex((t) => t.id === tab);
    let next = -1;
    if (e.key === "ArrowRight" || e.key === "ArrowDown") next = (i + 1) % TABS.length;
    else if (e.key === "ArrowLeft" || e.key === "ArrowUp") next = (i - 1 + TABS.length) % TABS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = TABS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    selectTab(TABS[next].id, true);
  };

  const sail = data && tab === "sails" && selected ? data.SAIL_COLORS.find((c) => c.id === selected) : undefined;
  const post = data && tab === "posts" && selected ? data.POST_COLORS.find((c) => c.id === selected) : undefined;

  const dialog = (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-2 sm:p-4 md:p-6">
      <div
        aria-hidden="true"
        onClick={onClose}
        className="sheet-backdrop-enter absolute inset-0 bg-charcoal/70 backdrop-blur-[2px]"
      />
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-label={BUTTON_LABEL}
        onKeyDown={onDialogKeyDown}
        className="animate-fade-in-up relative flex h-full w-full max-w-5xl flex-col overflow-hidden rounded-2xl bg-white shadow-2xl shadow-black/30 md:h-[85vh]"
      >
        {/* Sticky header: both tab titles always visible */}
        <div className="shrink-0 border-b border-charcoal/10 bg-white px-3 pt-3 sm:px-5 sm:pt-4">
          <div className="flex items-center gap-2">
            <div
              role="tablist"
              aria-label={BUTTON_LABEL}
              className="flex min-w-0 flex-1 gap-1 rounded-full bg-cream p-1"
            >
              {TABS.map((t) => {
                const active = t.id === tab;
                return (
                  <button
                    key={t.id}
                    ref={(el) => {
                      tabRefs.current[t.id] = el;
                    }}
                    id={`${baseId}-tab-${t.id}`}
                    type="button"
                    role="tab"
                    aria-selected={active}
                    aria-controls={`${baseId}-panel`}
                    tabIndex={active ? 0 : -1}
                    onClick={() => selectTab(t.id)}
                    onKeyDown={onTabKeyDown}
                    className={[
                      "min-w-0 flex-1 rounded-full px-2 py-2.5 text-center font-heading text-[15px] font-bold leading-tight transition-colors duration-150 sm:px-4 sm:text-lg",
                      "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper",
                      active ? "bg-copper text-white shadow-sm" : "text-charcoal/70 hover:bg-white hover:text-charcoal",
                    ].join(" ")}
                  >
                    {t.label}
                  </button>
                );
              })}
            </div>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-charcoal/70 transition-colors hover:bg-cream hover:text-charcoal focus-visible:outline-2 focus-visible:outline-copper"
            >
              <svg aria-hidden="true" viewBox="0 0 24 24" className="h-6 w-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>
          </div>
          <p className="px-1 pb-2.5 pt-2 text-[13px] leading-snug text-charcoal/65 sm:text-sm">
            {tab === "sails"
              ? `GALE Commercial 95 shade fabric, ${data ? data.SAIL_COLORS.length : 22} colors. Tap a color to see its stats.`
              : `Cardinal powder coat for your posts, ${data ? data.POST_COLORS.length : 137} finishes. Tap a color to see its stats.`}
          </p>
        </div>

        {/* Scrolling body */}
        <div
          ref={scrollRef}
          id={`${baseId}-panel`}
          role="tabpanel"
          aria-labelledby={`${baseId}-tab-${tab}`}
          aria-busy={!data && !failed}
          className="min-h-0 flex-1 overflow-y-auto overscroll-contain bg-cream/40 px-3 py-4 sm:px-5 sm:py-5"
        >
          {failed ? (
            <p className="py-16 text-center text-charcoal/70">
              The colors did not load. Please close this and try again.
            </p>
          ) : !data ? (
            <SkeletonGrid />
          ) : sail ? (
            <SailDetails c={sail} titleId={`${baseId}-detail-title`} onBack={backToGrid} fabric={data.SAIL_FABRIC} />
          ) : post ? (
            <PostDetails c={post} titleId={`${baseId}-detail-title`} onBack={backToGrid} />
          ) : tab === "sails" ? (
            <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
              {data.SAIL_COLORS.map((c) => (
                <li key={c.id}>
                  <ColorCard
                    domId={`${baseId}-card-${c.id}`}
                    chip={sailChipStyle(c)}
                    friendly={c.friendlyName}
                    official={c.officialName}
                    code={`GALE ${c.code}`}
                    stat={c.statLine}
                    onOpen={() => openDetails(c.id)}
                  />
                </li>
              ))}
            </ul>
          ) : (
            <div className="space-y-7">
              {data.POST_GROUPS.map((g) => {
                const items = data.POST_COLORS.filter((c) => c.group === g.id);
                if (items.length === 0) return null;
                return (
                  <section key={g.id} aria-labelledby={`${baseId}-group-${g.id}`}>
                    <h3
                      id={`${baseId}-group-${g.id}`}
                      className="mb-2.5 px-0.5 text-xs font-semibold uppercase tracking-widest text-copper"
                    >
                      {g.title}
                    </h3>
                    <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6">
                      {items.map((c) => (
                        <li key={c.id}>
                          <ColorCard
                            domId={`${baseId}-card-${c.id}`}
                            chip={postChipStyle(c)}
                            friendly={c.friendlyName}
                            official={c.officialName}
                            code={c.code}
                            stat={c.statLine}
                            onOpen={() => openDetails(c.id)}
                          />
                        </li>
                      ))}
                    </ul>
                  </section>
                );
              })}
            </div>
          )}
        </div>

        <div className="shrink-0 border-t border-charcoal/10 bg-white px-4 py-2.5 text-center text-xs text-charcoal/60">
          Screen colors are approximate.
        </div>
      </div>
    </div>
  );

  return createPortal(dialog, document.body);
}

// ---------- pieces ----------

function ColorCard({
  domId,
  chip,
  friendly,
  official,
  code,
  stat,
  onOpen,
}: {
  domId: string;
  chip: CSSProperties;
  friendly: string;
  official: string;
  code: string;
  stat: string;
  onOpen: () => void;
}) {
  const parts = stat.split(" · ");
  return (
    <button
      id={domId}
      type="button"
      onClick={onOpen}
      className="group flex h-full w-full flex-col rounded-xl border border-charcoal/10 bg-white p-1.5 text-left shadow-sm transition-[border-color,box-shadow] duration-150 hover:border-copper/60 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper sm:p-2"
    >
      <span
        aria-hidden="true"
        className="block aspect-[4/3] w-full rounded-lg ring-1 ring-inset ring-black/10"
        style={chip}
      />
      <span className="flex flex-1 flex-col px-0.5 pt-2">
        <span className="font-heading text-[14px] font-bold leading-tight text-charcoal sm:text-[15px]">{friendly}</span>
        <span className="mt-1 text-[10.5px] leading-snug text-charcoal/50 sm:text-[11px]">
          {official !== friendly ? <span className="block">{official}</span> : null}
          <span className="block whitespace-nowrap tracking-wide">{code}</span>
        </span>
        <span className="mt-1 text-[11px] leading-snug text-charcoal/75 sm:text-xs">
          {parts.map((p) => (
            <span key={p} className="block">
              {p}
            </span>
          ))}
        </span>
        <span className="mt-auto pt-1.5 text-[11px] font-semibold text-copper underline-offset-2 group-hover:underline sm:text-xs">
          See details
        </span>
      </span>
    </button>
  );
}

function SkeletonGrid() {
  return (
    <ul className="grid grid-cols-3 gap-2 sm:grid-cols-4 sm:gap-3 lg:grid-cols-6" aria-hidden="true">
      {Array.from({ length: 12 }).map((_, i) => (
        <li key={i} className="h-44 animate-pulse rounded-xl bg-white/80" />
      ))}
    </ul>
  );
}

const GALE_PROFILE = "GALE Commercial 95 product profile, Rev.18 08/23 (AS 4174:2018)";
const GALE_GENERAL = "GALE Commercial 95 product profile, applies to all colors";
const GALE_CHART = "GALE Commercial NinetyFive color chart";
const CARDINAL_KEY = "Cardinal color card, product code key";
const CARDINAL_CARD = "Cardinal Powder Coatings color card";

function BackButton({ onBack }: { onBack: () => void }) {
  return (
    <button
      type="button"
      onClick={onBack}
      className="mb-4 inline-flex items-center gap-1.5 rounded-full border border-charcoal/15 bg-white px-4 py-2 text-sm font-semibold text-charcoal transition-colors hover:border-copper hover:text-copper focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-copper"
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 18l-6-6 6-6" />
      </svg>
      Back to all colors
    </button>
  );
}

function StatRow({ label, hint, value, source }: { label: string; hint?: string; value: ReactNode; source: string }) {
  return (
    <div className="grid grid-cols-[minmax(0,1fr)_auto] gap-x-4 gap-y-0.5 border-b border-charcoal/10 py-3 last:border-b-0">
      <dt className="text-sm font-semibold text-charcoal">
        {label}
        {hint ? <span className="block text-xs font-normal text-charcoal/60">{hint}</span> : null}
      </dt>
      <dd className="text-right font-heading text-base font-bold text-charcoal sm:text-lg">{value}</dd>
      <dd className="col-span-2 text-[11px] leading-snug text-charcoal/45">Source: {source}</dd>
    </div>
  );
}

function DetailsLayout({
  chip,
  titleId,
  friendly,
  official,
  onBack,
  children,
}: {
  chip: CSSProperties;
  titleId: string;
  friendly: string;
  official: ReactNode;
  onBack: () => void;
  children: ReactNode;
}) {
  return (
    <div className="mx-auto max-w-4xl">
      <BackButton onBack={onBack} />
      <div className="grid gap-5 md:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] md:gap-8">
        <div>
          <div aria-hidden="true" className="aspect-[16/9] w-full rounded-2xl shadow-md ring-1 ring-inset ring-black/10 md:aspect-[4/3]" style={chip} />
          <h3 id={titleId} tabIndex={-1} className="mt-4 font-heading text-2xl font-bold text-charcoal outline-none sm:text-3xl">
            {friendly}
          </h3>
          <p className="mt-1 text-sm text-charcoal/60">{official}</p>
        </div>
        <dl className="rounded-2xl border border-charcoal/10 bg-white px-4 sm:px-5">{children}</dl>
      </div>
    </div>
  );
}

function SailDetails({
  c,
  titleId,
  onBack,
  fabric,
}: {
  c: SailColor;
  titleId: string;
  onBack: () => void;
  fabric: ColorsModule["SAIL_FABRIC"];
}) {
  return (
    <DetailsLayout
      chip={sailChipStyle(c)}
      titleId={titleId}
      friendly={c.friendlyName}
      official={
        <>
          GALE Pacific Commercial 95 · {c.officialName} · <span className="whitespace-nowrap">Code {c.code}</span>
        </>
      }
      onBack={onBack}
    >
      <StatRow label="UV block" hint="Share of UV rays the fabric blocks" value={c.uvrBlock} source={GALE_PROFILE} />
      <StatRow label="Shade factor" hint="Share of UV and visible light blocked" value={c.shadeFactor} source={GALE_PROFILE} />
      <StatRow label="UVR transmission" value={c.uvrTransmission} source={GALE_PROFILE} />
      <StatRow label="UV-vis transmission" value={c.uvVisTransmission} source={GALE_PROFILE} />
      <StatRow label="Cover factor" value={c.coverFactor} source={GALE_PROFILE} />
      <StatRow label="UV effectiveness (UVE)" value={c.uve} source={GALE_PROFILE} />
      <StatRow label="Protection category" value={c.protection} source={GALE_PROFILE} />
      <StatRow label="Fabric UV warranty" value={fabric.warrantyShort} source={GALE_GENERAL} />
      <StatRow label="Fabric" value={fabric.fabricShort} source={GALE_GENERAL} />
      <StatRow label="Color codes" value={`${c.code} (FR ${c.frCode})`} source={GALE_CHART} />
    </DetailsLayout>
  );
}

function SheenMeter({ level }: { level: number }) {
  const pct = Math.round((level / 9) * 100);
  return (
    <div className="mt-2 w-full">
      <div className="relative h-2 rounded-full bg-gradient-to-r from-charcoal/15 via-charcoal/10 to-white ring-1 ring-inset ring-charcoal/15">
        <span
          className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2 border-white bg-copper shadow"
          style={{ left: `${pct}%` }}
        />
      </div>
      <div className="mt-1.5 flex justify-between text-[11px] text-charcoal/55">
        <span>Matte</span>
        <span>Glossy</span>
      </div>
    </div>
  );
}

function PostDetails({ c, titleId, onBack }: { c: PostColor; titleId: string; onBack: () => void }) {
  return (
    <DetailsLayout
      chip={postChipStyle(c)}
      titleId={titleId}
      friendly={c.friendlyName}
      official={
        <>
          Cardinal · {c.officialName} · <span className="whitespace-nowrap">Code {c.code}</span>
        </>
      }
      onBack={onBack}
    >
      <StatRow label="Finish" value={c.surface} source={CARDINAL_KEY} />
      <StatRow
        label="Gloss"
        hint="Higher numbers look shinier"
        value={
          <span className="inline-flex flex-col items-end">
            {c.gloss}
            <span className="w-32 sm:w-40">
              <SheenMeter level={c.glossLevel} />
            </span>
          </span>
        }
        source={CARDINAL_KEY}
      />
      <StatRow label="Cure / UV resistance" value={c.cure} source={CARDINAL_KEY} />
      <StatRow label="Powder type" value={c.powder} source={CARDINAL_KEY} />
      {c.cardinalNote ? (
        <StatRow
          label="Cardinal note"
          value={<span className="block max-w-[15rem] text-left text-sm font-normal leading-snug sm:max-w-xs">{c.cardinalNote}</span>}
          source={CARDINAL_CARD}
        />
      ) : null}
    </DetailsLayout>
  );
}
