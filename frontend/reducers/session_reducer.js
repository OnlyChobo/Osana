import {combineReducers} from 'redux';
import sessionUserReducer from './session_user_reducer';
import sessionTeamReducer from './session_team_reducer';
import sessionTaskReducer from './session_task_reducer';
import sessionProjectReducer from './session_project_reducer';


const sessionReducer = combineReducers({
  id: sessionUserReducer,
  teamId: sessionTeamReducer,
  taskId: sessionTaskReducer,
  projectId: sessionProjectReducer
});

export default sessionReducer;
