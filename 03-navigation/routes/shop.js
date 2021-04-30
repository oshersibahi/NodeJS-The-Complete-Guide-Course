const path = require('path');

const express = require('express');

const router = express.Router();

const rootDir = require('../util/path');

//Write your code here...

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'landing-page.html'));
});


module.exports = router;