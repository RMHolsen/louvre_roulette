import React from 'react'
import { connect } from 'react-redux'
import { addArtwork } from '../actions/addArtwork';

class ArtworkInput extends React.Component {
    constructor() {
        super();
        this.state = {
            title: '',
            medium: '',
            style: '',
            subject: '',
            hours: ''
        } // set initial state to blank fields (can also just have state={})
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
            // update the state
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.addArtwork(this.state, this.props.gallery.id)
        // because what's being passed in in addArtwork is state, gallery_id
        this.setState({
            [e.target.name]: ''
        }) // eventually this will need to be changed when medium becomes a drop-down menu b ut for now this works
    }

    render() {
        return(
            <div id="art-form">
                <form onSubmit={this.handleSubmit}>
                <p><strong>Title:</strong><input type="text" name="title" value={this.state.title} placeholder="Title Your Artwork" onChange={this.handleChange}/></p>
                {/* 
                <select name="medium" value={this.state.medium}>
                    <option>Watercolor</option>
                    <option>Alcohol marker</option>
                    <option>Colored pencil</option>
                    <option>Pen or Ink</option>
                    <option>Pencil (single color)</option>
                    <option>Acrylic</option>
                    <option>Oil paints</option>
                    <option>Oil pastels</option>
                    <option>Chalk pastels</option>
                    <option>Marker</option>
                </select>

                With a drop-down it would need a default value in the state, so not entirely sure how to do this, but this is staying for future reference/work
                */}
                <p><strong>Medium:</strong><input type="text" name="medium" value={this.state.medium} placeholder="Artwork Medium" onChange={this.handleChange}/></p>
                <p><strong>Style:</strong><input type="text" name="style" value={this.state.style} placeholder="Art Style" onChange={this.handleChange}/></p>
                <p><strong>Subject:</strong><input type="text" name="subject" value={this.state.subject} placeholder="Art Subject" onChange={this.handleChange}/></p>
                <p><strong>Hours Spent:</strong><input type="integer" name="hours" value={this.state.hours} placeholder="Hours Spent" onChange={this.handleChange}/></p>
                <p><input type="submit" /></p>
                </form>
            </div>
        )
    } 
    
    // more complex form, since artwork carries a lot of attributes
}

export default connect(null, { addArtwork })(ArtworkInput)