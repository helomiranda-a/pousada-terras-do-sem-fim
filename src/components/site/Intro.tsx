import aerea from "@/assets/pousada/vista-aerea.jpeg";
import jardim from "@/assets/pousada/jardim.jpeg";
import { Reveal } from "./Reveal";

export function Intro() {
  return (
    <section id="introducao" className="relative py-24 md:py-40">
      <div className="mx-auto grid max-w-[1400px] items-center gap-12 px-5 md:px-10 lg:grid-cols-12 lg:gap-20">
        <Reveal className="lg:col-span-5 lg:col-start-1">
          <p className="eyebrow">01 — O refúgio</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-6xl">
            Um refúgio para
            <span className="block italic">desacelerar.</span>
          </h2>
          <div className="mt-8 h-px w-16 bg-gold" />
          <p className="mt-8 max-w-md text-lg leading-relaxed text-foreground/75">
            Um lugar ideal para desacelerar, contemplar a natureza, relaxar e se reconectar com a sua
            essência.
          </p>
          <p className="mt-5 max-w-md leading-relaxed text-muted-foreground">
            Aqui os dias são medidos pelo som do mar. Uma casa de família, de braços abertos para
            receber a sua, no trecho mais verde da estrada entre Ilhéus e Olivença.
          </p>
        </Reveal>

        <Reveal delay={120} className="lg:col-span-6 lg:col-start-7">
          <figure className="img-zoom relative">
            <img
              src={aerea}
              alt="Vista aérea da pousada cercada por Mata Atlântica, com piscinas e telhados de barro"
              loading="lazy"
              className="aspect-[4/5] w-full object-cover"
            />
          </figure>
          <figure className="img-zoom -mt-20 ml-auto hidden w-1/2 border-8 border-background md:block lg:-ml-24 lg:w-2/5">
            <img
              src={jardim}
              alt="Jardim arborizado da pousada com playground ao fundo"
              loading="lazy"
              className="aspect-square w-full object-cover"
            />
          </figure>
        </Reveal>
      </div>
    </section>
  );
}
