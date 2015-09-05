'use strict';

var crypto = require('crypto');

var CryptoStorage = {
    encoding: 'hex',
    generate: function(setCrypto, data) {
        var hash_obj = crypto.createHash(data.mode);
        var seed;
        if ('before' === data.position) {
            seed = data.salt + data.seed;
        } else {
            seed = data.seed + data.salt;
        }
        hash_obj.update(seed);
        var hash = hash_obj.digest(this.encoding);
        setCrypto(hash);
    }
};

module.exports = CryptoStorage;
