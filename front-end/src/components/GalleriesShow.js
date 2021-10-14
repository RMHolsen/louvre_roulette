import React from 'react'

const GalleriesShow = (props) => {
    console.log(props)

    return(
        <div className="galleries-list">
            <h2>A List Of Galleries</h2>
            {props.galleries.map( gallery => <p key={gallery.id}>{gallery.title} - {gallery.description}</p>)} 
        </div>
    )
    
}

export default GalleriesShow

/* The Index bone's connected to the App bone, the App bone's connected to the Container bone, the Container bone's connected to the Fetch bone
the Fetch bone's connected to the Reducer bone, the Reducer bone's connected to the Show bone
do NOT forget to proof for underscores, proper quotes, and file names */