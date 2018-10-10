import * as APIUtil from '../util/api_util';

export const RECEIVE_PROJECTS = 'RECEIVE_PROJECTS';
export const RECEIVE_PROJECT = 'RECEIVE_PROJECT';
export const REMOVE_PROJECT = 'REMOVE_PROJECT';

export const receiveProjects = projects => ({
  type: RECEIVE_PROJECTS,
  projects
});

export const receiveProject = project => ({
  type: RECEIVE_PROJECT,
  project
});

export const removeProject = project => ({
  type: REMOVE_PROJECT,
  project
});

export const fetchAllProjects = () => dispatch => (
  APIUtil.fetchAllProjects()
    .then(projects => dispatch(receiveProjects(projects)))
);

export const createProject = project => dispatch => (
  APIUtil.createProject(project)
    .then(project => dispatch(receiveProject(project)))
);
