import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/router";

const navLinkBase = "nav-link-next no-underline py-2 px-1 min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]";
const navLinkDefault = "text-[#e2e8f0] hover:text-[#f8fafc]";
const navLinkActive = "text-[#93c5fd] font-semibold nav-link-next-active";

export default function NavHeader() {
  const router = useRouter();
  const path = router.asPath ?? router.pathname ?? "";
  const isHome = path === "/" || path === "";
  const isAbout = path === "/about" || path.startsWith("/about");
  const isResume = path === "/resume" || path.startsWith("/resume");
  const isWork = path === "/work" || path.startsWith("/work");

  return (
    <nav className="sticky top-0 z-50 flex flex-wrap items-center justify-between gap-3 bg-[#0f172a] px-4 py-2 text-center sm:px-6 shadow-[0_1px_3px_rgba(0,0,0,0.3)]" suppressHydrationWarning>
      <Link href="/" className="inline-flex focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] rounded">
        <Image src="/logo.svg" alt="Rodvin — Home" width={50} height={50} priority />
      </Link>
      <div className="flex gap-4 sm:gap-6">
        <Link href="/" className={`${navLinkBase} ${isHome ? navLinkActive : navLinkDefault}`} aria-current={isHome ? "page" : undefined}>Home</Link>
        <Link href="/about" className={`${navLinkBase} ${isAbout ? navLinkActive : navLinkDefault}`} aria-current={isAbout ? "page" : undefined}>About</Link>
        <Link href="/resume" className={`${navLinkBase} ${isResume ? navLinkActive : navLinkDefault}`} aria-current={isResume ? "page" : undefined}>Resume</Link>
        <Link href="/work" className={`${navLinkBase} ${isWork ? navLinkActive : navLinkDefault}`} aria-current={isWork ? "page" : undefined}>Work</Link>
      </div>
    </nav>
  );
}
