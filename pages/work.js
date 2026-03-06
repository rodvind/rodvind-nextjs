import Head from "next/head";
import { work } from "@/data/work";
import Tools from "@/components/Tools";

export default function Work() {
  return (
    <>
      <Head>
        <title>Work — Rodvin</title>
        <meta name="description" content="Projects and tech stack." />
        <meta property="og:title" content="Work — Rodvin" />
        <meta property="og:description" content="Projects and tech stack." />
      </Head>
    <section className="py-8 sm:py-12 px-4 sm:px-6 min-h-[60vh]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-semibold mb-2 text-slate-800">Work</h1>
        <p className="text-slate-600 mb-8">Projects and things I&apos;ve built.</p>
        <ul className="list-none m-0 p-0 mb-12 space-y-4">
          {work.map((item) => (
            <li key={item.title}>
              <a
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block p-4 rounded-md bg-[#f8fafc] border border-slate-200 text-slate-800 no-underline hover:border-[#3b82f6] hover:shadow-md transition-shadow"
              >
                <strong className="block mb-1">{item.title}</strong>
                <span className="text-sm text-slate-600">{item.description}</span>
              </a>
            </li>
          ))}
        </ul>
        <h2 className="text-xl font-semibold mb-4 text-slate-800 border-b-2 border-[#3b82f6] pb-2 inline-block">
          Tech stack
        </h2>
        <Tools />
      </div>
    </section>
    </>
  );
}
