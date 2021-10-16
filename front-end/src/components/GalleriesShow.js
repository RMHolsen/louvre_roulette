import React from 'react'
import GalleryShow from './GalleryShow'

const GalleriesShow = (props) => {
    console.log(props)
    // making sure the props are correct

    return(
        <div className="galleries-list">
            <h2>A List Of Galleries</h2>
            {/* {props.galleries.map( gallery => <p key={gallery.id}>{gallery.title} - {gallery.description}</p>)}  
            Iterating over all of them, keeping all functionality in this component */}
            {props.galleries.map( gallery => <div key={gallery.id}><GalleryShow gallery={gallery} /></div> )}
        </div>
    )
    // later there should be links here
    // but right now props.galleries is the array of gallery objects
    // and the map function iterates over the array and puts it all in a simple p tag with the key being the id and the text formatting
    // Title of Gallery - Description of Gallery
}

export default GalleriesShow