import React from 'react'
import ArtworkInput from '../components/ArtworkInput'
import ArtworkShow from '../components/ArtworkShow'
import { connect } from 'react-redux'
import { fetchArtwork } from '../actions/FetchArtwork'

// Don't forget to import into the App file?

class ArtworkContainer extends React.Component {
    render() {
        return(
            <div>
                <ArtworkInput />
                <Artwork />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        artworks: state.artworks, 
    }
}

export default connect(mapStateToProps, { fetchArtwork })(ArtworkContainer)