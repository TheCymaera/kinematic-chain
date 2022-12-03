import { HTMLCanvas2D } from "open-utilities/ui";

const canvas = document.querySelector("canvas")!;

export const chainColor = ()=>HTMLCanvas2D.sampleCSSColor(getComputedStyle(canvas).color);
