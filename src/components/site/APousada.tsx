import piscina from "@/assets/pousada/piscina-vista.jpeg";
import recepcao from "@/assets/pousada/recepcao.jpeg";
import fachada from "@/assets/pousada/fachada-jardim.jpeg";
import { Reveal } from "./Reveal";

const diferenciais = [
  "55 apartamentos standard",
  "Muitos com vista para o mar",
  "Piscina adulta",
  "Piscina infantil",
  "Playground",
  "Estacionamento com segurança noturna",
  "Bar",
  "Restaurante",
  "Lanchonete",
  "Café da manhã",
  "Wi-Fi gratuito",
  "Recepção 24 horas",
  "Jardim",
  "Serviço de limpeza",
];

export function APousada() {
  return (
    <section id="pousada" className="relative bg-secondary/60 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">02 — A pousada</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
            Entre a Mata Atlântica
            <span className="block italic">e o mar.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-7">
            <figure className="img-zoom">
              <img
                src={piscina}
                alt="Piscina da pousada com espreguiçadeiras, coqueiros e os apartamentos ao fundo"
                loading="lazy"
                className="aspect-[16/11] w-full object-cover"
              />
            </figure>
            <div className="mt-10 grid grid-cols-2 gap-5">
              <figure className="img-zoom">
                <img
                  src={fachada}
                  alt="Fachada branca da pousada com jardim florido"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
              <figure className="img-zoom">
                <img
                  src={recepcao}
                  alt="Área de recepção da pousada, aberta e arejada, com plantas"
                  loading="lazy"
                  className="aspect-[4/3] w-full object-cover"
                />
              </figure>
            </div>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-5">
            <p className="text-lg leading-relaxed text-foreground/75">
              Um ambiente tranquilo e descontraído, pensado para famílias. Estrutura completa para
              passar o dia inteiro dentro da pousada — e a praia logo ali.
            </p>
            <ul className="mt-10 divide-y divide-border/70 border-y border-border/70">
              {diferenciais.map((item, i) => (
                <li
                  key={item}
                  className="flex items-baseline gap-5 py-3.5 transition-colors hover:text-mata"
                >
                  <span className="font-display text-sm text-gold tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[0.95rem] tracking-wide">{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
