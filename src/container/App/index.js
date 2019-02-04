import React from 'react';
import createHistory from 'history/createBrowserHistory';
import { Router, Route, Switch} from 'react-router-dom';
import ReactGA from 'react-ga';
import HomePage from '../HomePage';
import Player from '../Player';
import UserPlaylist from '../UserPlaylist';
import NavBar from '../../components/navbar';
import Artists from '../Artists';

const history = createHistory()
if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-133681031-1');
  ReactGA.pageview(window.location.pathname + window.location.search);
  
  history.listen((location, action) => {
    ReactGA.set({ page: location.pathname });
    ReactGA.pageview(location.pathname);
  });
}

export default function App() {
    return (
      <div>
        <Router history={history}>
          <div>
              <NavBar />
              <Player />
              {/* <Sidebar /> */}
              <div className="main-area">
                <Switch>
                  <Route path="/artists/:id" component={Artists} />
                  <Route path="/playlists" component={UserPlaylist} />
                  <Route path="/" component={HomePage} />
                </Switch>
              </div>
          </div>
        </Router>
      </div>
    );
}
