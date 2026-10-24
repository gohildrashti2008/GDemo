var express = require('express');
const { register } = require('../contrroler/usercontroler');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

router.post('/',register);
router.get('/', (req, res) => {
    res.send('API is running successfully!');
});

module.exports = router;
