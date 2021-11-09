export function fetchArtwork() {
    console.log("Mess with the best, die like the rest")
    // test phrase to make sure component is live
    return (dispatch) => {
        // anonymous function block 

        let url = 'http://localhost:3000/'
        // designate the source url
        // DON'T FORGET TO SET THIS URL PROPERLY
        // right now it will return ... probably bupkiss. the url should be /galleries/gallery_id/artworks but the /gallery_id/ part defies my current knowledge

        fetch(url)
        .then(res => res.json())
        .then(json => console.log(json))
        .then(data => dispatch({
            type: 'FETCH_ARTWORK',
            payload: data
        }))
        // sending this to the reducer with action type 'fetch' and payload json from @artwork for one gallery
    }
}