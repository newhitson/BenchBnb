

export const signUp = (user) => {
  return $.ajax({
    method: 'POST',
    url:'api/users',
    data: {user}
  });
};

export const logIn = (user) => {
  return $.ajax({
    method: 'POST',
    url:'api/sesssion',
    data: {user}
  });
};

export const logOut = (user) => {
  return $.ajax({
    method: 'DELETE',
    url:'api/sesssion',
    data: {user}
  });
};
