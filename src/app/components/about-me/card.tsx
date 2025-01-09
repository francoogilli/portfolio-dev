import Image from "next/image";
import { AnimateEnter } from "../hero-section/animate-enter";
import { Icons } from "@/app/icons/icons";

export function Card() {
  return (
    <div className="relative flex flex-col gap-8 w-full max-w-4xl">
      <AnimateEnter delay={0.6}>
        <h1 className="font-geist flex justify-center gap-4 items-center mx-auto max-w-2xl text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#ffffff] to-[#afaeae] leading-tight tracking-tight md:text-5xl">
          <Icons.user className="size-10 text-[#e1e1e1]" />
          Sobre mí
        </h1>
      </AnimateEnter>
      <div className="flex flex-col gap-y-8 items-center justify-center">
        <p className="font-geist text-lg font-normal text-start leading-[1.5] text-[#c4c4c4]">
          Después de completar la escuela Secundaria, decidí seguir mi pasión
          por la programación. Me inscribí en la carrera de Técnico en
          Programación, donde profundicé en el mundo del Desarrollo Web.
        </p>
        <p className="font-geist text-lg font-normal text-start leading-[1.5] text-[#c4c4c4]">
          Me apasiona resolver problemas en programación y disfruto la
          satisfacción de encontrar soluciones. Manejo tecnologías de Frontend y
          Backend, trabajando con arquitectura MVC en .NET, integración de APIs
          externas y bases de datos.
        </p>
      </div>
      <div className="flex items-center justify-center gap-3 pt-6">
        <Image
          src="/franco.png"
          alt="Rodz's profile image"
          width={40}
          height={40}
          className="rounded-full object-cover"
        />
        <div className="flex flex-col">
          <a
            href="https://x.com/guilherme_rodz"
            target="_blank"
            rel="noopener noreferrer"
            className="font-geist text-base font-medium text-neutral-300 leading-none duration-300"
          >
            Franco Gilli
          </a>
          <span className="font-geist text-neutral-400">
            Córdoba, Argentina
          </span>
        </div>
      </div>
    </div>
  );
}
