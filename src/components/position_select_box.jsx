'use strict';

var React = require('react');

var positionSelectBox = React.createClass({
    onChange: function(e) {
        this.props.onChangePostionValue(e);
    },
    render: function() {
        var options = this.props.positions.map(function(position) {
            return <option value={position} key={position}>{position}</option>;
        });
        return(
            <div className="form-group">
                <label className="col-sm-2 control-label">salt position</label>
                <select value={this.props.positionValue} onChange={this.onChange}>
                    {options}
                </select>
            </div>
        )
    }
});

module.exports = positionSelectBox;
