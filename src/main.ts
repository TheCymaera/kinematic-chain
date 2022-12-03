import { Matrix4, Rect, Vector2 } from "open-utilities/geometry";
import { PathStyle } from "open-utilities/ui";
import { AnimationFrameScheduler, HTMLCanvas2D } from "open-utilities/ui";
import { KinematicChain } from "./KinematicChain.js";
import * as appearance from "./appearance.js";

const canvas = document.querySelector("canvas")!;
const renderer = HTMLCanvas2D.fromCanvas(canvas);
const viewport = Rect.zero.clone();

new ResizeObserver(()=>{
	const minViewportLength = 20;

	const ratio = canvas.clientHeight / canvas.clientWidth;
	const width  = minViewportLength * (ratio > 1 ? 1 : 1 / ratio);
	const height = minViewportLength * (ratio > 1 ? ratio : 1);

	renderer.setBitmapDimensions(new Vector2(canvas.clientWidth * devicePixelRatio, canvas.clientHeight * devicePixelRatio));
	viewport.copy(Rect.fromCenter(Vector2.zero, width, height));
	renderer.setTransform(Matrix4.ortho(viewport));

	draw();
}).observe(canvas);


const anchor = Vector2.zero;
const chain = new KinematicChain();
chain.segments.push(new KinematicChain.Segment(anchor.clone()     , new Vector2(0, .8), .2));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .2));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .175));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .175));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .15));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .15));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .125));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .125));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .1));
chain.segments.push(new KinematicChain.Segment(chain.tipPosition(), new Vector2(0, .8), .1));

function draw() {
	renderer.clear();
	const color = appearance.chainColor();
	for (const segment of chain.segments) {
		renderer.drawLine(segment.base, segment.tipPosition(), new PathStyle({ 
			color: color, 
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


let mouseCoordinate = Vector2.zero;
canvas.onpointerdown = canvas.onpointermove = (event)=>{
	const clientCoord = new Vector2(event.clientX, event.clientY);
	mouseCoordinate = clientCoord.transformMatrix4(renderer.getClientInverseTransform());
}


console.log(`For debugging, see "app"`)
Object.defineProperty(window, "app", {
	value: {  canvas, chain, anchor, origin },
});