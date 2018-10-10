export const allTasks = ({tasks}) => {
  Object.keys(tasks).map( id => tasks[id] )
};
export const allProjects = ({projects}) => (
  Object.keys(projects).map( id => projects[id] )
);
export const allTeams = ({teams}) => (
  Object.keys(teams).map( id => teams[id] )
);
