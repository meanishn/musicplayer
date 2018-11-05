import axios from 'axios';

export function fetchArtistPlaylists(artistId) {
    return async(dispatch) => {
        const req = await axios.get(`http://localhost:4000/artists/${artistId}/playlists`);
        const data = req.data;
        dispatch({
            type: 'FETCH_ARTIST_PLAYLISTS',
            playlists: data.reduce((prev, curr, i) => {
                prev[curr['id']] = curr;
                return prev;
            }, {}),
            artistId
        });
    }
}