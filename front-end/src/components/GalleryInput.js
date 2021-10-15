import React from 'react'

class GalleryInput extends React.Component {

    render() {
        return(
            <div className="gallery-form">
            <form>
            <p><input type="text" name="title" placeholder="Title Your Gallery" /></p>
            <p><input type="text" name="description" placeholder="Describe Your Gallery" /></p>
            <input type="submit" />
            </form>    
            </div>
        )
    } 

    // very simple input form, since gallery only needs two forms of input: a title and a description
}

export default GalleryInput