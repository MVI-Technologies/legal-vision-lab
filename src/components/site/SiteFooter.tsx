import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="py-20 px-6 border-t border-border bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="col-span-2 space-y-6">
            <div className="font-display text-2xl font-semibold tracking-tight">
              MARTINS <span className="text-accent italic font-light">S.A.</span>
            </div>
            <p className="max-w-xs text-xs text-muted-foreground leading-loose">
              Excelência jurídica pautada no sigilo absoluto e no rigor técnico.
              Atendimento corporativo premium em Direito Criminal.
            </p>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5511990000000"
                target="_blank"
                rel="noopener"
                className="text-[10px] uppercase tracking-widest text-foreground hover:text-accent"
              >
                WhatsApp
              </a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-foreground hover:text-accent">
                LinkedIn
              </a>
              <a href="#" className="text-[10px] uppercase tracking-widest text-foreground hover:text-accent">
                Instagram
              </a>
            </div>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-accent">Navegação</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/sobre" className="hover:text-accent">O Escritório</Link></li>
              <li><Link to="/atuacao" className="hover:text-accent">Áreas de Atuação</Link></li>
              <li><Link to="/resultados" className="hover:text-accent">Resultados</Link></li>
              <li><Link to="/artigos" className="hover:text-accent">Artigos</Link></li>
              <li><Link to="/contato" className="hover:text-accent">Contato</Link></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="font-mono text-[10px] tracking-widest uppercase text-accent">Contato</h4>
            <p className="text-sm">contato@martinsadv.com.br</p>
            <p className="text-sm">+55 11 99000-0000</p>
            <p className="text-sm text-muted-foreground pt-2">
              Av. Brigadeiro Faria Lima, 4500<br/>
              Itaim Bibi, São Paulo — SP
            </p>
          </div>
        </div>
        <div className="mt-20 pt-8 border-t border-border flex flex-col md:flex-row justify-between gap-6">
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            © {new Date().getFullYear()} Martins Sociedade de Advogados. Todos os direitos reservados.
          </p>
          <p className="text-[10px] uppercase tracking-widest text-muted-foreground">
            OAB/SP 000.000
          </p>
        </div>
      </div>
    </footer>
  );
}
