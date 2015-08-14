'use strict';

var React = require('react');
var ModeSelectBox = require('./mode_select_box.jsx');

var Main = React.createClass({
    handleSubmit: function(e) {
        e.preventDefault();
        var seed = React.findDOMNode(this.refs.seed).value;
        var mode = this.refs.mode.getSelectValue();
        if (!seed) {
            return;
        }
        this.props.setCrypto(seed, mode);
        return;
    },
    render: function() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input ref="seed" type="text"/>
                    <ModeSelectBox ref="mode"/>
                    <button type="submit" className="btn">変換</button>
                </form>
                <p>{this.props.crypto}</p>
            </div>
        )
    }
});

module.exports = Main;
