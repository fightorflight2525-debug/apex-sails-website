import fs from "node:fs";
import path from "node:path";
import LoopVideo from "@/components/welcome/LoopVideo";

// ============================================================================
// The ShadeCast loop on /welcome (S1.4 b, S3.B). The clip itself is made by a
// separate producer (contract S6) into public/media/shadecast/. This checks, at
// BUILD time, that all three files are there; if they are not, it renders a
// poster-less placeholder of the same aspect ratio so the build still passes
// (the next build after the files land picks the real clip up by itself).
// The aspect ratio is read from the poster's own WebP header (no layout shift).
// ============================================================================

const DIR = path.join(process.cwd(), "public", "media", "shadecast");
const FILES = { mp4: "shadecast-loop.mp4", webm: "shadecast-loop.webm", poster: "shadecast-poster.webp" };
const LABEL = "ShadeCast simulation of the shade moving across a backyard, hour by hour";

function webpSize(buf: Buffer): { w: number; h: number } | null {
  if (buf.length < 30 || buf.toString("ascii", 0, 4) !== "RIFF" || buf.toString("ascii", 8, 12) !== "WEBP") return null;
  const chunk = buf.toString("ascii", 12, 16);
  if (chunk === "VP8X") return { w: 1 + buf.readUIntLE(24, 3), h: 1 + buf.readUIntLE(27, 3) };
  if (chunk === "VP8 ") return { w: buf.readUInt16LE(26) & 0x3fff, h: buf.readUInt16LE(28) & 0x3fff };
  if (chunk === "VP8L") {
    const b1 = buf[22], b2 = buf[23], b3 = buf[24];
    return { w: 1 + (((b1 & 0x3f) << 8) | buf[21]), h: 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6)) };
  }
  return null;
}

function clip(): { w: number; h: number } | null {
  try {
    if (!Object.values(FILES).every((f) => fs.existsSync(path.join(DIR, f)))) return null;
    return webpSize(fs.readFileSync(path.join(DIR, FILES.poster))) ?? { w: 1080, h: 1350 };
  } catch {
    return null;
  }
}

export default function ShadeCastLoop() {
  const size = clip();
  if (size) {
    return (
      <LoopVideo
        mp4={`/media/shadecast/${FILES.mp4}`}
        webm={`/media/shadecast/${FILES.webm}`}
        poster={`/media/shadecast/${FILES.poster}`}
        width={size.w}
        height={size.h}
        label={LABEL}
      />
    );
  }
  // Placeholder (clip not delivered yet): same 4:5 frame, no poster, no words.
  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#e9dfcc] via-cream to-[#e4d6bf]" style={{ aspectRatio: "4 / 5" }} aria-hidden="true">
      <svg className="absolute inset-0 h-full w-full text-charcoal/[0.07]" viewBox="0 0 400 500" fill="none" preserveAspectRatio="xMidYMid slice">
        <path d="M60 390 L200 120 L340 330 Z" stroke="currentColor" strokeWidth="3" />
        <path d="M95 370 L210 165 L318 320 Z" stroke="currentColor" strokeWidth="1.5" />
      </svg>
      <svg className="absolute left-1/2 top-[22%] h-14 w-14 -translate-x-1/2 text-copper/40" viewBox="0 0 40 40" fill="none" aria-hidden="true">
        <circle cx="20" cy="20" r="7" stroke="currentColor" strokeWidth="2" />
        {[0, 45, 90, 135, 180, 225, 270, 315].map((a) => {
          const r = (a * Math.PI) / 180;
          return (
            <line key={a} x1={20 + Math.cos(r) * 11} y1={20 + Math.sin(r) * 11} x2={20 + Math.cos(r) * 15} y2={20 + Math.sin(r) * 15} stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          );
        })}
      </svg>
      <div className="absolute inset-x-6 bottom-6 h-1.5 overflow-hidden rounded-full bg-charcoal/10">
        <div className="h-full w-1/3 rounded-full bg-copper/35" />
      </div>
    </div>
  );
}
