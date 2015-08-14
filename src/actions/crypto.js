'use strict';

var CryptoStorage = require('../stores/crypto_storage.js');

var Crypto = {
    get: function(cb, seed, mode) {
        CryptoStorage.generate(function(res) {
            cb(res);
        }, seed, mode);
    }
};

module.exports = Crypto;
