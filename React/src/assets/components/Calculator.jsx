import React, { Component } from 'react'

import Button from './Button'
import Display from './Display'

import './Calculator.css'

export default class Calculator extends Component {
    render() {
        return (
            <div className="calculator">
                <Display value="100" />
                <Button label="AC" double signal />
                <Button label="+/-" signal />
                <Button label="/" operation />
                <Button label="7" />
                <Button label="8" />
                <Button label="9" />
                <Button label="*" operation />
                <Button label="4" />
                <Button label="5" />
                <Button label="6" />
                <Button label="-" operation />
                <Button label="1" />
                <Button label="2" />
                <Button label="3" />
                <Button label="+" operation />
                <Button label="0" triple />
                <Button label="=" operation />
            </div>
        )
    }
}