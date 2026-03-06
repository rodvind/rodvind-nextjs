import Image from "next/image";
import Tools from "./Tools";

export default function Resume() {
  return (
    <section id="my_work" className="py-6 sm:py-8 px-4 sm:px-6 min-h-[80vh]">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 tracking-wider uppercase">CERTIFICATIONS</span>
          </div>
          <div className="flex-1 min-w-0">
            <a href="https://www.credly.com/badges/9cbf6658-9301-4380-9bc9-6f20277f1d1f/public_url" target="_blank" rel="noopener noreferrer" className="inline-block mr-4 mb-2">
              <Image src="/static/aws-certified-solutions-architect-associate.png" alt="AWS Solutions Architect Associate" width={80} height={80} className="h-20 w-auto max-w-full" />
            </a>
            <a href="https://www.credly.com/badges/debc0506-c300-4f21-8331-0ff07cf4a6f6/public_url" target="_blank" rel="noopener noreferrer" className="inline-block">
              <Image src="/static/project-management-professional-pmp.png" alt="PMP" width={80} height={80} className="h-20 w-auto max-w-full" />
            </a>
          </div>
        </div>
        <hr className="border-slate-200 my-6" />
        <div className="flex flex-wrap gap-4 mb-6">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 tracking-wider uppercase">WORKS</span>
          </div>
          <div className="flex-1 min-w-0 pl-6 border-l-2 border-slate-200">
            <div className="relative pb-6 pl-4">
              <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-white" />
              <div className="flex flex-col gap-0.5">
                <strong className="font-sans text-lg text-slate-800">EECOL</strong>
                <span className="text-slate-600 italic">Full-stack developer</span>
                <span className="text-sm text-slate-500">May 2019 - Present</span>
              </div>
            </div>
            <div className="relative pb-6 pl-4">
              <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-white" />
              <div className="flex flex-col gap-0.5">
                <strong className="font-sans text-lg text-slate-800">ReWatt Power</strong>
                <span className="text-slate-600 italic">Full-stack developer</span>
                <span className="text-sm text-slate-500">December 2018 - May 2019</span>
              </div>
            </div>
            <div className="relative pl-4">
              <div className="absolute -left-[1.45rem] top-1.5 w-3 h-3 rounded-full bg-[#3b82f6] border-2 border-white" />
              <div className="flex flex-col gap-0.5">
                <strong className="font-sans text-lg text-slate-800">Cenovus</strong>
                <span className="text-slate-600 italic">Engineering Information Management Technician</span>
                <span className="text-sm text-slate-500">July 2014 - May 2019</span>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-slate-200 my-6" />
        <div className="flex flex-wrap gap-4">
          <div className="w-full sm:w-36 shrink-0">
            <span className="border-b-2 border-[#3b82f6] pb-2 text-sm text-slate-800 inline-block tracking-wider uppercase">MY TOOLSET</span>
          </div>
          <div className="flex-1 min-w-0">
            <Tools />
          </div>
        </div>
      </div>
    </section>
  );
}
