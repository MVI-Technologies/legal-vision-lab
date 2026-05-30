import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";

import appCss from "../styles.css?url";

import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { WhatsAppFab } from "../components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="font-display text-8xl italic text-accent opacity-20">404</div>
        <div className="space-y-2">
          <h1 className="font-display text-2xl italic">Página não localizada</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O conteúdo que você busca pode ter sido movido ou não está mais disponível em nossa base confidencial.
          </p>
        </div>
        <div className="pt-4">
          <Link
            to="/"
            className="bg-foreground text-background px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Retornar ao Início
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error("Erro capturado:", error);
  const router = useRouter();

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center space-y-6">
        <div className="font-display text-2xl italic">Instabilidade Técnica</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ocorreu uma falha inesperada no processamento dos dados. Nossa equipe técnica já foi notificada para manter o rigor de nossa plataforma.
        </p>
        <div className="pt-4 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="bg-foreground text-background px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
          >
            Tentar Novamente
          </button>
          <Link
            to="/"
            className="border border-border px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-secondary transition-colors"
          >
            Página Inicial
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Martins S.A. | Advocacia Criminal de Alto Nível e Estratégia Jurídica" },
      {
        name: "description",
        content:
          "Especialistas em Direito Criminal de alta complexidade. Defesa técnica em crimes econômicos, Tribunal do Júri e instâncias superiores. Atendimento exclusivo em São Paulo e Brasília.",
      },
      { name: "keywords", content: "advogado criminalista, direito penal, crimes econômicos, compliance criminal, tribunal do júri, martins s.a., advocacia criminal são paulo" },
      { name: "author", content: "Martins Sociedade de Advogados" },
      { name: "robots", content: "index, follow" },
      { property: "og:site_name", content: "Martins S.A." },
      { property: "og:title", content: "Martins S.A. | Advocacia Criminal Estratégica" },
      { property: "og:description", content: "Defesa técnica e sigilo absoluto em causas criminais complexas." },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "pt_BR" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "theme-color", content: "#1a1a1a" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap",
      },
      { rel: "icon", href: "/favicon.ico" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LegalService",
              "name": "Martins Sociedade de Advogados",
              "description": "Escritório de advocacia criminal de alta complexidade focado em crimes econômicos e defesa estratégica.",
              "url": "https://martinsadv.com.br",
              "telephone": "+5511990000000",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Av. Brigadeiro Faria Lima, 4500",
                "addressLocality": "São Paulo",
                "addressRegion": "SP",
                "postalCode": "04538-132",
                "addressCountry": "BR"
              },
              "priceRange": "$$$",
              "image": "https://martinsadv.com.br/og-image.jpg"
            })
          }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col">
        <SiteHeader />
        <main className="flex-1">
          <Outlet />
        </main>
        <SiteFooter />
        <WhatsAppFab />
      </div>
    </QueryClientProvider>
  );
}
