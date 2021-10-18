import React from 'react'
// import { Redirect } from 'react-redux-dom'

const GalleryShow = (props) => {

    let gallery = props.galleries[props.match.params.id - 1]
    // this is going to have issues later on, probably make a name match rather than an id to array id match
    // but for now since we haven't deleted anything in the back-end yet we're going to leave it 
    
    console.log(gallery)
    // let it be known that from here on out testing will be done in Chrome because everything is Chrome now and I hates it, precious
    // THIS DOES NOT WORK IN FIREFOX. Or it might, but not this way.

    // OLD AND BUSTED: without the addition of the gallery variable
    // this code displays each individual gallery based on GalleriesShow iterating over the array of gallery objects as a straight component with no route
    // <p><strong>{props.gallery.title}</strong> - {props.gallery.description}</p>
    return(
          <p>
              <strong>{gallery ? gallery.title : null}</strong> - {gallery ? gallery.description : null} 
        </p>  
        
    )
}

export default GalleryShow