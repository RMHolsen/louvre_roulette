export const deleteArtwork = (artwork_id, gallery_id) => {
    return (dispatch) => {
        let url=`http://localhost:3000/galleries/${gallery_id}/artworks/${artwork_id}`

        fetch(url, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(gallery => dispatch({
            type: 'DELETE_ARTWORK',
            payload: gallery})
        )
    }
}