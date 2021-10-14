import React from 'react'
import GalleryInput from '../components/GalleryInput'
// create gallery form 
import GalleriesShow from '../components/GalleriesShow'
// index of galleries 
import { fetchGalleries } from '../actions/FetchGalleries'
// fetches back-end data for index of galleries 
import { connect } from 'react-redux'
// gives us access to the store 

class GalleryContainer extends React.Component {
    componentDidMount() {
        this.props.fetchGalleries()
    }

    render() {
        return(
            <div>
                <GalleryInput />
                <GalleriesShow galleries={this.props.galleries}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        galleries: state.galleries 
    }
}

export default connect(mapStateToProps, { fetchGalleries })(GalleryContainer)