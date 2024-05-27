const express = require('express');
const Ocorrencias = require('../models/Ocorrencias');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const ocorrencias = await Ocorrencias.find({});
    res.status(200).json({ success: true, data: ocorrencias });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

router.post('/', async (req, res) => {
  try {
    const ocorrencias = await User.create(req.body);
    res.status(201).json({ success: true, data: ocorrencias });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
});

module.exports = router;