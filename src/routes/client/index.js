const { json } = require('express');
const app = require('../../loaders/express-handlebars');
const { getFakeStoreCart } = require('../../services/server/fakestore')
const { createOrder } = require('../../services/server/klarna');

app.get('/checkout/:cart_id', async function (req, res, next) {
	const cart_id = req.params.cart_id;
	
	const cartItems = JSON.parse(req.query.cartItems)

	const completeCart= await getFakeStoreCart(cartItems)
	console.log(completeCart);

 	const klarnaJsonResponse = await createOrder(completeCart);
	const html_snippet = klarnaJsonResponse.html_snippet


	res.render('checkout', {
	 	klarna_checkout: html_snippet
	 });
});

module.exports = app;
