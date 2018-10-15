export const signup = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/users',
    data: { user }
  })
);

export const login = (user) => (
  $.ajax({
    method: 'POST',
    url: '/api/session',
    data: { user }
  })
);

export const logout = () => (
  $.ajax({
    method: 'DELETE',
    url: '/api/session'
  })
);


export const getUserInfo = (user) => (
  $.ajax({
    url: `/api/users/${user.id}`
  })
);

// export const updateUser = (user) => (
//   $.ajax({
//     url: `/api/users/${user.id}`,
//     method: 'PATCH',
//     data: {user}
//   })
// );

export const updateUser = (user) => {
  console.log(user);
  return $.ajax({
    url: `/api/users/${user.id}`,
    method: 'PATCH',
    data: {user}
  });
};
