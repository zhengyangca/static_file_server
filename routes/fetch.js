var express = require('express');
var router = express.Router();
var {graphql, buildSchema} = require('graphql');
const dirTree = require('directory-tree');

function filter_sys_files(elem) {
    if (elem.name === '.DS_Store') {
        return false;
    }
    return true;
}

/* GET home page. */
router.get('/', function (req, res, next) {
    let albums = [];
    const rootFolder = dirTree('./data/albums');
    const models = rootFolder['children'];

    models.filter(filter_sys_files).map((model) => {
        const model_albums = model['children'];
        const model_name = model.name;
        model_albums.filter(filter_sys_files).map(model_album => {
            let new_album = {};
            new_album.album_name = model_album.name;
            new_album.model_name = model_name;
            new_album.category = 'sexy';
            new_album.img_urls = [];

            model_album['children'].filter(filter_sys_files).map(image => {
                new_album.img_urls.push(image.name);
            });

            albums.push(new_album);
        });
    });

    res.send(albums);
});


router.get('/albums/:album_name', function (req, res, next) {
    res.send(req.params.album_name);
});

module.exports = router;
