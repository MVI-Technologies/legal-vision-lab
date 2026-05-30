import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { z } from "zod";

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
  const [status, setStatus] = useState<"idle" | "ok" | "error">("idle");
  const [error, setError] = useState<string>("");

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
    setStatus("ok");
    e.currentTarget.reset();
  }

  return (
    <>
      <section className="px-6 pt-24 pb-16 border-b border-border">
        <div className="max-w-7xl mx-auto">
          <div className="eyebrow mb-6">Contato</div>
          <h1 className="font-display text-5xl md:text-7xl leading-[1] max-w-4xl text-balance">
            Análise <span className="italic font-light">confidencial</span>.
          </h1>
        </div>
      </section>

      <section className="px-6 py-20">
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

          <form
            onSubmit={handleSubmit}
            noValidate
            className="md:col-span-7 bg-secondary p-10 space-y-6"
          >
            <h2 className="font-display text-3xl italic">Inicie uma análise reservada</h2>

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

            {status === "error" && (
              <p className="text-xs text-destructive">{error}</p>
            )}
            {status === "ok" && (
              <p className="text-xs text-accent">
                Recebido. Retornaremos em até 24h úteis com discrição.
              </p>
            )}

            <button
              type="submit"
              className="w-full bg-foreground text-background py-4 text-[11px] uppercase tracking-widest hover:bg-accent transition-colors"
            >
              Enviar Solicitação
            </button>
            <p className="text-[10px] text-muted-foreground leading-relaxed">
              Toda comunicação é confidencial. Os dados informados são usados
              exclusivamente para retorno técnico.
            </p>
          </form>
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
