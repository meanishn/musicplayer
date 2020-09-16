import client from 'Services/client';

export function getSearchResult(query) {
    return async (dispatch) => {
        const req = await client.get(`/search?query=${query}`);
        const searchResult = req.data;
        
        dispatch({
            type: 'SEARCH_RESULT',
            payload: searchResult
        })
    }
}