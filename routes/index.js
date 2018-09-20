const express = require('express');
const router = express.Router();
const processHandler = require('../controllers/process');

/* Home page. */
router.get('/', (req, res) => {
  res.render('index', { title: 'Give India' });
});

/**
 * HTTP method and route path. 
 * The handler is genric here it can be changed
 * and splitted into separate object (separate for every HTTP methods) 
 * inside the process controller 
 */ 
router.route('/process/:id?')
  .get((req, res) => {
    // _handler returns a promise
    processHandler._handler(req, res)
    .then((resObj)=> res.json(resObj))
    .catch((error) => res.json(error));
  })
  .post((req, res) => {
    processHandler._handler(req, res)
    .then((resObj)=> res.json(resObj))
    .catch((error) => res.json(error));
  })
  .put((req, res) => {
    processHandler._handler(req, res)
    .then((resObj)=> res.json(resObj))
    .catch((error) => res.json(error));
  })
  .delete((req, res) => {
    processHandler._handler(req, res)
    .then((resObj)=> res.json(resObj))
    .catch((error) => res.json(error));
})

module.exports = router;
