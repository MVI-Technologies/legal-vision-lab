import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/artigos")({
  head: () => ({
    meta: [
      { title: "Artigos e Notas Técnicas | Inteligência Jurídica | Martins S.A." },
      {
        name: "description",
        content:
          "Análises técnicas sobre o cenário jurídico criminal, jurisprudência e atualizações legislativas relevantes para o ambiente corporativo.",
      },
      { property: "og:title", content: "Artigos e Notas Técnicas | Martins S.A." },
      {
        property: "og:description",
        content: "Conteúdo técnico de Direito Criminal pelo escritório Martins S.A.",
      },
      { property: "og:url", content: "/artigos" },
    ],
    links: [{ rel: "canonical", href: "/artigos" }],
  }),
  component: Artigos,
});

const ARTICLES = [
  {
    cat: "Direito Penal Econômico",
    date: "Mai 2026",
    title: "Acordo de não persecução penal em crimes financeiros: limites e oportunidades.",
    minutes: "8 min",
  },
  {
    cat: "Tribunais Superiores",
    date: "Abr 2026",
    title: "A modulação dos efeitos da Lei Anticrime no STJ: jurisprudência consolidada.",
    minutes: "12 min",
  },
  {
    cat: "Compliance",
    date: "Mar 2026",
    title: "Investigação interna corporativa: protocolo, sigilo e admissibilidade probatória.",
    minutes: "10 min",
  },
  {
    cat: "Tribunal do Júri",
    date: "Fev 2026",
    title: "Recurso em sentido estrito e a pronúncia: estratégia de impugnação.",
    minutes: "7 min",
  },
  {
    cat: "Habeas Corpus",
    date: "Jan 2026",
    title: "Prisão preventiva e contemporaneidade dos motivos: leitura do STF em 2025.",
    minutes: "9 min",
  },
];

function Artigos() {
  return (
    <>
      <section className="px-6 pt-24 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <div className="eyebrow mb-6">Artigos</div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1] text-balance">
              Análise técnica <span className="italic font-light">aplicada</span>.
            </h1>
          </div>
          <p className="text-muted-foreground max-w-sm leading-relaxed">
            Reflexões publicáveis sobre os movimentos jurisprudenciais e dogmáticos
            que pautam a defesa criminal contemporânea.
          </p>
        </div>
      </section>

      <section className="px-6 py-20">
        <div className="max-w-5xl mx-auto">
          <ul className="divide-y divide-border border-y border-border">
            {ARTICLES.map((a) => (
              <li key={a.title}>
                <Link
                  to="/artigos"
                  className="group grid grid-cols-12 gap-6 py-8 items-baseline hover:bg-secondary transition-colors px-4 -mx-4"
                >
                  <div className="col-span-12 md:col-span-3 space-y-1">
                    <div className="font-mono text-[10px] tracking-widest uppercase text-accent">
                      {a.cat}
                    </div>
                    <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                      {a.date} · {a.minutes}
                    </div>
                  </div>
                  <h2 className="col-span-12 md:col-span-8 font-display text-2xl md:text-3xl leading-tight group-hover:text-accent transition-colors">
                    {a.title}
                  </h2>
                  <span className="col-span-12 md:col-span-1 text-right text-accent text-xl">
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="px-6 py-20 bg-secondary">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <div className="eyebrow">Newsletter Restrita</div>
          <h2 className="font-display text-3xl md:text-4xl italic font-light">
            Reservada a profissionais e clientes do escritório.
          </h2>
          <form className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto pt-4">
            <input
              type="email"
              required
              placeholder="seu@email.com"
              aria-label="Email"
              className="flex-1 bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent"
            />
            <button
              type="submit"
              className="bg-foreground text-background px-6 py-3 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Inscrever
            </button>
          </form>
        </div>
      </section>
    </>
  );
}
