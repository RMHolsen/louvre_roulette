import React, { Component } from 'react'
import { connect } from 'react-redux'
import GalleryContainer from './containers/GalleryContainer';

class App extends Component {
  componentDidMount() {
    console.log("Mr. Hammond, the phones are working");
    // fetch("http://localhost:3000/galleries")
    // .then(res => res.json())
    // .then(data => console.log(data));
  }

  render() {
    return (
      <div className="App">
        <GalleryContainer />
      </div>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     galleries: state.galleries
//   }
// }

export default App;
// connect automatically calls dispatch on the return value of the fetchGalleries function 
// (If we're testing and we only have a console log test string it kicks an error)
// action objects, ftr, look like { type: 'CASE SWITCH THINGIE', payload: {'argument key': 'arguments'}}
// dispatch sequence is in the last 14 minutes of expense tracker project build