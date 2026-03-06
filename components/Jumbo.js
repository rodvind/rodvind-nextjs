import Image from "next/image";
import SocialIcons from "./SocialIcons.js";

export default function Jumbo({ count = "" }) {
  return (
    <section id="home" className="min-h-[65vh] bg-[#0f172a] flex items-center justify-center text-center py-12 sm:py-16 px-4 sm:px-6">
      <div className="w-full max-w-[42rem]">
        <Image src="/static/rod.jpeg" alt="Rodvin Danaei" width={88} height={88} className="w-[88px] h-[88px] rounded-full object-cover border-[3px] border-[#334155] mx-auto mb-4" priority />
        <h1 className="text-[#f8fafc] text-4xl sm:text-5xl md:text-7xl pb-5">Hi, I&apos;m Rodvin</h1>
        <h2 className="text-[#94a3b8] mb-2 text-base font-normal">A Full stack developer</h2>
        {count && (
          <p className="text-[#94a3b8] py-2">
            and this page has been viewed <span className="text-[#38bdf8]">{count}</span> times
          </p>
        )}
        <hr className="border-[#334155] max-w-xs mx-auto my-4" />
        <SocialIcons
          className="flex gap-3 sm:gap-4 justify-center flex-wrap"
          linkClassName="text-[#e2e8f0] hover:text-[#93c5fd] py-3 px-3 min-h-[44px] min-w-[44px] rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]"
        />
      </div>
    </section>
  );
}
