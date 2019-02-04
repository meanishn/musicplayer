import React from 'react';
import {connect} from 'react-redux';
import {Switch, Route, Redirect, Link} from 'react-router-dom';


import PlaylistIndex from './playlistIndex';
import PlaylistDetail from './playlistDetail';

import {setPlaylist, playTrack} from '../Player/actions';
import {reorderPlaylist, deletePlaylist, removePlaylistItems} from '../../data/userPlaylist/actions';

const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};

class UserPlaylist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            checked: []
        }
        this.playTrack = this.playTrack.bind(this);
        this.playTracks = this.playTracks.bind(this);
        this.onDragEnd = this.onDragEnd.bind(this);
        this.onChange = this.onChange.bind(this);
    }
    onDragEnd(result, context) {
        const playlistId = context.playlistId;
        // dropped outside the list
        if (!result.destination) {
            return;
          }
          const currentItems = this.props.userPlaylist.byId[playlistId].tracks;
  
          const items = reorder(
          currentItems,
            result.source.index,
            result.destination.index
          );
          
          this.props.reorderPlaylist(playlistId, items);
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
        }
    }
    removePlaylist(id) {
        this.props.deletePlaylist(id)
        this.props.history.push('/playlists')
    }
    removePlaylistItems(id) {
        this.props.removePlaylistItems(id, this.state.checked)
    }
    playTrack(track) {
        this.props.setPlaylist([track]);
    }
    playTracks(tracks=[]) {
        this.props.setPlaylist(tracks);
    }
    render() {
        return (
            <Switch>
                <Route path={`${this.props.match.url}/:playlistId`} 
                render={(props) => 
                    <PlaylistDetail 
                        {...props}
                        currentPlaylist={this.props.userPlaylist.byId[props.match.params.playlistId]}
                        playTrack={this.playTrack}
                        playTracks={this.playTracks}
                        onDragEnd={this.onDragEnd}
                        onChange={this.onChange}
                        removePlaylist={this.removePlaylist.bind(this)}
                        removePlaylistItems={this.removePlaylistItems.bind(this)}
                        showDeleteButton={this.state.checked.length > 0}
                    />
                }
                />
                <Route exact path={`${this.props.match.url}`} 
                render={(props) => 
                    <PlaylistIndex 
                        {...this.props}
                    />
                }
                />

            </Switch>
        )
    }
}

function mapStateToProps(state) {
    return {
        playlists: state.userPlaylist.allIds.map(id => state.userPlaylist.byId[id]),
        userPlaylist: state.userPlaylist
    }
}
export default connect(mapStateToProps, {
    setPlaylist,
    playTrack,
    reorderPlaylist,
    deletePlaylist,
    removePlaylistItems
})(UserPlaylist);