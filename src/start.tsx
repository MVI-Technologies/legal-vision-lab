import { hydrateRoot } from "react-dom/client";
import { createStart } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();
const StartInstance = createStart(() => ({ router }));

const rootElement = document.getElementById("root");
if (rootElement) {
  // @ts-ignore - Forçando renderização para resolver a tela branca
  hydrateRoot(rootElement, <StartInstance />);
}
