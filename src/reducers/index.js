import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router'
import login from './login';
import route from './route';

export default (history) => combineReducers({
  router: connectRouter(history),
  login,
  route
})
