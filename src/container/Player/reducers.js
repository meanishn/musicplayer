import {combineReducers} from 'redux';
import {PLAY_TRACK, SET_PLAYLIST, playTrack} from './actions';

const initialState = {
    currentTrack: null,
    playList: []
}

function allTracks(state=[], action) {
    switch(action.type) {
        case 'ADD_TRACK':
            return state.concat(Object.keys(action.payload));
        default:
            return state;
    }
}

function tracksById(state={}, action) {
    switch(action.type) {
        case 'ADD_TRACK':
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

export const newPlayerReducer = combineReducers({
    byId: tracksById,
    allIds: allTracks
});

export function playerReducer(state = initialState, action) {
    switch(action.type) {
        case PLAY_TRACK:
            return {...state, currentTrack: action.payload};
        case SET_PLAYLIST:
            return {...state, playList: action.payload};
    }
    return state;
};

// state = {
//     tracks: {
//         byId: {
//             1: {
//                 title: 'track one'
//             }
//         },
//         allIds: [1],
//     },
//     artists: {
//         byId: {
//             123: {
//                 name: 'Anish',
//                 tracks: [1, 2]
//             }
//         },
//         allIds: [123]
//     },
//     playlists: {
//         byId: {
//             423: {
//                 title: 'playlist title',
//                 tracks: [1, 2]
//             }
//         },
//         allIds:[]
//     },
//     userPlaylists: {
//         byId:{},
//         allIds:[]
//     }
// }
