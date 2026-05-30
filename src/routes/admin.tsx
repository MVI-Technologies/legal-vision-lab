import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { 
  Users, 
  Calendar, 
  TrendingUp, 
  MessageSquare, 
  Clock,
  ChevronRight,
  LogOut,
  LayoutDashboard
} from "lucide-react";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/admin")({
  component: AdminDashboard,
});

function AdminDashboard() {
  const [activeTab, setActiveTab] = useState<"overview" | "leads" | "calendar">("overview");

  return (
    <div className="min-h-screen bg-[#FDFCFB] flex">
      {/* Sidebar */}
      <aside className="w-64 border-r border-border flex flex-col bg-white">
        <div className="p-8 border-b border-border">
          <div className="font-display text-xl tracking-tight">
            Martins <span className="italic font-light text-accent">Admin</span>
          </div>
        </div>
        
        <nav className="flex-1 p-4 space-y-2">
          <NavItem 
            icon={<LayoutDashboard size={18} />} 
            label="Dashboard" 
            active={activeTab === "overview"} 
            onClick={() => setActiveTab("overview")} 
          />
          <NavItem 
            icon={<MessageSquare size={18} />} 
            label="Leads" 
            active={activeTab === "leads"} 
            onClick={() => setActiveTab("leads")} 
          />
          <NavItem 
            icon={<Calendar size={18} />} 
            label="Agenda" 
            active={activeTab === "calendar"} 
            onClick={() => setActiveTab("calendar")} 
          />
        </nav>

        <div className="p-4 border-t border-border">
          <button className="flex items-center gap-3 px-4 py-2 text-sm text-muted-foreground hover:text-destructive transition-colors w-full">
            <LogOut size={18} />
            Sair do sistema
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="h-16 border-b border-border flex items-center justify-between px-8 bg-white sticky top-0 z-10">
          <h1 className="font-display text-lg italic">
            {activeTab === "overview" && "Visão Geral"}
            {activeTab === "leads" && "Gestão de Leads"}
            {activeTab === "calendar" && "Agenda Técnica"}
          </h1>
          <div className="flex items-center gap-4">
            <div className="w-8 h-8 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center text-[10px] font-mono text-accent">
              RM
            </div>
          </div>
        </header>

        <div className="p-8 max-w-6xl mx-auto">
          {activeTab === "overview" && <Overview />}
          {activeTab === "leads" && <LeadsList />}
          {activeTab === "calendar" && <CalendarView />}
        </div>
      </main>
    </div>
  );
}

function NavItem({ icon, label, active, onClick }: { icon: any, label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "flex items-center gap-3 px-4 py-2.5 rounded-none text-sm transition-all w-full",
        active 
          ? "bg-secondary text-foreground font-medium border-l-2 border-accent" 
          : "text-muted-foreground hover:bg-secondary/50"
      )}
    >
      {icon}
      {label}
    </button>
  );
}

function Overview() {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={<Users className="text-accent" />} label="Leads Ativos" value="12" trend="+3 este mês" />
        <StatCard icon={<Calendar className="text-accent" />} label="Agendamentos" value="08" trend="4 esta semana" />
        <StatCard icon={<TrendingUp className="text-accent" />} label="Taxa de Conversão" value="18%" trend="+2.4%" />
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white border border-border p-6 space-y-6">
          <h3 className="font-display text-xl">Recentes</h3>
          <div className="space-y-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="flex items-center justify-between p-3 bg-secondary/30 border border-border/50">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-white border border-border flex items-center justify-center font-serif">
                    {i === 1 ? "AM" : i === 2 ? "JS" : "RC"}
                  </div>
                  <div>
                    <p className="text-sm font-medium">Lead #{1024 + i}</p>
                    <p className="text-[10px] uppercase text-muted-foreground tracking-widest font-mono">Direito Econômico</p>
                  </div>
                </div>
                <ChevronRight size={16} className="text-muted-foreground" />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-border p-6 space-y-6">
          <h3 className="font-display text-xl">Próximos Agendamentos</h3>
          <div className="space-y-4">
            {[1, 2].map((i) => (
              <div key={i} className="flex items-center gap-4 p-3 border-l-2 border-accent bg-accent/5">
                <Clock size={16} className="text-accent" />
                <div>
                  <p className="text-sm font-medium">{i === 1 ? "14:30 - Análise de Processo" : "16:00 - Reunião Estratégica"}</p>
                  <p className="text-[10px] text-muted-foreground">Hoje, 24 de Maio</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function StatCard({ icon, label, value, trend }: { icon: any, label: string, value: string, trend: string }) {
  return (
    <div className="bg-white border border-border p-6 space-y-2 hover:border-accent/30 transition-colors">
      <div className="flex items-center justify-between">
        <span className="text-[10px] uppercase tracking-widest font-mono text-muted-foreground">{label}</span>
        {icon}
      </div>
      <div className="text-3xl font-display">{value}</div>
      <div className="text-[10px] text-accent font-medium">{trend}</div>
    </div>
  );
}

function LeadsList() {
  return (
    <div className="bg-white border border-border overflow-hidden">
      <table className="w-full text-left">
        <thead className="bg-secondary/50 border-b border-border">
          <tr className="text-[10px] uppercase tracking-widest font-mono">
            <th className="px-6 py-4 font-medium">Nome</th>
            <th className="px-6 py-4 font-medium">Área</th>
            <th className="px-6 py-4 font-medium">Data</th>
            <th className="px-6 py-4 font-medium">Status</th>
            <th className="px-6 py-4 font-medium"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {[1, 2, 3, 4].map((i) => (
            <tr key={i} className="hover:bg-secondary/20 transition-colors text-sm">
              <td className="px-6 py-4 font-medium">Cliente Exemplo {i}</td>
              <td className="px-6 py-4 text-muted-foreground">Crimes Econômicos</td>
              <td className="px-6 py-4 text-muted-foreground text-xs">22 Mai, 2024</td>
              <td className="px-6 py-4">
                <span className="px-2 py-0.5 rounded-full bg-accent/10 text-accent text-[9px] font-mono uppercase">Novo</span>
              </td>
              <td className="px-6 py-4 text-right">
                <button className="text-[10px] uppercase tracking-widest font-mono hover:text-accent">Detalhes</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function CalendarView() {
  return (
    <div className="bg-white border border-border p-12 text-center space-y-4">
      <Calendar className="mx-auto text-accent opacity-20" size={48} />
      <div className="space-y-1">
        <h3 className="font-display text-xl italic">Agenda Estratégica</h3>
        <p className="text-muted-foreground text-sm max-w-sm mx-auto">
          Módulo de visualização completa do calendário em desenvolvimento. Use o dashboard para ver agendamentos imediatos.
        </p>
      </div>
    </div>
  );
}
