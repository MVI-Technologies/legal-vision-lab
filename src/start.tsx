import { hydrateRoot } from "react-dom/client";
import { StartClient } from "@tanstack/react-router";
import { getRouter } from "./router";

const router = getRouter();

const rootElement = document.getElementById("root");
if (rootElement) {
  hydrateRoot(rootElement, <StartClient router={router} />);
}
