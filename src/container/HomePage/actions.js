import client from 'Services/client';
import Trianglify from 'trianglify'

function getRandomBackground () {
    return Trianglify({width: 300, height: 100}).png();
}
export default function fetchArtists() {
    return async (dispatch) => {
        try {
            const req = await client.get('/artists');
            const artists = req.data;
            dispatch({
                type: 'FETCH_ARTISTS',
                payload: artists.reduce((prev, curr, i) => {
                    curr.tracks = curr.tracks || [];
                    curr.avatar = curr.avatar || getRandomBackground()
                    prev[curr.id] = curr;
                    
                    return prev;
                }, {})
            })
        } catch (e) {

        }
    }
}