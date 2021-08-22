import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Toggle extends Component {
    constructor(value) {
        super(value);
        this.state = { isToggle: true };

    }
}

export default Toggle;