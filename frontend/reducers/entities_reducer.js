import { combineReducers } from 'redux';
import tasksReducer from './tasks_reducer';
import projectsReducer from './projects_reducer';

const entitiesReducer = combineReducers({
  tasks: tasksReducer,
  projects: projectsReducer
});

export default entitiesReducer;
