'use strict';

var React = require('react');

var Header = React.createClass({
    render: function() {
        return (
            <nav className="navbar navbar-inverse">
                <div className="container">
                    <div className="navbar-header">
                        <h1 className="navbar-brand">crypto generator</h1>
                    </div>
                </div>
            </nav>
        )
    }
});

module.exports = Header;
