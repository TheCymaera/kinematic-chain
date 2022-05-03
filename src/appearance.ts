import { Canvas2DRenderer } from "open-utilities/rendering-web";

export const chainColor = Canvas2DRenderer.sampleCSSColor(getComputedStyle(document.body).color);
