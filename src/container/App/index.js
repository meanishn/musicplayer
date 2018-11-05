import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import HomePage from '../HomePage';
import Player from '../Player';
import UserPlaylist from '../UserPlaylist';
import NavBar from '../../components/navbar';
import Sidebar from '../../components/sidebar';
import Artists from '../Artists';
export default function App() {
    return (
      <div>
        <BrowserRouter>
          <div>
              <NavBar />
              <Player />
              <Sidebar />
              <div className="main-area">
                <Switch>
                  <Route path="/artists/:id" component={Artists} />
                  <Route path="/playlists" component={UserPlaylist} />
                  <Route path="/" component={HomePage} />
                </Switch>
              </div>
          </div>
        </BrowserRouter>
      </div>
    );
}
