import type { ReactNode } from "react";
import { CTA_LABEL } from "@/lib/cta";

// The uniform offer label (CTA_LABEL, his words) with ONE allowed line break:
// where a button is too narrow for one line it reads
//   "Get my free 3D design +"
//   "FINAL price"
// never "... + FINAL" / "price" or "3D" / "design". Text content is unchanged.
// One wrapping box, so inside a flex button the space between the halves stays.
const CUT = CTA_LABEL.indexOf(" FINAL");
const HEAD = CTA_LABEL.slice(0, CUT);
const TAIL = CTA_LABEL.slice(CUT + 1);

export default function CtaText({ suffix }: { suffix?: ReactNode }) {
  return (
    <span className="inline-block">
      <span className="whitespace-nowrap">{HEAD}</span>{" "}
      <span className="whitespace-nowrap">
        {TAIL}
        {suffix}
      </span>
    </span>
  );
}
