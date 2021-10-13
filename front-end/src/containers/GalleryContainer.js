import React from 'react'
import GalleryInput from '../components/GalleryInput'
import GalleryShow from '../components/GalleryShow'
import { connect } from 'react-redux'
import { fetchGallery } from '../actions/FetchGallery'

// don't forget to import into the app file

class GalleryContainer extends React.Component {
    render() {
        return(
            <div>
                <GalleryInput />
                <Gallery />
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        galleries: state.galleries 
    }
}

export default connect(mapStateToProps, { fetchGallery })(GalleryContainer)