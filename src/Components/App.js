import React, { Component } from 'react';
import Panel from './Panel';
import Buttons from './Buttons.js';
import styled from 'styled-components';

const AppWrapper = styled.div`
  width: 300px;
  margin: 50px auto;
  & > * {
    margin: 5px 0px; 
  }
`

class App extends Component {


  constructor(props){
    super(props)
    this.state = {
      expression: {
        firstnum:'',
        operator:[],
        secondnum:''
      }    
    }

  }

  setText = (value,flag=false)=>{
    if(flag) {this.setState((prev)=>({
      text: value
      }))
      return;
    }
    this.setState((prev)=>({
      text: prev.text + value
    }));
  }
  
  getText = ()=> {
    return this.state.text
  }

  setEx = (ar)=>{
    this.setState((prev)=>({
      expression: ar
    }))
  }

  getEx = ()=> this.state.expression

  render() {
    const panelText = 
      this.state.expression.firstnum +
      (this.state.expression.operator[0]||'') +
      this.state.expression.secondnum
    
    return (
      <div className="App">
        <AppWrapper>
          <Panel text={panelText}></Panel>
          <Buttons 
            setEx={this.setEx} 
            getEx={this.getEx}/>
        </AppWrapper>
      </div>
    );
  }
}

export default App;
