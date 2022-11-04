const { response } = require('express');
const express = require('express');
const app = express();
let { people } = require('./data');

app.use(express.static('./methods-public'));

//parse form data
app.use(express.urlencoded({ extended: false }))

app.get('/api/people', (req, res) => {
  res.status(200).json({ success: true, data: people })
})
app.use(express.json());

app.post('/api/people', (req, res) => {
  const { name } = req.body;
  if(!name){
     res.status(400).json({ success: false, msg: 'Please provide name value'})
  }
  res.status(201).json({success: true, person: name, msg: 'success haahahhah'});
})

app.post('/api/postman/people', (req, res) => {
  const { name } = req.body;
  
  if (!name) {
    return res
      .status(400)
      .json({ success: false, mgs: 'please provide a name value'})
  }

  res.status(201).json({success: true, data: {...people, name }})
})

app.post('/login', (req, res) => {
  
  const { name } = req.body;
  if (name) {
    return res.status(200).send(`Welcome ${name}`)
  }
  
  res.status(401).send('Please provide Credentials!')
})

app.put('/api/people/:id', (req,res) => {
  const { id } = req.params;
  const { name } = req.body;
  if (!name) {
    res
      .status(404)
      .json({ success: false, msg: `no person with id ${id}`})
  }

  const newPeople = people.map((person) => {
    if (person.id == Number(id)) {
      person.name = name;
    }

    return person;
  })
   res.status(200).json({ success: true, data: newPeople, msg: `Success the name is changed`})
  
})

app.delete('/api/people', (req,res) => {
  
})
app.listen(5000, () => {
  console.log('Server is listening on the port 5000...');
});