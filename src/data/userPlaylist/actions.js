import shortid from 'shortid';
import FlatColors from 'flat-colors';

export function createPlaylist(name) {
    return async(dispatch) => {
        const id = shortid.generate();
        dispatch({
            type: 'CREATE_PLAYLIST',
            payload: {
                id: shortid.generate(),
                name,
                color: FlatColors(),
                tracks: []
            }
        });
    }
    
}

export function deletePlaylist(id) {
    return {
        type: 'DELETE_PLAYLIST',
        payload: {
            id
        }
    }
}
export function addPlaylistItems(playlist, tracks) {
    return {
        type: 'ADD_PLAYLIST_ITEMS',
        payload: {
            playlist,
            items: tracks
        }
    }
}

export function removePlaylistItems(playlist, tracks) {
    return {
        type: 'REMOVE_PLAYLIST_ITEMS',
        payload: {
            playlist,
            items: tracks
        }
    }
}

export function reorderPlaylist(playlist, tracks) {
    return {
        type: 'REORDER_PLAYLIST_ITEMS',
        payload: {
            playlist,
            items: tracks
        }
    }
}