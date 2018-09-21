const express = require('express');
const router = express.Router();
const { getServerStats } = require('../controllers/stats');

/**
 * API endpoint to get the stats in json. 
 */ 
router.get('/:period?', (req, res) => {
  let { period } = req.params;
  getServerStats(period, function(err, result) {
    if (err) {
      res.send(JSON.stringify({'error':err.message}));
    } else {
      res.send(JSON.stringify(result));
    }
  });    
});

module.exports = router;
