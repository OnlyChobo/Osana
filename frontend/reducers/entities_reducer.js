import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import projectsReducer from './projects_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  projects: projectsReducer
});

export default entitiesReducer;
