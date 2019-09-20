var express = require('express');
var router = express.Router();
const cors = require('./../middlewares/cors')
const qiniuController = require('./../controllers/qiniu');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/qiniu-upload',cors.allowAll,qiniuController.upload)

module.exports = router;
