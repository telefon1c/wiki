
<!-- github.com/kingdido999/zooming -->

if (window.innerWidth > 500) {
	head.ready(document, function() {
		head.load('https://cdnjs.cloudflare.com/ajax/libs/zooming/2.1.1/zooming.js', function() {
			var zooming = new Zooming();
			zooming.listen('.img-zoomable');
		});
	});
}

<!-- End github.com/kingdido999/zooming -->