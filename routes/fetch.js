var express = require('express');
var router = express.Router();
const dirTree = require('directory-tree');

/* GET home page. */
router.get('/', function (req, res, next) {

    const tree = dirTree('./data/albums');
    console.log(tree);
    res.send(tree);
    // res.render('index', {title: 'fetch data'});

});

module.exports = router;
