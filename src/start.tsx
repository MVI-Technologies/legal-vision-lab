import { hydrateRoot } from "react-dom/client";
import { createStart } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();
const StartInstance = createStart(() => ({ router }));

const rootElement = document.getElementById("root");
if (rootElement) {
  // Em TanStack Start, o retorno de createStart deve ser renderizado
  hydrateRoot(rootElement, <StartInstance />);
}
