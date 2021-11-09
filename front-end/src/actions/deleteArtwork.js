export const deleteArtwork = (artwork_id, gallery_id) => {
    return (dispatch) => {
        let url=`http://localhost:3000/galleries/${gallery_id}/artworks/${artwork_id}`
        // set the URL to the specific artwork to be deleted

        fetch(url, {
            method: 'DELETE'
        }) // since we've already designated the specific artwork there's no need to do anything except tell the back-end to delete it
        // what IS the standard format, hyphen or no hyphen?
        .then(res => res.json())
        .then(gallery => dispatch({
            type: 'DELETE_ARTWORK',
            payload: gallery})
        ) // then we dispatch to the reducer with the type for 
        // "hey, refresh the gallery we're sending you so we can see on the front-end that the artwork is gone"
        // hence payload: gallery not payload: artwork-that-isn't-there-anymore
    }
}