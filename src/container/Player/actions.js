import {musics} from './musics';

export const PLAY_TRACK = 'play_track';
export const ADD_PLAYLIST = 'add_playlist';
export const SET_PLAYLIST = 'set_playlist';

export function playTrack(track) {
    return {
        type: PLAY_TRACK,
        payload: [track]
    }
}

export function setPlaylist(tracks) {
    return {
        type: SET_PLAYLIST,
        payload: tracks || musics
    }
}
export function addToPlayList() {
    return {
        type: ADD_PLAYLIST,
        payload: musics
    }
}

export function addTracks() {
    return {
        type: 'ADD_TRACK',
        payload: musics.reduce((prev, curr, i) => {
                prev[curr['id']] = curr;
                return prev;
            }, {}
        )
    }
}