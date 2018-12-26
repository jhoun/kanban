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
        console.log('data', data);
      })
    .catch(err => {
      console.log('err', err);
    })
  })

router.route('/edit/:card_id')
  .put((req, res) => {
    const { title, priority_id, status_id, created_by_id, assigned_to_id } = req.body
    Cards
      .where(req.params)
      .fetch()
      .then(data => {
        return data.save({ title, priority_id, status_id, created_by_id, assigned_to_id });
      })
      .then(data => {
        console.log('data', data);
        res.json(data);
      })
      .catch(err => {
        console.log('err', err);
      })
  })

module.exports = router;