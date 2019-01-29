const express = require('express');
const router = express.Router();
const Users = require('../../db/models/Users.js');

router.route('/users')
  .get((req, res) => {
    Users
      .fetchAll()
      .then(data => {
        res.send(data)
      })
      .catch(err => {
        console.log('err', err);
      })
  })

module.exports = router;