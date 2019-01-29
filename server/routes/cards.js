const express = require('express');
const router = express.Router();
const Cards = require('../../db/models/Cards.js');

router.route('/')
  .get((req, res) => {
    Cards
      .fetchAll({ withRelated: ['priorities', 'statuses', 'createdBy', 'assignedTo'] })
      .then(data => {
        res.json(data)
      })
      .catch(err => {
        console.log('err', err);
      })
  })

router.route('/new')
  .post((req, res) => {
    const payload = { ...req.body };
    Cards
      .forge(payload)
      .save()
      .tap(function (model) {
        return model.refresh({ withRelated: ['priorities', 'statuses', 'createdBy', 'assignedTo'] })
      })
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log('err', err);
      })
  })

router.route('/edit/:card_id')
  .put((req, res) => {
    const payload = { ...req.body };
    Cards
      .where(req.params)
      .fetch()
      .then(data => {
        return data.save(payload);
      })
      .tap(function (model) {
        return model.refresh({ withRelated: ['priorities', 'statuses', 'createdBy', 'assignedTo'] })
      })
      .then(data => {
        res.json(data);
      })
      .catch(err => {
        console.log('err', err);
      })
  })

router.route('/delete/:card_id')
  .delete((req, res) => {
    Cards
      .where(req.params)
      .destroy()
      .then(data => {
        res.send('Card successfully removed');
      })
      .catch(err => {
        console.log('err', err);
      })
  })

module.exports = router;