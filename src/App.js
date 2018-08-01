import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Text extends Component {
  render() {
    return <h1 style={{color: this.props.color}}>Hello {this.props.name}. Welcome to the internet.</h1>
  };  
}

// fuction Text(props) {
//   return <h1>Hello, {props.name}</h1>;
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Text color={'rebeccapurple'} name ={'Stew'}/>
      </div>
    );
  }
}

export default App;
