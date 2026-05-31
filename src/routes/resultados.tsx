import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/resultados")({
  head: () => ({
    meta: [
      { title: "Resultados e Diferenciais | Histórico de Excelência | Martins S.A." },
      {
        name: "description",
        content:
          "Analise nosso histórico de decisões favoráveis e o impacto de nossa estratégia jurídica em casos de repercussão nacional.",
      },
      { property: "og:title", content: "Resultados e Diferenciais | Martins S.A." },
      {
        property: "og:description",
        content: "Resultados em defesa criminal estratégica para clientes corporativos.",
      },
      { property: "og:url", content: "/resultados" },
    ],
    links: [{ rel: "canonical", href: "/resultados" }],
  }),
  component: Resultados,
});

const METRICS = [
  { value: "+420", label: "Casos conduzidos" },
  { value: "92%", label: "Êxito em medidas de urgência" },
  { value: "18", label: "Anos de atuação" },
  { value: "24/7", label: "Plantão criminal" },
];

const CASES = [
  {
    tag: "Crimes Econômicos",
    title: "Trancamento de ação penal em operação federal",
    text: "Reconhecimento de atipicidade material e ausência de justa causa em ação envolvendo executivos de holding industrial.",
  },
  {
    tag: "Habeas Corpus",
    title: "Liminar concedida em sessão extraordinária no STJ",
    text: "Soltura imediata em caso de prisão preventiva decretada sem fundamentação concreta dos requisitos cautelares.",
  },
  {
    tag: "Tribunal do Júri",
    title: "Absolvição unânime em segundo julgamento",
    text: "Reconstrução probatória integral e tese de legítima defesa acolhida por todos os jurados.",
  },
  {
    tag: "Compliance Criminal",
    title: "Investigação interna em grupo multinacional",
    text: "Apuração reservada, relatório técnico e mitigação de riscos reputacionais sem necessidade de processo penal.",
  },
];

const DIFFS = [
  ["Sócio responsável", "Cada caso é conduzido pelo sócio do início ao fim. Sem delegação opaca."],
  ["Tese antes de petição", "Estratégia processual desenhada antes de qualquer movimentação."],
  ["Sigilo contratual", "Cláusulas de confidencialidade aplicadas a toda a equipe envolvida."],
  ["Resposta em 24h", "Toda demanda recebe retorno técnico em até um dia útil."],
];

function Resultados() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-6">Resultados</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl text-balance">
            Métricas que refletem <span className="font-light">rigor</span>.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
          {METRICS.map((m) => (
            <div key={m.label} className="bg-background p-10">
              <div className="font-display text-5xl md:text-6xl mb-3">{m.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {m.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="px-6 py-16 bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="eyebrow mb-4">Casos representativos</div>
            <h2 className="font-display text-3xl md:text-4xl font-light max-w-2xl">
              Identidades preservadas; estratégias publicáveis.
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-border">
            {CASES.map((c) => (
              <article key={c.title} className="bg-background p-10 space-y-4">
                <span className="font-mono text-[10px] tracking-widest uppercase text-accent">
                  {c.tag}
                </span>
                <h3 className="font-display text-2xl leading-snug">{c.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{c.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-foreground text-background">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="space-y-6">
            <div className="eyebrow">Diferenciais</div>
            <h2 className="font-display text-4xl md:text-5xl font-light">
              Por que clientes corporativos nos escolhem.
            </h2>
          </div>
          <ul className="space-y-px bg-background/10">
            {DIFFS.map(([t, d]) => (
              <li key={t} className="bg-foreground p-6">
                <h3 className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                  {t}
                </h3>
                <p className="text-sm text-background/70 leading-relaxed">{d}</p>
              </li>
            ))}
          </ul>
        </div>
        <div className="max-w-7xl mx-auto pt-16 flex justify-center">
          <Link
            to="/contato"
            className="border border-background/30 px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-accent hover:border-accent transition-colors"
          >
            Iniciar Análise Reservada
          </Link>
        </div>
      </section>
    </>
  );
}
