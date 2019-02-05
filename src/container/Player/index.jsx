import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactAplayer from '../../lib/react-aplayer';
import PlayList from './PlayList';
import {VelocityTransitionGroup, VelocityComponent} from 'velocity-react';
import {isEqual} from 'lodash'

import {setPlaylist, addTracks, playTrack} from './actions';
class Player extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showPlaylist: false
        }
        this.onPlay = this.onPlay.bind(this);
        this.onTrackSelect = this.onTrackSelect.bind(this);
        this.onPlayerLoaded = this.onPlayerLoaded.bind(this);
        this.onClickPlaylistMenu = this.onClickPlaylistMenu.bind(this);
        this.clearPlaylist = this.clearPlaylist.bind(this)
    }
    componentDidMount() {
        // this.props.setPlaylist();
        // this.props.addTracks();
    }

    componentWillReceiveProps(nextProps) {
        if (this.aplayer) {
            if (!isEqual(nextProps.playList, this.props.playList)) {
                this.aplayer.setPlaylist(nextProps.playList)
            }
        }
    }

    onClickPlaylistMenu(e) {
        this.setState({
            showPlaylist: !this.state.showPlaylist
        });
    }

    onPlayerLoaded() {
        console.log('Player Loaded');
        const playListMenu = document.querySelector('.aplayer-icon-menu');
        playListMenu.addEventListener('click', this.onClickPlaylistMenu);
    }

    onPlay() {
        console.log('On play');
        const musicIndex = this.aplayer.playIndex;
        const currentTrack = this.props.playList[musicIndex];  
        this.props.playTrack(currentTrack);
    }

    pauseHandler() {
        console.log('On pause');
    }

    onTrackSelect(musicIndex) {     
        this.aplayer.setMusic(musicIndex);
        this.props.playTrack(this.props.playList[musicIndex]);
    }

    setPlaylist() {
        this.aplayer.addMusic(this.props.playList);
    }

    clearPlaylist() {
        this.aplayer.clearPlaylist()
        this.props.setPlaylist([])
        // this.aplayer.destroy()
    }
    render() {
        const defaults = {
            narrow: false,
            autoplay: false,
            mutex: true,
            mode: 'order',
            theme: '#1b1e21',
            music: this.props.playList
        };
        return (
            <div>
                <VelocityTransitionGroup component="div" enter={{animation: 'slideDown'}} leave={{animation: 'slideUp'}} runOnMount>
                    {this.state.showPlaylist ? 
                        <PlayList togglePlaylist={this.onClickPlaylistMenu} clearPlaylist={this.clearPlaylist} playList={this.props.playList} currentPlaying={this.props.currentTrack || this.props.playList[0]} onTrackSelect={this.onTrackSelect}/>    
                    : undefined}
                </VelocityTransitionGroup> 
                
                
                    <div className="custom-player">
                        <ReactAplayer {...defaults} onLoaded={this.onPlayerLoaded} onPlay={this.onPlay} onPause={this.pauseHandler} ref={(ap) => {this.aplayer = this.aplayer || ap.state.control}}/>
                    </div>
                    
            </div>

        );
    } 
}

function mapStateToProps(state) {
    return {
        playList: state.musics.playList,
        currentTrack: state.musics.currentTrack
    }
}

export default connect(mapStateToProps, {
    setPlaylist,
    playTrack,
    addTracks
})(Player);