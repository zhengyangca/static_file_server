var express = require('express');
var router = express.Router();
var {graphql, buildSchema} = require('graphql');
const dirTree = require('directory-tree');

/* GET home page. */
router.get('/', function (req, res, next) {
    const rootFolder = dirTree('./data/albums');
    const models = rootFolder['children'];
    const albums = models[0]['children'];
    // console.log(tree);
    res.send(albums);
});

module.exports = router;
