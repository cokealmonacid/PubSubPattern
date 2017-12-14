require(['jquery', './js/scripts/big-cart', './js/scripts/mini-cart', './js/scripts/product-list'], function($, bigCart, miniCart, productList){
	$(document).ready(function(){
		bigCart.init();
		miniCart.init();
		productList.init();
	});
});