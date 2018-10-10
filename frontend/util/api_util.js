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

export const deleteTeamMemberships = (id) => $.ajax({
  url: `api/team_memberships/${id}`,
  method: 'DELETE'
});

// export const fetchTeams = () => $.ajax({
//   url: `api/teams`
// });

export const fetchTeam = (id) => $.ajax({
  url: `api/teams/${id}`
});

export const createProject = (project) => $.ajax({
  url: 'api/projects',
  method: 'POST',
  data: {project}
});
//
// export const updateTeams = (team) => $.ajax({
//   url: 'api/teams',
//   method: 'PATCH',
//   data: {team}
// });
//
// export const deleteTeams = (id) => $.ajax({
//   url: `api/teams/${id}`,
//   method: 'DELETE'
// });
