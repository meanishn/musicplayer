import React from 'react';
import {connect} from 'react-redux';
import {Button} from 'reactstrap';
import Card from '../../../../components/Card';
import Track from '../../../../components/track';

import {fetchArtistPlaylists} from '../../../../data/playlist/actions';

import './styles.scss';

class ArtistPlaylist extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.props.fetchArtistPlaylists(this.props.artist.id);
    }

    render() {
        if (!this.props.playlist) {
            return <div>Loading...</div>
        }
        return (
            <div className="container artist-page artist-playlist-page">
                <div className="top-wrapper">
                    <h2>{this.props.playlist.name}</h2>
                </div>
                <div className="tracks-wrapper">
                    <div className="tracks-container">
                        <div className="action-container">
                            <Button
                                color="secondary"
                                className="add-to-playlist-btn"
                                onClick={() => this.props.addToPlaylist()}
                            >
                            <span style={{marginRight: '0px'}}><i className="fa fa-plus" /></span>
                            {/* <span>Add to Playlist</span> */}
                            </Button>
                            <Button
                                className="playall-btn"
                                onClick={() => this.props.playTracks(this.props.tracks)}
                                color="default">Play all
                                <span style={{'margin-left': '10px'}}><i className="fa fa-play" /></span>
                            </Button>
                        </div>
                        {this.props.tracks.map(track => 
                            <Track
                                key={track.id}
                                currentTrack={track}
                                title={track.title}
                                playTrack={this.props.playTrack}
                                onChange={this.props.onChange}
                            />
                        )}
                    </div>
                </div>
            </div>

        )
    }
}

function getTracks(state, props) {
    const playlist = state.playlists.byId[props.match.params.playlistId];
    const artist =  state.artists.byId[props.match.params.artistId];
    if (!playlist) {
        return [];
    }
    return artist.tracks.filter(track => playlist.tracks.indexOf(track.id.toString()) !== -1);
}
function mapStateToProps(state, props) {
    return {
        artist: state.artists.byId[props.match.params.artistId],
        playlist: state.playlists.byId[props.match.params.playlistId],
        tracks: getTracks(state, props)
    }
}

export default connect(mapStateToProps, {
    fetchArtistPlaylists,
})(ArtistPlaylist);