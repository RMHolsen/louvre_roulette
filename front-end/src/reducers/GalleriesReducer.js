export default function GalleriesReducer(state = { galleries: [], }, action) {
    // this is where the case statements go 
    switch(action.type) {
        case 'FETCH_GALLERIES':
            return {galleries: action.payload};
        default: 
            return state;
    }
}