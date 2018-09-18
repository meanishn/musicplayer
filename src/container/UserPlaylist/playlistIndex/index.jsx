import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import FlatColors from 'flat-colors';

// import {connect} from 'react-redux';

import Card from '../../../components/Card';

export default (props) => {
    if (!props.playlists) {
        return <div />
    }
    return (
        <div className="container user-playlist-container">
            <h2 className="mb-5">Playlists</h2>
            {/* <ArtistPlaylist
                artistId={this.props.match.params.id}
                playlists={this.props.artist.playlists}
            /> */}
            <div className="inner-card-item">
            {props.playlists.map(playlist =>
                <Link to={`/playlists/${playlist.id}`} >
                    <Card 
                        title={playlist.name}
                        subtitle={playlist.tracks.length > 1 ? `${playlist.tracks.length} tracks` : `${playlist.tracks.length} track`}
                        link={`/playlists/${playlist.id}`}
                        bgColor={playlist.color[3]}
                    />
                </Link>
            )}
            </div>
        </div>

    )
}


// function mapStateToProps(state) {
//     return {
//         userPlaylists: state.userPlaylist.allIds.map(id => state.userPlaylist.byId[id])
//     }
// }
// export default connect(mapStateToProps, null)(PlaylistPage);