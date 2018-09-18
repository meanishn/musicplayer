import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Link} from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { Button } from 'reactstrap';
import classnames from 'classnames';

import Card from '../../components/Card';
import SimpleModal from '../../components/SimpleModal';
import {fetchArtist} from './actions';
import Track from '../../components/track';
import Tabs from './components/tabs';
import ArtistPlaylist from './components/artistPlaylist';

import {setPlaylist, playTrack} from '../Player/actions';
import {createPlaylist, addPlaylistItems} from '../../data/userPlaylist/actions';
import {fetchArtistPlaylists} from '../../data/playlist/actions';

import './styles.scss';

class ArtistDetail extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            checked: [],
            modal: false,
            userPlaylist: '',
            activeTab: '1'
        }
        this.toggleModal = this.toggleModal.bind(this);
        this.playTrack = this.playTrack.bind(this);
        this.playTracks = this.playTracks.bind(this);
        this.onChange = this.onChange.bind(this);
        this.addToPlaylist = this.addToPlaylist.bind(this);
    }

    componentDidMount() {
        this.props.fetchArtist(this.props.match.params.id);
    }
    componentDidUpdate(prevProps, prevState) {
        if (this.state.activeTab === '2' && this.state.activeTab !== prevState.activeTab) {
            this.props.fetchArtistPlaylists(this.props.artist.id);
        }
    }
    playTracks(tracks=[]) {
        this.props.setPlaylist(tracks);
    }

    playTrack(track) {
        this.props.setPlaylist([track]);
    }

    toggleModal() {
        this.setState({
            modal: !this.state.modal
          });
    }

    addToPlaylist() {
        const playlist = this.state.checked.map(item => 
            this.props.artist.tracks.find(track => track.id.toString() === item)
        );
        this.toggleModal();
    }

    onChange(e) {
        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                this.setState({
                    checked: this.state.checked.concat(e.target.value)
                })
            } else if (!e.target.checked) {
                this.setState({
                    checked: this.state.checked.filter(item => item !== e.target.value)
                })
            }
        } else {
            this.setState({
                [e.target.name]: e.target.value
            });
        }
    }

    setUserPlaylist(playlistId) {
        const playlist = this.state.checked.map(item => {
            const track = this.props.artist.tracks.find(track => track.id.toString() === item)
            track.artist = this.props.artist.name;
            return track;
        });

        this.props.addPlaylistItems(playlistId, playlist);
        this.toggleModal();
    }

    createPlaylist() {
        if (this.state.userPlaylist) {
            this.props.createPlaylist(this.state.userPlaylist);
            this.setState({
                userPlaylist: ''
            })
        }
    }
    renderUserPlaylist() {
        const playlist = this.props.userPlaylist;
        return (
            <ul className="user-playlists">
                {playlist.allIds.map(id =>
                    <li 
                        className="playlist-title"
                        onClick={() => this.setUserPlaylist(id)}>{playlist.byId[id].name}
                    </li>
                )}
            </ul>
        )
    }

    renderCreatePlaylist() {
        return (
            <div>
                <input
                    type="text"
                    className="form-control"
                    placeholder="create new playlist"
                    value={this.state.userPlaylist}
                    name="userPlaylist"
                    onChange={this.onChange.bind(this)}
                />
                <Button
                    className="add-to-playlist-btn"
                    color="success"
                    onClick={this.createPlaylist.bind(this)}                    
                >Add</Button>
            </div>
        );
    }

    onClickTab(tabId) {
        this.setState({
            activeTab: tabId
        })
    }
    render() {
        if (!this.props.artist) {
            return (
                <div>Loading </div>
            );
        }

        const tabItems = [
            {
                title: 'Tracks',
                tabId: '1'
            },
            {
                title: 'Playlists',
                tabId: '2'
            },
            {
                title: 'Series',
                tabId: '3'
            }
        ];
        const extraProps = {playTrack: this.playTrack, playTracks: this.playTracks, onChange: this.onChange, addToPlaylist: this.addToPlaylist}
        return (
            <div>
                <Switch>
                    <Route path="/artists/:artistId/playlists/:playlistId" 
                        render={(props) => 
                            <ArtistPlaylist 
                                {...props}
                                {...extraProps}
                            />
                        } />
                    <Route path="/artists/:artistId" render={() => {
                        return (
                            <div className="container artist-page">
                            <div className="profile-box">
                                <img src={this.props.artist.avatar} />
                                <h2 className="artist-name">{this.props.artist.name}</h2>
                                
                                <div>
                                    <Button
                                        className="playall-btn"
                                        onClick={() => this.playTracks(this.props.artist.tracks)}
                                        color="default">Play all
                                        <span style={{'margin-left': '10px'}}><i className="fa fa-play" /></span>
                                    </Button>
                                </div>
                            </div>
                            <div className="tracks-wrapper">
                                <div className="action-container">
                                    <Button
                                        color="secondary"
                                        className="add-to-playlist-btn"
                                        onClick={() => this.addToPlaylist()}
                                        disabled={!this.state.checked.length}
                                    >
                                        <span style={{marginRight: '0px'}}><i className="fa fa-plus" /></span>
                                        {/* <span>Add to Playlist</span> */}
                                    </Button>
                                    <Tabs
                                        tabItems={tabItems}
                                        activeTab={this.state.activeTab}
                                        onClickTab={this.onClickTab.bind(this)}
                                    />
                                </div>
                                {this.state.activeTab === '1' &&
                                    <div className="tracks-container">
                                        {this.props.artist.tracks.map(track => 
                                            <Track
                                                key={track.id}
                                                currentTrack={track}
                                                title={track.title}
                                                playTrack={this.playTrack}
                                                onChange={this.onChange.bind(this)}
                                            />
                                        )}                    
                                    </div>
                                }
                                {this.state.activeTab === '2' &&
                                    <div className="artist-playlist-container">
                                        <h2 className="mb-5">Playlists</h2>
                                        {/* <ArtistPlaylist
                                            artistId={this.props.match.params.id}
                                            playlists={this.props.artist.playlists}
                                        /> */}
                                        <div className="inner-card-item">
                                        {this.props.artistPlaylists.map(playlist =>
                                            <Link to={`/artists/${this.props.artist.id}/playlists/${playlist.id}`} >
                                                <Card 
                                                    title={playlist.name}
                                                    link={`/artists/${this.props.artist.id}/playlists/${playlist.id}`}
                                                    avatar={this.props.artist.avatar}
                                                />
                                            </Link>
                                        )}
                                        </div>
                                    </div>
                                }
                                {this.state.activeTab === '3' &&
                                    <div className="artist-series-container">
                                        {/* <ArtistSeries
                                            series={this.props.artist.series}
                                        /> */}
                                        <h2>Series</h2>
                                    </div>
                                }
                            </div>
                        </div>
                        );
                    }}/>
                    
                </Switch>
                <SimpleModal
                    className="simple-modal"
                    open={this.state.modal} 
                    toggle={this.toggleModal.bind(this)}
                    title="Add to Playlist"
                    body={
                        this.renderUserPlaylist()
                    }
                    footer={
                        this.renderCreatePlaylist()
                    }
                />
            </div>
        );
    }
}

function selectPlaylist(state, artistId) {
    const artist = state.artists.byId[artistId];
    if (!artist || !artist.playlist) {
        return [];
    }
    return artist.playlist.map(pid =>state.playlists.byId[pid]);
}



function mapStateToProps(state, props) {
    const artistId = props.match.params.id
    return {
        artist: state.artists.byId[artistId],
        artistPlaylists: selectPlaylist(state, artistId),
        userPlaylist: state.userPlaylist
    }
}
export default connect(mapStateToProps, {
    setPlaylist,
    fetchArtist,
    fetchArtistPlaylists,
    playTrack,
    createPlaylist,
    addPlaylistItems
})(ArtistDetail);