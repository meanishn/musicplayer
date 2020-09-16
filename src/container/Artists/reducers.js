
const initialState = {
    byId: {},
    byName: {},
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
                byName: {
                    ...state.byName,
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
                byName: {
                    ...state.byName,
                    [action.payload.name.toString()]: action.payload
                },
                allIds: [...new Set([...state.allIds, action.payload.id.toString()])],
                pagination: {
                    perPage: action.perPage,
                    offset: action.offset
                }
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
        case 'FILTER_TRACK':
            return {
                ...state,
                filterTerm: action.payload
            }

        case 'PAGINATE_TRACKS':
            return {
                ...state,
                pagination: {
                    ...state.pagination,
                    perPage: action.payload.perPage,
                    offset: action.payload.offset
                }
        }
        default:
            return state;
    }
}

