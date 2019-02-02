import React, {Component} from 'react';
import TrackImage from '../../assets/images/play-button.png'
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
                this.scrollTimer = window.setTimeout(() => container.scrollTop = currentOffest, 500);
            }
        }
        
    }
    componentWillUnmount() {
        window.clearTimeout(this.scrollTimer);
    }
    onMusicSelect(music) {
        this.props.onTrackSelect(music);
    }
    renderPlayListItems() {
        return this.props.playList.map((item, i) => {
            const active = this.props.currentPlaying ? item.id === this.props.currentPlaying.id : null;
            const classNames = ['media', 'playlist-item'];
            active ? classNames.push('active'): classNames;
            return (
                <li className={`${classNames.join(' ')}`} key={item.id} onClick={() => this.onMusicSelect(i)}>
                    <img className='d-flex mx-1 my-1 mr-3 img-icon' src={TrackImage} />
                    <div className='media-body'>
                        <div className="track-title">{item.title}</div>
                        <small className='text-muted track-author'>{item.author}</small>
                    </div>
                </li>
            );
        });
    }
    renderMiniPlaylist() {
        const initialAnimation = {
            opacity: 0,
            height: 0
        };
        return (

            <div className="media mini-playlist playlist-item active" onClick={() => this.setState({miniPlaylist: false})}>
                <img className='d-flex mx-1 my-1 mr-3' src='http://via.placeholder.com/40X40' />
                <div className="media-body">
                    {this.props.currentPlaying ? (
                        <div>
                            <small class="text-muted">Now Playing...</small>
                            <h6 className='mt-0 mb-0'>{this.props.currentPlaying.title}</h6>
                        </div>
                        ): (
                            <div>
                                <small class="text-muted">Paused</small>
                                <h6 className='mt-0 mb-0'>{this.props.playList.length ? this.props.playList[0].title : ''}</h6>
                            </div>
                        )
                    }
                    {/* <small className='text-muted'>some description on the title</small> */}
                </div>
            </div>

        );
    }
    renderFullPlaylist () {
        return (
            
                <div className="playlist-wrapper">
                    <div className="playlist-header py-1">
                        <div className="d-flex">
                            <h6 className="px-2 mt-2 mb-0">PlayList</h6>
                            <div className="hide-playlist ml-auto mt-2 px-2"
                                onClick={() => this.props.togglePlaylist()}
                            >
                                <span className="fa fa-times" aria-hidden="true"></span>
                                
                            </div>
                        </div>
                    </div>                
                    <div className="list-unstyled playlist-container">
                        {this.renderPlayListItems()}
                    </div>
                </div>
            
        );
    }
    render() {
        const leave = {
            animation: 'fadeOut'
        };
        const enter = {
            animation: 'fadeIn',
            display: 'flex',
            delay: 200
        };

        return (
            // <VelocityTransitionGroup component="div" enter={{animation: 'fadeIn'}} leave={{animation: 'fadeOut'}} runOnMount>
            //     {this.props.showPlaylist ? this.renderFullPlaylist() : undefined}
            // </VelocityTransitionGroup>
            this.renderFullPlaylist()
        )
        
        // return (
        //     <VelocityTransitionGroup enter={{animation: "slideDown"}} leave={{animation: "slideUp"}}>
        //         {this.state.miniPlaylist ? this.renderFullPlaylist() : null }
        //     </VelocityTransitionGroup>
        // );
        
    }
}