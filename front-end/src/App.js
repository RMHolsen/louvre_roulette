import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Link } from 'react-router-dom'
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
      <div id="App">
        <p className="Intro">Welcome to the Faux Louvre, where the points are made up and the art doesn't matter. Here you will find, not an index of art because graphics are large and the server is tiny, but an index of descriptive terms of art with a URL you can look up at your convenience. If that seems like a foolish idea of a gallery to you, I invite you to consider the NFT.</p>
        <p className="Intro">(On a slightly more serious note, there was a certain amount of scope creep and scope shift while working on this project, but since I'm working to a school deadline rather than to a project deadline that I have to deliver, this will be placeholder text until such time as I can redesign this project.)</p>
        <p className="Intro"><Link to="/galleries/">To the Galleries!</Link></p>
        <p className="Intro"><Link to="/galleries/new">Add a Gallery!</Link></p>
        <br />

        <GalleryContainer />
        <br />
        <br />
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