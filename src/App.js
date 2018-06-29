import React, { Component } from 'react';
import './style/App.css';
import Input from "./Input";
import ScoreBoard from "./ScoreBoard";


class App extends Component {

  state = {
    dataInput : "",
    tab : [],
  }

  handleKeyPress = (e) => {
    if (e.key === "Enter") {
      this.clickButton();
    }
  }

  getDataFromInput = (event) => {
    this.setState({
      dataInput : event.target.value
    })
  }

  clickButton = () => {
    this.setState({
      tab : [...this.state.tab, this.state.dataInput],
      dataInput : ""
    }, () => {
      console.log(this.state.tab)
    })
    
  }


  render() {
    return (
      <div className="App">
        <div className="container">
        <br/>
        <h1>Board Score</h1>
        <br/>
          <Input keyPress={this.handleKeyPress} dataInput={this.state.dataInput} clickButton={this.clickButton} inputFunction={this.getDataFromInput}/>
          <br/>
          <ScoreBoard tableau={this.state.tab}/>
        </div>
      </div>
    );
  }
}

export default App;
