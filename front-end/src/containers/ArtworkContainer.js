import React from 'react'
import ArtworkInput from '../components/ArtworkInput'
// create artwork form
import ArtworkShow from '../components/ArtworkShow'
// index of art in this gallery, remember its' nested

class ArtworkContainer extends React.Component {

    render() {
        return(
            <div>
                 <ArtworkInput gallery={this.props.gallery}/>
                 <ArtworkShow artworks={this.props.gallery && this.props.gallery.artworks}/>
             
    </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return {
//         artworks: state.artworks, 
//     } // feed the state (artworks: array of artworks in this gallery) to the props passed down to artworkshow
// }

// export default connect(mapStateToProps, { fetchArtwork })(ArtworkContainer)

export default ArtworkContainer