import { createFileRoute, Link } from "@tanstack/react-router";
import heroOffice from "@/assets/hero-office.jpg";
import profileTailoring from "@/assets/profile-tailoring.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Martins S.A. — Advocacia Criminal Estratégica em São Paulo" },
      {
        name: "description",
        content:
          "Escritório boutique de Direito Criminal. Defesa técnica e sigilosa em crimes econômicos, tribunal do júri, habeas corpus e tribunais superiores.",
      },
      { property: "og:title", content: "Martins S.A. — Advocacia Criminal Estratégica" },
      {
        property: "og:description",
        content:
          "Arquitetura jurídica de alta complexidade. Defesa criminal corporativa com rigor técnico e discrição absoluta.",
      },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

const AREAS = [
  {
    n: "01",
    title: "Crimes Econômicos",
    text: "Defesa corporativa em evasão de divisas, lavagem de capitais e fraudes financeiras de alta monta.",
  },
  {
    n: "02",
    title: "Tribunal do Júri",
    text: "Atuação técnica perante o conselho de sentença em crimes contra a vida com retórica de autoridade.",
  },
  {
    n: "03",
    title: "Habeas Corpus",
    text: "Medidas de urgência perante STJ e STF para garantia da liberdade e cessação de constrangimento ilegal.",
  },
];

const RESULTS = [
  { value: "+420", label: "Casos conduzidos" },
  { value: "92%", label: "Êxito em medidas de urgência" },
  { value: "18", label: "Anos de atuação" },
  { value: "24/7", label: "Plantão criminal" },
];

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative pt-20 pb-32 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end">
          <div className="md:col-span-7 space-y-8">
            <div className="eyebrow animate-reveal">Defesa Estratégica & Compliance Criminal</div>
            <h1 className="font-display text-5xl md:text-7xl lg:text-8xl leading-[0.95] text-balance animate-reveal [animation-delay:120ms]">
              Arquitetura
              <br />
              <span className="italic font-light">Jurídica de</span>
              <br />
              Alta Complexidade.
            </h1>
            <div className="h-px bg-accent animate-line [animation-delay:380ms]" />
            <p className="max-w-md text-muted-foreground leading-relaxed animate-reveal [animation-delay:500ms]">
              Atuação especializada em crimes econômicos e tribunais superiores. O rigor
              técnico da alfaiataria aplicado ao Direito Criminal.
            </p>
            <div className="flex flex-wrap gap-3 animate-reveal [animation-delay:620ms]">
              <Link
                to="/contato"
                className="bg-foreground text-background px-6 py-3.5 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
              >
                Agendar Consulta Privada
              </Link>
              <Link
                to="/atuacao"
                className="border border-foreground/20 px-6 py-3.5 text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
              >
                Áreas de Atuação
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative animate-reveal [animation-delay:700ms]">
            <img
              src={heroOffice}
              alt="Interior atmosférico de escritório jurídico premium"
              width={896}
              height={1120}
              className="w-full aspect-[4/5] object-cover outline-1 -outline-offset-1 outline-foreground/5"
            />
            <div className="absolute -bottom-6 -left-6 bg-accent p-8 text-accent-foreground hidden md:block">
              <span className="font-mono text-[10px] tracking-widest uppercase">
                Atuação Presencial
              </span>
              <div className="text-2xl font-display mt-2">São Paulo & Brasília</div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise grid (inverted) */}
      <section className="py-32 px-6 bg-foreground text-background">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="font-display text-4xl md:text-5xl italic font-light">
              Áreas de Atuação
            </h2>
            <div className="font-mono text-[10px] tracking-[0.2em] opacity-40 uppercase">
              Sectors of excellence
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border-t border-background/10">
            {AREAS.map((a, i) => (
              <div
                key={a.n}
                className={`group p-8 border-b border-background/10 hover:bg-accent/10 transition-colors ${
                  i < 2 ? "md:border-r" : ""
                }`}
              >
                <span className="font-mono text-[10px] opacity-40 mb-12 block">{a.n} /</span>
                <h3 className="font-display text-2xl mb-4 italic">{a.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 flex justify-end">
            <Link
              to="/atuacao"
              className="text-[11px] uppercase tracking-widest text-background/70 hover:text-accent transition-colors"
            >
              Ver todas as especialidades →
            </Link>
          </div>
        </div>
      </section>

      {/* Authority / About */}
      <section className="py-32 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <img
              src={profileTailoring}
              alt="Detalhe de terno sob medida em alfaiataria"
              width={1024}
              height={1216}
              loading="lazy"
              className="w-full aspect-[3/4] object-cover outline-1 -outline-offset-1 outline-foreground/5"
            />
          </div>
          <div className="space-y-10 order-1 md:order-2">
            <div className="eyebrow">A Autoridade</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Uma abordagem <span className="italic text-accent">cirúrgica</span> para
              problemas complexos.
            </h2>
            <p className="text-muted-foreground leading-relaxed">
              Fundado pelo Dr. Ricardo Martins, o escritório boutique nasceu com a
              premissa de que cada caso exige uma costura única. Não operamos em escala;
              operamos em profundidade. Nossa equipe é composta por especialistas em
              estratégia processual penal de elite.
            </p>
            <ul className="space-y-4">
              {[
                "Mestre em Direito Penal (USP)",
                "Conselheiro de Compliance Internacional",
                "Especialista em Tribunais Superiores",
              ].map((item) => (
                <li key={item} className="flex items-center gap-4 group">
                  <span className="w-2 h-2 rounded-full border border-accent group-hover:bg-accent transition-all" />
                  <span className="text-xs uppercase tracking-widest">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              to="/sobre"
              className="inline-block text-[11px] uppercase tracking-widest text-accent hover:underline underline-offset-4"
            >
              Conheça o escritório →
            </Link>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-24 px-6 border-t border-border bg-secondary">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="eyebrow mb-4">Resultados</div>
            <h2 className="font-display text-3xl md:text-4xl italic font-light max-w-2xl">
              Métricas que refletem rigor técnico e estratégia.
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-border">
            {RESULTS.map((r) => (
              <div key={r.label} className="bg-secondary p-8">
                <div className="font-display text-4xl md:text-5xl mb-2">{r.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                  {r.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="eyebrow">Atendimento confidencial</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Sua liberdade exige uma <span className="italic text-accent">defesa à altura</span>.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Toda análise inicial é confidencial e conduzida diretamente pelo sócio
            responsável. Plantão criminal 24h para urgências.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              to="/contato"
              className="bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Iniciar Análise Reservada
            </Link>
            <a
              href="https://wa.me/5511990000000"
              target="_blank"
              rel="noopener"
              className="border border-foreground/20 px-8 py-4 text-[11px] uppercase tracking-widest hover:bg-foreground hover:text-background transition-colors"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
