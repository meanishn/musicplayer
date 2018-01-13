import {musics} from './musics';

export const SELECT_MUSIC = 'music_select';
export const ADD_PLAYLIST = 'add_playlist';

export function selectMusic(music) {
    return {
        type: SELECT_MUSIC,
        payload: music
    }
}

export function addToPlayList() {
    return {
        type: ADD_PLAYLIST,
        payload: musics
    }
}