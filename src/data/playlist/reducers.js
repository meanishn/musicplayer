
const initialState= {
    byId: {},
    allIds: []
}

// obj = {
//     1: {
//         id: 1,
//         artistId: 123,
//         playlistId: 567
//     }
// }
export default function (state=initialState, action) {
    switch (action.type) {
        case 'FETCH_ARTIST_PLAYLISTS':
            return {
                ...state,
                byId: {
                    ...state.byId,
                    ...action.playlists
                },
                allIds: [...new Set([...state.allIds, ...Object.keys(action.playlists)])]
            }
        default:
            return state;
    }
}