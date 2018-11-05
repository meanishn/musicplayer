import { combineReducers } from 'redux';
import {playerReducer, newPlayerReducer} from '../container/Player/reducers';
import userPlaylistReducer from '../data/userPlaylist/reducers';
import artistPlaylistReducer from '../data/playlist/reducers';
import { artistReducer } from '../container/Artists/reducers';

const rootReducer = combineReducers({
  musics: playerReducer,
  tracks: newPlayerReducer,
  userPlaylist: userPlaylistReducer,
  playlists: artistPlaylistReducer,
  artists: artistReducer
});

// const obj = {
//   tracks: {},
//   artists: {},
//   artistTracks: {},
//   playlists: {},
//   playlistTracks: {}
// }
export default rootReducer;
