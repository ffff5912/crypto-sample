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
        let mode = this.state.selectValue;
        if (!seed) {
            return;
        }
        this.props.setCrypto(seed, mode);
        return;
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <input ref="seed" type="text"/>
                    <ModeSelectBox selectValue={this.state.selectValue} mode={this.props.mode} onChangeSelectValue={this.onChangeSelectValue.bind(this)}/>
                    <button type="submit" className="btn">変換</button>
                </form>
                <p>{this.props.crypto}</p>
            </div>
        );
    }
}

Main.defaultProps = {mode: ['md5', 'sha256', 'sha512']};
