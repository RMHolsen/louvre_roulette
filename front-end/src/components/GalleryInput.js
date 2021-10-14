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
}

export default GalleryInput