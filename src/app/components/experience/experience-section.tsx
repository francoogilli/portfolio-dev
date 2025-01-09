import { Icons } from "@/app/icons/icons";
import { AnimateEnter } from "../hero-section/animate-enter";

const experienceData = [
  {
    date: "2024 Junio - Actualidad",
    title: "Frontend Developer",
    company: "Trizap Software",
    companyUrl: "https://www.instagram.com/trizapsoftware/",
    description:
      "Development solutions for public administration using advanced technologies. In my role, I have improved development agility by implementing modern techniques, creating Typescript libraries for sharing utilities across projects, writing documentation and upgrading outdated projects to new technologies.",
  },
  {
    date: "2024 Marzo - 2024 Junio",
    title: "Desarrollador",
    company: "Estudio Novara",
    companyUrl: "",
    description:
      "Development solutions for public administration using advanced technologies. In my role, I have improved development agility by implementing modern techniques, creating Typescript libraries for sharing utilities across projects, writing documentation and upgrading outdated projects to new technologies.",
  },
];

export function ExperienceSection() {
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
            <h1 className="font-geist flex items-center gap-4 mx-auto max-w-2xl text-4xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-[#efefef] to-[#afaeae] leading-tight tracking-tight md:text-5xl">
              <Icons.job className="size-10 text-[#e1e1e1]" />
              Experiencia
            </h1>
          </AnimateEnter>
          <AnimateEnter delay={0.6}>
            <ol className="relative max-w-4xl space-y-6 border-s-2 border-neutral-800">
              {experienceData.map((experience, index) => (
                <li key={index} className="ms-5 mt-1">
                  <div
                    className={
                      "absolute -start-[6.5px] mt-2 h-3 w-3 rounded-full border  border-neutral-600 bg-neutral-800"
                    }
                  ></div>
                  <time className="font-geist mb-2 font-mono text-lg font-normal leading-none text-neutral-400">
                    {experience.date}
                  </time>
                  <div className="mt-2 flex flex-col space-y-0.5">
                    <h3 className="font-geist text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
                      {experience.title}
                    </h3>
                    {experience.companyUrl !== "" ? (
                      <a
                        href={experience.companyUrl}
                        target="_blank"
                        rel="noopener"
                        className="font-geist group flex w-max items-center text-pretty text-lg transition-colors duration-150 border-neutral-800 text-neutral-400 hover:text-white"
                      >
                        <span>{experience.company}</span>
                        <Icons.arrowUp className="h-4 w-4 ml-1" />
                      </a>
                    ) : (
                      <span className="font-geist text-pretty text-lg text-neutral-400">
                        {experience.company}
                      </span>
                    )}
                  </div>
                  <p className="font-geist mt-3 text-pretty text-lg text-neutral-400">
                    {experience.description}
                  </p>
                </li>
              ))}
            </ol>
          </AnimateEnter>
        </div>
      </div>
    </section>
  );
}
