const express = require('express');
const bodyParser = require('body-parser'); 

const app = express();
const port = 3000;

app.use(bodyParser.json());

const products = [];

app.post('/products', (req, res) => {
	products.push(req.body); 
	res.json(products); 
});

app.get('/products', (req, res) => {
	res.json(products);
});

app.get('/products/:id', (req, res) => {
	const id = Number(req.params.id);
	const product = products.find((s) => s.id === id); 
	res.json(product);
});

app.put('/products/:id', (req, res) => {
	const id = Number(req.params.id);
	const product = req.body;
	const index = products.findIndex((s) => s.id === id);
	if (index !== -1) {
		products[index] = product;
		res.json(product);
	}
});

app.delete('/products/:id', (req, res) => {
	const id = Number(req.params.id);
	const index = products.findIndex((s) => s.id === id);
	if (index !== -1) {
		products.splice(index, 1);
	}
	res.json(products);
})

app.listen(port, () => {
	console.log(`Example app listening on port ${port}!`);
});
