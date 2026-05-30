import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
} from "@tanstack/react-router";
import { type ReactNode } from "react";

import { SiteHeader } from "../components/site/SiteHeader";
import { SiteFooter } from "../components/site/SiteFooter";
import { WhatsAppFab } from "../components/site/WhatsAppFab";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center space-y-6">
        <div className="font-display text-8xl italic text-accent opacity-20">404</div>
        <div className="space-y-2">
          <h1 className="font-display text-2xl italic">Página não localizada</h1>
          <p className="text-sm text-muted-foreground leading-relaxed">
            O conteúdo que você busca pode ter sido movido ou não está mais disponível.
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

function ErrorComponent({ reset }: { error: Error; reset: () => void }) {
  const router = useRouter();
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4 text-foreground">
      <div className="max-w-md text-center space-y-6">
        <div className="font-display text-2xl italic">Instabilidade Técnica</div>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Ocorreu uma falha inesperada. Nossa equipe técnica já foi notificada.
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
      { title: "Martins S.A. | Advocacia Criminal de Alto Nível" },
      {
        name: "description",
        content: "Especialistas em Direito Criminal de alta complexidade. Atendimento exclusivo em São Paulo e Brasília.",
      },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,300..700;1,9..144,300..600&family=Inter:wght@300;400;500;600&family=JetBrains+Mono:wght@400&display=swap",
      },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      <div className="flex min-h-screen flex-col bg-background text-foreground">
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
