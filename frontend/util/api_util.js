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
