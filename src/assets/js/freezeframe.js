document.addEventListener("turbo:before-cache", function () {
	head.ready(document, function () {
		head.load('https://unpkg.com/freezeframe/dist/freezeframe.min.js', function () {
			// Custom options
			new Freezeframe({
				selector: '.play-on-hover',
				trigger: 'hover',
				overlay: true,
				responsive: true,
				warnings: false
			});
			new Freezeframe({
				selector: '.play-on-click',
				trigger: 'click',
				overlay: true,
				responsive: true,
				warnings: false
			})
		})
	})
});



