require(['jquery'], function ($) {
	$(document).ready(function() {
		var productList = $('.products'),
			  cartCount = 0;


		productList.on('click', 'i', function(){

			var $this = $(this),
				$parent, li;

			if ($this.hasClass('fa-plus')) {
				cartCount++;


				$this.removeClass('fa-plus')
					.addClass('fa-minus')
					.attr('title', 'Remove from cart');

				$parent = $this.parent().children('h2').text();
				li = $('<li>' + $parent + '</li>');

				$('.sidebar ul').append(li);
				$('.sidebar h1').text(cartCount);
				$('.added-items').text(cartCount);

			}

			else {
				cartCount--;

				$this.addClass('fa-plus')
					.removeClass('fa-minus')
					.attr('title', 'Add to cart');

				$('.sidebar ul li').filter(function () {

					return $(this).text() == $this.parent().children('h2').text();
				}).remove();

				$('.sidebar h1').text(cartCount);
				$('.added-items').text(cartCount);
			}
		});
	});
});