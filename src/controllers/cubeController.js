const express = require('express');
const router = express.Router();

const createCube = (req, res) => {
    res.render('create');
}

router.get('/cube/create', createCube);

module.exports = router;