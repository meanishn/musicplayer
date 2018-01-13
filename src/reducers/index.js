import { combineReducers } from 'redux';
import WeatherReducer from '../container/WeatherPage/reducer_weather';
import PostsReducer from '../container/PostPage/reducer_posts';
import HomePageReducer from '../container/HomePage/reducers';

const rootReducer = combineReducers({
  weather: WeatherReducer,
  posts: PostsReducer,
  musics: HomePageReducer
});

export default rootReducer;
