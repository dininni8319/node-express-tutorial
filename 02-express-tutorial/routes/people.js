const express = require('express');
const router = express.Router();

const { 
  getPeople,
  createPerson,
  createPersonPostman,
  deletePerson,
  updatePerson,
} = require('../controllers/people');
//The same as below
router.route('/').get(getPeople).post(createPerson);
router.route('/postman').get(createPersonPostman);
router.route('/:id').put(updatePerson).delete(deletePerson);

// router.get('/', getPeople);
// router.post('/', createPerson)
// router.post('/postman', createPersonPostman)
// router.put('/:id', updatePerson)
// router.delete('/:id', deletePerson)

module.exports = router;