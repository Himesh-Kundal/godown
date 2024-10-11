const express = require('express');
const Item = require('../models/Item');
const authenticateToken = require('../middleware/auth');
const router = express.Router();


router.get('/', authenticateToken, async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

// router.post('/', authenticateToken, async (req, res) => {
//   // const newItem = new Item(req.body);
//   // await newItem.save();
//   // res.json(newItem);
// });

module.exports = router;
