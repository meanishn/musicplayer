import React from 'react';
import {Link} from 'react-router-dom';
import {Button} from 'reactstrap';
import FlatColors from 'flat-colors';

// import {connect} from 'react-redux';

import Card from '../../../components/Card';
import './styles.scss';

export default (props) => {
    if (!props.playlists) {
        return <div />
    }
    return (
        <div className="container user-playlist-container">
            <div className="wrapper">
                <div className="card dark-card">
                    <div className="card-header">
                        <h5 className="mb-0">Playlists</h5>
                    </div>
                    <div className="card-body">
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
                </div>
                
                
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