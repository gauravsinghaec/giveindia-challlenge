const express = require('express');
const router = express.Router();
const processHandler = require('../controllers/process');

/* Home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Give India' });
});

/* HTTP method and route path. */
router.route('/process/:id?')
  .get((req, res) => {
    const resObj = processHandler._handler(req, res);
    res.json(resObj);
  })
  .post((req, res) => {
    const resObj = processHandler._handler(req, res);
    res.json(resObj);;
  })
  .put((req, res) => {
    const resObj = processHandler._handler(req, res);
    res.json(resObj);
  })
  .delete((req, res) => {
    const resObj = processHandler._handler(req, res);
    res.json(resObj);;
})

module.exports = router;
