import { fa5_brands_github, fa5_solid_home, fa5_solid_info, fa5_solid_share, fa5_solid_times } from "fontawesome-svgs";
import { Show, createSignal, onMount } from "solid-js";
import "./skin.css";
import "./main.css";

export function App({ layers, info, githubLink }: { layers: Element[], info: string, githubLink: string }) {
	const [ dialogOpened, setDialogOpened ] = createSignal(false);

	let dialog = document.createElement("div");
	onMount(() => {
		dialog.querySelectorAll(".dedent").forEach(element => {
			element.innerHTML = dedent(element.innerHTML);
		});
	});

	const shareData = { 
		title: document.title,
		text: document.querySelector("meta[name=description]")?.getAttribute("content") ?? "",
		url: location.href
	};

	return <div style="position: absolute; inset: 0;">
		<div id="layers" style="position: absolute; inset: 0;">
			{layers}
		</div>
		
		<div id="actionButtons">
			<button class="CircleButton" onClick={()=>setDialogOpened(true)} innerHTML={fa5_solid_info} />
			<Show when={"canShare" in navigator && navigator.canShare(shareData)}>
				<button class="CircleButton" innerHTML={fa5_solid_share} onClick={() => navigator.share(shareData)} />
			</Show>
			<div style="flex: 1;"></div>
			<a class="CircleButton" href={githubLink} target="_blank" innerHTML={fa5_brands_github} />
			<a class="CircleButton" href="/" innerHTML={fa5_solid_home} />
		</div>
		
		<div id="dialog" ref={dialog} class="Surface" style="position: absolute; inset: 0;" data-opened={dialogOpened() ? "" : undefined}>
			<div style="max-width: 800px; margin: auto" innerHTML={info} />

			<button class="CircleButton" onClick={()=>setDialogOpened(false)} innerHTML={fa5_solid_times} />
		</div>
	</div>
}

function dedent(text: string) {
	const lines = text.split("\n");

	// remove leading and trailing line breaks
	while (!lines[0]?.trim()) lines.shift();
	while (!lines[lines.length - 1]?.trim()) lines.pop();

	let minIndent = Infinity;
	for (const line of lines) {
		if (line.trim().length === 0) continue;
		const indent = line.match(/^\s*/)![0]!.length;
		if (indent < minIndent) minIndent = indent;
	}

	for (let i = 0; i < lines.length; i++) {
		lines[i] = lines[i]!.slice(minIndent);
	}

	return lines.join("\n");
}
