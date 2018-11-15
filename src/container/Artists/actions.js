import client from 'Services/client';

export function fetchArtist(artistId) {
    return async (dispatch) => {
        const req = await client.get(`/artists/${artistId}?_embed=tracks`);
        const artist = req.data;
        
        dispatch({
            type: 'FETCH_ARTIST',
            payload: artist
        })
    }
}

export function filter(term) {
    return (dispatch) =>  {
        dispatch({
            type: 'FILTER_TRACK',
            payload: term
        })
    }
}