import { Reveal } from "./Reveal";

const lugares = [
  { nome: "Praias do Sul", nota: "O litoral logo em frente à pousada" },
  { nome: "Cururupe", nota: "Praia e história na estrada de Olivença" },
  { nome: "Olivença", nota: "Vilarejo litorâneo ao sul de Ilhéus" },
  { nome: "Centro histórico de Ilhéus", nota: "Casarios, igrejas e cais" },
  { nome: "Casa de Cultura Jorge Amado", nota: "A casa do escritor, hoje museu" },
  { nome: "Bataclan", nota: "O cabaré literário da era do cacau" },
  { nome: "Fazendas de cacau", nota: "A paisagem que criou a região" },
  { nome: "Fábrica de chocolate", nota: "Do fruto à barra, na origem" },
  { nome: "Lagoa Encantada", nota: "Natureza e Mata Atlântica" },
  { nome: "Mirante da Piedade", nota: "A vista aberta da cidade e do mar" },
];

export function Experiencias() {
  return (
    <section id="experiencias" className="py-24 md:py-40">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <Reveal className="lg:col-span-5">
            <p className="eyebrow">05 — Experiência</p>
            <h2 className="mt-6 font-display text-4xl leading-[1.05] sm:text-5xl lg:text-[4rem]">
              Mais do que uma
              <span className="block italic">hospedagem.</span>
            </h2>
            <div className="mt-8 h-px w-16 bg-gold" />
            <p className="mt-8 max-w-md leading-relaxed text-foreground/70">
              Você pode passar o dia inteiro entre as piscinas, o jardim e a mesa do café. Ou sair
              para descobrir a Ilhéus do cacau, do mar e de Jorge Amado — e voltar para o silêncio da
              mata no fim da tarde.
            </p>
          </Reveal>

          <Reveal delay={120} className="lg:col-span-7">
            <ul>
              {lugares.map((l, i) => (
                <li key={l.nome} className="group border-t border-border last:border-b">
                  <div className="grid grid-cols-[auto_minmax(0,1fr)] items-baseline gap-5 py-5 transition-all duration-500 group-hover:pl-2 sm:grid-cols-[auto_minmax(0,1fr)_auto]">
                    <span className="font-display text-sm text-gold tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-2xl transition-colors group-hover:text-mata sm:text-3xl">
                      {l.nome}
                    </span>
                    <span className="col-start-2 text-sm text-muted-foreground sm:col-start-3 sm:text-right">
                      {l.nota}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
