import React from 'react'
// import { Redirect } from 'react-redux-dom'
import ArtworkContainer from '../containers/ArtworkContainer'

const GalleryShow = (props) => {
    let gallery = props.galleries.find(gallery => gallery.id == props.match.params.id)
    // should work regardless of how much we delete or don't delete as far as gallery objects (otherwise, see scrap code)
    console.log(gallery)
    
    // OLD AND BUSTED: without the addition of the gallery variable
    // this code displays each individual gallery based on GalleriesShow iterating over the array of gallery objects as a straight component with no route
    // <p><strong>{props.gallery.title}</strong> - {props.gallery.description}</p>
    return(
        <div id="gallery-box">
            <strong>{gallery ? gallery.title : null}</strong> - {gallery ? gallery.description : null} <br/>
            <ArtworkContainer gallery={gallery} />
        </div>
        
    )
}

export default GalleryShow