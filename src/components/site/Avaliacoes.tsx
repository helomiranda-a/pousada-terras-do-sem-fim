import { Reveal } from "./Reveal";

export function Avaliacoes() {
  return (
    <section id="avaliacoes" className="py-24 md:py-36">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <Reveal className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <p className="eyebrow">08 — Opinião dos hóspedes</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl">
              Quem ficou,
              <span className="block italic">volta.</span>
            </h2>
          </div>

          <div className="lg:col-span-8">
            <figure>
              <blockquote className="font-display text-2xl leading-[1.4] text-foreground/85 italic sm:text-[2rem]">
                “Hotel excelente, fomos muito bem recebidos. É um ambiente familiar aconchegante,
                muito limpo. O dono do estabelecimento e funcionários super atenciosos. Café da manhã
                maravilhoso. Nossa filha amou o parquinho, a piscina... hotel super recomendado.
                Pretendemos voltar mais vezes se Deus permitir.”
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <span className="h-px w-10 bg-gold" />
                <span className="text-[0.72rem] tracking-[0.24em] text-muted-foreground uppercase">
                  Joceli Machado
                </span>
              </figcaption>
            </figure>

            <p className="mt-12 max-w-xl border-t border-border pt-6 text-sm leading-relaxed text-muted-foreground">
              Espaço reservado para novos depoimentos de hóspedes. Envie-nos suas avaliações do
              Google ou do TripAdvisor para publicá-las aqui.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
