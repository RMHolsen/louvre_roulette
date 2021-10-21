import React from 'react'
import GalleryInput from '../components/GalleryInput'
// create gallery form 
import GalleriesShow from '../components/GalleriesShow'
// index of galleries 
import GalleryShow from '../components/GalleryShow'
// individual gallery page
import { fetchGalleries } from '../actions/FetchGalleries'
// fetches back-end data for index of galleries 
import { addGallery } from '../actions/AddGallery'
// adds the gallery to the back-end
import { connect } from 'react-redux'
// gives us access to the store 
import { Route, Switch } from 'react-router-dom'
// gives us access to routes

class GalleryContainer extends React.Component {
    componentDidMount() {
        this.props.fetchGalleries()
    } // get the galleries

    render() {
        return(
            <div className="gallery-container">
                <Switch>
                <Route path='/galleries/new' component={GalleryInput} />
                {/* /galleries/new renders both the input and the show all components because it involves the /galleries/ path 
                If you want just the input form you need to have the input path not involve /galleries/
                OR you can use 'exact path' on the GalleriesShow route */}

                <Route path='/galleries/:id' render={(routerProps) => <GalleryShow {...routerProps} galleries={this.props.galleries} /> } />
                {/* Router props adds built in props that come with using 'component' or 'render'; the relevant ones here are path and url
                path = '/galleries/:id' and url = '/galleries/1' */}
                
                <Route exact path='/galleries' render={(routerProps) => <GalleriesShow {...routerProps} galleries={this.props.galleries}/>}/>
                {/* Again, using 'exact path' means the galleries/GalleriesShow code only runs if the exact path is given */}
                </Switch>
            </div>

            /* Whatever is in here will display when the gallery container (within the app) is loaded
                BUT if it's in a Route tag it will only show up when that route is accessed
                BUT everything else not wrapped in a Route tag will also show up because it's all within the Gallery container */
        )
    }
}

const mapStateToProps = (state) => {
    return {
        galleries: state.galleries 
    } // feed the state (galleries: array of galleries) to the props passed down to galleriesshow
}

export default connect(mapStateToProps, { fetchGalleries, addGallery })(GalleryContainer)