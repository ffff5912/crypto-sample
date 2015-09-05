'use strict';

var React = require('react');
var CryptoAction = require('./actions/crypto.js');
var Header = require('./components/header.jsx');
var Main = require('./components/main.jsx');

var App = React.createClass({
    getInitialState: function() {
        return {
            crypto: ''
        };
    },
    setCrypto: function(crypto) {
        this.setState({crypto: crypto});
    },
    _onChange: function(seed, salt, position, mode) {
        var data = {seed: seed, salt: salt, position: position, mode: mode};
        CryptoAction.get(this.setCrypto, data);
    },
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Main _onChange={this._onChange} crypto={this.state.crypto}/>
                </div>
            </div>
        )
    }
});

React.render(<App/>, document.getElementById('container'));
