export function addArtwork(state, gallery_id) {
    // in ArtworkInput the argument is this.state and the id of the gallery we're in when we create the artwork
    // the id is easier to get because of nesting, and required because of associations

    return(dispatch) => {
        let url=`http://localhost:3000/galleries/${gallery_id}/artworks`
        // Interpolated URL, since artworks are nested in galleries

        fetch(url, {
            method: 'POST',
            headers: {"Content-Type": "application/json",
            Accept: "application/json"},
            body: JSON.stringify(state)
        }) // POST method, get the headers and stringify the JSON rendered when the artwork posts, the post method writes to the back end 
        // IF the artwork is valid. This is the 'create' method in the back-end.
        .then(res => res.json())
        .then(gallery => dispatch({
            type: 'ADD_ARTWORK',
            payload: gallery })
            // As well, in the back-end, the json rendered after the artwork is saved is the GALLERY, not the artwork itself
        // Because we're only displaying artwork stats through the gallery. (See back-end notes in Artworks Controller)
        )
    }

}