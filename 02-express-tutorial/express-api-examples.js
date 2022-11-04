const express = require('express');
const app = express();
const { products } = require('./data');

// content-type:application/json
app.get('/api/home', (req, resp) => {
  resp.send('<h1> Home Page</h1><a href="/api/products">Products</a>')
});

app.get('/api/products', (req, resp) => {
  const newProducts = products.map((product) => {
    const { id, name, image } = product;
    return { id, name, image };
  })
  resp.json(newProducts);
});

app.get('/api/products/:productId', (req, resp) => {
  // console.log(req);
  // console.log(req.params);
  const { productId } = req.params;
  const singleProduct = products.find((product) => product.id === Number(productId));
  
  if (!singleProduct) {
    return resp.status(404).send('Product Does not Exist')
  }
  resp.json(singleProduct);
});

app.get('/api/products/:productsId/reviews/:reviewId', (req, res) => {
  // console.log({productsId, reviewId} = req.params);
  res.send('hello world')
})
// we can have only one response 
app.get('/api/v1/query', (req, res)  => {
    
    const { search, limit } = req.query;
    let sortedProducts = [...products]; 

    if(search){
      sortedProducts = sortedProducts.filter((product) => {
        return product.name.startsWith(search);
      })
    }

    if (limit) {
      sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    
    if(sortedProducts.length < 1) {
      // res.status(200).send('no product match your search!!')
      return res.status(200).json({ success: true, data: []})
    }
    res.status(200).json(sortedProducts);
    
})

app.listen(5000, () => {
  console.log('Server is listening on the port 5000...');
});