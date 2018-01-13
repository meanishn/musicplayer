import React, {Component} from 'react';
import Player from './Player';
import NavBar from '../../components/NavBar';
import Panel from '../../components/Panel';
import AudioWaves from '../../components/AudioWaves';

export default class HompePage extends Component {
    render() {
        return (
            <div>
                <NavBar />
                <Player />

                <div className="main-area">
                    <div className="d-flex flex-row mb-3 px-2 py-2 justify-content-between">
                        <h5>Explore</h5>
                        <AudioWaves />
                    </div>
                    <Panel 
                        header="Top Artists"
                        title=""
                    />
                </div>
            </div>
        );
    }
}