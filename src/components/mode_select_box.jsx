'use strict';

var React = require('react');

var modeSelectBox = React.createClass({
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
    getSelectValue: function() {
        return this.state.selectValue;
    },
    render: function() {
        var options = this.props.mode.map(function(mode) {
            return <option value={mode} key={mode}>{mode}</option>;
        });
        return(
            <div>
                <select value={this.state.selectValue} onChange={this.onChangeSelectValue}>
                    {options}
                </select>
            </div>
        )
    }
});

module.exports = modeSelectBox;
