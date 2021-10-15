export default function GalleriesReducer(state = { galleries: [], }, action) {
    // this is where the case statements go 
    switch(action.type) {
        case 'FETCH_GALLERIES':
            return {galleries: action.payload};
        case 'ADD_GALLERIES':
            return {...state, galleries: [...state.galleries, action.gallery]}
            // the first spread operator is to carry the rest of the state, even though the only state we HAVE is galleries: []
        default: 
            return state;
    }
}