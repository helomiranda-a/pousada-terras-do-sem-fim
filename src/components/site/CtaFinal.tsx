import jardim from "@/assets/pousada/jardim.jpeg";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function CtaFinal() {
  return (
    <section id="reservar" className="relative isolate overflow-hidden">
      <img
        src={jardim}
        alt="Jardim da pousada com árvores nativas e vegetação de praia"
        loading="lazy"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-mata-deep/70" />
      <div className="relative mx-auto flex max-w-[1400px] flex-col items-center px-5 py-28 text-center md:px-10 md:py-44">
        <Reveal className="flex flex-col items-center">
          <p className="eyebrow text-gold">10 — Reservas</p>
          <h2 className="mt-6 max-w-3xl font-display text-4xl leading-[1.02] text-white sm:text-6xl lg:text-7xl">
            Seu próximo descanso
            <span className="block italic">começa aqui.</span>
          </h2>
          <p className="mt-7 max-w-xl leading-relaxed text-white/80">
            Reserve sua estadia e viva a experiência de se reconectar com a natureza em Ilhéus.
          </p>
          <div className="mt-10 flex w-full flex-col items-center gap-3 sm:w-auto sm:flex-row">
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base w-full bg-sand text-mata-deep hover:bg-white sm:w-auto"
            >
              Reservar pelo WhatsApp
            </a>
            <a href="#contato" className="btn-base btn-outline-light w-full sm:w-auto">
              Fale conosco
            </a>
          </div>
          <p className="mt-6 text-sm text-white/60">WhatsApp +55 {site.whatsapp}</p>
        </Reveal>
      </div>
    </section>
  );
}
