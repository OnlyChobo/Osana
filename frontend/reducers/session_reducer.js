import {combineReducers} from 'redux';
import sessionUserReducer from './session_user_reducer';
import sessionTeamReducer from './session_team_reducer';

const sessionReducer = combineReducers({
  id: sessionUserReducer,
  teamId: sessionTeamReducer
});

export default sessionReducer;
