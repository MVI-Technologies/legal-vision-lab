import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";
import { cn } from "@/lib/utils";
import { TrendingUp } from "lucide-react";

export const Route = createFileRoute("/contato")({
  head: () => ({
    meta: [
      { title: "Contato — Martins S.A." },
      {
        name: "description",
        content:
          "Agende uma análise confidencial com o escritório Martins S.A. Plantão criminal 24h. São Paulo e Brasília.",
      },
      { property: "og:title", content: "Contato — Martins S.A." },
      {
        property: "og:description",
        content: "Análise reservada e plantão criminal 24h.",
      },
      { property: "og:url", content: "/contato" },
    ],
    links: [{ rel: "canonical", href: "/contato" }],
  }),
  component: Contato,
});

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(120),
  email: z.string().trim().email("Email inválido").max(200),
  telefone: z.string().trim().min(8, "Telefone inválido").max(30),
  area: z.string().max(60).optional(),
  mensagem: z.string().trim().min(10, "Descreva brevemente o caso").max(1500),
});

function Contato() {
  const [status, setStatus] = useState<"idle" | "ok" | "error" | "scheduling">("idle");
  const [error, setError] = useState<string>("");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = schema.safeParse(Object.fromEntries(form));
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "Verifique os campos");
      setStatus("error");
      return;
    }
    setError("");
    setStatus("scheduling");
  }

  function confirmSchedule() {
    if (!selectedDate) return;
    setStatus("ok");
  }

  return (
    <>
      <section className="px-6 pt-16 pb-12 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-6">Contato</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl text-balance">
            Análise <span className="font-light">confidencial</span>.
          </h1>
        </div>
      </section>

      <section className="px-6 py-16">
        <div className="max-w-7xl mx-auto grid md:grid-cols-12 gap-16">
          <div className="md:col-span-5 space-y-10">
            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                WhatsApp
              </div>
              <a
                href="https://wa.me/5511990000000"
                target="_blank"
                rel="noopener"
                className="block font-display text-2xl hover:text-accent transition-colors"
              >
                +55 11 99000-0000
              </a>
              <p className="text-xs text-muted-foreground">Plantão criminal 24h</p>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Email
              </div>
              <a
                href="mailto:contato@martinsadv.com.br"
                className="block font-display text-2xl hover:text-accent transition-colors"
              >
                contato@martinsadv.com.br
              </a>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                São Paulo
              </div>
              <p className="text-sm leading-relaxed">
                Av. Brigadeiro Faria Lima, 4500 — 14º andar<br />
                Itaim Bibi — SP, 04538-132
              </p>
            </div>

            <div className="space-y-3">
              <div className="font-mono text-[10px] uppercase tracking-widest text-accent">
                Brasília
              </div>
              <p className="text-sm leading-relaxed">
                SCS Quadra 09, Bloco A<br />
                Asa Sul — DF, 70308-200
              </p>
            </div>
          </div>

          <div className="md:col-span-7 bg-secondary p-10 space-y-6 relative overflow-hidden">
            {status !== "scheduling" && status !== "ok" && (
              <form onSubmit={handleSubmit} noValidate className="space-y-6 animate-in fade-in duration-500">
                <h2 className="font-display text-3xl">Inicie uma análise reservada</h2>
                <div className="grid sm:grid-cols-2 gap-6">
                  <Field label="Nome completo" name="nome" required />
                  <Field label="Email corporativo" name="email" type="email" required />
                  <Field label="Telefone / WhatsApp" name="telefone" required />
                  <Field label="Área de interesse" name="area" placeholder="Crimes econômicos, júri…" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="mensagem" className="font-mono text-[10px] uppercase tracking-widest text-accent">
                    Breve descrição do caso
                  </label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    rows={5}
                    required
                    maxLength={1500}
                    className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent resize-none"
                  />
                </div>
                {status === "error" && <p className="text-xs text-destructive">{error}</p>}
                <button
                  type="submit"
                  className="w-full bg-foreground text-background py-4 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
                >
                  Continuar para Agendamento
                </button>
              </form>
            )}

            {status === "scheduling" && (
              <div className="space-y-6 animate-in slide-in-from-right duration-500">
                <h2 className="font-display text-3xl">Escolha o melhor horário</h2>
                <p className="text-xs text-muted-foreground uppercase tracking-widest font-mono">Disponibilidade Técnica</p>
                
                <div className="grid grid-cols-2 gap-4">
                  {["09:00", "11:00", "14:30", "16:00", "17:30"].map((time) => (
                    <button
                      key={time}
                      onClick={() => setSelectedDate(new Date())}
                      className={cn(
                        "py-3 border border-border text-xs font-mono transition-colors",
                        selectedDate ? "bg-accent text-white border-accent" : "bg-white hover:border-accent"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>

                <div className="pt-4 border-t border-border flex gap-4">
                  <button 
                    onClick={() => setStatus("idle")}
                    className="flex-1 py-3 text-[10px] uppercase tracking-widest border border-border hover:bg-white transition-colors"
                  >
                    Voltar
                  </button>
                  <button 
                    onClick={confirmSchedule}
                    disabled={!selectedDate}
                    className="flex-[2] py-3 text-[10px] uppercase tracking-widest bg-foreground text-background hover:bg-accent disabled:opacity-50 transition-colors"
                  >
                    Confirmar Análise
                  </button>
                </div>
              </div>
            )}

            {status === "ok" && (
              <div className="py-20 text-center space-y-6 animate-in zoom-in duration-500">
                <div className="w-16 h-16 bg-accent/10 text-accent rounded-full flex items-center justify-center mx-auto">
                  <TrendingUp size={32} />
                </div>
                <div className="space-y-2">
                  <h3 className="font-display text-2xl">Agendamento Confirmado</h3>
                  <p className="text-sm text-muted-foreground max-w-xs mx-auto">
                    Sua análise reservada foi agendada. Você receberá um link seguro via email e WhatsApp em instantes.
                  </p>
                </div>
                <button 
                  onClick={() => setStatus("idle")}
                  className="text-[10px] uppercase tracking-widest font-mono text-accent hover:underline"
                >
                  Agendar outro horário
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div className="space-y-2">
      <label htmlFor={name} className="font-mono text-[10px] uppercase tracking-widest text-accent">
        {label} {required && <span aria-hidden>*</span>}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        maxLength={200}
        className="w-full bg-background border border-border px-4 py-3 text-sm focus:outline-none focus:border-accent"
      />
    </div>
  );
}
