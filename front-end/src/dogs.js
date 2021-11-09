import React, { Component } from "react";
// import Options from "./Options";
import { dogs } from "../public/data.js";

class DogList extends Component {
  state = {
    shownDogs: dogs, 
    isSorted: false
  }
  
  handleClick = () => {
    if (this.state.isSorted === false) { 
      // if the dogs aren't sorted
      this.setState((prevState) => {
        return {
          // return an updated state
          shownDogs: prevState.shownDogs.concat([]).sort((a, b) => { 
            return a.name.localeCompare(b.name)
          }),
          isSorted: true
        } 
      })
    } else {
      this.setState({shownDogs: dogs, isSorted: false})
    }
    
    }  
  
  render() {
    return (
      <div>
        <div>Hello World</div>
        <ul>
          {this.state.shownDogs.map(dog => <li key={dog.id}>{dog.name}</li>)}
        </ul>
        <button onClick={this.handleClick}>Alphabetize</button>
      </div>
    );
  }
}

export default DogList;
