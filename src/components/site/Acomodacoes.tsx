import casal from "@/assets/pousada/quarto-casal.jpeg";
import casal2 from "@/assets/pousada/quarto-casal-2.jpeg";
import duplo from "@/assets/pousada/quarto-duplo.jpeg";
import triplo from "@/assets/pousada/quarto-triplo.jpeg";
import quadruplo from "@/assets/pousada/quarto-quadruplo.jpeg";
import vista from "@/assets/pousada/quarto-vista.jpeg";
import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

const modalidades = ["Single", "Duplo / Casal", "Triplo", "Quádruplo"];

const itens = [
  "Ar-condicionado",
  "Televisão",
  "Frigobar",
  "Ventilador de teto",
  "Colchões de espuma ortopédica",
  "Roupas de cama e banho profissionais",
];

export function Acomodacoes() {
  return (
    <section id="acomodacoes" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="grid gap-8 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-7">
            <p className="eyebrow">03 — Acomodações</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Seu espaço para
              <span className="block italic">descansar.</span>
            </h2>
          </div>
          <p className="max-w-md text-lg leading-relaxed text-foreground/70 lg:col-span-5">
            Conforto, tranquilidade e o som do mar para acompanhar seus dias.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-5 md:grid-cols-12">
          <Reveal className="md:col-span-7">
            <figure className="img-zoom h-full">
              <img
                src={casal}
                alt="Apartamento de casal com cama de madeira, ar-condicionado e janela ampla"
                loading="lazy"
                className="aspect-[16/11] h-full w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={100} className="md:col-span-5">
            <figure className="img-zoom h-full">
              <img
                src={vista}
                alt="Apartamento com cama de casal e roupa de cama branca"
                loading="lazy"
                className="aspect-[16/11] h-full w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={60} className="md:col-span-4">
            <figure className="img-zoom">
              <img
                src={duplo}
                alt="Apartamento duplo com duas camas de solteiro"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={140} className="md:col-span-4">
            <figure className="img-zoom">
              <img
                src={triplo}
                alt="Apartamento triplo com camas separadas e quadro colorido na parede"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </figure>
          </Reveal>
          <Reveal delay={220} className="md:col-span-4">
            <figure className="img-zoom">
              <img
                src={quadruplo}
                alt="Apartamento quádruplo com camas de madeira e arte na parede"
                loading="lazy"
                className="aspect-square w-full object-cover"
              />
            </figure>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-12 border-t border-border pt-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="font-display text-5xl leading-none">55</p>
            <p className="mt-3 text-sm tracking-[0.18em] text-muted-foreground uppercase">
              apartamentos standard
            </p>
            <p className="mt-6 max-w-sm leading-relaxed text-foreground/70">
              Muitos apartamentos possuem vista para o mar. As modalidades acompanham o tamanho do
              seu grupo — de uma viagem a dois a uma família inteira.
            </p>
            <ul className="mt-7 flex flex-wrap gap-2">
              {modalidades.map((m) => (
                <li
                  key={m}
                  className="border border-border px-4 py-2 text-[0.7rem] tracking-[0.16em] uppercase"
                >
                  {m}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <p className="eyebrow">Em todos os apartamentos</p>
            <ul className="mt-6 grid gap-x-10 gap-y-4 sm:grid-cols-2">
              {itens.map((item) => (
                <li key={item} className="flex items-baseline gap-3 border-b border-border/60 pb-3">
                  <span className="h-1 w-1 shrink-0 rounded-full bg-gold" />
                  <span className="text-[0.95rem]">{item}</span>
                </li>
              ))}
            </ul>
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-dark mt-10"
            >
              Consultar disponibilidade
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
