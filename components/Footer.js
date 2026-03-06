import SocialIcons from "./SocialIcons.js";

export default function Footer() {
  return (
    <footer className="bg-[#0f172a] text-center py-8 px-4 flex flex-col items-center justify-center mt-auto">
      <SocialIcons
        className="flex gap-3 sm:gap-4 mb-2"
        linkClassName="text-[#94a3b8] hover:text-[#e2e8f0] py-2 px-2 min-h-[44px] min-w-[44px] inline-flex items-center justify-center rounded focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6]"
      />
      <p className="text-[#64748b] text-sm font-sans" suppressHydrationWarning>Created by Rodvin Danaei © {new Date().getFullYear()}</p>
    </footer>
  );
}
