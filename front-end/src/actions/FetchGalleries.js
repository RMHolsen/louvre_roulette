export function fetchGalleries() {
    console.log("Hi. My name is Werner Brandes. My voice is my passport. Verify me.")
    return (dispatch) => {
        // anonymous function block
        let url = "http://localhost:3000/galleries"

        fetch(url)
        .then(res => res.json())
        // .then(data => console.log(data))
        .then(data => dispatch({ 
            type: 'FETCH_GALLERIES', 
            payload: data }) )
        // sending this to the reducer where the type is the action for the case statement and the payload is the json we get out of the response
        // i.e. the json from @galleries = Gallery.all in this case
    }
}

/* The Index bone's connected to the App bone, the App bone's connected to the Container bone, the Container bone's connected to the Fetch bone
the Fetch bone's connected to the Reducer bone, the Reducer bone's connected to the Show bone
do NOT forget to proof for underscores, proper quotes, and file names */

