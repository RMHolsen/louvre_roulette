export default function GalleriesReducer(state = { galleries: [], }, action) {
    // this is where the case statements go 
    switch(action.type) {
        case 'FETCH_GALLERIES':
            return {galleries: action.payload};
            // state.galleries = action.payload
            // needs both explicit return and better practice not to directly mutate state
            // (although, see also Redux Toolkit)
        case 'ADD_GALLERY':
            console.log(action.payload)
            return {...state, galleries: [...state.galleries, action.payload]}
            // the first spread operator is to carry the rest of the state, even though the only state we HAVE is galleries: []
        case 'ADD_ARTWORK':
            let galleries_add = state.galleries.map(gallery => {
                if (gallery.id === action.payload.id) { return action.payload } 
                else { return gallery }
            }) // galleries is the array returned by map. if the gallery id matches the payload id, return the payload.
            return {...state, galleries: galleries_add}
            // return the result of the map method
        case 'DELETE_ARTWORK': 
            let galleries_del = state.galleries.map(gallery => {
                if (gallery.id === action.payload.id) { return action.payload } 
                else { return gallery }
            }) // galleries is the array returned by map. if the gallery id matches the payload id, return the payload.
            return {...state, galleries: galleries_del}
            // return the result of the map method. once again we're replacing the front-end stored gallery with the modified gallery
            // the delete function happens in the deleteArtwork action with the method: delete on that specific artwork id
            // this just updates the front-end store
        default: 
            return state;
    }
}