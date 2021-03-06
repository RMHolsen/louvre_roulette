import React from 'react'
import { Route, Link } from 'react-router-dom'
// import GalleryShow from './GalleryShow'

const GalleriesShow = (props) => {
    console.log(props)
    // making sure the props are correct

    return(
        <div className="galleries-list">
            <h2>A List Of Galleries</h2>
            {/* {props.galleries.map( gallery => <p key={gallery.id}>{gallery.title} - {gallery.description}</p>)}  
            Iterating over all the galleries, keeping all functionality in this component */}
            
            {/* {props.galleries.map( gallery => <div key={gallery.id}><GalleryShow gallery={gallery} /></div> )} 
            Iterating over all the galleries, rendering each gallery information as a GalleryShow component within the GalleriesShow component */}

            {props.galleries.map(gallery => <div key={gallery.id}>
                <p><Link to={`/galleries/${gallery.id}`}>{gallery.title}</Link></p>
            </div>)}
            {/* Iterating over all the galleries, rendering a link to each GalleryShow component
            That path syntax is excessively complicated */}
        </div>
    )
    // later there should be links here
    // but right now props.galleries is the array of gallery objects
    // and the map function iterates over the array and puts it all in a simple p tag with the key being the id and the text formatting
    // Title of Gallery - Description of Gallery
}

export default GalleriesShow