import React, { Component } from 'react';

// state はミュータブルな値で props はイミュータブルな値

const App = () => (<Counter></Counter>)

class Counter extends Component  {
  // Counter 呼び出し時に constructor が呼び出される
  constructor(props) {
    super(props)
    this.state = { count: 0 }
  }

  handlePlusButton = () => {
    // React では setState() のコールバックとして Render() が呼び出されるため、
    // 値の更新は setState() を利用すること
    this.setState({ count: this.state.count + 1 })

    // ↓のように state を直接変更しようとすると
    // Do not mutate state directly. Use setState()
    // のように state を直接変更せずに setState() を利用するよう言われ、
    // カウンタの値も更新されない
    // this.state = { count: this.state.count + 1 }
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
