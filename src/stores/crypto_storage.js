'use strict';

var crypto = require('crypto');

var CryptoStorage = {
    encoding: 'hex',
    generate: function(cb, seed, mode) {
        var hash_obj = crypto.createHash(mode);
        hash_obj.update(seed);
        var hash = hash_obj.digest(this.encoding);
        cb(hash);
    }
};

module.exports = CryptoStorage;
