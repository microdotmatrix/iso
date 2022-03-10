let parallax_sections = document.querySelectorAll('.hero__image');
for (let parallax_section of parallax_sections) {
	let _from = parallax_section.getAttribute("data-parallax-from") || '0px';
	let _to = parallax_section.getAttribute("data-parallax-to") || '100px';
	let instance = basicScroll.create({
		elem: parallax_section,
		from: 'top-middle',
		to: 'bottom-middle',
		direct: true,
		props: {
			'--ty': {
				from: _from,
				to: _to,
			}
		}
	})
	instance.start();
}