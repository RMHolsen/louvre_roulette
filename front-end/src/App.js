import React, { Component } from 'react'

class App extends Component {
  componentDidMount() {
    console.log("Mr. Hammond, the phones are working");
    fetch("http://localhost:3000/galleries")
    .then(res => res.json())
    .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        App 
      </div>
    )
  }
}

export default App;
