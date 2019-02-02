import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link} from 'react-router-dom';

// import NavBar from '../../components/NavBar';
import Panel from '../../components/Panel';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import SearchTag from '../../components/SearchTag';
import MediaList from '../../components/MediaList';
import AudioWaves from '../../components/AudioWaves';
import {VelocityTransitionGroup, VelocityComponent} from 'velocity-react'

import fetchArtists from './actions';
import './styles.scss';

class HompePage extends Component {
    componentDidMount() {
        this.props.fetchArtists();
    }
    render() {
        return (
            <div className="container">
                {/* <div className="d-flex flex-row mb-3 px-2 py-2 justify-content-between">
                    <h5>Explore</h5>
                    <AudioWaves />
                </div> */}
                {/* <div className="search-section">
                    <SearchBar />
                </div> */}
                {/* <div className="row">
                    <div className="info-panel">
                        <h2>Listen and enjoy the audios from your favourite artist</h2>
                        <small>please help and support by clicking here</small>
                    </div>
                </div> */}
                <div className="row align-center">
                    <div className="col-md-12">
                        <Panel header="Discover">
                            <div className="inner-card-item">
                                {
                                    this.props.artists.allIds.map(id =>
                                        <Link to={`/artists/${id}`}>
                                        <Card 
                                            key={id} 
                                            id={id} 
                                            avatar={this.props.artists.byId[id].avatar}
                                            title={this.props.artists.byId[id].name}
                                            link={`/artists/${id}`}
                                        />
                                        </Link>
                                    )
                                }
                            </div>
                            
                        </Panel>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        artists: state.artists
    }
}

export default connect(mapStateToProps, {
    fetchArtists
})(HompePage);