export default function GalleriesReducer(state = { galleries: [], }, action) {
    // this is where the case statements go 
    switch(action.type) {
        case 'FETCH_GALLERIES':
            return {galleries: action.payload};
        case 'ADD_GALLERY':
            console.log(action.payload)
            return {...state, galleries: [...state.galleries, action.payload]}
            // the first spread operator is to carry the rest of the state, even though the only state we HAVE is galleries: []
        case 'ADD_ARTWORK':
            let galleries = state.galleries.map(gallery => {
                if (gallery.id === action.payload.id) { return action.payload } 
                else { return gallery }
            }) // galleries is the array returned by map. if the gallery id matches the payload id, return the payload.
            return {...state, galleries: galleries}
            // return the result of the map method
        default: 
            return state;
    }
}