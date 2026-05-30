import { hydrateRoot } from "react-dom/client";
import { createStart } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();
const StartInstance = createStart(() => ({ router }));

const rootElement = document.getElementById("root");
if (rootElement) {
  // @ts-ignore - Forçando a inicialização para corrigir a tela branca
  const App = StartInstance();
  hydrateRoot(rootElement, <App />);
}
