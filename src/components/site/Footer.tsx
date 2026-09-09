import logo from "@/assets/pousada/logo.png";
import { nav, site } from "@/lib/site";

const links = [...nav, { label: "Reservas", href: "#reservar" }];

export function Footer() {
  return (
    <footer id="contato" className="bg-mata-deep pt-20 pb-28 text-sand md:pb-16">
      <div className="mx-auto max-w-[1400px] px-5 md:px-10">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <img
              src={logo}
              alt="Hotel Pousada Terras do Sem Fim"
              className="h-14 w-auto brightness-0 invert"
              loading="lazy"
            />
            <p className="mt-6 max-w-sm font-display text-2xl leading-snug text-sand/90 italic">
              Um refúgio entre a Mata Atlântica e o mar, em Ilhéus.
            </p>
          </div>

          <div className="lg:col-span-4">
            <p className="eyebrow text-gold">Contato</p>
            <address className="mt-6 space-y-1 text-sand/80 not-italic">
              <p>{site.address.line1}</p>
              <p>{site.address.line2}</p>
              <p>{site.address.line3}</p>
              <p>{site.address.cep}</p>
            </address>
            <ul className="mt-6 space-y-2 text-sand/80">
              {site.phones.map((p, i) => (
                <li key={p}>
                  <a href={`tel:${site.phoneLinks[i]}`} className="transition-colors hover:text-gold">
                    {p}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href={site.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold"
                >
                  WhatsApp {site.whatsapp}
                </a>
              </li>
              <li>
                <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
                  {site.email}
                </a>
              </li>
            </ul>
          </div>

          <nav className="lg:col-span-3" aria-label="Navegação do rodapé">
            <p className="eyebrow text-gold">Navegar</p>
            <ul className="mt-6 space-y-2">
              {links.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="text-sand/80 transition-colors hover:text-gold">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="mt-16 flex flex-col gap-2 border-t border-sand/15 pt-6 text-xs text-sand/50 sm:flex-row sm:items-center sm:justify-between">
          <p>{site.legalName} — CNPJ {site.cnpj}</p>
          <p>Ilhéus · Bahia · Brasil</p>
        </div>
      </div>
    </footer>
  );
}
