import React from 'react'

const GalleryShow = (props) => {

    let gallery = props.galleries[props.match.params.id - 1]
    // let it be known that from here on out testing will be done in Chrome because everything is Chrome now and I hates it, precious
    // THIS DOES NOT WORK IN FIREFOX. Or it might, but not this way.

    // OLD AND BUSTED: without the addition of the gallery variable
    // this code displays each individual gallery based on GalleriesShow iterating over the array of gallery objects as a straight component with no route
    // <p><strong>{props.gallery.title}</strong> - {props.gallery.description}</p>
    return(
          <p><strong>{gallery ? gallery.title : null}</strong> - {gallery ? gallery.description : null}</p>  
        
    )
}

export default GalleryShow