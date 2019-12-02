// パッケージを追加する必要ため、下記のコマンドを実行
// yarn add redux react-redux
import React, { Component } from 'react';

const App = () => (<Counter></Counter>)

class Counter extends Component  {
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    this.setState({ count: this.state.count + 1 })
  }

  handlMinusButton = () => {
    this.setState({ count: this.state.count - 1 })
  }

  // その後、 render が呼び出される
  render() {
    return (
      <React.Fragment>
        <div>count: { this.state.count }</div>
        <button onClick={this.handlePlusButton}>+1</button>
        <button onClick={this.handlMinusButton}>-1</button>
      </React.Fragment>
    )
  }
}

export default App;
