import { AnimateEnter } from "../hero-section/animate-enter";
import { Card } from "./card";

export function AboutMeSection() {
  return (
    <section className="relative z-[4] bg-background mt-48">
      <div className="relative rounded-t-3xl border-t border-border pt-20 overflow-hidden">
        <Line />
        <Blur />
        <AnimateEnter
          className="flex flex-col justify-center items-center gap-14"
          delay={0.2}
        >
          <Card />
        </AnimateEnter>
      </div>
    </section>
  );
}

function Blur() {
  return (
    <div
      aria-hidden="true"
      className="-top-1 left-1/2 h-[200px] w-full max-w-[200px] md:max-w-[400px] user-select-none center pointer-events-none absolute -translate-x-1/2 -translate-y-1/2"
      style={{
        background:
          "conic-gradient(from 90deg at 50% 50%, #00000000 50%, #0a0a0a 50%),radial-gradient(rgba(134, 134, 134, 0.1) 0%, transparent 80%)",
      }}
    />
  );
}

function Line() {
  return (
    <div
      aria-hidden
      className="absolute left-1/2 top-0 h-px max-w-[1000px] pointer-events-none -translate-y-1/2 -translate-x-1/2 w-1/2 bg-gradient-to-l from-transparent via-white/50 via-50% to-transparent"
    />
  );
}
