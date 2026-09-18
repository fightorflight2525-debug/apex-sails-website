// ============================================================================
// Shared outline icons (SAUCE-313). Moved verbatim out of /residential so the
// stat line on /welcome, the guarantee card on /residential and /free-design,
// and the FormV2 choices all draw from ONE set (the site's copper outline
// style). New in SAUCE-313: HomeIcon, BusinessIcon (FormV2 choices).
// ============================================================================

type P = { className?: string };

export function LicensedIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <rect x="6" y="6" width="28" height="22" rx="2" stroke="currentColor" strokeWidth="2" />
      <line x1="10" y1="13" x2="22" y2="13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <line x1="10" y1="17" x2="20" y2="17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="28" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <path d="M20 28 L20 36 L23 33 L26 36 L26 28" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
    </svg>
  );
}

export function ShieldIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 4 L32 10 L32 22 C32 30 26 36 20 38 C14 36 8 30 8 22 L8 10 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <polyline points="14,20 18,24 26,16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function BrushPencilX({ className = "" }: P) {
  // Paintbrush and pencil crossed in an X (operator sketch).
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      {/* pencil (top-left to bottom-right) */}
      <path d="M9 9 L26 26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M26 26 L30 30 L31.5 25.5 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <line x1="11.5" y1="11.5" x2="14" y2="9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      {/* paintbrush (top-right to bottom-left) */}
      <path d="M31 9 L16 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
      <path d="M16 24 L10 30 C8.5 31.5 8.5 33.5 10 33 C12 32.5 13.5 31.5 14 30 L16 24 Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
    </svg>
  );
}

export function UvIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M20 4 L32 9 L32 20 C32 28 26 33 20 36 C14 33 8 28 8 20 L8 9 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="18" r="3.5" stroke="currentColor" strokeWidth="1.8" />
      <line x1="20" y1="10" x2="20" y2="12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="12" y1="18" x2="14" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      <line x1="26" y1="18" x2="28" y2="18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export function ThermometerIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M17 8 a3 3 0 0 1 6 0 v14 a5 5 0 1 1 -6 0 Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <circle cx="20" cy="28" r="2.5" fill="currentColor" />
      <line x1="20" y1="16" x2="20" y2="26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

export function WindIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M4 15 H24 a4 4 0 1 0 -4 -4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 22 H30 a4 4 0 1 1 -4 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M4 29 H18 a3 3 0 1 0 -3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// House with a sail over the yard (FormV2 "My home").
export function HomeIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M5 19 L17 9 L29 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M8.5 16.5 V33 H25.5 V16.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="14" y="24" width="6" height="9" stroke="currentColor" strokeWidth="2" />
      <path d="M25.5 21 L36 18.5 L33 27" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="33" y1="27" x2="33" y2="33" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

// Storefront with an awning (FormV2 "My business").
export function BusinessIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 40 40" fill="none" aria-hidden="true">
      <path d="M6 15 L9 7 H31 L34 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M6 15 c0 2.5 2 4 4.7 4 s4.6-1.5 4.6-4 c0 2.5 2 4 4.7 4 s4.6-1.5 4.6-4 c0 2.5 2 4 4.7 4 S34 17.5 34 15" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <path d="M8 19.5 V33 H32 V19.5" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
      <rect x="12" y="24" width="7" height="9" stroke="currentColor" strokeWidth="2" />
      <rect x="23" y="24" width="6" height="5" stroke="currentColor" strokeWidth="2" />
    </svg>
  );
}

export function PhoneIcon({ className = "" }: P) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} aria-hidden="true">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}

export function CheckIcon({ className = "" }: P) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3} aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
    </svg>
  );
}
