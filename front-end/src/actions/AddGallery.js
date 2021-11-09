export function addGallery(state) {
    // in GalleryInput the argument is this.state

    return (dispatch) => {
        let url = "http://localhost:3000/galleries"
        // get the URL for the whole galleries view

        fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json",
                Accept: "application/json"},
            body: JSON.stringify(state)
            // POST method writes to the back end, get the headers and stringify, then convert into JSON
        })
        .then(res => res.json())
        .then(gallery => dispatch({
            type: 'ADD_GALLERY',
            payload: gallery })
        )
    } // 'ADD_GALLERY' isn't necessary in order to add onto the back-end, the fetch sequence does that, but it is necessary to view
    // on the front-end without refreshing the page
}