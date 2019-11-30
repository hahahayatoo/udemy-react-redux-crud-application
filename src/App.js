import React from 'react';
// import { Component } from 'react';

// // Component を継承している APP は class component
// class App extends Component {
//   render() {
//     return (
//     <React.Fragment>
//       <label htmlFor="bar">bar</label>
//       <input type="text" onChange={() => {console.log("I'm changed")}} />
//     </React.Fragment>
//     )
//   }
// }

const App = () => {
  return (
    <div>
      <Cat />
      <Cat />
      <Cat />
      <Cat />
    </div>
  );
}

const Cat = () => {
  return <div>Meow!</div>;
}

export default App;
