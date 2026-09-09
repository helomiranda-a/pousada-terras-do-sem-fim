import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/pousada/logo.png";
import { nav, site } from "@/lib/site";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-700 ${
        scrolled
          ? "bg-background/95 shadow-[0_1px_18px_-12px_rgba(0,0,0,0.45)] backdrop-blur-md"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto grid max-w-[1400px] grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-4 md:px-10 lg:grid-cols-[1fr_auto_1fr]">
        <a href="#topo" className="flex min-w-0 items-center gap-3">
          <img
            src={logo}
            alt="Logotipo do Hotel Pousada Terras do Sem Fim"
            className={`h-10 w-auto shrink-0 transition-all duration-700 md:h-12 ${
              scrolled ? "" : "brightness-0 invert"
            }`}
          />
        </a>

        <nav className="hidden justify-center lg:flex" aria-label="Navegação principal">
          <ul className="flex items-center gap-8">
            {nav.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={`relative text-[0.72rem] tracking-[0.2em] uppercase transition-colors duration-500 after:absolute after:-bottom-1.5 after:left-0 after:h-px after:w-0 after:bg-gold after:transition-all after:duration-500 hover:after:w-full ${
                    scrolled ? "text-foreground/80 hover:text-foreground" : "text-white/85 hover:text-white"
                  }`}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center justify-end gap-3">
          <a
            href={site.bookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn-base hidden !px-6 !py-3 sm:inline-flex ${
              scrolled ? "btn-solid" : "btn-outline-light"
            }`}
          >
            Reservar
          </a>
          <button
            type="button"
            onClick={() => setOpen(true)}
            aria-label="Abrir menu"
            className={`inline-flex h-11 w-11 items-center justify-center transition-colors lg:hidden ${
              scrolled ? "text-foreground" : "text-white"
            }`}
          >
            <Menu className="h-6 w-6" strokeWidth={1.2} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 z-50 bg-mata-deep transition-opacity duration-500 lg:hidden ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div className="flex h-full flex-col px-6 py-6">
          <div className="flex items-center justify-between">
            <img src={logo} alt="" aria-hidden className="h-10 w-auto brightness-0 invert" />
            <button
              type="button"
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              className="inline-flex h-11 w-11 items-center justify-center text-sand"
            >
              <X className="h-6 w-6" strokeWidth={1.2} />
            </button>
          </div>
          <nav className="mt-12 flex-1" aria-label="Navegação mobile">
            <ul className="space-y-6">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="font-display text-4xl text-sand/90"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="space-y-3 pb-4">
            <a
              href={site.bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base w-full bg-sand text-mata-deep"
            >
              Reservar agora
            </a>
            <a
              href={site.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-base btn-outline-light w-full"
            >
              WhatsApp {site.whatsapp}
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
