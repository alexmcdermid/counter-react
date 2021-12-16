import './App.css';
import React from 'react';
import { Component } from 'react';

class App extends Component {
  state = {
    count:0,
    input:0,
  }
  handleInputChange = (event) =>{
    this.setState({input:parseInt(event.target.value)})
  }
  handleCountChange(num){
    this.setState({count:this.state.count+=this.state.input*num})
  }
  render(){
    return (
      <div className="App">
        <div className='container'>
          <h1>change by</h1>
          <input onChange={this.handleInputChange} value={this.state.input}></input>
          <button onClick={()=>{this.handleCountChange(1)}}>increaase</button>
          <h1>{this.state.count}</h1>
          <button onClick={()=>{this.handleCountChange(-1)}}>decrease</button>
        </div>
      </div>
    );
  }
}

export default App;
