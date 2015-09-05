'use strict';

var CryptoStorage = require('../stores/crypto_storage.js');

var Crypto = {
    get: function(setCryoto, data) {
        CryptoStorage.generate(setCryoto, data);
    }
};

module.exports = Crypto;
