import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import ReactAplayer from '../../lib/react-aplayer';
import PlayList from './PlayList';


import {addToPlayList, selectMusic} from './actions';

class Player extends Component{
    constructor(props) {
        super(props);
        this.onPlay = this.onPlay.bind(this);
        this.onMusicSelect = this.onMusicSelect.bind(this);

        this.counter=1;
    }
    componentDidMount() {
        this.props.addToPlayList();
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
            mode: 'random',
            music: this.props.playList
        };
        return (
            <div>
                <PlayList playList={this.props.playList} currentPlaying={this.props.currentMusic} onMusicSelect={this.onMusicSelect}/>
                {defaults.music[0] ? 
                    <div className="custom-player">
                        <ReactAplayer {...defaults} onPlay={this.onPlay} onPause={this.pauseHandler} ref={(ap) => {this.aplayer = this.aplayer || ap.state.control}}/>
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