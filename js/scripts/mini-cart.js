define(['./pubsub', 'jquery'], function (pubsub, $){

	var cart, count = 0;

	pubsub.sub('add-to-cart', function(){
		count++;

		cart.html(count);
	});

	pubsub.sub('remove-from-cart', function(){
		count--;

		cart.html(count);
	});

	return {
		init: function(){
			cart = $('.added-items');
		}
	}
});