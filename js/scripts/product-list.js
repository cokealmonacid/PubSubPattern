define(['./pubsub', 'jquery'], function(pubsub, $){
	return{
		init: function(){

			var productList = $('.products');

			productList.on('click', 'i', function(){

				var $this = $(this),
					item = {
						id: this,
						name: $this.parent().children('h2').text()
					};

				if ($this.hasClass('fa-plus')) {

					pubsub.pub('add-to-cart', item);

					$this.removeClass('fa-plus')
						.addClass('fa-minus')
						.attr('title', 'Remove from cart');
				} else {

					pubsub.pub('remove-from-cart', item);

					$this.addClass('fa-plus')
						.removeClass('fa-minus')
						.attr('title', 'Add to cart');
				}
			});

		}
	};
});