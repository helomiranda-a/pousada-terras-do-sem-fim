import hero from "@/assets/pousada/praia-coqueiros.jpeg";
import { site } from "@/lib/site";

export function Hero() {
  return (
    <section id="topo" className="relative min-h-[100svh] w-full overflow-hidden">
      <img
        src={hero}
        alt="Coqueiros e o mar na orla das Praias do Sul, em Ilhéus, próximo à pousada"
        className="slow-pan absolute inset-0 h-full w-full object-cover"
        fetchPriority="high"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-mata-deep/55 via-mata-deep/25 to-mata-deep/70" />

      <div className="relative mx-auto flex min-h-[100svh] max-w-[1400px] flex-col justify-end px-5 pt-32 pb-28 md:px-10 md:pb-24">
        <p className="eyebrow text-sand/80">Ilhéus · Bahia · Praias do Sul</p>
        <h1 className="mt-5 max-w-4xl font-display text-[3.25rem] leading-[0.95] text-white sm:text-7xl lg:text-[6.5rem]">
          Conexão com
          <span className="block italic text-sand/95">a natureza.</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-relaxed text-white/85 sm:text-lg">
          Um refúgio entre a Mata Atlântica e o mar, em Ilhéus.
        </p>

        <div className="mt-9 flex flex-col gap-3 sm:flex-row">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-base bg-sand text-mata-deep hover:bg-white"
          >
            Reservar agora
          </a>
          <a href="#pousada" className="btn-base btn-outline-light">
            Conhecer a pousada
          </a>
        </div>
      </div>

      <a
        href="#introducao"
        aria-label="Rolar para o conteúdo"
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[0.6rem] tracking-[0.35em] text-white/70 uppercase">Role</span>
        <span className="relative block h-12 w-px overflow-hidden bg-white/30">
          <span className="absolute inset-x-0 top-0 h-4 animate-[scrollhint_2.4s_ease-in-out_infinite] bg-white/90" />
        </span>
        <style>{`@keyframes scrollhint{0%{transform:translateY(-100%)}60%,100%{transform:translateY(300%)}}`}</style>
      </a>
    </section>
  );
}
