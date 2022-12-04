export const isEmail = (email) => {
  return /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i.test(
    email
  );
};

export const isPassword = (password) => {
  return password.length >= 8;
};
