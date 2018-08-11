import React, { Component } from 'react';
import styled from 'styled-components';

const Sdiv = styled.div`
    height: 80px;
    text-align: right;
    width: 100%;
    font-family: sans-serif;
    font-size: 2em;
    overflow: hidden;
    background-color: #d2f9e3;
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
`


class Panel extends Component {
    render() {
        return (
            <Sdiv>
                <p>{this.props.text}</p>
            </Sdiv>
        );
    }
}

export default Panel;
