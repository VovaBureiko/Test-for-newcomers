var express = require('express')
var router = express.Router()

router.get('/api', function(req, res) {
    res.send('asas');
});


module.exports = router;