export function addArtwork(state, gallery_id) {

    return(dispatch) => {
        let url=`http://localhost:3000/galleries/${gallery_id}/artworks`

        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json",
            Accept: "application/json"},
            body: JSON.stringify(state)
        })
        .then(res => res.json())
        .then(gallery => dispatch({
            type: 'ADD_ARTWORK',
            payload: gallery })
            // because now we're returning the full gallery object in json
            // see notes in back-end Artworks Controller
        )
    }

}