const express = require('express');
const app = express();
const people = require('./routes/people');
const auth = require('./routes/auth');

app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({ extended: false }))

app.use(express.json());
// const x = 0.2;
// const y = 0.1;
// const z = 0.3;
// let m = new Intl.NumberFormat('en-IN', {maximumSignificantDigits: 2 }).format(x + y)
// let p = new Intl.NumberFormat('en-IN', {maximumSignificantDigits: 2 }).format(z)
// console.log(m === p, m, z);


app.use('/api/people', people)
app.use('/login', auth)

app.listen(5000, () => {
  console.log('Server is listening on the port 5000...');
});