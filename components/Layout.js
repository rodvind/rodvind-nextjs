import { useEffect } from "react";
import NavHeader from "./NavHeader";
import Footer from "./Footer";

export default function Layout({ children }) {
  useEffect(() => {
    const sections = document.querySelectorAll('.fade-section');
    if (!sections.length) return;
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('is-visible'); io.unobserve(e.target); } });
    }, { threshold: 0.15 });
    sections.forEach(s => io.observe(s));
    return () => io.disconnect();
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-2 focus:z-[200] focus:px-4 focus:py-2 focus:bg-[#3b82f6] focus:text-white focus:rounded-b focus:font-semibold focus:no-underline">
        Skip to main content
      </a>
      <NavHeader />
      <main id="main-content" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  );
}
