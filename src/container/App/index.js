import React from 'react';
import { BrowserRouter, Route, Switch} from 'react-router-dom';
import Weather from '../WeatherPage';
import PostsIndex from '../PostPage/PostsIndex';
import PostDetail from '../PostPage/PostDetail';
import HomePage from '../HomePage';

export default function App() {
    return (
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/weather" component={Weather} />
          <Route path="/posts/:id" component={PostDetail} />
          <Route path="/posts" component={PostsIndex} />
          <Route path="/" component={HomePage} />
        </Switch>
      </div>
    </BrowserRouter>
    );
}
