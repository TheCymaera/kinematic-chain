class t{x;y;constructor(t,e){this.x=t,this.y=e}clone(){return new t(this.x,this.y)}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}distanceTo(t){const e=this.x-t.x,i=this.y-t.y;return Math.sqrt(e*e+i*i)}angleTo(t){const e=t.x-this.x,i=t.y-this.y;return Math.atan2(i,e)}normalize(){const t=this.length();return t>0&&(this.x/=t,this.y/=t),this}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}subtract(t){return this.x-=t.x,this.y-=t.y,this}multiply(t){return this.x*=t,this.y*=t,this}rotate(t){const e=Math.cos(t),i=Math.sin(t),s=this.x,n=this.y;return this.x=s*e-n*i,this.y=s*i+n*e,this}toString(){return`Vec2(${this.x.toFixed(3)}, ${this.y.toFixed(3)})`}static zero=Object.freeze(new t(0,0))}class e{center;radius;constructor(t,e){this.center=t,this.radius=e}static zero=Object.freeze(new e(t.zero,0))}class i{origin=new t(0,0);segments=[];setOrigin(t){return this.origin=t,this}lineTo(t){return this.segments.push(new i.LineTo(t)),this}close(){return this.segments.push(new i.Close),this}}!function(t){t.LineTo=class{point;constructor(t){this.point=t}};t.Close=class{constructor(){}}}(i||(i={}));class s{x1;y1;x2;y2;constructor(t,e,i,s){this.x1=t,this.y1=e,this.x2=i,this.y2=s}static zero=Object.freeze(new s(0,0,0,0));static fromPoints(t,e){return new s(t.x,t.y,e.x,e.y)}static fromCenter(t,e,i){const n=t.x-e/2,o=t.y-i/2;return new s(n,o,n+e,o+i)}static fromDimensions(t,e,i,n){return new s(t,e,t+i,e+n)}static fromCoordinates(t,e,i,n){return new s(t,e,i,n)}get width(){return this.x2-this.x1}get height(){return this.y2-this.y1}set width(t){this.x2=this.x1+t}set height(t){this.y2=this.y1+t}get center(){return new t((this.x1+this.x2)/2,(this.y1+this.y2)/2)}set center(t){const e=this.width,i=this.height;this.x1=t.x-e/2,this.y1=t.y-i/2,this.x2=t.x+e/2,this.y2=t.y+i/2}get minX(){return Math.min(this.x1,this.x2)}get minY(){return Math.min(this.y1,this.y2)}get maxX(){return Math.max(this.x1,this.x2)}get maxY(){return Math.max(this.y1,this.y2)}toString(){return`Rect(${this.x1.toFixed(3)}, ${this.y1.toFixed(3)}, ${this.width.toFixed(3)}, ${this.height.toFixed(3)})`}static mapPointOnto(e,i,s){const n=(i.x-e.x1)/(e.x2-e.x1)*(s.x2-s.x1)+s.x1,o=(i.y-e.y1)/(e.y2-e.y1)*(s.y2-s.y1)+s.y1;return new t(n,o)}static mapRectOnto(e,i,n){return s.fromPoints(s.mapPointOnto(e,new t(i.x1,i.y1),n),s.mapPointOnto(e,new t(i.x2,i.y2),n))}}class n{r;g;b;a;static fromRGBA(t,e,i,s){return new n(t,e,i,s)}static black=Object.freeze(new n(0,0,0,255));static white=Object.freeze(new n(255,255,255,255));static transparent=Object.freeze(new n(0,0,0,0));constructor(t,e,i,s){this.r=0|t,this.g=0|e,this.b=0|i,this.a=0|s}toString(){return"#"+this.r.toString(16).padStart(2,"0")+this.g.toString(16).padStart(2,"0")+this.b.toString(16).padStart(2,"0")+this.a.toString(16).padStart(2,"0")}}class o{color;width;cap;join;miterLimit;constructor({color:t=n.transparent,width:e=1,cap:i=o.Cap.Butt,join:s=o.Join.Miter,miterLimit:r=10}={}){this.color=t,this.width=e,this.cap=i,this.join=s,this.miterLimit=r}}!function(t){var e,i;(e=t.Cap||(t.Cap={}))[e.Butt=0]="Butt",e[e.Round=1]="Round",e[e.Square=2]="Square",(i=t.Join||(t.Join={}))[i.Miter=0]="Miter",i[i.Round=1]="Round",i[i.Bevel=2]="Bevel"}(o||(o={}));class r{milliseconds;constructor({milliseconds:t=0,seconds:e=0,minutes:i=0,hours:s=0,days:n=0,weeks:o=0}){this.milliseconds=t+e*r.millisecondsPerSecond+i*r.millisecondsPerMinute+s*r.millisecondsPerHour+n*r.millisecondsPerDay+o*r.millisecondsPerWeek}set seconds(t){this.milliseconds=t*r.millisecondsPerSecond}get seconds(){return this.milliseconds/r.millisecondsPerSecond}set minutes(t){this.milliseconds=t*r.millisecondsPerMinute}get minutes(){return this.milliseconds/r.millisecondsPerMinute}set hours(t){this.milliseconds=t*r.millisecondsPerHour}get hours(){return this.milliseconds/r.millisecondsPerHour}set days(t){this.milliseconds=t*r.millisecondsPerDay}get days(){return this.milliseconds/r.millisecondsPerDay}set weeks(t){this.milliseconds=t*r.millisecondsPerWeek}get weeks(){return this.milliseconds/r.millisecondsPerWeek}get weeksPart(){return Math.floor(this.milliseconds/r.millisecondsPerWeek)}get daysPart(){return Math.floor(this.milliseconds/r.millisecondsPerDay)}get hoursPart(){return Math.floor(this.milliseconds%r.millisecondsPerDay/r.millisecondsPerHour)}get minutesPart(){return Math.floor(this.milliseconds%r.millisecondsPerHour/r.millisecondsPerMinute)}get secondsPart(){return Math.floor(this.milliseconds%r.millisecondsPerMinute/r.millisecondsPerSecond)}get millisecondsPart(){return this.milliseconds%r.millisecondsPerSecond}clone(){return new r({milliseconds:this.milliseconds})}abs(){return this.milliseconds=Math.abs(this.milliseconds),this}toString(){const t=this.clone().abs();return`${this.daysPart}:${t.hoursPart}:${t.minutesPart}:${t.secondsPart}:${t.millisecondsPart}`}static millisecondsPerSecond=1e3;static millisecondsPerMinute=60*r.millisecondsPerSecond;static millisecondsPerHour=60*r.millisecondsPerMinute;static millisecondsPerDay=24*r.millisecondsPerHour;static millisecondsPerWeek=7*r.millisecondsPerDay}class c{constructor(t){this.#t=t,this.#e=requestAnimationFrame(this.#i),this.#s=performance.now()}dispose(){cancelAnimationFrame(this.#e)}static schedule(){const t=performance.now();return new Promise((e=>requestAnimationFrame((()=>e(new r({milliseconds:performance.now()-t}))))))}static periodic(t){return new c(t)}#i=()=>{const t=this.#s;this.#s=performance.now(),this.#t(new r({milliseconds:this.#s-t})),this.#e=requestAnimationFrame(this.#i)};#s;#e;#t}class h{ctx;constructor(t){this.ctx=t}static fromCanvas(t){return new h(t.getContext("2d"))}static sampleCSSColor(t){const e=document.createElement("canvas");e.width=e.height=1;const i=e.getContext("2d");i.fillStyle=t,i.fillRect(0,0,1,1);const s=i.getImageData(0,0,1,1).data;return n.fromRGBA(s[0],s[1],s[2],s[3])}viewportRect(){return this.#n}setViewportRect(t){this.#n=t}clientRect(){return s.fromCoordinates(0,this.ctx.canvas.clientHeight,this.ctx.canvas.clientWidth,0)}bitmapRect(){return s.fromCoordinates(0,this.ctx.canvas.height,this.ctx.canvas.width,0)}clear(){this.ctx.clearRect(0,0,this.ctx.canvas.width,this.ctx.canvas.height)}drawLine(t,e,i){const n=s.mapPointOnto(this.#n,t,this.bitmapRect()),o=s.mapPointOnto(this.#n,e,this.bitmapRect());this.#o(i),this.ctx.beginPath(),this.ctx.moveTo(n.x,n.y),this.ctx.lineTo(o.x,o.y),this.ctx.stroke()}drawPath(t,e){this.#o(e),this.#r(t),this.ctx.stroke()}drawCircle(t,e){const i=s.mapPointOnto(this.#n,t.center,this.bitmapRect()),n=t.radius*this.ctx.canvas.width/this.#n.width;this.#c(e),this.ctx.beginPath(),this.ctx.arc(i.x,i.y,n,0,2*Math.PI),this.ctx.fill(),this.ctx.stroke()}drawRect(t,e){const i=s.mapRectOnto(this.#n,t,this.bitmapRect());this.#c(e),this.ctx.beginPath(),this.ctx.rect(i.x1,i.y1,i.width,i.height),this.ctx.fill(),this.ctx.stroke()}drawSprite(t,e){const i=s.mapRectOnto(this.#n,t,this.bitmapRect()),n=e.bitmapRect;this.ctx.drawImage(e.image,n.x1,n.y1,n.width,n.height,i.x1,i.y1,i.width,i.height)}#n=s.zero;#r(t){this.ctx.beginPath();const e=s.mapPointOnto(this.#n,t.origin,this.bitmapRect());this.ctx.moveTo(e.x,e.y);for(const e of t.segments){if(e instanceof i.LineTo){const t=s.mapPointOnto(this.#n,e.point,this.bitmapRect());this.ctx.lineTo(t.x,t.y)}e instanceof i.Close&&this.ctx.closePath()}}#o(t){switch(this.ctx.lineWidth=t.width*this.ctx.canvas.width/this.#n.width,this.ctx.strokeStyle=t.color.toString(),this.ctx.miterLimit=t.miterLimit,t.cap){case o.Cap.Butt:this.ctx.lineCap="butt";break;case o.Cap.Round:this.ctx.lineCap="round";break;case o.Cap.Square:this.ctx.lineCap="square"}switch(t.join){case o.Join.Miter:this.ctx.lineJoin="miter";break;case o.Join.Round:this.ctx.lineJoin="round";break;case o.Join.Bevel:this.ctx.lineJoin="bevel"}}#c(t){this.#o(t.stroke),this.ctx.fillStyle=t.fillColor.toString()}}class a{segments=[];tipPosition(){return this.segments[this.segments.length-1].tipPosition()}moveTipTo(t){for(let e=this.segments.length-1;e>=0;e--){const i=this.segments[e];i.moveTipTo(t),t=i.base}}moveTipTowards(t,e){const i=this.tipPosition();i.distanceTo(t)<e?this.moveTipTo(t):this.moveTipTo(i.add(t.clone().subtract(i).normalize().multiply(e)))}anchorAt(t){const e=this.segments[0].base.clone().subtract(t);for(const t of this.segments)t.base.subtract(e)}}!function(t){t.Segment=class{base;span;renderThickness;constructor(t,e,i){this.base=t,this.span=e,this.renderThickness=i}moveTipTo(t){const e=t.clone().subtract(this.base);this.span.copy(e.normalize().multiply(this.span.length())),this.base.copy(t).subtract(this.span)}tipPosition(){return this.base.clone().add(this.span)}}}(a||(a={})),await new Promise((t=>window.addEventListener("load",t)));const l=h.sampleCSSColor(getComputedStyle(document.body).color);document.querySelector("#openDialog").onclick=document.querySelector("#closeDialog").onclick=()=>{document.body.toggleAttribute("data-dialog-opened")},document.querySelector("#share").onclick=async()=>{try{await navigator.share({title:document.title,text:document.querySelector('meta[name="description"]')?.content??document.title,url:window.location.href})}catch{alert("Sharing is not supported in this environment.")}};const m=document.querySelector("canvas"),d=h.fromCanvas(m);new ResizeObserver((()=>{const e=m.clientHeight/m.clientWidth;if(e>1){const i=Math.max(1e3,m.clientWidth);d.setViewportRect(s.fromCenter(t.zero,20,20*e)),m.width=i,m.height=i*e}else{const i=Math.max(1e3,m.clientHeight);d.setViewportRect(s.fromCenter(t.zero,20/e,20)),m.width=i/e,m.height=i}w()})).observe(m);const u=t.zero,p=new a;function w(){d.clear();for(const t of p.segments)d.drawLine(t.base,t.tipPosition(),new o({color:l,width:t.renderThickness,cap:o.Cap.Round}))}p.segments.push(new a.Segment(u.clone(),new t(0,.8),.2)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.2)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.175)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.175)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.15)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.15)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.125)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.125)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.1)),p.segments.push(new a.Segment(p.tipPosition(),new t(0,.8),.1)),c.periodic((t=>{const e=20*t.seconds;p.moveTipTowards(g,e),p.anchorAt(u),w()}));let g=t.zero;m.onpointerdown=m.onpointermove=e=>{const i=new t(e.clientX,e.clientY);g=s.mapPointOnto(d.clientRect(),i,d.viewportRect())},console.log('For debugging, see "app"'),Object.defineProperty(window,"app",{value:{canvas:m,chain:p,anchor:u,origin:origin}});
//# sourceMappingURL=main.js.map
