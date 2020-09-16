const initialState = {
    results: []
}

export default function (state=initialState, action) {
    switch (action.type) {
        case 'SEARCH_RESULT':
            return {
                ...state,
                results: action.payload
            }
        default:
            return state;
    }
}