import Link from "next/link";

import { AnimateEnter } from "../hero-section/animate-enter";
import { Icons } from "@/app/icons/icons";

export function Footer() {
  return (
    <footer className="relative z-10 overflow-hidden border-t border-border/50 bg-background">
      <Blur />
      <div className="relative mx-auto w-full max-w-4xl px-8 py-16 md:px-0">
        <div className="flex gap-10 max-md:flex-col md:justify-between">
          <div className="flex flex-col gap-4">
            <AnimateEnter>
              <h3 className="font-geist text-3xl font-semibold">
                Franco Gilli
              </h3>
            </AnimateEnter>
            <AnimateEnter delay={0.1} className="flex flex-col gap-1">
              <p className="font-geist text-base font-medium text-foreground">
                Frontend Developer.
              </p>
              <span className="font-geist text-base font-medium text-foreground">
              © 2025 Franco Gilli.
              </span>
            </AnimateEnter>
          </div>
          <AnimateEnter delay={0.3} className="space-y-4">
            <div className="font-geist flex flex-col gap-4 text-base">
              <Link
                href="#"
                className="text-foreground duration-200 hover:text-primary"
              >
                Inicio
              </Link>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                Experiencia
                <Icons.arrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                Proyectos
                <Icons.arrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-1 text-foreground duration-200 hover:text-primary"
              >
                Contacto
                <Icons.arrowUp className="size-3 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
              </a>
            </div>
          </AnimateEnter>
        </div>
      </div>
    </footer>
  );
}

function Blur() {
  return (
    <div
      aria-hidden="true"
      className="user-select-none center pointer-events-none absolute -top-1 left-1/2 h-[200px] w-full max-w-[400px] -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
      }}
    />
  );
}
