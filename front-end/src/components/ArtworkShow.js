import React from 'react'
import { connect } from 'react-redux'
import { deleteArtwork } from '../actions/deleteArtwork'

const ArtworkShow = (props) => {
    const handleDelete = (artwork) => {
        props.deleteArtwork(artwork.id, artwork.gallery_id)
    }

    return(
        <div className="artwork-list">
            Artwork Component 
            {props.artworks && props.artworks.map(artwork => 
                <div key={artwork.id}>
                    <p><strong>{artwork.title}</strong><br/>
                    <em>{artwork.medium} {artwork.style}</em><br/>
                    {artwork.subject}</p>

                    <button onClick={() => handleDelete(artwork)}></button><br/>                    
                </div>)}
        </div>
    )
}

export default connect(null, { deleteArtwork })(ArtworkShow)