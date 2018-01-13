import {SELECT_MUSIC, ADD_PLAYLIST, selectMusic} from './actions';
const initialState = {
    currentMusic: null,
    playList: []
}
export default function homeReducer(state = initialState, action) {
    switch(action.type) {
        case SELECT_MUSIC:
            return {...state, currentMusic: action.payload};
        case ADD_PLAYLIST:
            return {...state, playList: action.payload};
    }
    return state;
}