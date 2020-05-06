import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
    // React の return で返すタグは一つだけという制約があるため、
    // React.Fragment で label と input を囲っている
    // この React.Fragment は HTML 上には出力されない
    <React.Fragment>
      <label htmlFor="bar">bar</label>
      <input type="text" onChange={() => {console.log("I'm changed")}} />
    </React.Fragment>
    )
  }
}

export default App;
