import React, { Component } from 'react';
import styled from 'styled-components';
import Button from './Button.js'

const Wrapper = styled.div`
    display: grid;
    grid-template-areas:
        "b9 b8 b7 bp bmi"
        "b6 b5 b4 bmu bd"
        "b3 b2 b1 be be"
        "bf b0 bc be be";
    grid-gap: 5px;
`

class Buttons extends Component {
  numbers = [
    ['0', '0'],['1', '1'],['2', '2'],['3', '3'],['4', '4'],
    ['5', '5'],['6', '6'],['7', '7'],['8', '8'],['9', '9'] 
]
  operator = [ [" + ","p"], [" - ",'mi'], [" * ",'mu'], [" / ",'d'], [".",'f'], [" = ",'e'], [" c ",'c']]


    state = {  }
    render() {
        return (
            <Wrapper>
                {this.numbers.map((i)=>(
                <Button value={i} key={i[1]} type={'NUM'}
                    setEx={this.props.setEx}
                    getEx={this.props.getEx}
                    />
                ))}
                {this.operator.map((i)=>(
                <Button value={i} key={i[1]} type={'OPT'}
                    setEx={this.props.setEx}
                    getEx={this.props.getEx}
                    />
                ))}
            </Wrapper>
        );
    }
}

export default Buttons;
