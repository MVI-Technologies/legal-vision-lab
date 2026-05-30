import { hydrateRoot } from "react-dom/client";
import { createStartHandler } from "@tanstack/react-start";
import { getRouter } from "./router";

const router = getRouter();
const StartHandler = createStartHandler({ router });

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, <StartHandler />);
}
