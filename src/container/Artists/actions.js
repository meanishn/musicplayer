import client from 'Services/client';

export function fetchArtist(artistId, perPage, offset) {
    return async (dispatch) => {
        const req = await client.get(`/artists/${artistId}?_embed=tracks`);
        const artist = req.data;
        
        dispatch({
            type: 'FETCH_ARTIST',
            payload: artist,
            perPage, offset
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

export function setPage(perPage, offset) {
    return (dispatch) => {
        dispatch({
            type: 'PAGINATE_TRACKS',
            payload: {perPage, offset}
        })
    }
}