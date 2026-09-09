import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { Intro } from "@/components/site/Intro";
import { APousada } from "@/components/site/APousada";
import { Acomodacoes } from "@/components/site/Acomodacoes";
import { Estrutura } from "@/components/site/Estrutura";
import { Experiencias } from "@/components/site/Experiencias";
import { Ilheus } from "@/components/site/Ilheus";
import { Galeria } from "@/components/site/Galeria";
import { Avaliacoes } from "@/components/site/Avaliacoes";
import { Localizacao } from "@/components/site/Localizacao";
import { CtaFinal } from "@/components/site/CtaFinal";
import { Footer } from "@/components/site/Footer";
import { FloatingCta } from "@/components/site/FloatingCta";
import { site } from "@/lib/site";

const title = "Hotel Pousada Terras do Sem Fim | Ilhéus - Bahia";
const description =
  "Hospede-se no Hotel Pousada Terras do Sem Fim, em Ilhéus, Bahia. Conforto, natureza, piscinas e tranquilidade entre a Mata Atlântica e o mar.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: title },
      { name: "twitter:description", content: description },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Hotel",
          name: site.name,
          legalName: site.legalName,
          email: site.email,
          telephone: site.phones,
          address: {
            "@type": "PostalAddress",
            streetAddress: `${site.address.line1}, ${site.address.line2}`,
            addressLocality: "Ilhéus",
            addressRegion: "BA",
            postalCode: site.address.cep,
            addressCountry: "BR",
          },
          amenityFeature: [
            "Piscina adulta",
            "Piscina infantil",
            "Playground",
            "Estacionamento",
            "Bar",
            "Restaurante",
            "Café da manhã",
            "Wi-Fi gratuito",
            "Recepção 24 horas",
          ].map((name) => ({ "@type": "LocationFeatureSpecification", name })),
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Intro />
        <APousada />
        <Acomodacoes />
        <Estrutura />
        <Experiencias />
        <Ilheus />
        <Galeria />
        <Avaliacoes />
        <Localizacao />
        <CtaFinal />
      </main>
      <Footer />
      <FloatingCta />
    </div>
  );
}
