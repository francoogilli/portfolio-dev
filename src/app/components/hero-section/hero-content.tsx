"use client";

import { AnimateEnter } from "./animate-enter";
import { TextAnimateEnter } from "./text-animate-enter";
import Image from "next/image";
import { ButtonGlitchBrightness } from "./button-glitch-brightness";
import { Icons } from "@/app/icons/icons";

export default function HeroContent() {
  return (
    <div className="z-[3] flex flex-col items-center gap-5 text-center pt-20">
      <AnimateEnter>
        <Image
          src="/franco.png"
          className="mx-auto size-[110px] rounded-full mb-6 border-[5px] border-[#ffffff18] hover:border-[#ffffff38] duration-500"
          alt="profile"
          draggable={false}
          width={200}
          height={200}
        />
        <h2 className="font-poppins text-7xl font-bold text-white pb-2">
          Hey, soy Franco
        </h2>
      </AnimateEnter>
      <AnimateEnter delay={0.1}>
        <TextAnimateEnter
          text={`Mi nombre es Franco Gilli, vivo en San Francisco, Córdoba, Argentina. Frontend developer. Especializado en interfaces modernas y funcionales.`}
          className="font-geist text-lg text-[#bebebe]"
          containerClassName="max-w-2xl mx-auto"
          duration={0.6}
        />
      </AnimateEnter>
      <AnimateEnter
        className="flex flex-wrap items-center justify-center gap-2"
        delay={0.5}
      >
        <ButtonGlitchBrightness href="https://www.linkedin.com/in/franco-gilli/" text="LinkedIn" Icon={Icons.linkedin} />
        <a
          href="https://github.com/francoogilli/"
          target="_blank"
          rel="noopener noreferrer"
          className="font-geist flex items-center gap-1.5 rounded-xl border border-border bg-background px-4 py-2 text-base font-semibold text-secondary duration-300 hover:bg-neutral-900"
        >
          <Icons.github className="h-3.5 w-3.5" />
          Github
        </a>
      </AnimateEnter>
    </div>
  );
}
