
var modal = document.querySelector('#modal');

var modalClose = document.querySelector('#modal-close');
modalClose.addEventListener('click', function () {
	modal.style.display = 'none';
});


document.addEventListener('click', function (e) {
	if (e.target.className.indexOf('modal-target') !== -1) {
		var img = e.target;
		var modalImg = document.querySelector('#modal-content');
		var captionText = document.querySelector('#modal-caption');
		modal.style.display = 'block';
		modalImg.src = img.src;
		captionText.innerHTML = img.alt;
	}
});
