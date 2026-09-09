import praia from "@/assets/pousada/praia-coqueiros.jpeg";
import { Reveal } from "./Reveal";

export function Ilheus() {
  return (
    <section id="ilheus" className="relative isolate overflow-hidden">
      <img
        src={praia}
        alt="Orla de coqueiros e o mar aberto na costa de Ilhéus, Bahia"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-mar/60" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-start px-5 py-28 md:px-10 md:py-44">
        <Reveal className="max-w-2xl">
          <p className="eyebrow text-white/70">06 — A cidade</p>
          <h2 className="mt-6 font-display text-5xl leading-[0.95] text-white sm:text-6xl lg:text-8xl">
            Viva <span className="italic">Ilhéus.</span>
          </h2>
          <p className="mt-7 max-w-lg text-lg leading-relaxed text-white/85">
            Uma cidade marcada pelo mar, pela Mata Atlântica, pelo cacau e pelas histórias de Jorge
            Amado.
          </p>
          <a href="#experiencias" className="btn-base btn-outline-light mt-9">
            Descobrir Ilhéus
          </a>
        </Reveal>
      </div>
    </section>
  );
}
