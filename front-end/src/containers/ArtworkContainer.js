import React from 'react'
import ArtworkInput from '../components/ArtworkInput'
// create artwork form
import ArtworkShow from '../components/ArtworkShow'
// index of art in this gallery, remember its' nested
// import { connect } from 'react-redux'
// // gives us access to the store
// import { fetchArtwork } from '../actions/FetchArtwork'
// // fetches back-end data for index of art for this gallery

class ArtworkContainer extends React.Component {
    // componentDidMount() {
    //     this.props.fetchArtwork()
    // } // get the artwork

    render() {
        return(
            <div>ArtworkContainer
                 <ArtworkInput />
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