import aerea from "@/assets/pousada/vista-aerea.jpeg";
import cafeBuffet from "@/assets/pousada/cafe-buffet.jpeg";
import cafeMesa from "@/assets/pousada/cafe-mesa.jpeg";
import areaExterna from "@/assets/pousada/area-externa.jpeg";
import fachada from "@/assets/pousada/fachada.jpeg";
import criancas from "@/assets/pousada/playground-criancas.jpeg";
import quarto from "@/assets/pousada/quarto-casal-2.jpeg";
import piscina from "@/assets/pousada/piscina-vista.jpeg";
import jardim from "@/assets/pousada/jardim.jpeg";
import { Reveal } from "./Reveal";

type Foto = { src: string; alt: string; cat: string; span: string; ratio: string };

const fotos: Foto[] = [
  {
    src: piscina,
    alt: "Piscina da pousada vista do jardim, com coqueiros",
    cat: "Piscinas",
    span: "md:col-span-7",
    ratio: "aspect-[16/10]",
  },
  {
    src: quarto,
    alt: "Apartamento com cama de casal preparada",
    cat: "Acomodações",
    span: "md:col-span-5",
    ratio: "aspect-[16/10]",
  },
  {
    src: cafeBuffet,
    alt: "Buffet do café da manhã servido pela equipe da pousada",
    cat: "Café da manhã",
    span: "md:col-span-4",
    ratio: "aspect-[3/4]",
  },
  {
    src: aerea,
    alt: "Vista aérea da pousada entre a mata e o mar",
    cat: "Natureza",
    span: "md:col-span-8",
    ratio: "aspect-[3/4] md:aspect-auto md:h-full",
  },
  {
    src: cafeMesa,
    alt: "Mesa posta com doces e salgados do café da manhã",
    cat: "Café da manhã",
    span: "md:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: criancas,
    alt: "Crianças brincando no playground colorido da pousada",
    cat: "Área externa",
    span: "md:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: areaExterna,
    alt: "Pátio externo com jardim e os apartamentos ao fundo",
    cat: "Área externa",
    span: "md:col-span-4",
    ratio: "aspect-[4/3]",
  },
  {
    src: jardim,
    alt: "Jardim arborizado com vista para a vegetação nativa",
    cat: "Natureza",
    span: "md:col-span-5",
    ratio: "aspect-[4/3]",
  },
  {
    src: fachada,
    alt: "Fachada da pousada vista da entrada, com palmeiras",
    cat: "Ilhéus",
    span: "md:col-span-7",
    ratio: "aspect-[4/3] md:aspect-[16/10]",
  },
];

export function Galeria() {
  return (
    <section id="galeria" className="bg-secondary/60 py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="max-w-3xl">
          <p className="eyebrow">07 — Galeria</p>
          <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
            A pousada em
            <span className="block italic">imagens.</span>
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-4 md:auto-rows-auto md:grid-cols-12">
          {fotos.map((f, i) => (
            <Reveal key={f.src + i} delay={(i % 3) * 90} className={f.span}>
              <figure className="img-zoom group relative h-full">
                <img
                  src={f.src}
                  alt={f.alt}
                  loading="lazy"
                  className={`w-full object-cover ${f.ratio}`}
                />
                <figcaption className="pointer-events-none absolute inset-0 flex items-end bg-gradient-to-t from-mata-deep/70 via-transparent to-transparent p-5 opacity-0 transition-opacity duration-700 group-hover:opacity-100">
                  <span className="text-[0.65rem] tracking-[0.28em] text-white uppercase">
                    {f.cat}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
