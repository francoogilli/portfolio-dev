import { Icons } from "@/app/icons/icons";
import Link from "next/link";

export function GetButton() {
  return (
    <Link
      href="mailto:francogilli10@gmail.com"
      className="group relative text-[#e1e1e1] inline-flex items-center gap-1 rounded-xl px-4 py-2.5 text-sm font-semibold duration-300 bg-neutral-800 hover:bg-neutral-900 hover:text-primary"
    >
      <TextGlitch text="Contáctame" />
    </Link>
  );
}

function TextGlitch({ text }: { text: string }) {
  return (
    <div className="relative font-geist overflow-hidden">
      <span className="invisible flex items-center gap-2">
        <Icons.mail className="size-4" />
        {text}
      </span>
      <span className="absolute left-0 top-0 flex items-center gap-2 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:-translate-y-full">
        <Icons.mail className="size-4" />
        {text}
      </span>
      <span className="absolute left-0 top-0 flex translate-y-full items-center gap-2 font-semibold transition-transform duration-500 ease-in-out hover:duration-300 group-hover:translate-y-0">
        <Icons.mail className="size-4" />
        {text}
      </span>
    </div>
  );
}
