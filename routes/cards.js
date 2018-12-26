const express = require('express');
const router = express.Router();
const Cards = require('../db/models/Cards.js');

router.route('/')
  .get((req,res) => {
    Cards
      .fetchAll({ withRelated: ['priorities', 'statuses', 'createdBy', 'assignedTo']})
      .then(data => {
        console.log('data', data.toJSON());
        res.json(data)
      })
      .catch(err => {
        console.log('err', err);
      })
  })

router.route('/new')
  .post((req,res)=> {
    const payload = {...req.body};
    Cards
      .forge(payload)
      .save()
      .then(data => {
        res.json(data);
      })
    .catch(err => {
      console.log('err', err);
    })
  })

module.exports = router;