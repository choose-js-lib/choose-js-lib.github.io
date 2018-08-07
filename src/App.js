import React, { Component } from "react";

import logo from "./logo.svg";
import "./App.css";
import libs from "./libs";

class App extends Component {
  state = {
    name: ""
  };

  handleSearch = event => {
    this.setState({
      name: event.target.value
    });
  };

  filterFunc = lib =>
    lib.name.toLowerCase().indexOf(this.state.name.toLowerCase()) !== -1;

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
          <input value={this.state.name} onChange={this.handleSearch} />
        </header>
        <p className="App-intro">
          {libs.filter(this.filterFunc).map(lib => (
            <li key={lib.name}>
              <a href={lib.link} target="_blank">
                {lib.name}
              </a>
            </li>
          ))}
        </p>
      </div>
    );
  }
}

export default App;
