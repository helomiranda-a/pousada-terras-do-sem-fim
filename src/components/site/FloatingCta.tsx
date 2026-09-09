import { MessageCircle } from "lucide-react";
import { site } from "@/lib/site";

export function FloatingCta() {
  return (
    <>
      {/* Botão flutuante do WhatsApp — desktop discreto */}
      <a
        href={site.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Falar no WhatsApp"
        className="fixed right-5 bottom-24 z-40 hidden h-14 w-14 items-center justify-center rounded-full bg-mata text-sand shadow-[0_10px_30px_-12px_rgba(0,0,0,0.6)] transition-all duration-500 hover:scale-105 hover:bg-mata-deep md:bottom-6 md:flex"
      >
        <MessageCircle className="h-6 w-6" strokeWidth={1.4} />
      </a>

      {/* Barra fixa inferior — mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-sand/15 bg-mata-deep/95 px-4 pt-3 pb-[calc(0.75rem+env(safe-area-inset-bottom))] backdrop-blur md:hidden">
        <a
          href={site.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="btn-base w-full bg-sand text-mata-deep"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
          Reservar pelo WhatsApp
        </a>
      </div>
    </>
  );
}
