javascript:(function() {
	function process_ozon() {
		return document.querySelector("h1").textContent;
	}

	function process_amazon() {
		return document.querySelector("#productTitle").textContent;
	}

	let name;
	if (window.location.hostname.includes('ozon')) {
		name = process_ozon();
	}
	if (window.location.hostname.includes('amazon')) {
		name = process_amazon();
	}

	let search_url = `https://www.google.com/search?q=${name.replace(" ", "+")}+%28filetype%3Apdf+OR+filetype%3Afb2+OR+filetype%3Atxt+OR+filetype%3Aepub%29`;

	window.location.href = search_url;
})()
