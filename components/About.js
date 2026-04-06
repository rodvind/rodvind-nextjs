import Image from "next/image";

export default function About() {
  return (
    <section id="about_me" className="bg-[#1e293b] py-6 sm:py-8 px-4 sm:px-6 min-h-[35vh]">
      <div className="max-w-3xl mx-auto flex flex-wrap gap-4 sm:gap-8 items-start">
        <div className="shrink-0 w-[120px] h-[130px] sm:w-[120px] sm:h-[130px]">
          <Image
            src="/static/rod.jpeg"
            alt="Rodvin Danaei"
            width={120}
            height={130}
            className="rounded-full object-cover w-full h-full max-w-[100px] max-h-[110px] sm:max-w-[120px] sm:max-h-[130px]"
            unoptimized
          />
        </div>
        <div className="pt-4 sm:pt-6 flex-1 min-w-0">
          <h1 className="text-[#f8fafc] mb-2">About me</h1>
          <p className="text-[#e2e8f0] leading-relaxed">
            Hi, I&apos;m Rodvin Danaei — a full-stack developer and cloud architect with 7+ years of experience modernizing enterprise applications. I pivoted from plant biotechnology (M.Sc., Wageningen University) to computer science (B.Sc., University of Calgary), and now specialize in frontend architecture, microservices design, and AI-augmented software engineering. When I&apos;m not coding, you&apos;ll find me outdoors or gaming.
          </p>
        </div>
      </div>
    </section>
  );
}
