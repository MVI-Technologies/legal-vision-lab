# Martins S.A. | Advocacia Criminal de Alta Complexidade

> Advocacia boutique voltada para a defesa de crimes econômicos, conformidade corporativa e tribunais superiores. Uma marca construída sobre discrição absoluta, rigor técnico cirúrgico e estética premium inspirada no conceito **"Quiet Luxury"**.

---

## 🎨 O Conceito Estético (Design DNA)

O portal da **Martins S.A.** foi concebido para transmitir sobriedade, sofisticação e solidez jurídica de elite, inspirando-se no minimalismo e alfaiataria clássica de alto padrão.

*   **Paleta de Cores:**
    *   `Fundo (F5F0EB)`: Um tom off-white suave, caloroso e sofisticado que evita o cansaço do branco puro.
    *   `Grafite (1C1C1C)`: Utilizado para textos principais e elementos escuros, oferecendo excelente legibilidade com alto contraste e sobriedade.
    *   `Ouro Envelhecido (8B6914)`: A cor de sotaque (*accent*) reservada a pequenos detalhes, marcações sutis e interações, remetendo a prestígio e solidez.
*   **Tipografia:**
    *   **Display/Títulos:** `Playfair Display` (Serifada) - elegante, clássica e de altíssima autoridade.
    *   **Corpo de Texto:** `Inter` (Sans-serif) - moderna, legível e altamente funcional.
    *   *Regra de Estilo:* Uso estrito de fontes retas (sem qualquer uso de *itálico* em títulos ou elementos decorativos) para garantir firmeza institucional.
*   **Ícones:** Livre de elementos genéricos ou emojis. Uso exclusivo de vetores `SVG` semânticos e minimalistas da biblioteca **Lucide React**.

---

## ⚙️ Funcionalidades Premium Integradas

1. **Roteamento Avançado:** Roteador moderno do lado do cliente utilizando `@tanstack/react-router`.
2. **Design Responsivo de Alta Precisão:** Interfaces fluidas com grades perfeitamente adaptadas a dispositivos móveis, tablets e monitores desktop.
3. **Seções Compactas e Fluidas:** Todo o site compartilha de um espaçamento vertical unificado e otimizado (`py-16` / `pt-16 pb-12`), proporcionando uma experiência de leitura contínua, elegante e confortável.
4. **Widget Concierge (Chatbot Inteligente):** 
   *   Desenvolvido utilizando `createPortal` para renderização limpa no nível raiz do documento (`document.body`), livre de conflitos de z-index ou travas de layout no mobile.
   *   Fluxo de roteamento por tópicos que coleta informações do lead e gera um link pré-formatado seguro diretamente para o WhatsApp do plantão criminal.
5. **Agendamento Técnico Integrado:** Módulo de reserva na página de Contatos para triagem avançada de casos.
6. **Newsletter Oculta / Restrita:** Captação de contatos corporativos estratégicos.

---

## 💻 Tecnologias Utilizadas

*   **Core:** React 19 + TypeScript
*   **Bundler & Dev Server:** Vite 7
*   **Estilização:** Tailwind CSS v4 (Compilação ultra-rápida nativa com suporte de variáveis de design modernas)
*   **Navegação:** `@tanstack/react-router`
*   **Icons:** `lucide-react`
*   **Form & Validações:** `react-hook-form` + `zod`

---

## 🚀 Como Iniciar Localmente

Para instalar as dependências e rodar o servidor de desenvolvimento:

```bash
# 1. Instalar as dependências usando o Bun (ou NPM)
bun install

# 2. Iniciar o servidor de desenvolvimento local
bun run dev
```

Abra [http://localhost:8080](http://localhost:8080) em seu navegador.

---

## 📦 Compilação para Produção

Para gerar o build de produção otimizado com minificação de ativos:

```bash
bun run build
```

Os arquivos prontos para entrega serão gerados na pasta `/dist`.

---

## ☁️ Deploy no Vercel

O projeto está totalmente configurado para o ecossistema Vercel através do arquivo de automação `vercel.json` na raiz. 

Para colocar em produção:
1. Conecte seu repositório Git ao painel do Vercel.
2. Defina o preset do framework como **Vite**.
3. O Vercel detectará e aplicará as configurações estáticas. O arquivo `vercel.json` cuidará de redirecionar todas as sub-rotas dinamicamente para o arquivo `/index.html` principal, evitando qualquer erro de 404 em rotas diretas do cliente.
