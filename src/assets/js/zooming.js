
<!-- github.com/kingdido999/zooming -->

if (window.innerWidth > 500) {
	document.addEventListener("turbo:load", function() {
		head.ready(document, function() {
			head.load('https://cdnjs.cloudflare.com/ajax/libs/zooming/2.1.1/zooming.js', function() {
				var zooming = new Zooming();
				zooming.listen('.img-zoomable');
			});
			head.load('https://unpkg.com/freezeframe/dist/freezeframe.min.js', function() {
				// Custom options
				new Freezeframe({
					selector: 'freezeframe',
					trigger: 'click',
					overlay: true,
					responsive: false,
					warnings: false
				});
			});
		});
	})
}

<!-- End github.com/kingdido999/zooming -->
