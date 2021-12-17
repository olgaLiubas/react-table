export const isUserDataTrue = (dataFromForm, userData) => {
  if (dataFromForm.email === userData.userEmail) {
    if (dataFromForm.password === userData.userPassword) {
      return true;
    }
    return false;
  } else {
    return false;
  }
};
