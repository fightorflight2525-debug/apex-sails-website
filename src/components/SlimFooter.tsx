import Link from "next/link";

// SAUCE-313 (CTA v3 hallway): the slim footer for /free-design and /welcome.
// No menu, no badges: every link is an exit mid-hallway. Legal links stay.
// Its own file so the /welcome sheet (which covers the page's footer) can end
// with the same footer.
export default function SlimFooter() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-8">
        <div className="flex flex-col items-center justify-center gap-3 text-xs text-gray-500 text-center">
          <span>
            &copy; {new Date().getFullYear()} Apex Sail Shades. Installed by licensed, insured crews.
          </span>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-gray-300 transition-colors duration-200">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-300 transition-colors duration-200">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
