const initialState= {
   searchTerm: ''
}

export default function (state=initialState, action) {
    switch (action.type) {
        case 'SET_SEARCH_TERM':
            return {
                ...state,
                searchTerm: action.payload.searchTerm
            }
        default:
            return state;
    }
}