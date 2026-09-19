import CountUp from "@/components/CountUp";
import { UvIcon, ThermometerIcon, WindIcon, ShieldIcon } from "@/components/icons";

// ============================================================================
// /welcome stat line (S1.4): ONE compact line right under the badge, with the
// /residential icons and the counters spinning up. Compact on purpose (it must
// not push "What should I expect?" off the first phone screen).
// Temperature: "30°F" with the label "cooler surfaces" (S2.6, one number).
// S314 (his ruling): the 15-year warranty leads, far left ("people read left to
// right; the warranty is a trust builder"), then 96 / 30 / 90 in his order.
// "Center everything properly": four equal columns; icon, number and label
// stacked on ONE centre line per column; every label on one line at 390 px
// (the row borrows 12 px of the page gutter each side on a phone, where
// "cooler surfaces" needs ~88 px). Rendered in PAGE mode only (S314 D1).
// ============================================================================

const STATS = [
  { Icon: ShieldIcon, to: 15, suffix: "-year", label: "warranty" },
  { Icon: UvIcon, to: 96, suffix: "%", label: "UV block" },
  { Icon: ThermometerIcon, to: 30, suffix: "°F", label: "cooler surfaces" },
  { Icon: WindIcon, to: 90, suffix: " mph", label: "wind rating" },
];

export default function StatLine() {
  return (
    <ul className="-mx-3 mt-3 grid grid-cols-4 divide-x divide-white/15 sm:mx-auto sm:max-w-lg">
      {STATS.map(({ Icon, to, suffix, label }) => (
        <li key={label} className="flex min-w-0 flex-col items-center px-0.5 text-center">
          <Icon className="h-[22px] w-[22px] shrink-0 text-copper sm:h-6 sm:w-6" />
          <span className="mt-1 whitespace-nowrap font-heading text-[17px] font-bold leading-6 text-white sm:text-xl">
            <CountUp to={to} suffix={suffix} duration={1.6} />
          </span>
          <span className="mt-0.5 whitespace-nowrap text-[12px] leading-tight text-white/75 sm:text-[13px]">{label}</span>
        </li>
      ))}
    </ul>
  );
}
