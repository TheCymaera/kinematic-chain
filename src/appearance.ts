import { Canvas2DRenderer } from "open-utilities/rendering-web";

await new Promise(resolve=>window.addEventListener("load", resolve));

export const chainColor = Canvas2DRenderer.sampleCSSColor(getComputedStyle(document.body).color);
