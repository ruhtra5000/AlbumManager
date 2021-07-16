const mongoose = require('mongoose')
require('../models/Album')
const Album = mongoose.model('albuns')

class AlbumRepository {
    repo(){
        return Album
    }
}

module.exports = AlbumRepository