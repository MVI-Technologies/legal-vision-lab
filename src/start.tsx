import { hydrateRoot } from "react-dom/client";
import { createStart } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();
const StartClient = createStart(() => ({ router }))();

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, <StartClient />);
}
