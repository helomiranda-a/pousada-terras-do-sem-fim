import piscinaAdulto from "@/assets/pousada/piscina-adulto.jpeg";
import piscinaInfantil from "@/assets/pousada/piscina-infantil.jpeg";
import playground from "@/assets/pousada/playground.jpeg";
import cafe from "@/assets/pousada/cafe-manha.jpeg";
import restaurante from "@/assets/pousada/restaurante-varanda.jpeg";
import estacionamento from "@/assets/pousada/estacionamento.jpeg";
import noite from "@/assets/pousada/piscina-noite.jpeg";
import { Reveal } from "./Reveal";

export function Estrutura() {
  return (
    <section id="estrutura" className="bg-mata-deep py-24 text-sand md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow text-gold">04 — Estrutura</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] text-sand sm:text-5xl lg:text-[4rem]">
            Dias inteiros sem
            <span className="block italic">precisar sair.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-x-6 gap-y-14 lg:grid-cols-12">
          <Reveal className="lg:col-span-7">
            <figure className="img-zoom">
              <img
                src={piscinaAdulto}
                alt="Piscina adulta cercada de espreguiçadeiras e guarda-sóis, com coqueiros ao redor"
                loading="lazy"
                className="aspect-[16/10] w-full object-cover"
              />
              <figcaption className="mt-4 flex items-baseline gap-4">
                <span className="font-display text-2xl text-sand">Piscinas</span>
                <span className="text-sm text-sand/60">Adulta e infantil, no coração da pousada</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={100} className="lg:col-span-5 lg:pt-24">
            <figure className="img-zoom">
              <img
                src={piscinaInfantil}
                alt="Piscina infantil rasa ao lado da piscina adulta"
                loading="lazy"
                className="aspect-[4/5] w-full object-cover"
              />
              <figcaption className="mt-4 flex items-baseline gap-4">
                <span className="font-display text-2xl text-sand">Área infantil</span>
                <span className="text-sm text-sand/60">Piscina rasa e playground</span>
              </figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-4">
            <figure className="img-zoom">
              <img
                src={cafe}
                alt="Mesa do café da manhã com bolos, pães e doces caseiros"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-4 font-display text-2xl text-sand">Café da manhã</figcaption>
            </figure>
          </Reveal>

          <Reveal delay={80} className="lg:col-span-4">
            <figure className="img-zoom">
              <img
                src={restaurante}
                alt="Varanda coberta do restaurante, aberta para o jardim"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-4 font-display text-2xl text-sand">
                Restaurante, bar e lanchonete
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={160} className="lg:col-span-4">
            <figure className="img-zoom">
              <img
                src={playground}
                alt="Playground de madeira sob o telhado de barro, ao lado do jardim"
                loading="lazy"
                className="aspect-[4/3] w-full object-cover"
              />
              <figcaption className="mt-4 font-display text-2xl text-sand">Playground</figcaption>
            </figure>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <figure className="img-zoom">
              <img
                src={estacionamento}
                alt="Pátio interno da pousada com estacionamento e vegetação"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="mt-4 font-display text-2xl text-sand">
                Estacionamento com segurança noturna
              </figcaption>
            </figure>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <figure className="img-zoom">
              <img
                src={noite}
                alt="Área da piscina iluminada à noite, com mesas e cadeiras"
                loading="lazy"
                className="aspect-[3/2] w-full object-cover"
              />
              <figcaption className="mt-4 flex items-baseline gap-4">
                <span className="font-display text-2xl text-sand">Recepção 24 horas</span>
                <span className="text-sm text-sand/60">
                  Jardim, Wi-Fi gratuito e serviço de limpeza
                </span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
