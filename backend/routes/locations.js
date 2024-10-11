const express = require('express');
const Location = require('../models/Location');
const authenticateToken = require('../middleware/auth');
const router = express.Router();

router.get('/', authenticateToken, async (req, res) => {
  const locations = await Location.find();
  res.json(locations);
});

router.get('/:id', authenticateToken, async (req, res) => {
    try {
      const location = await Location.findById(req.params.id);
      if (!location) return res.status(404).json({ message: 'Location not found' });
      res.json(location);
    } catch (err) {
      res.status(400).json({ message: 'Invalid ID' });
    }
  });

// router.post('/', authenticateToken, async (req, res) => {
//   const { name, parent_id } = req.body;

//   const newLocation = new Location({
//     name,
//     parent_id: parent_id || null // If there's no parent_id, it's a top-level location
//   });

//   await newLocation.save();
//   res.json(newLocation);
// });

// router.put('/:id', authenticateToken, async (req, res) => {
//   try {
//     const location = await Location.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!location) return res.status(404).json({ message: 'Location not found' });
//     res.json(location);
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid ID' });
//   }
// });

// router.delete('/:id', authenticateToken, async (req, res) => {
//   try {
//     const location = await Location.findByIdAndDelete(req.params.id);
//     if (!location) return res.status(404).json({ message: 'Location not found' });
//     res.json({ message: 'Location deleted successfully' });
//   } catch (err) {
//     res.status(400).json({ message: 'Invalid ID' });
//   }
// });

module.exports = router;
