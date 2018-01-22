import React, {Component} from 'react';
import Player from './Player';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Panel';
import Card from '../../components/Card';
import SearchBar from '../../components/SearchBar';
import SearchTag from '../../components/SearchTag';
import MediaList from '../../components/MediaList';
import AudioWaves from '../../components/AudioWaves';
import {VelocityTransitionGroup, VelocityComponent} from 'velocity-react'

export default class HompePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Player />
                <div className="main-area">
                    <div className="container">
                        {/* <div className="d-flex flex-row mb-3 px-2 py-2 justify-content-between">
                            <h5>Explore</h5>
                            <AudioWaves />
                        </div> */}
                        <div className="col-md-8 search-section">
                            <SearchBar />
                            <SearchTag
                                tags={['tag1', 'tag2', 'tag3']}
                            />
                        </div>
                        <div className="col-md-12 info-container">
                        </div>
                        <div className="row">
                            <div className="col-md-8">
                                <Panel header="Top Artists" viewAll>
                                    <div className="inner-card-item">
                                        <Card times={5}/>
                                    </div>
                                    
                                </Panel>
                                <Panel header="Top Playlists" viewAll>
                                    <div className="inner-card-item">
                                        <Card times={5}/>
                                    </div>
                                </Panel>
                            </div>
                            <div className="col-md-4">
                                <div className="section-wrapper section-right">
                                    <Panel header="Top Tracks" viewAll>
                                        <MediaList times={5} />
                                    </Panel>                                    
                                </div>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}