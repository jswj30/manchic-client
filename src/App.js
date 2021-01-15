import React, { Component } from "react";
import MyComponent from "./MyComponent";

class App extends Component {
  render() {
    return (
      <MyComponent name="React" favoriteNumber={1}>
        리액트
      </MyComponent>
    );
  }
}

export default App;
