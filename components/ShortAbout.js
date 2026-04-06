import Link from "next/link";

export default function ShortAbout() {
  return (
    <section id="about_me" className="fade-section bg-[#1e293b] py-8 sm:py-12 px-4 sm:px-6">
      <div className="max-w-[42rem] mx-auto text-center">
        <p className="text-[#e2e8f0] text-lg leading-relaxed mb-4">
          Full-stack developer and cloud architect with 7+ years of experience. Former geneticist who pivoted to software engineering — now specializing in frontend architecture, microservices, and AI-augmented development.
        </p>
        <Link href="/about" className="text-[#38bdf8] font-semibold hover:underline">
          More about me →
        </Link>
      </div>
    </section>
  );
}
