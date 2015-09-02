'use strict';

import React from 'react';
import ModeSelectBox from './mode_select_box.jsx';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {selectValue: 'md5'};
    }

    onChangeSelectValue(e) {
        this.setState({selectValue: e.target.value});
    }

    handleSubmit(e) {
        e.preventDefault();
        let seed = React.findDOMNode(this.refs.seed).value;
        let salt = React.findDOMNode(this.refs.salt).value;
        let mode = this.state.selectValue;
        if (!seed) {
            return;
        }
        this.props.setCrypto((salt + seed), mode);
        return;
    }

    render() {
        return (
            <div>
                <form className="form-horizontal" onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">the string</label>
                        <input ref="seed" type="text"/>
                    </div>
                    <div className="form-group">
                        <label className="col-sm-2 control-label">add salt</label>
                        <input ref="salt" type="text"/>
                    </div>
                    <ModeSelectBox selectValue={this.state.selectValue} mode={this.props.mode} onChangeSelectValue={this.onChangeSelectValue.bind(this)}/>
                    <div className="form-group">
                        <div className="col-sm-offset-2 col-sm-10">
                             <button type="submit" className="btn btn-primary">変換</button>
                        </div>
                    </div>
                </form>
                <p>{this.props.crypto}</p>
            </div>
        );
    }
}

Main.defaultProps = {mode: ['md5', 'sha256', 'sha512']};
