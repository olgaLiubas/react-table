export const isUserDataTrue = (dataFromForm, userData) => {
  if (
    dataFromForm.email === userData.userEmail &&
    dataFromForm.password === userData.userPassword
  ) {
    return true;
  } else {
    return false;
  }
};
