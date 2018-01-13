import React, {Component} from 'react';
import {bindActionCreators} from 'redux';

export default class PlayList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            miniPlaylist: false
        }
    }
    componentDidUpdate() {
        if (!this.state.miniPlaylist) {
            const activeItem = document.querySelector('.playlist-item.active');
            if (activeItem) {
                const currentOffest = activeItem.offsetTop;
                const container = document.querySelector('.playlist-container');
                window.setTimeout(() => container.scrollTop = currentOffest, 100);
            }
        }
        
    }
    onMusicSelect(music) {
        this.props.onMusicSelect(music);
    }
    renderPlayListItems() {
        return this.props.playList.map((item, i) => {
            const active = this.props.currentPlaying ? item.id === this.props.currentPlaying.id : null;
            const classNames = ['media', 'playlist-item'];
            active ? classNames.push('active'): classNames;
            return (
                <li className={`${classNames.join(' ')}`} key={item.id} onClick={() => this.onMusicSelect(i)}>
                    <img className='d-flex mx-1 my-1 mr-3 img-icon' src='./pattern.png' />
                    <div className='media-body'>
                        <h6 className='mt-1 mb-1'>{item.title}</h6>
                        <small className='text-muted'>some description on the title</small>
                    </div>
                </li>
            );
        });
    }
    renderMiniPlaylist() {
        return (
            <div className="media mini-playlist playlist-item active" onClick={() => this.setState({miniPlaylist: false})}>
                <img className='d-flex mx-1 my-1 mr-3' src='http://via.placeholder.com/40X40' />
                <div className="media-body">
                    <small class="text-muted">Now Playing...</small>
                    <h6 className='mt-0 mb-0'>{this.props.currentPlaying.title}</h6>
                    {/* <small className='text-muted'>some description on the title</small> */}
                </div>
            </div>
        );
    }
    render() {
        if (this.state.miniPlaylist) {
            return this.renderMiniPlaylist();
        } else {
            return (
                <div className="playlist-wrapper">
                    <div className="playlist-header py-1">
                        <div className="d-flex">
                            <h6 className="px-2 mt-2 mb-0 text-muted">PlayList</h6>
                            <div className="hide-playlist ml-auto mt-2 px-2"
                                onClick={() => this.setState({miniPlaylist: true})}
                            ><span className="glyphicon glyphicon-search" aria-hidden="true"></span></div>
                        </div>
                    </div>                
                    <div className="list-unstyled playlist-container">
                        {this.renderPlayListItems()}
                    </div>
                </div>
            );
        }
        
    }
}