import Link from "next/link";
import { work } from "@/data/work";

const featured = work.slice(0, 3);

export default function FeaturedWork() {
  return (
    <section className="fade-section py-8 sm:py-12 px-4 sm:px-6 bg-[#f8fafc]">
      <div className="max-w-[42rem] mx-auto">
        <h2 className="text-xl font-semibold mb-5 text-slate-800 border-b-2 border-[#3b82f6] pb-2 inline-block">
          Featured work
        </h2>
        <ul className="list-none m-0 p-0 mb-6 space-y-4">
          {featured.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-3 rounded-md bg-white border border-slate-200 text-slate-800 no-underline hover:border-[#3b82f6] hover:shadow-md transition-shadow"
              >
                <strong className="block mb-1">{item.title}</strong>
                <span className="text-sm text-slate-600">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <Link href="/work" className="text-[#3b82f6] font-semibold hover:underline">
          See all work →
        </Link>
      </div>
    </section>
  );
}
