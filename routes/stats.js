const express = require('express');
const router = express.Router();

/* Site stats page. */
router.get('/', (req, res) => {
  res.send('The server statistics page is under construction.')
});

module.exports = router;
