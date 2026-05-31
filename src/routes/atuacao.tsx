import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/atuacao")({
  head: () => ({
    meta: [
      { title: "Áreas de Atuação | Expertise em Direito Criminal | Martins S.A." },
      {
        name: "description",
        content:
          "Conheça nossa expertise em Crimes Econômicos, Tribunal do Júri, Crimes Cibernéticos e Defesa Estratégica em Instâncias Superiores.",
      },
      { property: "og:title", content: "Expertise Criminal Estratégica | Martins S.A." },
      {
        property: "og:description",
        content: "Defesa criminal boutique em seis frentes estratégicas de alta complexidade.",
      },
      { property: "og:url", content: "/atuacao" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Expertise Criminal Estratégica | Martins S.A." },
      { name: "twitter:description", content: "Defesa criminal boutique em seis frentes estratégicas de alta complexidade." },
      { name: "twitter:image", content: "/og-image.png" },
    ],
    links: [{ rel: "canonical", href: "/atuacao" }],
  }),
  component: Atuacao,
});

const AREAS = [
  {
    n: "01",
    title: "Crimes Econômicos",
    text: "Evasão de divisas, lavagem de capitais, gestão fraudulenta e crimes contra o sistema financeiro nacional.",
  },
  {
    n: "02",
    title: "Tribunal do Júri",
    text: "Defesa técnica em crimes dolosos contra a vida com foco em retórica, prova e estratégia de plenário.",
  },
  {
    n: "03",
    title: "Habeas Corpus",
    text: "Medidas de urgência perante STJ e STF contra prisões ilegais e constrangimento ilegal.",
  },
  {
    n: "04",
    title: "Compliance Criminal",
    text: "Prevenção, investigações internas e gestão de crises reputacionais para conselhos de administração.",
  },
  {
    n: "05",
    title: "Crimes Tributários",
    text: "Defesa em procedimentos administrativos e penais decorrentes de infrações à ordem tributária.",
  },
  {
    n: "06",
    title: "Tribunais Superiores",
    text: "Sustentação oral, recursos especiais e extraordinários no STJ e STF com foco em nulidades.",
  },
];

function Atuacao() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-6">Expertise</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl text-balance">
            Seis frentes <span className="font-light">estratégicas</span> da defesa criminal.
          </h1>
          <p className="mt-8 max-w-2xl text-muted-foreground leading-relaxed">
            Cada área é conduzida diretamente pelo sócio responsável. Nada é
            terceirizado, nada é padronizado.
          </p>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border-l border-t border-border">
            {AREAS.map((a) => (
              <article
                key={a.n}
                className="group p-10 border-r border-b border-border hover:bg-secondary transition-colors"
              >
                <span className="font-mono text-[10px] tracking-widest text-accent mb-12 block">
                  {a.n} /
                </span>
                <h2 className="font-display text-2xl mb-4 group-hover:text-accent transition-colors">
                  {a.title}
                </h2>
                <p className="text-sm text-muted-foreground leading-relaxed">{a.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-secondary">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <div className="eyebrow">Plantão criminal 24h</div>
          <h2 className="font-display text-3xl md:text-5xl leading-tight">
            Sua urgência <span className="text-accent">não espera</span>.
          </h2>
          <Link
            to="/contato"
            className="inline-block bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Contato Imediato
          </Link>
        </div>
      </section>
    </>
  );
}
