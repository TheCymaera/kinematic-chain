import { Rect, Vec2 } from "open-utilities/geometry";
import { PathStyle } from "open-utilities/ui";
import { AnimationFrameScheduler, Canvas2DRenderer } from "open-utilities/rendering-web";
import { KinematicChain } from "./KinematicChain.js";
import * as appearance from "./appearance.js";
import "./ui.js";
import "./ui.scss";

const canvas = document.querySelector("canvas")!;
const renderer = Canvas2DRenderer.fromCanvas(canvas);

new ResizeObserver(()=>{
	const canvasLength = 20;
	const ratio = canvas.clientHeight / canvas.clientWidth;
	const viewportRect = canvas.clientHeight < canvas.clientWidth ?
		Rect.fromCenter(Vec2.zero, canvasLength / ratio, canvasLength) : 
		Rect.fromCenter(Vec2.zero, canvasLength, canvasLength * ratio);
	
	renderer.setViewportRect(viewportRect);

	canvas.width = canvas.clientWidth;
	canvas.height = canvas.clientHeight;

	draw();
}).observe(canvas);


const anchor = Vec2.zero;
const chain = new KinematicChain();
chain.segments.push(new KinematicChain.Segment(anchor.clone()     , new Vec2(0, .8), 4));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 4));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 3.5));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 3.5));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 3));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 3));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 2.5));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 2.5));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 2));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vec2(0, .8), 2));

function draw() {
	renderer.clear();
	for (const segment of chain.segments) {
		renderer.drawLine(segment.base, segment.tipPosition(), new PathStyle({ 
			color: appearance.chainColor, 
			width: segment.renderThickness,
			cap: PathStyle.Cap.Round,
		}));
	}
}

AnimationFrameScheduler.periodic((timeElapsed)=>{
	const moveAmount = timeElapsed.seconds * 20;
	chain.moveTipTowards(mouseCoordinate, moveAmount);
	chain.anchorAt(anchor);
	draw();
});


let mouseCoordinate = Vec2.zero;
canvas.onpointerdown = canvas.onpointermove = (event)=>{
	const mouseClientPosition = new Vec2(event.clientX, event.clientY);
	mouseCoordinate = Rect.mapPointOnto(renderer.clientRect(), mouseClientPosition, renderer.viewportRect());
}


console.log(`For debugging, see "app"`)
Object.defineProperty(window, "app", {
	value: {  canvas, chain, anchor, origin },
});