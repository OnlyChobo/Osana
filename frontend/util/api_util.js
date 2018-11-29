export const fetchAllProjects = () => $.ajax({url: 'api/projects'});
export const fetchAllSections = () => $.ajax({url: 'api/sections'});
export const fetchAllTasks = () => $.ajax({url: 'api/tasks'});


export const fetchTeamMemberships = () => $.ajax({
  url: `api/team_memberships`
});

export const fetchTeamMembership = (id) => $.ajax({
  url: `api/team_memberships/${id}`
});

export const createTeamMembership = (teamMembership) => $.ajax({
  url: 'api/team_memberships',
  method: 'POST',
  data: {teamMembership}
});

export const updateTeamMemberships = (teamMembership) => $.ajax({
  url: 'api/team_memberships',
  method: 'PATCH',
  data: {teamMembership}
});

export const deleteTeamMembership = (id) => $.ajax({
  url: `api/team_memberships/${id}`,
  method: 'DELETE'
});

export const createFavourite = (favourite) => $.ajax({
  url: `api/favourites`,
  method: 'POST',
  data: {favourite}
});

export const deleteFavourite = (id) => $.ajax({
  url: `api/favourites/${id}`,
  method: 'DELETE'
});

export const deleteProject = (id) => $.ajax({
  url: `api/projects/${id}`,
  method: 'DELETE'
});

export const fetchTeam = (id) => $.ajax({
  url: `api/teams/${id}`
});

export const fetchProject = (id) => $.ajax({
  url: `api/projects/${id}`
});

export const fetchProjects = (project) => $.ajax({
  url: `api/projects`,
  data: {project}
});

export const createTask = (task) => $.ajax({
  url: `api/tasks`,
  method: 'POST',
  data: {task}
});

export const updateTask = (task) => $.ajax({
  url: `api/tasks/${task.id}`,
  method: 'PATCH',
  data: {task}
});

export const createSection = (section) => $.ajax({
  url: `api/sections`,
  method: 'POST',
  data: {section}
});

export const fetchSection = (id) => $.ajax({
  url: `api/sections/${id}`
});

export const fetchSections = (section) => $.ajax({
  url: `api/sections`,
  data: {section}
});

export const fetchTask = (id) => $.ajax({
  url: `api/tasks/${id}`
});

export const fetchTasks = (task) => $.ajax({
  url: `api/tasks`,
  data: {task}
});

export const createProject = (project) => $.ajax({
  url: 'api/projects',
  method: 'POST',
  data: {project}
});

export const createComment = (comment) => $.ajax({
  url: `api/comments`,
  method: 'POST',
  data: {comment}
});

export const fetchComment = (id) => $.ajax({
  url: `api/comments/${id}`
});

export const fetchComments = (comment) => $.ajax({
  url: `api/comments`,
  data: {comment}
});