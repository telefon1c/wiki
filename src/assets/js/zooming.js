<!-- github.com/kingdido999/zooming -->
document.addEventListener("turbo:load", function () {
	head.ready(document, function () {
		// Отключим зумм для мобильных
		if (window.innerWidth > 500) {
			head.load('https://cdnjs.cloudflare.com/ajax/libs/zooming/2.1.1/zooming.js', function () {
				var zooming = new Zooming();
				zooming.listen('.img-zoomable');
			})
		}
	})
});
<!-- End github.com/kingdido999/zooming -->
