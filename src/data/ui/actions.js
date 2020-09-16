export function SetSearchTerm(searchTerm) {
    return {
        type: 'SET_SEARCH_TERM',
        payload: {
            searchTerm
        }
    }
}