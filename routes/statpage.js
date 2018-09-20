const express = require('express');
const router = express.Router();

/* Site stats page. */
router.get('/', (req, res) => {
  res.render('stats', { title: 'Give India - Server Stats' });    
});

module.exports = router;
