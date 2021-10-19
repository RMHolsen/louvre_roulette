import React from 'react'

const ArtworkShow = (props) => {
    return(
        <div className="artwork-list">
            Artwork Component 
            {props.artworks && props.artworks.map(artwork => 
                <p key={artwork.id}>
                    <strong>{artwork.title}</strong><br/>
                    <em>{artwork.medium} {artwork.style}</em><br/>
                </p>)}
        </div>
    )
}

export default ArtworkShow