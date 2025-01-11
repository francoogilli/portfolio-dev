import { Icons } from "@/app/icons/icons";
import { AnimateEnter } from "../hero-section/animate-enter";
import Image from "next/image";
import { ButtonGlitchBrightness } from "../hero-section/button-glitch-brightness";

const projects = [
  {
    id: 1,
    title: "Biblia - Descubre la Palabra de Dios gratis.",
    description:
      "Biblioteca de logos SVG de las marcas más populares. +10k visitas al mes. +2K svgs descargados. Creado desde cero con Next.js, React y Tailwind CSS.",
    image: "/bible.webp",
    alt: "Recién llegado vs 5 años en Nueva Zelanda",
    tags: [
      { Icon: Icons.nextjs, label: "Next.js" },
      { Icon: Icons.tailwind, label: "tailwindcss" },
    ],
    links: {
      code: "https://github.com/francoogilli/bible",
      preview: "https://la-biblia.vercel.app/",
    },
  },

  {
    id: 2,
    title: "Resources Dev - Recursos para desarrolladores",
    description:
      "Es un sitio web de recursos para desarrolladores, la página tiene recursos desde Frontend hasta Backend y Testing, también cuenta con recursos de Visual Studio Code.",
    image: "/resources.webp",
    alt: "Recién llegado vs 5 años en Nueva Zelanda",
    tags: [
      { Icon: Icons.nextjs, label: "Next.js" },
      { Icon: Icons.tailwind, label: "tailwindcss" },
    ],
    links: {
      code: "https://github.com/francoogilli/devresources",
      preview: "https://resourcesdev.vercel.app/",
    },
  },
  {
    id: 3,
    title: "Weather App - Pronóstico del clima detallado.",
    description:
      "La aplicación del tiempo ofrece información actualizada sobre el clima con pronósticos detallados y destacados del día. También cuenta con un pronóstico para el semanal.",
    image: "/weather.webp",
    alt: "Recién llegado vs 5 años en Nueva Zelanda",
    tags: [
      { Icon: Icons.nextjs, label: "Next.js" },
      { Icon: Icons.tailwind, label: "tailwindcss" },
    ],
    links: {
      code: "https://github.com/francoogilli/weather",
      preview: "https://cleansky.vercel.app/",
    },
  },
  {
    id: 4,
    title: "Dona 3D - Sitio para empresa de impresion 3D",
    description:
      "Sitio web para una empresa de Impresion 3D, a su vez el sitio cuenta con una landing page. Tambien cuenta con una galeria de los productos que ofrece la empresa.",
    image: "/dona.webp",
    alt: "Recién llegado vs 5 años en Nueva Zelanda",
    tags: [
      { Icon: Icons.nextjs, label: "Next.js" },
      { Icon: Icons.tailwind, label: "tailwindcss" },
    ],
    links: {
      code: "https://github.com/francoogilli/dona3d",
      preview: "https://dona3d.vercel.app/",
    },
  },
];

export function ProjectsSection() {
  return (
    <section className="relative z-[4] mt-40">
      <div className="relative overflow-hidden rounded-t-3xl border-t border-border pt-20">
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/2 top-0 h-px w-1/2 max-w-[1000px] -translate-x-1/2 -translate-y-1/2 bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent"
        />
        <div
          aria-hidden="true"
          className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[200px] -translate-x-1/2 -translate-y-1/2 md:max-w-[400px]"
          style={{
            background:
              "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
          }}
        />
        <div className="flex flex-col items-center justify-center gap-12">
          <AnimateEnter delay={0.6}>
            <h1 className="font-geist flex items-center gap-4 pb-4 mx-auto max-w-2xl text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#efefef] to-[#afaeae] leading-tight tracking-tight md:text-5xl">
              <Icons.fold className="size-10 text-[#e1e1e1]" />
              Proyectos
            </h1>
          </AnimateEnter>
          <AnimateEnter delay={0.6}>
            {projects.map((project) => (
              <article
                key={project.id}
                className="flex flex-col mb-24 space-x-0 max-w-4xl space-y-8 md:flex-row md:space-x-8 md:space-y-0"
              >
                <div className="w-full md:w-1/2 group">
                  <div className="relative flex flex-col items-center col-span-6 row-span-5 gap-8 transition duration-500 ease-in-out transform shadow-xl overflow-clip rounded-xl sm:rounded-[14px] md:group-hover:-translate-y-1 md:group-hover:shadow-2xl lg:border lg:border-[#292929] lg:hover:border-[#363636] lg:hover:bg-gray-800/50">
                    <Image
                      alt={project.alt}
                      width={500}
                      height={300}
                      className="object-cover object-top w-full h-56 transition duration-500 sm:h-full md:scale-110 md:group-hover:scale-105"
                      loading="lazy"
                      src={project.image}
                    />
                  </div>
                </div>
                <div className="w-full md:w-1/2 md:max-w-lg">
                  <h3 className="font-geist text-2xl font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap mt-2">
                    <ul className="flex flex-row mb-2 gap-x-2">
                      {project.tags.map((tag, index) => (
                        <li key={index} className="flex items-center gap-x-1.5">
                          <span className="font-geist flex justify-center items-center gap-x-2 rounded-full font-medium text-sm py-1 px-2 ">
                            <tag.Icon className="size-6" />
                            {tag.label}
                          </span>
                        </li>
                      ))}
                    </ul>
                    <div className="font-geist text-[#b5b5b5]">
                      {project.description}
                    </div>
                    <footer className="flex items-end justify-start mt-4 gap-x-4">
                      <a
                        className="font-geist flex items-center gap-2 font-medium bg-[#1f1f1f] hover:bg-[#272727] text-[#f1f1f1] px-4 py-2 rounded-xl"
                        href={project.links.code}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Icons.github className="size-4" />
                        Code
                      </a>
                      <ButtonGlitchBrightness
                        href={project.links.preview}
                        text="Preview"
                        Icon={Icons.link}
                      />
                    </footer>
                  </div>
                </div>
              </article>
            ))}
          </AnimateEnter>
        </div>
      </div>
    </section>
  );
}
