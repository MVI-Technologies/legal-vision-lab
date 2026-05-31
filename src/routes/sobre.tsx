import { createFileRoute, Link } from "@tanstack/react-router";
import profileTailoring from "@/assets/profile-tailoring.jpg";

export const Route = createFileRoute("/sobre")({
  head: () => ({
    meta: [
      { title: "O Escritório | Rigor Técnico e Tradição Moderna | Martins S.A." },
      {
        name: "description",
        content:
          "Fundado sob princípios de discrição e excelência técnica, o escritório Martins S.A. redefine a advocacia criminal corporativa.",
      },
      { property: "og:title", content: "Sobre o Escritório | Martins S.A." },
      {
        property: "og:description",
        content: "Direito Criminal boutique. Defesa em profundidade, não em escala.",
      },
      { property: "og:url", content: "/sobre" },
    ],
    links: [{ rel: "canonical", href: "/sobre" }],
  }),
  component: Sobre,
});

function Sobre() {
  return (
    <>
      <section className="px-6 pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-6">O Escritório</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl text-balance">
            Direito Criminal feito <span className="font-light">à mão</span>, caso a caso.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <img
              src={profileTailoring}
              alt="Detalhe de alfaiataria"
              width={1024}
              height={1216}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover"
            />
          </div>
          <div className="md:col-span-7 space-y-8">
            <h2 className="font-display text-3xl md:text-4xl leading-tight">
              Dr. Ricardo Martins, sócio-fundador.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Após mais de uma década atuando em bancas de grande porte, fundou o
              escritório com uma premissa simples: cada caso criminal exige a mesma
              atenção que um terno sob medida — costura única, ajustes invisíveis,
              acabamento impecável. Sem escala. Sem standard.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              A prática é dedicada a clientes corporativos, executivos e figuras
              públicas que enfrentam investigações sensíveis, exigem sigilo absoluto e
              demandam estratégia processual de longo prazo.
            </p>

            <dl className="grid grid-cols-2 gap-y-6 gap-x-8 pt-8 border-t border-border">
              {[
                ["Formação", "Mestre em Direito Penal — USP"],
                ["Atuação", "São Paulo · Brasília · Tribunais Superiores"],
                ["Idiomas", "Português · Inglês · Espanhol"],
                ["Sigilo", "Cláusula de confidencialidade em toda relação"],
              ].map(([k, v]) => (
                <div key={k}>
                  <dt className="font-mono text-[10px] uppercase tracking-widest text-accent mb-2">
                    {k}
                  </dt>
                  <dd className="text-sm">{v}</dd>
                </div>
              ))}
            </dl>

            <div className="pt-8">
              <Link
                to="/contato"
                className="inline-block bg-foreground text-background px-6 py-3 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
              >
                Agendar Consulta Privada
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-16 bg-foreground text-background">
        <div className="max-w-5xl mx-auto space-y-12">
          <div className="eyebrow">Princípios</div>
          <div className="grid md:grid-cols-3 gap-12">
            {[
              ["Sigilo", "Confidencialidade absoluta em toda relação cliente-advogado."],
              ["Técnica", "Domínio dogmático e jurisprudência atualizada de tribunais superiores."],
              ["Estratégia", "Defesa pensada em fases — da investigação ao trânsito em julgado."],
            ].map(([t, d]) => (
              <div key={t} className="space-y-4">
                <h3 className="font-display text-2xl">{t}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
