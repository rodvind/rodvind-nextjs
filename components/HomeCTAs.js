import Link from "next/link";

export default function HomeCTAs() {
  return (
    <section className="fade-section py-8 sm:py-12 px-4 sm:px-6 bg-[#0f172a] text-center">
      <div className="max-w-[42rem] mx-auto flex flex-wrap gap-4 justify-center">
        <Link
          href="/resume"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md font-semibold bg-[#3b82f6] text-white no-underline hover:opacity-90 transition-opacity"
        >
          View full resume
        </Link>
        <Link
          href="/work"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md font-semibold border-2 border-slate-500 text-slate-200 bg-transparent no-underline hover:border-slate-400 hover:text-slate-100 transition-colors"
        >
          See all work
        </Link>
        <a
          href="mailto:hello@rodvin.com"
          className="inline-flex items-center justify-center min-h-[44px] px-6 py-3 rounded-md font-semibold border-2 border-slate-500 text-slate-200 bg-transparent no-underline hover:border-slate-400 hover:text-slate-100 transition-colors"
        >
          Get in touch
        </a>
      </div>
    </section>
  );
}
