import client from 'Services/client';

export default function fetchArtists() {
    return async (dispatch) => {
        try {
            const req = await client.get('/artists');
            const artists = req.data;
            dispatch({
                type: 'FETCH_ARTISTS',
                payload: artists.reduce((prev, curr, i) => {
                    curr.tracks = curr.tracks || [];
                    prev[curr.id] = curr;
                    return prev;
                }, {})
            })
        } catch (e) {

        }
    }
}