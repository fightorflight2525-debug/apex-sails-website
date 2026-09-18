import CountUp from "@/components/CountUp";
import { UvIcon, ThermometerIcon, WindIcon, ShieldIcon } from "@/components/icons";

// ============================================================================
// /welcome stat line (S1.4): ONE compact line right under the badge, with the
// /residential icons and the counters spinning up. Compact on purpose (it must
// not push "What should I expect?" off the first phone screen).
// Temperature: "30°F" with the label "cooler surfaces" (S2.6, one number).
// ============================================================================

const STATS = [
  { Icon: UvIcon, to: 96, suffix: "%", label: "UV block" },
  { Icon: ThermometerIcon, to: 30, suffix: "°F", label: "cooler surfaces" },
  { Icon: WindIcon, to: 90, suffix: " mph", label: "wind rating" },
  { Icon: ShieldIcon, to: 15, suffix: "-year", label: "warranty" },
];

export default function StatLine() {
  return (
    <ul className="mx-auto mt-3 grid max-w-lg grid-cols-4 divide-x divide-white/15">
      {STATS.map(({ Icon, to, suffix, label }) => (
        <li key={label} className="flex min-w-0 flex-col items-center px-1 text-center">
          <span className="flex items-center gap-1">
            <Icon className="h-[18px] w-[18px] shrink-0 text-copper sm:h-5 sm:w-5" />
            <span className="whitespace-nowrap font-heading text-[17px] font-bold leading-6 text-white sm:text-xl">
              <CountUp to={to} suffix={suffix} duration={1.6} />
            </span>
          </span>
          <span className="mt-0.5 text-[12.5px] leading-tight text-white/75 sm:text-[13px]">{label}</span>
        </li>
      ))}
    </ul>
  );
}
