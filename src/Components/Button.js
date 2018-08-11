import React, { Component } from 'react';
import styled from 'styled-components';


const Sbutton = styled.button`
    text-align: center;
    font-size: 1.2rem;
    border-radius: 3px;
    border: none;
    padding: 10px;
    font-family: sans-serif;
    font-weight: bold; 
    color: white;
    grid-area: ${ props=>('b'+ props.value)};
    
` 
const SNumberBtn = Sbutton.extend`
    background-color: #AAF683;
`;
const SOperatorBtn = Sbutton.extend`
    background-color: #60D394;
`

class Buttons extends Component {
    handleClick = ()=>{
        let xps = this.props.getEx()
        let location = xps.operator.length!==0?'secondnum':'firstnum'
        switch (this.props.value[1]){
            case 'p':case 'mi':case 'mu':case 'd':
                if (xps.firstnum!==''){
                    if (xps.secondnum !== ''){ xps = this.calculate()}
                    this.props.setEx({...xps, operator: this.props.value})
                }
                break
            case 'e':
                if (xps.secondnum !== '') { this.calculate() }
                break
            case 'c':
                this.props.setEx(
                    {firstnum:'',
                    secondnum:'',
                    operator:[]})
                break
            case '0':
                if (xps[location].includes('.')){
                    this.props.setEx({...xps, [location]: xps[location]+'0'})
                    break
                }
                this.props.setEx({...xps, [location]: xps[location]+'0'})
                break                
            default :
                const num = parseFloat(xps[location] + this.props.value[0])
                if (this.props.value[1] === 'f') {
                    if (!xps[location].includes('.')) {
                        if (xps[location]===''){
                            this.props.setEx({ ...xps, [location]: '0.' })
                            return
                        } else {
                            this.props.setEx({ ...xps, [location]: num + '.' })
                        }
                    }
                }else {
                    if (!isNaN(num) && num!==Infinity) { this.props.setEx({ ...xps, [location]: `${num}` }) }
                }            

        }
    }

    calculate = ()=>{
        const 
            xps = this.props.getEx(),
            n1 = parseFloat(xps.firstnum), 
            n2 = parseFloat(xps.secondnum)

        let result = 0
        
        switch (xps.operator[1]) {
            case 'p':
                result = n1 + n2
                break;
            case 'mi':
                result = n1 - n2
                break
            case 'mu':
                result = n1 * n2
                break
            case 'd':
                result = n1 / n2
                break
            default:
                break;
        }

        let newXps = { firstnum: result.toString(), operator: '', secondnum: '' }
        this.props.setEx(newXps)
        return newXps
    }

    setButtonType = () =>{
        switch (this.props.type) {
            case 'NUM': 
                return (<SNumberBtn
                    className="button"
                    onClick={this.handleClick}
                    value = {
                        this.props.value[1]
                    }
                    >
                    {this.props.value[0]}
                </SNumberBtn>)
            case 'OPT':
                return ( <SOperatorBtn
                    className="button"
                    onClick={this.handleClick}
                    value = {
                        this.props.value[1]
                    } >
                    {this.props.value[0]}
                </SOperatorBtn>)
        }
    }

    render() {
        return (
            this.setButtonType()
        )
    }
}


export default Buttons;
