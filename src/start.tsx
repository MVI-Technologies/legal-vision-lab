import { hydrateRoot } from "react-dom/client";
import { createStartClient } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();
const StartClient = createStartClient({ router });

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, <StartClient />);
}
