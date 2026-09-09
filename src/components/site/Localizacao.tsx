import { Reveal } from "./Reveal";
import { site } from "@/lib/site";

export function Localizacao() {
  return (
    <section id="localizacao" className="bg-secondary/60 py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-4">
            <p className="eyebrow">09 — Localização</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
              Seu ponto de partida
              <span className="block italic">em Ilhéus.</span>
            </h2>
            <address className="mt-8 space-y-1 text-lg leading-relaxed text-foreground/75 not-italic">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>{site.address.line3}</p>
              <p className="text-muted-foreground">CEP {site.address.cep}</p>
            </address>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-dark mt-9"
            >
              Ver localização
            </a>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-8">
            <div className="h-[320px] w-full overflow-hidden border border-border md:h-[480px]">
              <iframe
                title="Mapa com a localização do Hotel Pousada Terras do Sem Fim"
                src={site.mapEmbedUrl}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-full w-full grayscale-[35%]"
                style={{ border: 0 }}
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
