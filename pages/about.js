import Head from "next/head";
import Image from "next/image";

export default function About() {
  return (
    <>
      <Head>
        <title>About — Rodvin</title>
        <meta name="description" content="About Rodvin Danaei, full-stack developer and cloud advocate." />
        <meta property="og:title" content="About — Rodvin" />
        <meta property="og:description" content="About Rodvin Danaei, full-stack developer and cloud advocate." />
      </Head>
    <section className="bg-[#1e293b] py-8 sm:py-12 px-4 sm:px-6 min-h-[60vh]">
      <div className="max-w-3xl mx-auto flex flex-wrap gap-6 sm:gap-8 items-start">
        <div className="shrink-0 w-[120px] h-[130px] sm:w-[120px] sm:h-[130px]">
          <Image
            src="/static/rod.jpeg"
            alt="Rodvin Danaei"
            width={120}
            height={130}
            className="rounded-full object-cover w-full h-full max-w-[100px] max-h-[110px] sm:max-w-[120px] sm:max-h-[130px]"
          />
        </div>
        <div className="pt-4 sm:pt-6 flex-1 min-w-0">
          <h1 className="text-slate-50 text-2xl mb-4">About me</h1>
          <p className="text-slate-200 leading-relaxed">
            Hi, I&apos;m Rodvin Danaei, a previous geneticist falling in love with programming and now a Full-stack Developer, cloud advocate, data scientist, gamer, and a die-hard fan of all kinds of outdoor activities.
          </p>
        </div>
      </div>
    </section>
    </>
  );
}
