import WelcomeSheet from "@/components/welcome/WelcomeSheet";
import WelcomeContent from "@/components/welcome/WelcomeContent";

// SAUCE-313 (CTA v3.1 S2.3): a client-side navigation to /welcome (every form
// on the site ends in router.push("/welcome")) is intercepted here, so /welcome
// slides up as a sheet OVER the page the buyer was on. Same URL, same content
// as app/welcome/page.tsx; Back or the close button returns them to the page.
export default function WelcomeSheetRoute() {
  return (
    <WelcomeSheet>
      <WelcomeContent mode="sheet" />
    </WelcomeSheet>
  );
}
