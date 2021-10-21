import React from 'react'
import { connect } from 'react-redux'
import { addGallery } from '../actions/AddGallery';

class GalleryInput extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            description: ''
            // for numbers 'null' can be used but isn't good practice? I guess?
        }
    } // can also just put state = {}
    // setting the initial state in the constructor method with inheriting, via super, the defaults of React.Component
    // and setting the local state (title, description) to empty strings

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            // less abstract
            // title: e.target.value,
            // description: e.target.value
        }) // update the state with each keystroke; without the onChange/change handler it would be a static read-only form
    }

    handleSubmit = (e) => {
        e.preventDefault();
        // prevents it from re-rendering until we want it to, i.e. in this.setstate
        this.props.addGallery(this.state);
        // calls the add gallery from the add gallery file in the actions folder, connected via connect/import/dispatch function
        this.setState({
            title: '',
            description: ''
        }) // reset to blank fields 
    }

    render() {
        return(
            <div id="gallery-form">
            <form onSubmit={this.handleSubmit}>
            <p><input type="text" name="title" placeholder="Title Your Gallery" value={this.state.title} onChange={this.handleChange} /></p>
            <p><input type="text" name="description" placeholder="Describe Your Gallery" value={this.state.description} onChange={this.handleChange} /></p>
            <input type="submit" />
            </form>    
            </div>
        )
    } 
    // very simple input form, since gallery only needs two forms of input: a title and a description
    // with just the render-return-input form it is an "uncontrolled" form, meaning it just floats in the dom and doesn't put the data anywhere
    // type=text: tells it what type of input to look for?
    // name=title/description: the key for both the state and the back-end data. this plus value makes it a controlled form
    // placeholder: aesthetic
    // value: connects the form to the state by making the value of the field, i.e. what is passed to the back end as attribute data, the component's state
    // onChange: change handler

}

export default connect(null, { addGallery })(GalleryInput)