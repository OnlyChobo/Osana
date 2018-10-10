import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import tasksReducer from './tasks_reducer';
import projectsReducer from './projects_reducer';
import teamMembershipsReducer from './team_memberships_reducer';
import teamsReducer from './teams_reducer';
import favouritesReducer from './favourites_reducer';

const entitiesReducer = combineReducers({
  users: usersReducer,
  tasks: tasksReducer,
  projects: projectsReducer,
  teamMemberships: teamMembershipsReducer,
  teams: teamsReducer,
  favourites: favouritesReducer
});

export default entitiesReducer;
