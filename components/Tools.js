import { tools } from "@/data/tools";
import Image from "next/image";

export default function Tools() {
  return (
    <div className="flex flex-wrap gap-2">
      {tools.map((t) => (
        <a
          key={t.name}
          href={t.link}
          target="_blank"
          rel="noopener noreferrer"
          title={t.name}
          className="inline-block p-1 rounded hover:scale-125 transition-transform duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#3b82f6] motion-reduce:transform-none"
        >
          <Image src={t.icon} alt={t.name} width={50} height={50} className="m-1.5 block" />
        </a>
      ))}
    </div>
  );
}
