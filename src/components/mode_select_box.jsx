'use strict';

var React = require('react');

var modeSelectBox = React.createClass({
    onChange: function(e) {
        this.props.onChangeSelectValue(e);
    },
    render: function() {
        var options = this.props.mode.map(function(mode) {
            return <option value={mode} key={mode}>{mode}</option>;
        });
        return(
            <div className="form-group">
                <label className="col-sm-2 control-label">Hash Type</label>
                <select value={this.props.selectValue} onChange={this.onChange}>
                    {options}
                </select>
            </div>
        )
    }
});

module.exports = modeSelectBox;
