'use strict';

var React = require('react');
var ModeSelectBox = require('./mode_select_box.jsx');

var Main = React.createClass({
    getDefaultProps: function() {
        return {
            mode: ['md5', 'sha256', 'sha512']
        };
    },
    getInitialState: function() {
        return {
            selectValue: 'md5'
        };
    },
    onChangeSelectValue: function(e) {
        this.setState({selectValue: e.target.value});
    },
    handleSubmit: function(e) {
        e.preventDefault();
        var seed = React.findDOMNode(this.refs.seed).value;
        var mode = this.state.selectValue;
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
                    <ModeSelectBox selectValue={this.state.selectValue} mode={this.props.mode} onChangeSelectValue={this.onChangeSelectValue}/>
                    <button type="submit" className="btn">変換</button>
                </form>
                <p>{this.props.crypto}</p>
            </div>
        )
    }
});

module.exports = Main;
