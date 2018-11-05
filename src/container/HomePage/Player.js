import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactAplayer from '../../lib/react-aplayer';
import PlayList from './PlayList';
import {VelocityTransitionGroup, VelocityComponent} from 'velocity-react';

import {addToPlayList, selectMusic} from './actions';

class Player extends Component{
    constructor(props) {
        super(props);
        this.state = {
            showPlaylist: false
        }
        this.onPlay = this.onPlay.bind(this);
        this.onMusicSelect = this.onMusicSelect.bind(this);
        this.onPlayerLoaded = this.onPlayerLoaded.bind(this);
        this.onClickPlaylistMenu = this.onClickPlaylistMenu.bind(this);
    }
    componentDidMount() {
        this.props.addToPlayList();
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
        const currentMusic = this.props.playList[musicIndex];  
        this.props.selectMusic(currentMusic);
    }

    pauseHandler() {
        console.log('On pause');
    }

    onMusicSelect(musicIndex) {     
        
        // const musicIndex = this.props.playList[musicIndex];
        this.aplayer.setMusic(musicIndex);
        this.props.selectMusic(this.props.playList[musicIndex]);
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
                        <PlayList togglePlaylist={this.onClickPlaylistMenu} playList={this.props.playList} currentPlaying={this.props.currentMusic || this.props.playList[0]} onMusicSelect={this.onMusicSelect}/>    
                    : undefined}
                </VelocityTransitionGroup> 
                
                {defaults.music[0] ? 
                    <div className="custom-player">
                        <ReactAplayer {...defaults} onLoaded={this.onPlayerLoaded} onPlay={this.onPlay} onPause={this.pauseHandler} ref={(ap) => {this.aplayer = this.aplayer || ap.state.control}}/>
                    </div>
                    : <div />
                }
                
            </div>

        );
    } 
}

function mapStateToProps(state) {
    return {
        playList: state.musics.playList,
        currentMusic: state.musics.currentMusic
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        addToPlayList,
        selectMusic
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Player);