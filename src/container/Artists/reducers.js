
const initialState = {
    byId: {},
    allIds: []
}
function allArtists(state, action) {
    switch(action.type) {
        case 'FETCH_ARTIST':
            return state;
    }
}

function artistsById(state, action) {
    switch(action.type) {
        case 'FETCH_ARTIST':
            return Object.assign({}, state, {})
    }
}

export function artistReducer(state=initialState, action) {
    switch(action.type) {
        case 'FETCH_ARTISTS':
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...action.payload
                },
                allIds: [...new Set([...state.allIds, ...Object.keys(action.payload)])]
            }
        case 'FETCH_ARTIST':
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [action.payload.id.toString()]: action.payload
                },
                allIds: [...new Set([...state.allIds, action.payload.id.toString()])]
            };
        case 'FETCH_ARTIST_PLAYLISTS':
            const artist = state.byId[action.artistId];
            return {
                ...state,
                byId: {
                    ...state.byId,
                    [artist.id]: {
                        ...artist,
                        playlist: Object.keys(action.playlists)
                    }
                }
            }
        default:
            return state;
    }
}

