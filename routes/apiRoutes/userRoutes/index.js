/* eslint-disable indent */
const router = require('express').Router();
const { getAllUsers, addUser } = require('../../../controllers/userController');

// api/users prepended to every Route
router.route('/')
  .get(getAllUsers)
  .post(addUser);

module.exports = router;
