import _ from 'lodash';
const initialState = {
    byId: {},
    allIds: []
}

export default function playlistReducer(state=initialState, action) {
    switch(action.type) {
        case 'CREATE_PLAYLIST':
            return {
                byId: {
                    ...state.byId, 
                    [action.payload.id]: action.payload
                },
                allIds: [...state.allIds, action.payload.id]
            }
        case 'DELETE_PLAYLIST':
            const prunedIds = state.allIds.filter(id => id !== action.payload.id)
            delete state.byId[action.payload.id]
            return {
                byId: state.byId,
                allIds: prunedIds
            }
        case 'ADD_PLAYLIST_ITEMS':            
            state.byId[action.payload.playlist] = {
                ...state.byId[action.payload.playlist],
                tracks: _.uniqBy([...state.byId[action.payload.playlist].tracks, ...action.payload.items], 'id')
            }
            return {...state};
        case 'REMOVE_PLAYLIST_ITEMS':
            state.byId[action.payload.playlist] = {
                ...state.byId[action.payload.playlist],
                tracks: state.byId[action.payload.playlist].tracks.filter(t => action.payload.items.indexOf(t.id) === -1)
            }
            return {...state};
        case 'REORDER_PLAYLIST_ITEMS':
            state.byId[action.payload.playlist] = {
                ...state.byId[action.payload.playlist],
                tracks: action.payload.items
            }
            return {...state};
        default:
            return state;
    }
}