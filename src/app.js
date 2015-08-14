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
    setCrypto: function(seed, mode) {
        var self = this;
        CryptoAction.get(function(res) {
            self.setState({
                crypto: res
            });
        }, seed, mode);
    },
    render: function() {
        return (
            <div>
                <Header/>
                <div className="container">
                    <Main setCrypto={this.setCrypto} crypto={this.state.crypto}/>
                </div>
            </div>
        )
    }
});

React.render(<App/>, document.getElementById('container'));
