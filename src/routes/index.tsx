import { createFileRoute, Link } from "@tanstack/react-router";
import lawyerConfidence from "@/assets/lawyer_br.png";
import profileTailoring from "@/assets/profile-tailoring.jpg";
import heroBg from "@/assets/hero_bg_br.png";
import { useScrollReveal } from "@/hooks/use-scroll-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Martins S.A. | Advocacia Criminal de Alta Complexidade" },
      {
        name: "description",
        content:
          "Defesa técnica estratégica para executivos e empresas. Atuação em crimes econômicos, conformidade criminal e tribunais superiores com absoluto sigilo.",
      },
      { property: "og:title", content: "Martins S.A. | Advocacia Criminal de Alto Nível" },
      {
        property: "og:description",
        content:
          "Arquitetura jurídica de alta complexidade. Defesa criminal corporativa com rigor técnico e discrição absoluta.",
      },
      { property: "og:url", content: "/" },
      { property: "og:type", content: "website" },
      { property: "og:image", content: "/og-image.png" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Martins S.A. | Advocacia Criminal de Alta Complexidade" },
      { name: "twitter:description", content: "Defesa técnica estratégica para executivos e empresas com absoluto sigilo." },
      { name: "twitter:image", content: "/og-image.png" },
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
  useScrollReveal();

  return (
    <main className="relative bg-background text-foreground">
      {/* Subtle Paper/Noise Overlay */}
      <div className="pointer-events-none fixed inset-0 z-50 h-full w-full opacity-[0.02] mix-blend-multiply">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <filter id="noise">
            <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch" />
          </filter>
          <rect width="100%" height="100%" filter="url(#noise)" />
        </svg>
      </div>

      {/* Hero */}
      <section className="dark relative bg-background text-foreground pt-12 md:pt-16 pb-20 md:pb-32 px-6 overflow-hidden">
        {/* Abstract Background Matching Image */}
        <div className="absolute inset-0 z-0 bg-background">
          <img 
            src={heroBg} 
            alt="" 
            className="w-full h-full object-cover opacity-70 [mask-image:linear-gradient(to_bottom,transparent_40%,black_80%)] md:[mask-image:linear-gradient(to_right,transparent_40%,black_80%)]" 
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-16 items-center md:items-start">
          <div className="md:col-span-7 space-y-8 relative z-10 pt-2">
            <div className="space-y-4">
              <div className="font-body uppercase tracking-[0.2em] text-[11px] text-muted-foreground animate-reveal">
                Defesa Estratégica & Compliance Criminal
              </div>
              <h1 className="font-display font-light text-5xl md:text-[72px] lg:text-[80px] leading-[1.05] text-balance animate-reveal [animation-delay:300ms]">
                Excelência em
                <br />
                <span className="text-accent">
                  Casos Criminais
                </span>
                <br />
                Complexos.
              </h1>
            </div>
            
            <p className="max-w-[480px] text-muted-foreground text-base md:text-lg leading-relaxed animate-reveal [animation-delay:600ms]">
              Atuação especializada em crimes econômicos e tribunais superiores. O rigor
              técnico da alfaiataria aplicado ao Direito Criminal brasileiro.
            </p>
            
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6 sm:gap-8 animate-reveal [animation-delay:900ms]">
              <Link
                to="/contato"
                className="w-full sm:w-auto text-center bg-foreground text-background px-6 sm:px-8 py-4 text-[11px] font-bold uppercase tracking-[0.15em] rounded-none transition-all duration-300 ease-out hover:bg-accent hover:text-white"
              >
                Agendar Consulta Privada
              </Link>
              <Link
                to="/atuacao"
                className="w-full sm:w-auto flex items-center justify-center sm:justify-start gap-2 text-[12px] font-bold uppercase tracking-widest text-foreground hover:text-accent transition-colors"
              >
                Conhecer a atuação <span>&rarr;</span>
              </Link>
            </div>
          </div>

          <div className="md:col-span-5 relative animate-reveal [animation-delay:1200ms]">
            <div className="relative inline-block w-full">
              <img
                src={lawyerConfidence}
                alt="Sócio fundador em escritório jurídico de alto padrão"
                width={896}
                height={1120}
                className="w-full aspect-[4/5] md:aspect-[3/4] max-h-[50vh] md:max-h-[65vh] object-cover object-top shadow-2xl shadow-black/50 border border-white/5 rounded-none"
              />
              <div className="absolute -bottom-10 -left-2 sm:-left-6 md:-left-12 max-w-[280px] bg-background/95 backdrop-blur-xl p-6 md:p-8 shadow-[0_20px_40px_rgba(0,0,0,0.1)] rounded-none border border-foreground/5">
                <span className="font-mono text-[10px] tracking-widest uppercase text-muted-foreground block mb-2">
                  Atuação Presencial
                </span>
                <div className="text-2xl font-display text-foreground">São Paulo &<br/>Brasília</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Expertise grid (inverted) */}
      <section className="py-16 px-6 bg-gradient-to-b from-[#1A1A1A] to-[#1C1C1C] text-background reveal-on-scroll opacity-0 translate-y-4">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8">
            <h2 className="font-display text-4xl md:text-5xl font-light">
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
                className={`group p-8 border-b border-background/10 hover:bg-accent/10 transition-colors duration-500 ease-out ${
                  i < 2 ? "md:border-r" : ""
                }`}
              >
                <span className="font-mono text-[10px] opacity-40 mb-12 block">{a.n} /</span>
                <h3 className="font-display text-2xl mb-4 group-hover:text-accent transition-colors duration-300">{a.title}</h3>
                <p className="text-sm text-background/60 leading-relaxed group-hover:text-background/80 transition-colors duration-300">{a.text}</p>
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
      <section className="py-16 px-6 reveal-on-scroll opacity-0 translate-y-4">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-24 items-center">
          <div className="order-2 md:order-1">
            <img
              src={profileTailoring}
              alt="Detalhe de terno sob medida em alfaiataria"
              width={1024}
              height={1216}
              loading="lazy"
              className="w-full aspect-square md:aspect-[3/4] max-h-[65vh] object-cover object-center outline-1 -outline-offset-1 outline-foreground/5"
            />
          </div>
          <div className="space-y-10 order-1 md:order-2">
            <div className="eyebrow">A Autoridade</div>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Uma abordagem <span className="text-accent">cirúrgica</span> para
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
      <section className="py-16 px-6 border-t border-border bg-secondary reveal-on-scroll opacity-0 translate-y-4">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <div className="eyebrow mb-4">Resultados</div>
            <h2 className="font-display text-3xl md:text-4xl font-light max-w-2xl">
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
      <section className="py-16 px-6 reveal-on-scroll opacity-0 translate-y-4">
        <div className="max-w-4xl mx-auto text-center space-y-10">
          <div className="eyebrow">Atendimento confidencial</div>
          <h2 className="font-display text-4xl md:text-6xl leading-tight">
            Sua liberdade exige uma <span className="text-accent">defesa à altura</span>.
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Toda análise inicial é confidencial e conduzida diretamente pelo sócio
            responsável. Plantão criminal 24h para urgências.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <Link
              to="/contato"
              className="bg-foreground text-background px-8 py-4 text-[11px] uppercase tracking-widest transition-all duration-300 ease-out hover:bg-accent hover:scale-[1.02] hover:shadow-lg active:scale-95"
            >
              Iniciar Análise Reservada
            </Link>
            <a
              href="https://wa.me/5511990000000"
              target="_blank"
              rel="noopener"
              className="border border-foreground/20 px-8 py-4 text-[11px] uppercase tracking-widest transition-all duration-300 ease-out hover:bg-foreground hover:text-background hover:scale-[1.02] active:scale-95"
            >
              Falar pelo WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
