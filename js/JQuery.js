$(function () {

	/* Smooth scroll */
	$("[data-scroll]").on("click", function (event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;


		$("html, body").animate({
			scrollTop: blockOffset
		}, 1000);
	});


	/* Parallax */
	$(window).scroll(function () {

		var st = $(this).scrollTop();

		$(".content_intro").css({
			"transform": "translate(0%, " + st / 21 + "%"
		});

	});



	/* 3D карточки */
	const cards = document.querySelectorAll('.card');

	for (let i = 0; i < cards.length; i++) {
		const card = cards[i];
		card.addEventListener('mousemove', startRotate);
		card.addEventListener('mouseout', stopRotate);
	}


	function startRotate(event) {
		const cardItem = this.querySelector('.card_item');
		const halfHeight = cardItem.offsetHeight / 1;
		cardItem.style.transform = 'rotateX(' + -(event.offsetY -
			halfHeight) / 30 + 'deg) rotateY(' + -(event.offsetX -
			halfHeight) / 30 + 'deg)';
	}

	function stopRotate(event) {
		const cardItem = this.querySelector('.card_item');
		cardItem.style.transform = 'rotate(0)';
	}

/* Slider */
	$("[data-slider]").slick({
		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1
	});
	
	/* Header menu */
    $("#burger_menu").on("click", function(event) {
        event.preventDefault();

        $(this).toggleClass("active");
       $("#menu_nav").toggleClass("active");
    });

});
