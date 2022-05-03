document.querySelector<HTMLElement>("#openDialog")!.onclick =
document.querySelector<HTMLElement>("#closeDialog")!.onclick = ()=>{
	document.body.toggleAttribute("data-dialog-opened");
}

document.querySelector<HTMLElement>("#share")!.onclick = async ()=>{
	try {
		await navigator.share({
			title: document.title,
			text: (document.querySelector('meta[name="description"]') as HTMLMetaElement)?.content ?? document.title,
			url: window.location.href
		});
	} catch {
		alert("Sharing is not supported in this environment.");
	}
}